// background.js

language_translations = {}
formatters = {}
matchpatterns = {}
savedIsoLanguage = 'en' //default start with English

chrome.storage.sync.get(['IsoLanguage'], function (result) {
  if (typeof result !== 'undefined') {
    if (typeof result.IsoLanguage !== 'undefined') {
      savedIsoLanguage = result.IsoLanguage;
    }
  }
});

dummy_translations()

function binarySearch(list, value) {
  //if (typeof value == 'undefined') return -1;

  var startIndex = 0,
    stopIndex = Object.keys(list).length - 1,
    middle = Math.floor((stopIndex + startIndex) / 2);

  //console.log('length '+Object.keys(list).length)

  if (stopIndex < 0) {
    return -1;
  }

  while (list[middle].formatter.split('/')[0] != value) {

    //console.log('middle: '+middle)

    if (value < list[middle].formatter.split('/')[0]) {
      stopIndex = middle - 1;
    } else if (value > list[middle].formatter.split('/')[0]) {
      startIndex = middle + 1;
    }

    middle = Math.floor((stopIndex + startIndex) / 2);

    if (startIndex >= stopIndex) {
      if (middle < 0) middle = 0;
      break;
    }
  }
  //console.log('final binary search comparison: '+list[middle].formatter.split('/')[0]+' ?= '+value)

  return (list[middle].formatter.split('/')[0] != value) ? -1 : middle;
}



function url_matches_formatters(url) {

  var url_cut = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
  var url_host = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]

  //console.log('formatters')
  //console.log(formatters);

  //quick screen for valid Wikimedia sites
  if ((url_host.includes("commons.wikimedia.org")) ||
    (url_host.includes("species.wikimedia.org")) ||
    (url_host.includes(".wikipedia.org")) ||
    (url_host.includes(".wikibooks.org")) ||
    (url_host.includes(".wikinews.org")) ||
    (url_host.includes(".wikiquote.org")) ||
    (url_host.includes(".wikisource.org")) ||
    (url_host.includes(".wikiversity.org")) ||
    (url_host.includes(".wikivoyage.org")) ||
    (url_host.includes("wikidata.org")) ||
    (url_host.includes(".wiktionary.org"))
  ) {
    return true;
  }

  const startTime = performance.now();
  var duration;
  //console.log('init length '+Object.keys(formatters).length)

  // binary search to find a matching host only (e.g. "inaturalist.com" without anything before or after)
  var match_index = binarySearch(formatters, url_host);

  if (match_index == -1) {
    //const duration = performance.now() - startTime;
    //console.log('prop_regex false took '+duration+'ms');
    return false;
  } else {
    //we have a match to the host, and know the match_index in the array. Other matches may be just above or below in the list.
    //COULD return a really rough true here, see version 0.9.1
    //BUT INSTEAD now look for the a *true* match, including the full formatregex
    for (i = match_index; i < Object.keys(formatters).length; i++) {
      //console.log('test rough match i='+i)
      if ((formatters[i].formatter.split('/')[0] != url_host)) {
        //we've gone out of the matching hosts
        break;
      }
      if (url_cut.match(formatters[i].formatregex)) {
        duration = performance.now() - startTime;
        console.log('prop_regex true '+ url_cut +'='+formatters[i].formatregex+' took '+duration+'ms');
        return true;
      }
    }
    for (i = match_index - 1; i >= 0; i--) {
      //console.log('test rough match i='+i)
      if ((formatters[i].formatter.split('/')[0] != url_host)) {
        //we've gone out of the matching hosts
        break;
      }
      if (url_cut.match(formatters[i].formatregex)) {
        duration = performance.now() - startTime;
        console.log('prop_regex true '+ url_cut +'='+formatters[i].formatregex+' took '+duration+'ms');
        return true;
      }
    }

    duration = performance.now() - startTime;
    console.log('prop_regex false took '+duration+'ms');
    return false;
  }

  // old linear matching with full regex match in version 0.9.1
}

function url_matches_matchpatterns(url) {

  var url_decoded = decodeURIComponent(url);
  var url_cut = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
  var url_host = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]

  //console.log('matchpattern')
  //console.log(matchpattern);

  //quick screen for valid Wikimedia sites
  if ((url_host.includes("commons.wikimedia.org")) ||
    (url_host.includes("species.wikimedia.org")) ||
    (url_host.includes(".wikipedia.org")) ||
    (url_host.includes(".wikibooks.org")) ||
    (url_host.includes(".wikinews.org")) ||
    (url_host.includes(".wikiquote.org")) ||
    (url_host.includes(".wikisource.org")) ||
    (url_host.includes(".wikiversity.org")) ||
    (url_host.includes(".wikivoyage.org")) ||
    (url_host.includes("wikidata.org")) ||
    (url_host.includes(".wiktionary.org"))
  ) {
    return true;
  }

  const startTime = performance.now();
  var duration;
  //console.log('init length '+Object.keys(formatters).length)

  /*
   Is a binary search possible? To find and limit it to a matching host first?
  (e.g. "inaturalist.com" without anything before or after). 
   See version 0.9.1 for code from a previous attempt. 
  */
  // linear matching with full regex match
  for (i = 0; i < Object.keys(matchpatterns).length; i++) {
  	if (url_decoded.match(matchpatterns[i].matchpatternregex)) {
  		duration = performance.now() - startTime;
  		console.log('matchpattern_match true '+ url_decoded +'='+matchpatterns[i].matchpatternregex+' took '+duration+'ms');
  		return true;
  	}
  }
  duration = performance.now() - startTime;
  console.log('matchpattern_match false on '+url_decoded+' took '+duration+'ms');
  
  return false;

}


function setIconBasedOnURL(url) {
  if (typeof url !== 'undefined') {

    //if (url_matches_formatters(url)) {
    if (url_matches_formatters(url)) {
      chrome.action.setIcon({ path: "./EE-crimson-38.png" });
	} else if (url_matches_matchpatterns(url)) {
      chrome.action.setIcon({ path: "./EE-crimson-38.png" });
    } else {
      chrome.action.setIcon({ path: "./EE-grey-38.png" });
    }
  }
}

function handleMessage(request, sender, sendResponse) {

  setIconBasedOnURL(request.url)

  if (typeof request.languageplease !== 'undefined') {
    var sending = chrome.runtime.sendMessage({
      response: "saved Languages Update",
      jsonLanguages: JSON.stringify(language_translations),
      iso: savedIsoLanguage
    });
  }
  if (typeof request.saveisoplease !== 'undefined') {
    savedIsoLanguage = request.isoLanguage

    chrome.storage.sync.set({ IsoLanguage: savedIsoLanguage }, function () {
      console.log('Language change saved, iso=' + savedIsoLanguage);
    });

  }
  //return Promise.resolve("Dummy response to keep the console quiet"); //https://github.com/mozilla/webextension-polyfill/issues/130

  //https://stackoverflow.com/questions/55224629/what-caused-the-unchecked-runtime-lasterror-the-message-port-closed-before-a-r
  Promise.resolve("").then(result => sendResponse(result));
  return true;

}

chrome.runtime.onMessage.addListener(handleMessage);

function dummy_translations() {
  var translation = {
    lang: "en",
    data: "Wikidata",
    entity: "entity",
    language: "language",
    tongue: "English",
    pedia: "Wikipedia",
    commons: "Wikimedia Commons",
    books: "Wikibooks",
    news: "Wikinews",
    quote: "Wikiquote",
    source: "Wikisource",
    versity: "Wikiversity",
    voyage: "Wikivoyage",
    tionary: "Wiktionary",
    species: "Wikispecies"
  };
  language_translations[0] = translation

}

function matchpatterntostring(MP) {
	
  // maybe it's alredy escaped correctly??
  var MPstring = MP;
  // see version 0.9.1 for old escaping
  return MPstring;

}


function combine_format_regex(formatter, escregex) {
  var patt = /\//g;

  var formatregex = formatter.replace(patt, '\\/');

  patt = /\(\?i\)/g; // all our queries will be flagged case-insensitive, and (?i) wrecks the regex in .js anyway 
  escregex = escregex.replace(patt, '')

  patt = /\./g;
  formatregex = formatregex.replace(patt, '\\.');
  patt = /\[/g;
  formatregex = formatregex.replace(patt, '\\[');
  patt = /\^/g;
  formatregex = formatregex.replace(patt, '\\^');
  patt = /\|/g;
  formatregex = formatregex.replace(patt, '\\|');
  patt = /\?/g;
  formatregex = formatregex.replace(patt, '\\?');
  patt = /\*/g;
  formatregex = formatregex.replace(patt, '\\*');
  patt = /\+/g;
  formatregex = formatregex.replace(patt, '\\+');
  patt = /\(/g;
  formatregex = formatregex.replace(patt, '\\(');
  patt = /\)/g;
  formatregex = formatregex.replace(patt, '\\)');

  patt = /\$1/g;
  formatregex = formatregex.replace(patt, '(' + escregex + ')');

  patt = /\$/g;
  formatregex = formatregex.replace(patt, '\\$');

  return formatregex;

}

function get_formatters() {
  // create URI-encoded query string to get current property regex and formatter URLs (including third party ones) https://w.wiki/Xsv (may want to start respecting qualifiers: https://w.wiki/Zha)
  var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
    + 'PREFIX wd: <http://www.wikidata.org/entity/>'
    + 'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
    + 'SELECT DISTINCT ?prop ?regex ?formatter_url WHERE {'
    + '{?prop wdt:P1630 ?formatter_url0 .}'
    + 'UNION'
    + '{?prop wdt:P3303 ?formatter_url0 .}'
    + 'FILTER (CONTAINS( ?formatter_url0, "$1" ) )'
    + 'BIND (REPLACE(?formatter_url0,"^https://","") AS ?formatter_url1) '
    + 'BIND (REPLACE(?formatter_url1,"^http://","") AS ?formatter_url2) '
    + 'BIND (REPLACE(?formatter_url2,"^www\\\\.","") AS ?formatter_url) '
    + '{?prop <http://www.wikidata.org/prop/P2302> ?o.'
    + '?o <http://www.wikidata.org/prop/qualifier/P1793> ?regex.}'
    + 'UNION'
    + '{?prop wdt:P1793 ?regex .}'
    + 'SERVICE wikibase:label {bd:serviceParam wikibase:language "en"} .'
    + '}'
    + 'ORDER BY ASC(?formatter_url)'

  var encodedQuery = encodeURIComponent(string);

  console.log("Running formatter URL query (moderate)")

	fetch('https://query.wikidata.org/sparql?query=' + encodedQuery, {
 		 headers: {
    		'Accept': 'application/json'
  		}
	})
		.then(
			function (response) {
				//console.log(response);
				return response.json();
			}
		  )
		.then(
			function (data) {
				//console.log(data);
				
			    text = ''

      //console.log('encode '+data.results.bindings.length+' formatter-regex')
      //const startTime = performance.now();

      for (i = 0; i < data.results.bindings.length; i++) {

        var flags = "gi" //always case insensitive for now - this is just a quick check anyway. To do something strict, build the i in only on removal of (?i)

        var prop_regex_formatter = {
          prop: data.results.bindings[i].prop.value,
          regex: data.results.bindings[i].regex.value,
          formatter: data.results.bindings[i].formatter_url.value,
        }

        var formatregex = combine_format_regex(prop_regex_formatter.formatter, prop_regex_formatter.regex)

        var RE;
        try {
          RE = new RegExp(formatregex, flags);
          prop_regex_formatter.formatregex = RE;
        }
        catch (e) {
          //console.log(e.message);
          //console.log("questionable regex for "+prop_regex_formatter.prop)
          RE = new RegExp("QUESTIONABLE REGEX", flags);
          prop_regex_formatter.formatregex = RE;
        }
        formatters[i] = prop_regex_formatter
      }

      //const duration = performance.now() - startTime;
      //console.log('prop_regex took '+duration+'ms');

      if (Object.keys(formatters).length > 99) {
        chrome.storage.local.set({ formatters: JSON.stringify(formatters), FcacheTime:Date.now() }, function () { });
      }
	return;
	}
	)
 	.catch(
		function (error) {
		console.error('Unable to get items.', error);
	}
  )
}

function get_matchpatterns() {
	// https://w.wiki/49hf
	
	  var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
    + 'PREFIX wd: <http://www.wikidata.org/entity/>'
    + 'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
    + 'SELECT ?prop ?matchpattern ?replacementvalue WHERE {'
	+ '?stat ps:P8966 ?matchpattern .'
	+ 'OPTIONAL { ?stat pq:P8967 ?replacementvalue . }'
  	+ '?prop  p:P8966 ?stat.'
	+ '}'

  var encodedQuery = encodeURIComponent(string);

  console.log("Running matchpattern query (moderate) "+'https://query.wikidata.org/sparql?query=' + encodedQuery);

	fetch('https://query.wikidata.org/sparql?query=' + encodedQuery, {
 		 headers: {
    		'Accept': 'application/json'
  		}
	})
		.then(
			function (response) {
				//console.log(response);
				return response.json();
			}
		  )
		.then(
			function (data) {
				//console.log(data);
				
			    text = ''

			    //console.log('encode '+data.bindings.length+' matchpattern')
      			//const startTime = performance.now();

      			for (i = 0; i < data.results.bindings.length; i++) {

        		var flags = "gi" //always case insensitive for now - this is just a quick check anyway. To do something strict, build the i in only on removal of (?i)

        		var prop_matchpattern_replacement = {
          			prop: data.results.bindings[i].prop.value,
          			matchpattern: data.results.bindings[i].matchpattern.value,
          			//DISABLED WHILE IT CAN"T HANDLE SOME RETURNING EMPTY replacement: data.results.bindings[i].replacement.value,
        		}

		        //var formatregex = combine matchpattern and binding?

		        var RE;
		        try {
         			RE = new RegExp(prop_matchpattern_replacement.matchpattern, flags);
         			prop_matchpattern_replacement.matchpatternregex = RE;
        		}
        		catch (e) {
          			//console.log(e.message);
          			console.log("questionable matchpattern for "+prop_matchpattern_replacement.prop)
          			RE = new RegExp("QUESTIONABLE MATCHPATTERN", flags);
          			prop_matchpattern_replacement.matchpatternregex = RE;
        		}
        		matchpatterns[i] = prop_matchpattern_replacement
		      }

      			//const duration = performance.now() - startTime;
      			//console.log('prop_regex took '+duration+'ms');

      			if (Object.keys(matchpatterns).length > 99) {
        			chrome.storage.local.set({ matchpatterns: JSON.stringify(matchpatterns), MPcacheTime: Date.now() }, function () { });
      			}
				return;
			}
		  )
 	    .catch(
			function (error) {
				console.error('Unable to get items.', error);
			}
		  )
}


function get_translations() {
  // create URI-encoded query string to get current translations  https://w.wiki/48KQ
  var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
    + 'PREFIX wd: <http://www.wikidata.org/entity/>'
    + 'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
    + 'SELECT DISTINCT ?lang ?data ?entity ?language ?tongue ?pedia ?commons ?books ?news ?quote ?source ?versity ?voyage ?tionary ?species WHERE {'
    + ' hint:Query hint:optimizer "None".'
    + '  ?tongueitem wdt:P424 ?lang .'
    + '  ?tongueitem wdt:P31/wdt:P279* wd:Q17376908 .'
    + '  wd:Q52 rdfs:label ?pedia .'
    + '  	FILTER(LANG(?pedia)=?lang)'
    + '  OPTIONAL{wd:Q2013 rdfs:label ?data .'
    + '    FILTER(LANG(?data)=?lang)}'
    + '  OPTIONAL{wd:Q35120 rdfs:label ?entity .'
    + '    FILTER(LANG(?entity)=?lang)}'
    + '  OPTIONAL{wd:Q34770 rdfs:label ?language .'
    + '    FILTER(LANG(?language)=?lang)}'
    + '  OPTIONAL{wd:Q565 rdfs:label ?commons .'
    + '    FILTER(LANG(?commons)=?lang)}'
    + '  OPTIONAL{wd:Q367 rdfs:label ?books .'
    + '    FILTER(LANG(?books)=?lang)}'
    + '  OPTIONAL{wd:Q964 rdfs:label ?news .'
    + '    FILTER(LANG(?news)=?lang)}'
    + '  OPTIONAL{wd:Q369 rdfs:label ?quote .'
    + '    FILTER(LANG(?quote)=?lang)}'
    + '  OPTIONAL{wd:Q263 rdfs:label ?source .'
    + '    FILTER(LANG(?source)=?lang)}'
    + '  OPTIONAL{wd:Q370 rdfs:label ?versity .'
    + '    FILTER(LANG(?versity)=?lang)}'
    + '  OPTIONAL{wd:Q373 rdfs:label ?voyage .'
    + '    FILTER(LANG(?voyage)=?lang)}'
    + '  OPTIONAL{wd:Q151 rdfs:label ?tionary .'
    + '    FILTER(LANG(?tionary)=?lang)}'
    + '  OPTIONAL{wd:Q13679 rdfs:label ?species .'
    + '    FILTER(LANG(?species)=?lang)}'
    + '  ?tongueitem rdfs:label ?tongue .'
    + '  FILTER(LANG(?tongue)=?lang)'
    + '}'
    + 'ORDER BY ASC(?lang)'
    + 'LIMIT 500'

  var encodedQuery = encodeURIComponent(string);

  console.log("Running language translation query (big)")


	fetch('https://query.wikidata.org/sparql?query=' + encodedQuery, {
 		 headers: {
    		'Accept': 'application/json'
  		}
	})
		.then(
			function (response) {
				//console.log(response);
				return response.json();
			}
		  )
		.then(
			function (data) {
				//console.log(data);

      text = ''
      for (i = 0; i < data.results.bindings.length; i++) {

        var translation = {
          lang: data.results.bindings[i].lang.value,
          pedia: data.results.bindings[i].pedia.value,
          tongue: data.results.bindings[i].tongue.value,
        }
        if (typeof data.results.bindings[i].data !== 'undefined') { translation.data = data.results.bindings[i].data.value }
        if (typeof data.results.bindings[i].entity !== 'undefined') { translation.entity = data.results.bindings[i].entity.value }
        if (typeof data.results.bindings[i].language !== 'undefined') { translation.language = data.results.bindings[i].language.value }
        if (typeof data.results.bindings[i].commons !== 'undefined') { translation.commons = data.results.bindings[i].commons.value }
        if (typeof data.results.bindings[i].books !== 'undefined') { translation.books = data.results.bindings[i].books.value }
        if (typeof data.results.bindings[i].news !== 'undefined') { translation.news = data.results.bindings[i].news.value }
        if (typeof data.results.bindings[i].quote !== 'undefined') { translation.quote = data.results.bindings[i].quote.value }
        if (typeof data.results.bindings[i].source !== 'undefined') { translation.source = data.results.bindings[i].source.value }
        if (typeof data.results.bindings[i].versity !== 'undefined') { translation.versity = data.results.bindings[i].versity.value }
        if (typeof data.results.bindings[i].voyage !== 'undefined') { translation.voyage = data.results.bindings[i].voyage.value }
        if (typeof data.results.bindings[i].tionary !== 'undefined') { translation.tionary = data.results.bindings[i].tionary.value }
        if (typeof data.results.bindings[i].species !== 'undefined') { translation.species = data.results.bindings[i].species.value }

        language_translations[i] = translation
      }
      if (Object.keys(language_translations).length > 99) {
        chrome.storage.local.set({ langtrans: language_translations , cacheTime: Date.now() }, function () { });
      }
	return;
	}
	)
    .catch(
		function (error) {
		console.error('Unable to get items.', error);
	}
  )
}

chrome.tabs.onActivated.addListener(function (info) {
  chrome.tabs.get(info.tabId, function (change) {
    if (typeof change !== 'undefined') {
      setIconBasedOnURL(change.url)
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (typeof changeInfo.url !== 'undefined') {
    setIconBasedOnURL(changeInfo.url)
  }
});

chrome.runtime.onInstalled.addListener( function(){
  //console.log("onInstalled.addListener");
  get_translations()
  get_formatters()
  get_matchpatterns()
});

chrome.storage.local.get(['langtrans', 'cacheTime'], function (result) {
  if ((typeof result.langtrans !== 'undefined') && (typeof result.cacheTime !=='undefined')) {
    language_translations = result.langtrans

    console.log('Reloaded '+Object.keys(language_translations).length+' language translations from cache: ' + language_translations +' cacheTime: '+ result.cacheTime +', '+((Date.now()-result.cacheTime)*0.001)+'s ago');

    if ((Object.keys(language_translations).length < 99) || (result.cacheTime < Date.now() - 1000*60*60*24*7)) {
	  console.log('Cached language translations insufficient or outdated. cacheTime: '+ result.cacheTime);
      get_translations()
    }
  } else {
    //console.log('Failed to find saved translations, new query.')
    get_translations()
  }
});

chrome.storage.local.get(['formatters', 'FcacheTime'], function (result) {
  if ((typeof result.formatters !== 'undefined') && (typeof result.FcacheTime !=='undefined')) {
    formatters = JSON.parse(result.formatters)

    console.log('Reloaded '+Object.keys(formatters).length+' formatters from cache: ' + formatters +' FcacheTime: '+ result.FcacheTime +', '+((Date.now()-result.FcacheTime)*0.001)+'s ago');

    // now need to correct for this bug: https://bugs.chromium.org/p/chromium/issues/detail?id=380964
    // recalculate all formatregex from formatter, regex
    for (var i = 0; i < Object.keys(formatters).length; i++) {
      var formatregex_str = combine_format_regex(formatters[i].formatter, formatters[i].regex)
      var RE;
      try {
        RE = new RegExp(formatregex_str, "gi");
      }
      catch (e) {
        //console.log(e.message);
        console.log("Regex on property " + formatters[i].prop + " apparently not consistent with JS regex evaluation. No cause for concern.")
        RE = new RegExp("QUESTIONABLE REGEX", "gi");
      }
      formatters[i].formatregex = RE
    }
    if ((Object.keys(formatters).length < 99)  || (result.FcacheTime < Date.now() - 1000*60*60*24*7)) {
      get_formatters()
    }
  } else {
    get_formatters()
  }
});

chrome.storage.local.get(['matchpatterns', 'MPcacheTime'], function (result) {
  if ((typeof result.matchpatterns !== 'undefined') && (typeof result.MPcacheTime !=='undefined')) {
    matchpatterns = JSON.parse(result.matchpatterns)

    console.log('Reloaded '+Object.keys(matchpatterns).length+' matchpatterns from cache: ' + matchpatterns +' MPcacheTime: '+ result.MPcacheTime +', '+((Date.now()-result.MPcacheTime)*0.001)+'s ago');

    // now need to correct for this bug: https://bugs.chromium.org/p/chromium/issues/detail?id=380964
    // recalculate all matchpatternregex from matchpattern, regex
    for (var i = 0; i < Object.keys(matchpatterns).length; i++) {
      var matchpatternregex_str = matchpatterntostring(matchpatterns[i].matchpattern)
      var RE;
      try {
        RE = new RegExp(matchpatternregex_str, "gi");
      }
      catch (e) {
        //console.log(e.message);
        console.log("Matchpattern on property " + matchpatterns[i].prop + " apparently not consistent with JS regex evaluation. No cause for concern.")
        RE = new RegExp("QUESTIONABLE REGEX", "gi");
      }

      matchpatterns[i].matchpatternregex = RE
      //console.log("Matchpattern ["+i+"] on property " + matchpatterns[i].prop + " is "+matchpatterns[i].matchpatternregex)
    }
    if ((Object.keys(matchpatterns).length < 99)  || (result.MPcacheTime < Date.now() - 1000*60*60*24*7)) { 
      get_matchpatterns()
    }
  } else {
    get_matchpatterns()
  }
});
