window.language_translations = {}
window.formatters = {}
window.savedIsoLanguage='en' //default start with English

chrome.storage.sync.get(['IsoLanguage'], function(result) {
  if (typeof result !== 'undefined') {
	if (typeof result.IsoLanguage !== 'undefined') {
	  	window.savedIsoLanguage = result.IsoLanguage;
	}
  }
});


dummy_translations()

function url_matches_formatters(url) {
	if ((url.includes("commons.wikimedia.org"))||
		(url.includes("species.wikimedia.org"))||
		(url.includes(".wikipedia.org"))||
		(url.includes(".wikibooks.org"))||
		(url.includes(".wikinews.org"))||
		(url.includes(".wikiquote.org"))||
		(url.includes(".wikisource.org"))||
		(url.includes(".wikiversity.org"))||
		(url.includes(".wikivoyage.org"))||
		(url.includes("wikidata.org"))||
		(url.includes(".wiktionary.org"))
		) 
	{
		return true;
	}

	for (i = 0; i < Object.keys(window.formatters).length; i++) {
		if (url.match(window.formatters[i].formatregex)) {
			return true;
		}
	}
	return false;
}

function setIconBasedOnURL (url) {
  if(typeof url !== 'undefined') {
	  if (url_matches_formatters(url)) {
		    chrome.browserAction.setIcon({ path: "./EE-crimson-38.png" });
	  } else {
			chrome.browserAction.setIcon({ path: "./EE-grey-38.png" });
	  }
  }
}

function handleMessage(request, sender, sendResponse) {

  setIconBasedOnURL(request.url)
  
  if (typeof request.languageplease !== 'undefined') {
	  var sending = chrome.runtime.sendMessage({
    	response: "saved Languages Update",
		jsonLanguages: JSON.stringify(window.language_translations),
		iso: window.savedIsoLanguage
  	  });
  }
  if (typeof request.saveisoplease !== 'undefined') {
	window.savedIsoLanguage = request.isoLanguage
	
    chrome.storage.sync.set({IsoLanguage: window.savedIsoLanguage}, function() {
      console.log('Language change saved, iso=' + window.savedIsoLanguage);
    });	
	
  }
}
chrome.runtime.onMessage.addListener(handleMessage);

function dummy_translations () {
	var translation = {
		lang:"en", 
		data:"Wikidata", 
		entity:"entity", 
		language:"language", 
		tongue:"English", 
		pedia:"Wikipedia", 
		commons:"Wikimedia Commons", 
		books:"Wikibooks", 
		news:"Wikinews", 
		quote:"Wikiquote", 
		source:"Wikisource", 
		versity:"Wikiversity", 
		voyage:"Wikivoyage", 
		tionary:"Wiktionary", 
		species:"Wikispecies"
	};
	window.language_translations[0] = translation

}

function combine_format_regex(formatter, escregex) {
				var patt = /\//g;

				var formatregex= formatter.replace(patt,'\\/');

				patt = /\(\?i\)/g; // all our queries will be flagged case-insensitive, and (?i) wrecks the regex in .js anyway 
				escregex = escregex.replace(patt,'')
				
				patt = /\./g;		
				formatregex=formatregex.replace(patt,'\\.');
				patt = /\[/g;		
				formatregex=formatregex.replace(patt,'\\[');
				patt = /\^/g;		
				formatregex=formatregex.replace(patt,'\\^');
				patt = /\|/g;		
				formatregex=formatregex.replace(patt,'\\|');
				patt = /\?/g;		
				formatregex=formatregex.replace(patt,'\\?');
				patt = /\*/g;		
				formatregex=formatregex.replace(patt,'\\*');
				patt = /\+/g;		
				formatregex=formatregex.replace(patt,'\\+');
				patt = /\(/g;		
				formatregex=formatregex.replace(patt,'\\(');
				patt = /\)/g;		
				formatregex=formatregex.replace(patt,'\\)');

				patt = /\$1/g;		
				formatregex=formatregex.replace(patt,'('+escregex+')');

				patt = /\$/g;		
				formatregex=formatregex.replace(patt,'\\$');

	return formatregex;
	
}

function get_formatters() {
	// create URI-encoded query string to get current property regex and formatter URLs (including third party ones) https://w.wiki/Xsv (may want to start respecting qualifiers: https://w.wiki/Zha)
	var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
                +'PREFIX wd: <http://www.wikidata.org/entity/>'
                +'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
+'SELECT DISTINCT ?prop ?regex ?formatter_url WHERE {'
+'{?prop wdt:P1630 ?formatter_url .}'
+'UNION'
+'{?prop wdt:P3303 ?formatter_url .}'
+'FILTER (CONTAINS( ?formatter_url, "$1" ) )' 
+'?prop wdt:P1793 ?regex .'
+'SERVICE wikibase:label { bd:serviceParam wikibase:language "en" } .'
+'}'
				
	var encodedQuery = encodeURIComponent(string);
	
	console.log ("Running formatter URL query (moderate)")
	
	$.ajax({
		type: 'GET',
		url: 'https://query.wikidata.org/sparql?query=' + encodedQuery,
		headers: {
			Accept: 'application/sparql-results+json'
		},
		success: function(returnedJson) {
			text = ''
			for (i = 0; i < returnedJson.results.bindings.length; i++) {
				
				var flags="gi" //always case insensitive for now - this is just a quick check anyway. To do something strict, build the i in only on removal of (?i)
				
				var prop_regex_formatter = {
									prop:returnedJson.results.bindings[i].prop.value, 
									regex:returnedJson.results.bindings[i].regex.value, 
									formatter:returnedJson.results.bindings[i].formatter_url.value, 
								}
							
				var formatregex = combine_format_regex(prop_regex_formatter.formatter, prop_regex_formatter.regex)
			
	            var RE;
    	        try {
        	            RE = new RegExp(formatregex, flags);
						prop_regex_formatter.formatregex = RE;
            	}
            	catch(e) {
                	    //console.log(e.message);
						//console.log("questionable regex for "+prop_regex_formatter.prop)
        	            RE = new RegExp("QUESTIONABLE REGEX", flags);
						prop_regex_formatter.formatregex = RE;
				}
				window.formatters[i] = prop_regex_formatter
			}
			
			if (Object.keys(window.formatters).length > 99) {
				chrome.storage.local.set({formatters: JSON.stringify(window.formatters) }, function() {});
			}			
			
		}
	});
}


function get_translations() {
	// create URI-encoded query string to get current translations  https://w.wiki/XUx
	var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
                +'PREFIX wd: <http://www.wikidata.org/entity/>'
                +'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
+'SELECT DISTINCT ?lang ?data ?entity ?language ?tongue ?pedia ?commons ?books ?news ?quote ?source ?versity ?voyage ?tionary ?species WHERE {'
+' hint:Query hint:optimizer "None".'
+'  ?tongueitem wdt:P424 ?lang .'
+'  ?tongueitem wdt:P279*/wdt:P31 wd:Q34770 .'
+'  wd:Q52 rdfs:label ?pedia .'
+'  	FILTER(LANG(?pedia)=?lang)'
+'  OPTIONAL{wd:Q2013 rdfs:label ?data .'
+'    FILTER(LANG(?data)=?lang)}'
+'  OPTIONAL{wd:Q35120 rdfs:label ?entity .'
+'    FILTER(LANG(?entity)=?lang)}'
+'  OPTIONAL{wd:Q34770 rdfs:label ?language .'
+'    FILTER(LANG(?language)=?lang)}'
+'  OPTIONAL{wd:Q565 rdfs:label ?commons .'
+'    FILTER(LANG(?commons)=?lang)}'
+'  OPTIONAL{wd:Q367 rdfs:label ?books .'
+'    FILTER(LANG(?books)=?lang)}'
+'  OPTIONAL{wd:Q964 rdfs:label ?news .'
+'    FILTER(LANG(?news)=?lang)}'
+'  OPTIONAL{wd:Q369 rdfs:label ?quote .'
+'    FILTER(LANG(?quote)=?lang)}'
+'  OPTIONAL{wd:Q263 rdfs:label ?source .'
+'    FILTER(LANG(?source)=?lang)}'
+'  OPTIONAL{wd:Q370 rdfs:label ?versity .'
+'    FILTER(LANG(?versity)=?lang)}'
+'  OPTIONAL{wd:Q373 rdfs:label ?voyage .'
+'    FILTER(LANG(?voyage)=?lang)}'
+'  OPTIONAL{wd:Q151 rdfs:label ?tionary .'
+'    FILTER(LANG(?tionary)=?lang)}'
+'  OPTIONAL{wd:Q13679 rdfs:label ?species .'
+'    FILTER(LANG(?species)=?lang)}'
+'  ?tongueitem rdfs:label ?tongue .'
+'  FILTER(LANG(?tongue)=?lang)'
+'}'
+'ORDER BY ASC(?lang)'
+'LIMIT 500'
				
	var encodedQuery = encodeURIComponent(string);
	
	console.log ("Running language translation query (big)")
	
	$.ajax({
		type: 'GET',
		url: 'https://query.wikidata.org/sparql?query=' + encodedQuery,
		headers: {
			Accept: 'application/sparql-results+json'
		},
		success: function(returnedJson) {
			text = ''
			for (i = 0; i < returnedJson.results.bindings.length; i++) {
				
				var translation = {
									lang:returnedJson.results.bindings[i].lang.value, 
									pedia:returnedJson.results.bindings[i].pedia.value, 
									tongue:returnedJson.results.bindings[i].tongue.value, 
								}
				if (typeof returnedJson.results.bindings[i].data !== 'undefined') { translation.data = returnedJson.results.bindings[i].data.value }				
				if (typeof returnedJson.results.bindings[i].entity !== 'undefined') { translation.entity = returnedJson.results.bindings[i].entity.value }				
				if (typeof returnedJson.results.bindings[i].language !== 'undefined') { translation.language = returnedJson.results.bindings[i].language.value }				
				if (typeof returnedJson.results.bindings[i].commons !== 'undefined') { translation.commons = returnedJson.results.bindings[i].commons.value }				
				if (typeof returnedJson.results.bindings[i].books !== 'undefined') { translation.books = returnedJson.results.bindings[i].books.value }				
				if (typeof returnedJson.results.bindings[i].news !== 'undefined') { translation.news = returnedJson.results.bindings[i].news.value }				
				if (typeof returnedJson.results.bindings[i].quote !== 'undefined') { translation.quote = returnedJson.results.bindings[i].quote.value }				
				if (typeof returnedJson.results.bindings[i].source !== 'undefined') { translation.source = returnedJson.results.bindings[i].source.value }				
				if (typeof returnedJson.results.bindings[i].versity !== 'undefined') { translation.versity = returnedJson.results.bindings[i].versity.value }				
				if (typeof returnedJson.results.bindings[i].voyage !== 'undefined') { translation.voyage = returnedJson.results.bindings[i].voyage.value }				
				if (typeof returnedJson.results.bindings[i].tionary !== 'undefined') { translation.tionary = returnedJson.results.bindings[i].tionary.value }				
				if (typeof returnedJson.results.bindings[i].species !== 'undefined') { translation.species = returnedJson.results.bindings[i].species.value }				
							
				window.language_translations[i] = translation
			}
			if (Object.keys(window.language_translations).length > 99) {
				chrome.storage.local.set({langtrans: window.language_translations }, function() {});
			}
			
		}
	});
}

chrome.tabs.onActivated.addListener(function(info){
    chrome.tabs.get(info.tabId, function(change){
		if (typeof change !== 'undefined') {
			setIconBasedOnURL(change.url)
		}
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (typeof changeInfo.url !== 'undefined') {
		setIconBasedOnURL(changeInfo.url)
	}
});


chrome.runtime.onInstalled.addListener(() => {
  get_translations()
  get_formatters()
});


chrome.storage.local.get(['langtrans'], function(result) {
	 if (typeof result.langtrans !== 'undefined') {
		 window.language_translations = result.langtrans
	 
	 	if (Object.keys(window.language_translations).length < 99) {
		 	get_translations()
	 	}
		
     	//console.log('Reloaded language translations: ' + window.language_translations);
	 } else {
		//console.log('Failed to find saved translations, new query.')
	 	get_translations()
	 }
});
  
chrome.storage.local.get(['formatters'], function(result) {
  	 if (typeof result.formatters !== 'undefined') {
		window.formatters = JSON.parse(result.formatters)
		 
		// now need to correct for this bug: https://bugs.chromium.org/p/chromium/issues/detail?id=380964
		// recalculate all formatregex from formatter, regex
		for (var i=0; i<Object.keys(window.formatters).length; i++) {
			var formatregex_str = combine_format_regex(window.formatters[i].formatter, window.formatters[i].regex)
			var RE;
    	    try {
        		RE = new RegExp(formatregex_str, "gi");
	        }
            catch(e) {
               	    //console.log(e.message);
					console.log("Regex on property "+window.formatters[i].prop+" apparently not consistent with JS regex evaluation. No cause for concern.")
        	        RE = new RegExp("QUESTIONABLE REGEX", "gi");
			}
			window.formatters[i].formatregex = RE
		}
		if (Object.keys(window.formatters).length < 99) {
		 	get_formatters()
	 	}
	 } else {
	 	get_formatters()		 
	 }
});
