var isoLanguage = 'en';
var tabURL;

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

// update this list with data from (old) https://w.wiki/XU5 (new) https://w.wiki/XUx
function redrawLabels(isoLanguage) {
//document.getElementById("pageHeader").innerHTML = "Wikidata lookup";
if (isoLanguage=='aa') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ab') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ace') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ady') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='af') { $("#boxLabel0").text("taal");   $("#boxLabel1").text("entiteit"); }
if (isoLanguage=='ak') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='am') { $("#boxLabel0").text("ቋንቋ");   $("#boxLabel1").text(""); }
if (isoLanguage=='an') { $("#boxLabel0").text("idioma");   $("#boxLabel1").text(""); }
if (isoLanguage=='ar') { $("#boxLabel0").text("لغة");   $("#boxLabel1").text("كيان"); }
if (isoLanguage=='arc') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='as') { $("#boxLabel0").text("ভাষা");   $("#boxLabel1").text(""); }
if (isoLanguage=='ast') { $("#boxLabel0").text("llingua");   $("#boxLabel1").text("entidá"); }
if (isoLanguage=='atj') { $("#boxLabel0").text("Arimwewin");   $("#boxLabel1").text(""); }
if (isoLanguage=='av') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='awa') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ay') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='az') { $("#boxLabel0").text("");   $("#boxLabel1").text("varlıq"); }
if (isoLanguage=='ba') { $("#boxLabel0").text("тел");   $("#boxLabel1").text("асыл"); }
if (isoLanguage=='ban') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bar') { $("#boxLabel0").text("Oanzlsproch");   $("#boxLabel1").text(""); }
if (isoLanguage=='bcl') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='be') { $("#boxLabel0").text("мова");   $("#boxLabel1").text("сутнасць"); }
if (isoLanguage=='bg') { $("#boxLabel0").text("език");   $("#boxLabel1").text(""); }
if (isoLanguage=='bho') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bi') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bjn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bm') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bn') { $("#boxLabel0").text("ভাষা");   $("#boxLabel1").text("সত্তা"); }
if (isoLanguage=='bo') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bpy') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='br') { $("#boxLabel0").text("yezh");   $("#boxLabel1").text("entite"); }
if (isoLanguage=='brh') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bs') { $("#boxLabel0").text("jezik");   $("#boxLabel1").text("entitet"); }
if (isoLanguage=='bug') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='bxr') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ca') { $("#boxLabel0").text("llengua");   $("#boxLabel1").text("ens"); }
if (isoLanguage=='cbk-zam') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='cdo') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ce') { $("#boxLabel0").text("мотт");   $("#boxLabel1").text(""); }
if (isoLanguage=='ceb') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ch') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='chr') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='chy') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ckb') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='co') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='crh') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='cs') { $("#boxLabel0").text("jazyk");   $("#boxLabel1").text("entita"); }
if (isoLanguage=='csb') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='cu') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='cv') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='cy') { $("#boxLabel0").text("iaith");   $("#boxLabel1").text("endid"); }
if (isoLanguage=='da') { $("#boxLabel0").text("sprog");   $("#boxLabel1").text("entitet"); }
if (isoLanguage=='de') { $("#boxLabel0").text("Einzelsprache");   $("#boxLabel1").text("Entität"); }
if (isoLanguage=='diq') { $("#boxLabel0").text("Zıwan");   $("#boxLabel1").text("Estey"); }
if (isoLanguage=='dsb') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='dty') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='dv') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ee') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='el') { $("#boxLabel0").text("γλώσσα");   $("#boxLabel1").text("οντότητα"); }
if (isoLanguage=='el') { $("#boxLabel0").text("γλώσσα");   $("#boxLabel1").text("οντότητα"); }
if (isoLanguage=='eml') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='en') { $("#boxLabel0").text("language");   $("#boxLabel1").text("entity"); }
if (isoLanguage=='en-ca') { $("#boxLabel0").text("language");   $("#boxLabel1").text("entity"); }
if (isoLanguage=='en-gb') { $("#boxLabel0").text("language");   $("#boxLabel1").text("entity"); }
if (isoLanguage=='es') { $("#boxLabel0").text("lengua");   $("#boxLabel1").text("entidad"); }
if (isoLanguage=='et') { $("#boxLabel0").text("keel");   $("#boxLabel1").text("entiteet"); }
if (isoLanguage=='eu') { $("#boxLabel0").text("hizkuntza");   $("#boxLabel1").text("entitate"); }
if (isoLanguage=='ext') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='fa') { $("#boxLabel0").text("زبان");   $("#boxLabel1").text("موجودیت"); }
if (isoLanguage=='ff') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='fi') { $("#boxLabel0").text("kieli");   $("#boxLabel1").text("entiteetti"); }
if (isoLanguage=='fj') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='fo') { $("#boxLabel0").text("");   $("#boxLabel1").text("veran"); }
if (isoLanguage=='fr') { $("#boxLabel0").text("langue");   $("#boxLabel1").text("entité"); }
if (isoLanguage=='frp') { $("#boxLabel0").text("lengoua");   $("#boxLabel1").text(""); }
if (isoLanguage=='frr') { $("#boxLabel0").text("spriak");   $("#boxLabel1").text(""); }
if (isoLanguage=='fur') { $("#boxLabel0").text("lenghe");   $("#boxLabel1").text(""); }
if (isoLanguage=='fy') { $("#boxLabel0").text("taal");   $("#boxLabel1").text(""); }
if (isoLanguage=='ga') { $("#boxLabel0").text("teanga");   $("#boxLabel1").text("aonán"); }
if (isoLanguage=='gag') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='gan') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='gcr') { $("#boxLabel0").text("Langaj");   $("#boxLabel1").text(""); }
if (isoLanguage=='gd') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='gl') { $("#boxLabel0").text("lingua");   $("#boxLabel1").text("entidade"); }
if (isoLanguage=='glk') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='gn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='gor') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='gsw') { $("#boxLabel0").text("Sproch");   $("#boxLabel1").text("Entität"); }
if (isoLanguage=='gu') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='gv') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ha') { $("#boxLabel0").text("");   $("#boxLabel1").text("abu"); }
if (isoLanguage=='hak') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='haw') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='he') { $("#boxLabel0").text("שפה");   $("#boxLabel1").text("ישות"); }
if (isoLanguage=='hi') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='hr') { $("#boxLabel0").text("jezik");   $("#boxLabel1").text("biće"); }
if (isoLanguage=='hsb') { $("#boxLabel0").text("rěč");   $("#boxLabel1").text(""); }
if (isoLanguage=='ht') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='hyw') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='id') { $("#boxLabel0").text("bahasa");   $("#boxLabel1").text("entitas"); }
if (isoLanguage=='ig') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ik') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ilo') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='inh') { $("#boxLabel0").text("Дунен тIара метташ");   $("#boxLabel1").text(""); }
if (isoLanguage=='is') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='it') { $("#boxLabel0").text("lingua");   $("#boxLabel1").text("entità"); }
if (isoLanguage=='iu') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ja') { $("#boxLabel0").text("言語");   $("#boxLabel1").text("エンティティ"); }
if (isoLanguage=='jam') { $("#boxLabel0").text("langwij");   $("#boxLabel1").text(""); }
if (isoLanguage=='jv') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ka') { $("#boxLabel0").text("ენა");   $("#boxLabel1").text("ყოფიერება"); }
if (isoLanguage=='kaa') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='kab') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='kbp') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='kg') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ki') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='kk') { $("#boxLabel0").text("");   $("#boxLabel1").text("Болмыс"); }
if (isoLanguage=='kl') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='km') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='kn') { $("#boxLabel0").text("ಭಾಷೆ");   $("#boxLabel1").text(""); }
if (isoLanguage=='ko') { $("#boxLabel0").text("개개의 언어");   $("#boxLabel1").text("개체"); }
if (isoLanguage=='koi') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='krc') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ks') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ksh') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ksh') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ku') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ku') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='kw') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ky') { $("#boxLabel0").text("");   $("#boxLabel1").text("Сущее"); }
if (isoLanguage=='la') { $("#boxLabel0").text("lingua");   $("#boxLabel1").text(""); }
if (isoLanguage=='lad') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='lb') { $("#boxLabel0").text("Sprooch");   $("#boxLabel1").text("Entitéit"); }
if (isoLanguage=='lbe') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='lez') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='lg') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='li') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='lij') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='liv') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='lmo') { $("#boxLabel0").text("lenguàss");   $("#boxLabel1").text(""); }
if (isoLanguage=='ln') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='lo') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='lt') { $("#boxLabel0").text("kalba");   $("#boxLabel1").text("esybė"); }
if (isoLanguage=='ltg') { $("#boxLabel0").text("volūda");   $("#boxLabel1").text(""); }
if (isoLanguage=='lv') { $("#boxLabel0").text("valoda");   $("#boxLabel1").text("konkrēta lieta"); }
if (isoLanguage=='mai') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='map-bms') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='mdf') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='mg') { $("#boxLabel0").text("");   $("#boxLabel1").text("Entity"); }
if (isoLanguage=='mhr') { $("#boxLabel0").text("йылме");   $("#boxLabel1").text(""); }
if (isoLanguage=='mi') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='min') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='mk') { $("#boxLabel0").text("јазик");   $("#boxLabel1").text("сушност"); }
if (isoLanguage=='ml') { $("#boxLabel0").text("ഭാഷ");   $("#boxLabel1").text(""); }
if (isoLanguage=='mn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='mnw') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='mo') { $("#boxLabel0").text("");   $("#boxLabel1").text("Entitate"); }
if (isoLanguage=='mr') { $("#boxLabel0").text("भाषा");   $("#boxLabel1").text(""); }
if (isoLanguage=='mrj') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ms') { $("#boxLabel0").text("bahasa");   $("#boxLabel1").text("entiti"); }
if (isoLanguage=='mt') { $("#boxLabel0").text("lingwa");   $("#boxLabel1").text(""); }
if (isoLanguage=='mwl') { $("#boxLabel0").text("lhéngua");   $("#boxLabel1").text(""); }
if (isoLanguage=='my') { $("#boxLabel0").text("ဘာသာစကား");   $("#boxLabel1").text(""); }
if (isoLanguage=='myv') { $("#boxLabel0").text("кель");   $("#boxLabel1").text(""); }
if (isoLanguage=='mzn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='na') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='nah') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='nan') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='nap') { $("#boxLabel0").text("lengua");   $("#boxLabel1").text(""); }
if (isoLanguage=='nb') { $("#boxLabel0").text("språk");   $("#boxLabel1").text("entitet"); }
if (isoLanguage=='nds') { $("#boxLabel0").text("Spraak");   $("#boxLabel1").text("Entität"); }
if (isoLanguage=='nds-nl') { $("#boxLabel0").text("spraoke");   $("#boxLabel1").text(""); }
if (isoLanguage=='ne') { $("#boxLabel0").text("");   $("#boxLabel1").text("इन्टिटी"); }
if (isoLanguage=='new') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ng') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='nl') { $("#boxLabel0").text("taal");   $("#boxLabel1").text("entiteit"); }
if (isoLanguage=='nn') { $("#boxLabel0").text("språk");   $("#boxLabel1").text("entitet"); }
if (isoLanguage=='no') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='nrm') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='nso') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ny') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='oc') { $("#boxLabel0").text("lenga");   $("#boxLabel1").text("entitat"); }
if (isoLanguage=='olo') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='om') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='or') { $("#boxLabel0").text("ଭାଷା");   $("#boxLabel1").text(""); }
if (isoLanguage=='os') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pa') { $("#boxLabel0").text("ਭਾਸ਼ਾ");   $("#boxLabel1").text(""); }
if (isoLanguage=='pag') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pap') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pcd') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pdc') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pfl') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pi') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pih') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pl') { $("#boxLabel0").text("język");   $("#boxLabel1").text("encja"); }
if (isoLanguage=='pms') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='pnt') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ps') { $("#boxLabel0").text("ژبه");   $("#boxLabel1").text(""); }
if (isoLanguage=='pt') { $("#boxLabel0").text("língua");   $("#boxLabel1").text("ente"); }
if (isoLanguage=='pt-br') { $("#boxLabel0").text("linguagem");   $("#boxLabel1").text("ente"); }
if (isoLanguage=='qu') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='rm') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='rmy') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ro') { $("#boxLabel0").text("limbă");   $("#boxLabel1").text("entitate"); }
if (isoLanguage=='ru') { $("#boxLabel0").text("язык");   $("#boxLabel1").text("сущее"); }
if (isoLanguage=='rue') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='rup') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='rw') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sa') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sah') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sat') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sc') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='scn') { $("#boxLabel0").text("lingua");   $("#boxLabel1").text("entità"); }
if (isoLanguage=='sco') { $("#boxLabel0").text("leid");   $("#boxLabel1").text("entity"); }
if (isoLanguage=='sd') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='se') { $("#boxLabel0").text("giella");   $("#boxLabel1").text(""); }
if (isoLanguage=='sg') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sgs') { $("#boxLabel0").text("Kalbas");   $("#boxLabel1").text(""); }
if (isoLanguage=='sh') { $("#boxLabel0").text("");   $("#boxLabel1").text("Biće"); }
if (isoLanguage=='shn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='si') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sk') { $("#boxLabel0").text("jazyk");   $("#boxLabel1").text("entita"); }
if (isoLanguage=='sl') { $("#boxLabel0").text("jezik");   $("#boxLabel1").text("entiteta"); }
if (isoLanguage=='sli') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sm') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='so') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sq') { $("#boxLabel0").text("gjuhë");   $("#boxLabel1").text("entitet"); }
if (isoLanguage=='sr') { $("#boxLabel0").text("језик");   $("#boxLabel1").text("ентитет"); }
if (isoLanguage=='srn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ss') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='stq') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='su') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='sv') { $("#boxLabel0").text("språk");   $("#boxLabel1").text("entitet"); }
if (isoLanguage=='sw') { $("#boxLabel0").text("lugha");   $("#boxLabel1").text("Kitu"); }
if (isoLanguage=='szl') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='szy') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ta') { $("#boxLabel0").text("மொழி");   $("#boxLabel1").text(""); }
if (isoLanguage=='tcy') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='te') { $("#boxLabel0").text("భాష");   $("#boxLabel1").text(""); }
if (isoLanguage=='tet') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='tg') { $("#boxLabel0").text("забон");   $("#boxLabel1").text("мавҷудот"); }
if (isoLanguage=='th') { $("#boxLabel0").text("ภาษา");   $("#boxLabel1").text("บางสิ่ง"); }
if (isoLanguage=='ti') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='tk') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='tl') { $("#boxLabel0").text("wika");   $("#boxLabel1").text("Entidad"); }
if (isoLanguage=='tn') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='tpi') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='tr') { $("#boxLabel0").text("dil");   $("#boxLabel1").text("varlık"); }
if (isoLanguage=='ts') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='tt') { $("#boxLabel0").text("тел");   $("#boxLabel1").text("зат"); }
if (isoLanguage=='tw') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ty') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='tyv') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='udm') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ug') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='uk') { $("#boxLabel0").text("мова");   $("#boxLabel1").text("сутність"); }
if (isoLanguage=='ur') { $("#boxLabel0").text("زبان");   $("#boxLabel1").text("وجود"); }
if (isoLanguage=='uz') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='ve') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='vec') { $("#boxLabel0").text("");   $("#boxLabel1").text("entità"); }
if (isoLanguage=='vep') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='vi') { $("#boxLabel0").text("ngôn ngữ");   $("#boxLabel1").text("thực thể"); }
if (isoLanguage=='vls') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='vls') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='vro') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='wa') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='war') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='wo') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='wuu') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='xal') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='xh') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='xmf') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='yi') { $("#boxLabel0").text("שפראך");   $("#boxLabel1").text(""); }
if (isoLanguage=='yo') { $("#boxLabel0").text("èdè");   $("#boxLabel1").text("nkan"); }
if (isoLanguage=='yue') { $("#boxLabel0").text("");   $("#boxLabel1").text("實體"); }
if (isoLanguage=='za') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='zea') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
if (isoLanguage=='zh') { $("#boxLabel0").text("語言");   $("#boxLabel1").text("实体"); }
if (isoLanguage=='zh-cn') { $("#boxLabel0").text("语言");   $("#boxLabel1").text("实体"); }
if (isoLanguage=='zh-hans') { $("#boxLabel0").text("语言");   $("#boxLabel1").text("实体"); }
if (isoLanguage=='zh-hant') { $("#boxLabel0").text("語言");   $("#boxLabel1").text("實體"); }
if (isoLanguage=='zh-sg') { $("#boxLabel0").text("");   $("#boxLabel1").text("实体"); }
if (isoLanguage=='zh-tw') { $("#boxLabel0").text("語言");   $("#boxLabel1").text("實體"); }
if (isoLanguage=='zh-tw') { $("#boxLabel0").text("語言");   $("#boxLabel1").text("實體"); }
if (isoLanguage=='zu') { $("#boxLabel0").text("");   $("#boxLabel1").text(""); }
}

function gettabURL (callback) {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabs) {
		tabURL = tabs[0].url;
		console.log(tabs[0].url);

		// for debugging, show the received URL at the top of the popup
		//text = tabs[0].url + '<br/>'
		//$("#div0").html(text);
		
		callback();
	});
}

function setStatusOptions(isoLanguage) {
	// start the status dropdown over with "Select/Selecionar/Wählen" as the first option
	$("#box1 option:gt(0)").remove();
	if (isoLanguage=='en') {$("#box1 option").text("(Select)");}
	if (isoLanguage=='pt') {$("#box1 option").text("(Selecionar)");}
	if (isoLanguage=='de') {$("#box1 option").text("(Wählen)");}
	if (isoLanguage=='es') {$("#box1 option").text("(Seleccionar)");}
	if (isoLanguage=='zh-hans') {$("#box1 option").text("(选择)");}
	if (isoLanguage=='zh-hant') {$("#box1 option").text("(選擇)");}

	var string = '';

	console.log('pre-string: '+tabURL)
	// create URI-encoded query string to get corresponding Wikidata items name and IRI, example: https://w.wiki/XZg
		string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
                    +'PREFIX wd: <http://www.wikidata.org/entity/>'
                    +'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
					+'PREFIX wikibase: <http://wikiba.se/ontology#>'
                    +'SELECT DISTINCT ?iriLabel ?iri WHERE {'
					+'hint:Query hint:optimizer "None".'
					+"VALUES ( ?test_url ) { ('"+tabURL+"') }"
                    +'{?prop wdt:P1630 ?formatter_url .}  UNION  {?prop wdt:P3303 ?formatter_url .}'
					+'FILTER (CONTAINS( ?formatter_url, "$1" ) )'
					+'BIND (STRBEFORE( ?formatter_url, "$1" ) AS ?f_url_start )'
					+'BIND (STRAFTER( ?formatter_url, "$1" ) AS ?f_url_end )'
					+'FILTER(STRSTARTS( ?test_url, ?f_url_start ))'
					+'FILTER(STRENDS( ?test_url, ?f_url_end ))'
					+'BIND ( SUBSTR( ?test_url, 1+STRLEN(?f_url_start), STRLEN(?test_url)-STRLEN(?f_url_start)-STRLEN(?f_url_end) ) AS ?id_uncut )'
					+'?prop wdt:P1793 ?regex .'
					+'BIND ( REPLACE (?id_uncut, CONCAT("(",?regex,").*"),"$1") AS ?id )'
					+'?prop wikibase:directClaim ?propRel .'
  					+'?iri ?propRel ?id .'
					+"SERVICE wikibase:label { bd:serviceParam wikibase:language '"+isoLanguage+"' } ."
                    +'}'
                    +'ORDER BY ASC(?name)';
					
		var encodedQuery = encodeURIComponent(string);

        // send query to endpoint
        $.ajax({
            type: 'GET',
            url: 'https://query.wikidata.org/sparql?query=' + encodedQuery,
            headers: {
                Accept: 'application/sparql-results+json'
            },
            success: function(returnedJson) {
				for (i = 0; i < returnedJson.results.bindings.length; i++) {
					// concatenate the Q number on the end of the label (Q extracted from iri after 31 other url characters)
					label = returnedJson.results.bindings[i].iriLabel.value+' ('+returnedJson.results.bindings[i].iri.value.substring(31,returnedJson.results.bindings[i].iri.value.length)+')'
					iri = returnedJson.results.bindings[i].iri.value
					// add the new information to the dropdown list
					$("#box1").append("<option value='"+iri+"'>"+label+'</option>');
				}
    			if (returnedJson.results.bindings.length==0) {
					//document.getElementById("box1").selectedIndex = "1"; //when only one item is returned, it's a match
					no_result();
				}
    			if (returnedJson.results.bindings.length==1) {
					document.getElementById("box1").selectedIndex = "1"; //when only one item is returned, it's a match
					box1change();
				}
			}
        });

	}

function box0change() {
	// searching, so show the spinner icon
	$('#searchSpinner').show();
	var isoLanguage= $("#box0").val();
	redrawLabels(isoLanguage)
			
	//setStatusOptions(isoLanguage);
	gettabURL(function() {
		setStatusOptions(isoLanguage);
	});
			
	$("#div1").html('');
	$('#searchSpinner').hide();
}


function no_result() {
	text = '<p>No result was found on Wikidata. If other items on this site resolve correctly, this ID may be missing from the item, or a <a href="https://www.wikidata.org/wiki/Special:NewItem">new item</a> could be created.</p>';
	$("#div_wdlink").html(text);
	$("#box1 option").text("(no result)");
}

function div_wd_change() {
	var iri = $("#box1").val();
		
    text = '';
// get this list from https://w.wiki/XUx
if (isoLanguage=='aa') {  text = text + 'Wikidata'; }
if (isoLanguage=='ab') {  text = text + 'Wikidata'; }
if (isoLanguage=='ace') {  text = text + 'Wikidata'; }
if (isoLanguage=='ady') {  text = text + 'Wikidata'; }
if (isoLanguage=='af') {  text = text + 'Wikidata'; }
if (isoLanguage=='ak') {  text = text + 'Wikidata'; }
if (isoLanguage=='am') {  text = text + 'Wikidata'; }
if (isoLanguage=='an') {  text = text + 'Wikidata'; }
if (isoLanguage=='ar') {  text = text + 'ويكي بيانات'; }
if (isoLanguage=='arc') {  text = text + 'Wikidata'; }
if (isoLanguage=='as') {  text = text + 'ৱিকিতথ্য'; }
if (isoLanguage=='ast') {  text = text + 'Wikidata'; }
if (isoLanguage=='atj') {  text = text + 'Wikidata'; }
if (isoLanguage=='av') {  text = text + 'Wikidata'; }
if (isoLanguage=='awa') {  text = text + 'Wikidata'; }
if (isoLanguage=='ay') {  text = text + 'Wikidata'; }
if (isoLanguage=='az') {  text = text + 'Vikiverilənlər'; }
if (isoLanguage=='ba') {  text = text + 'Викимәғлүмәт'; }
if (isoLanguage=='ban') {  text = text + 'Wikidata'; }
if (isoLanguage=='bar') {  text = text + 'Wikidata'; }
if (isoLanguage=='bcl') {  text = text + 'Wikidata'; }
if (isoLanguage=='be') {  text = text + 'Вікідадзеныя'; }
if (isoLanguage=='bg') {  text = text + 'Уикиданни'; }
if (isoLanguage=='bho') {  text = text + 'Wikidata'; }
if (isoLanguage=='bi') {  text = text + 'Wikidata'; }
if (isoLanguage=='bjn') {  text = text + 'Wikidata'; }
if (isoLanguage=='bm') {  text = text + 'Wikidata'; }
if (isoLanguage=='bn') {  text = text + 'উইকিউপাত্ত'; }
if (isoLanguage=='bo') {  text = text + 'Wikidata'; }
if (isoLanguage=='bpy') {  text = text + 'Wikidata'; }
if (isoLanguage=='br') {  text = text + 'Wikidata'; }
if (isoLanguage=='brh') {  text = text + 'Wikidata'; }
if (isoLanguage=='bs') {  text = text + 'Wikidata'; }
if (isoLanguage=='bug') {  text = text + 'Wikidata'; }
if (isoLanguage=='bxr') {  text = text + 'Wikidata'; }
if (isoLanguage=='ca') {  text = text + 'Wikidata'; }
if (isoLanguage=='cbk-zam') {  text = text + 'Wikidata'; }
if (isoLanguage=='cdo') {  text = text + '維基數據'; }
if (isoLanguage=='ce') {  text = text + 'Викихаамаш'; }
if (isoLanguage=='ceb') {  text = text + 'Wikidata'; }
if (isoLanguage=='ch') {  text = text + 'Wikidata'; }
if (isoLanguage=='chr') {  text = text + 'Wikidata'; }
if (isoLanguage=='chy') {  text = text + 'Wikidata'; }
if (isoLanguage=='ckb') {  text = text + 'ویکیداتا'; }
if (isoLanguage=='co') {  text = text + 'Wikidata'; }
if (isoLanguage=='crh') {  text = text + 'Wikidata'; }
if (isoLanguage=='cs') {  text = text + 'Wikidata'; }
if (isoLanguage=='csb') {  text = text + 'Wikidata'; }
if (isoLanguage=='cu') {  text = text + 'Wikidata'; }
if (isoLanguage=='cv') {  text = text + 'Wikidata'; }
if (isoLanguage=='cy') {  text = text + 'Wicidata'; }
if (isoLanguage=='da') {  text = text + 'Wikidata'; }
if (isoLanguage=='de') {  text = text + 'Wikidata'; }
if (isoLanguage=='diq') {  text = text + 'Wikidata'; }
if (isoLanguage=='dsb') {  text = text + 'Wikidata'; }
if (isoLanguage=='dty') {  text = text + 'Wikidata'; }
if (isoLanguage=='dv') {  text = text + 'Wikidata'; }
if (isoLanguage=='ee') {  text = text + 'Wikidata'; }
if (isoLanguage=='el') {  text = text + 'Wikidata'; }
if (isoLanguage=='el') {  text = text + 'Wikidata'; }
if (isoLanguage=='eml') {  text = text + 'Wikidata'; }
if (isoLanguage=='en') {  text = text + 'Wikidata'; }
if (isoLanguage=='en-ca') {  text = text + 'Wikidata'; }
if (isoLanguage=='en-gb') {  text = text + 'Wikidata'; }
if (isoLanguage=='es') {  text = text + 'Wikidata'; }
if (isoLanguage=='et') {  text = text + 'Wikidata'; }
if (isoLanguage=='eu') {  text = text + 'Wikidata'; }
if (isoLanguage=='ext') {  text = text + 'Wikidata'; }
if (isoLanguage=='fa') {  text = text + 'ویکیداده'; }
if (isoLanguage=='ff') {  text = text + 'Wikidata'; }
if (isoLanguage=='fi') {  text = text + 'Wikidata'; }
if (isoLanguage=='fj') {  text = text + 'Wikidata'; }
if (isoLanguage=='fo') {  text = text + 'Wikidata'; }
if (isoLanguage=='fr') {  text = text + 'Wikidata'; }
if (isoLanguage=='frp') {  text = text + 'Wikidata'; }
if (isoLanguage=='frr') {  text = text + 'Wikidata'; }
if (isoLanguage=='fur') {  text = text + 'Wikidata'; }
if (isoLanguage=='fy') {  text = text + 'Wikidata'; }
if (isoLanguage=='ga') {  text = text + 'Wikidata'; }
if (isoLanguage=='gag') {  text = text + 'Wikidata'; }
if (isoLanguage=='gan') {  text = text + 'Wikidata'; }
if (isoLanguage=='gcr') {  text = text + 'Wikidata'; }
if (isoLanguage=='gd') {  text = text + 'Wikidata'; }
if (isoLanguage=='gl') {  text = text + 'Wikidata'; }
if (isoLanguage=='glk') {  text = text + 'Wikidata'; }
if (isoLanguage=='gn') {  text = text + 'Wikidata'; }
if (isoLanguage=='gor') {  text = text + 'Wikidata'; }
if (isoLanguage=='gsw') {  text = text + 'Wikidata'; }
if (isoLanguage=='gu') {  text = text + 'વિકિડેટા'; }
if (isoLanguage=='gv') {  text = text + 'Wikidata'; }
if (isoLanguage=='ha') {  text = text + 'Wikidata'; }
if (isoLanguage=='hak') {  text = text + 'Wikidata'; }
if (isoLanguage=='haw') {  text = text + 'Wikidata'; }
if (isoLanguage=='he') {  text = text + 'ויקינתונים'; }
if (isoLanguage=='hi') {  text = text + 'विकीडेटा'; }
if (isoLanguage=='hr') {  text = text + 'Wikipodatci'; }
if (isoLanguage=='hsb') {  text = text + 'Wikidata'; }
if (isoLanguage=='ht') {  text = text + 'Wikidata'; }
if (isoLanguage=='hyw') {  text = text + 'Wikidata'; }
if (isoLanguage=='id') {  text = text + 'Wikidata'; }
if (isoLanguage=='ig') {  text = text + 'Wikidata'; }
if (isoLanguage=='ik') {  text = text + 'Wikidata'; }
if (isoLanguage=='ilo') {  text = text + 'Wikidata'; }
if (isoLanguage=='inh') {  text = text + 'Wikidata'; }
if (isoLanguage=='is') {  text = text + 'Wikidata'; }
if (isoLanguage=='it') {  text = text + 'Wikidata'; }
if (isoLanguage=='iu') {  text = text + 'Wikidata'; }
if (isoLanguage=='ja') {  text = text + 'ウィキデータ'; }
if (isoLanguage=='jam') {  text = text + 'Wikidata'; }
if (isoLanguage=='jv') {  text = text + 'Wikidata'; }
if (isoLanguage=='ka') {  text = text + 'ვიკიმონაცემები'; }
if (isoLanguage=='kaa') {  text = text + 'Wikidata'; }
if (isoLanguage=='kab') {  text = text + 'Wikidata'; }
if (isoLanguage=='kbp') {  text = text + 'Wikidata'; }
if (isoLanguage=='kg') {  text = text + 'Wikidata'; }
if (isoLanguage=='ki') {  text = text + 'Wikidata'; }
if (isoLanguage=='kk') {  text = text + 'Wikidata'; }
if (isoLanguage=='kl') {  text = text + 'Wikidata'; }
if (isoLanguage=='km') {  text = text + 'វិគីទិន្នន័យ'; }
if (isoLanguage=='kn') {  text = text + 'ವಿಕಿಡಾಟಾ'; }
if (isoLanguage=='ko') {  text = text + '위키데이터'; }
if (isoLanguage=='koi') {  text = text + 'Wikidata'; }
if (isoLanguage=='krc') {  text = text + 'Wikidata'; }
if (isoLanguage=='ks') {  text = text + 'Wikidata'; }
if (isoLanguage=='ksh') {  text = text + 'Wikidata'; }
if (isoLanguage=='ksh') {  text = text + 'Wikidata'; }
if (isoLanguage=='ku') {  text = text + 'Wikidata'; }
if (isoLanguage=='ku') {  text = text + 'Wikidata'; }
if (isoLanguage=='kw') {  text = text + 'Wikidata'; }
if (isoLanguage=='ky') {  text = text + 'Wikidata'; }
if (isoLanguage=='la') {  text = text + 'Vicidata'; }
if (isoLanguage=='lad') {  text = text + 'Wikidata'; }
if (isoLanguage=='lb') {  text = text + 'Wikidata'; }
if (isoLanguage=='lbe') {  text = text + 'Wikidata'; }
if (isoLanguage=='lez') {  text = text + 'Wikidata'; }
if (isoLanguage=='lg') {  text = text + 'Wikidata'; }
if (isoLanguage=='li') {  text = text + 'Wikidata'; }
if (isoLanguage=='lij') {  text = text + 'Wikidata'; }
if (isoLanguage=='liv') {  text = text + 'Wikidata'; }
if (isoLanguage=='lmo') {  text = text + 'Wikidata'; }
if (isoLanguage=='ln') {  text = text + 'Wikidata'; }
if (isoLanguage=='lo') {  text = text + 'Wikidata'; }
if (isoLanguage=='lt') {  text = text + 'Vikidata'; }
if (isoLanguage=='ltg') {  text = text + 'Wikidata'; }
if (isoLanguage=='lv') {  text = text + 'Vikidati'; }
if (isoLanguage=='mai') {  text = text + 'Wikidata'; }
if (isoLanguage=='map-bms') {  text = text + 'Wikidata'; }
if (isoLanguage=='mdf') {  text = text + 'Wikidata'; }
if (isoLanguage=='mg') {  text = text + 'Wikidata'; }
if (isoLanguage=='mhr') {  text = text + 'Викидата'; }
if (isoLanguage=='mi') {  text = text + 'Wikidata'; }
if (isoLanguage=='min') {  text = text + 'Wikidata'; }
if (isoLanguage=='mk') {  text = text + 'Википодатоци'; }
if (isoLanguage=='ml') {  text = text + 'വിക്കിഡാറ്റ'; }
if (isoLanguage=='mn') {  text = text + 'Wikidata'; }
if (isoLanguage=='mnw') {  text = text + 'Wikidata'; }
if (isoLanguage=='mo') {  text = text + 'Wikidata'; }
if (isoLanguage=='mr') {  text = text + 'विकिडाटा'; }
if (isoLanguage=='mrj') {  text = text + 'Wikidata'; }
if (isoLanguage=='ms') {  text = text + 'Wikidata'; }
if (isoLanguage=='mt') {  text = text + 'Wikidata'; }
if (isoLanguage=='mwl') {  text = text + 'Wikidata'; }
if (isoLanguage=='my') {  text = text + 'ဝီကီဒေတာ'; }
if (isoLanguage=='myv') {  text = text + 'Wikidata'; }
if (isoLanguage=='mzn') {  text = text + 'Wikidata'; }
if (isoLanguage=='na') {  text = text + 'Wikidata'; }
if (isoLanguage=='nah') {  text = text + 'Wikidata'; }
if (isoLanguage=='nan') {  text = text + 'Wikidata'; }
if (isoLanguage=='nap') {  text = text + 'Wikidata'; }
if (isoLanguage=='nb') {  text = text + 'Wikidata'; }
if (isoLanguage=='nds') {  text = text + 'Wikidata'; }
if (isoLanguage=='nds-nl') {  text = text + 'Wikidata'; }
if (isoLanguage=='ne') {  text = text + 'विकिडेटा'; }
if (isoLanguage=='new') {  text = text + 'Wikidata'; }
if (isoLanguage=='ng') {  text = text + 'Wikidata'; }
if (isoLanguage=='nl') {  text = text + 'Wikidata'; }
if (isoLanguage=='nn') {  text = text + 'Wikidata'; }
if (isoLanguage=='no') {  text = text + 'Wikidata'; }
if (isoLanguage=='nrm') {  text = text + 'Wikidata'; }
if (isoLanguage=='nso') {  text = text + 'Wikidata'; }
if (isoLanguage=='ny') {  text = text + 'Wikidata'; }
if (isoLanguage=='oc') {  text = text + 'Wikidata'; }
if (isoLanguage=='olo') {  text = text + 'Wikidata'; }
if (isoLanguage=='om') {  text = text + 'Wikidata'; }
if (isoLanguage=='or') {  text = text + 'ଉଇକିଡାଟା'; }
if (isoLanguage=='os') {  text = text + 'Wikidata'; }
if (isoLanguage=='pa') {  text = text + 'ਵਿਕੀਡਾਟਾ'; }
if (isoLanguage=='pag') {  text = text + 'Wikidata'; }
if (isoLanguage=='pap') {  text = text + 'Wikidata'; }
if (isoLanguage=='pcd') {  text = text + 'Wikidata'; }
if (isoLanguage=='pdc') {  text = text + 'Wikidata'; }
if (isoLanguage=='pfl') {  text = text + 'Wikidata'; }
if (isoLanguage=='pi') {  text = text + 'Wikidata'; }
if (isoLanguage=='pih') {  text = text + 'Wikidata'; }
if (isoLanguage=='pl') {  text = text + 'Wikidane'; }
if (isoLanguage=='pms') {  text = text + 'Wikidata'; }
if (isoLanguage=='pnt') {  text = text + 'Wikidata'; }
if (isoLanguage=='ps') {  text = text + 'ويکيډېټا'; }
if (isoLanguage=='pt') {  text = text + 'Wikidata'; }
if (isoLanguage=='pt-br') {  text = text + 'Wikidata'; }
if (isoLanguage=='qu') {  text = text + 'Wikidata'; }
if (isoLanguage=='rm') {  text = text + 'Wikidata'; }
if (isoLanguage=='rmy') {  text = text + 'Wikidata'; }
if (isoLanguage=='ro') {  text = text + 'Wikidata'; }
if (isoLanguage=='ru') {  text = text + 'Викиданные'; }
if (isoLanguage=='rue') {  text = text + 'Wikidata'; }
if (isoLanguage=='rup') {  text = text + 'Wikidata'; }
if (isoLanguage=='rw') {  text = text + 'Wikidata'; }
if (isoLanguage=='sa') {  text = text + 'Wikidata'; }
if (isoLanguage=='sah') {  text = text + 'Wikidata'; }
if (isoLanguage=='sat') {  text = text + 'ᱣᱤᱠᱤᱰᱮᱴᱟ'; }
if (isoLanguage=='sc') {  text = text + 'Wikidata'; }
if (isoLanguage=='scn') {  text = text + 'Wikidata'; }
if (isoLanguage=='sco') {  text = text + 'Wikidata'; }
if (isoLanguage=='sd') {  text = text + 'وڪيڊيٽا'; }
if (isoLanguage=='se') {  text = text + 'Wikidata'; }
if (isoLanguage=='sg') {  text = text + 'Wikidata'; }
if (isoLanguage=='sgs') {  text = text + 'Wikidata'; }
if (isoLanguage=='sh') {  text = text + 'Wikidata'; }
if (isoLanguage=='shn') {  text = text + 'Wikidata'; }
if (isoLanguage=='si') {  text = text + 'Wikidata'; }
if (isoLanguage=='sk') {  text = text + 'Wikiúdaje'; }
if (isoLanguage=='sl') {  text = text + 'Wikipodatki'; }
if (isoLanguage=='sli') {  text = text + 'Wikidata'; }
if (isoLanguage=='sm') {  text = text + 'Wikidata'; }
if (isoLanguage=='sn') {  text = text + 'Wikidata'; }
if (isoLanguage=='so') {  text = text + 'Wikidata'; }
if (isoLanguage=='sq') {  text = text + 'Wikidata'; }
if (isoLanguage=='sr') {  text = text + 'Википодаци'; }
if (isoLanguage=='srn') {  text = text + 'Wikidata'; }
if (isoLanguage=='ss') {  text = text + 'Wikidata'; }
if (isoLanguage=='stq') {  text = text + 'Wikidata'; }
if (isoLanguage=='su') {  text = text + 'Wikidata'; }
if (isoLanguage=='sv') {  text = text + 'Wikidata'; }
if (isoLanguage=='sw') {  text = text + 'Wikidata'; }
if (isoLanguage=='szl') {  text = text + 'Wikidata'; }
if (isoLanguage=='szy') {  text = text + 'Wikidata'; }
if (isoLanguage=='ta') {  text = text + 'விக்கித்தரவுகள்'; }
if (isoLanguage=='tcy') {  text = text + 'Wikidata'; }
if (isoLanguage=='te') {  text = text + 'వికీడేటా'; }
if (isoLanguage=='tet') {  text = text + 'Wikidata'; }
if (isoLanguage=='tg') {  text = text + 'Викидода'; }
if (isoLanguage=='th') {  text = text + 'วิกิสนเทศ'; }
if (isoLanguage=='ti') {  text = text + 'Wikidata'; }
if (isoLanguage=='tk') {  text = text + 'Wikidata'; }
if (isoLanguage=='tl') {  text = text + 'Wikidata'; }
if (isoLanguage=='tn') {  text = text + 'Wikidata'; }
if (isoLanguage=='tpi') {  text = text + 'Wikidata'; }
if (isoLanguage=='tr') {  text = text + 'Vikiveri'; }
if (isoLanguage=='ts') {  text = text + 'Wikidata'; }
if (isoLanguage=='tt') {  text = text + 'Викибирелмәләр'; }
if (isoLanguage=='tw') {  text = text + 'Wikidata'; }
if (isoLanguage=='ty') {  text = text + 'Wikidata'; }
if (isoLanguage=='tyv') {  text = text + 'Wikidata'; }
if (isoLanguage=='udm') {  text = text + 'Викиданнойёс'; }
if (isoLanguage=='ug') {  text = text + 'Wikidata'; }
if (isoLanguage=='uk') {  text = text + 'Вікідані'; }
if (isoLanguage=='ur') {  text = text + 'ویکیڈیٹا'; }
if (isoLanguage=='uz') {  text = text + 'Wikidata'; }
if (isoLanguage=='ve') {  text = text + 'Wikidata'; }
if (isoLanguage=='vec') {  text = text + 'Wikidata'; }
if (isoLanguage=='vep') {  text = text + 'Vikidat'; }
if (isoLanguage=='vi') {  text = text + 'Wikidata'; }
if (isoLanguage=='vls') {  text = text + 'Wikidata'; }
if (isoLanguage=='vls') {  text = text + 'Wikidata'; }
if (isoLanguage=='vro') {  text = text + 'Wikidata'; }
if (isoLanguage=='wa') {  text = text + 'Wikidata'; }
if (isoLanguage=='war') {  text = text + 'Wikidata'; }
if (isoLanguage=='wo') {  text = text + 'Wikidata'; }
if (isoLanguage=='wuu') {  text = text + '维基数据'; }
if (isoLanguage=='xal') {  text = text + 'Wikidata'; }
if (isoLanguage=='xh') {  text = text + 'Wikidata'; }
if (isoLanguage=='xmf') {  text = text + 'Wikidata'; }
if (isoLanguage=='yi') {  text = text + 'Wikidata'; }
if (isoLanguage=='yo') {  text = text + 'Wikidata'; }
if (isoLanguage=='yue') {  text = text + '維基數據'; }
if (isoLanguage=='za') {  text = text + 'Veizgiek Soqgi'; }
if (isoLanguage=='zea') {  text = text + 'Wikidata'; }
if (isoLanguage=='zh') {  text = text + '维基数据'; }
if (isoLanguage=='zh-cn') {  text = text + '维基数据'; }
if (isoLanguage=='zh-hans') {  text = text + '维基数据'; }
if (isoLanguage=='zh-hant') {  text = text + '維基數據'; }
if (isoLanguage=='zh-sg') {  text = text + '维基数据'; }
if (isoLanguage=='zh-tw') {  text = text + '維基數據'; }
if (isoLanguage=='zh-tw') {  text = text + '維基數據'; }
if (isoLanguage=='zu') {  text = text + 'Wikidata'; }
	
	text = text+': <b><a target="_blank" href="' + iri + '">' + iri.substring(31,iri.length) + '</a></b><br/>';
	$("#div_wdlink").html(text);
}

function div1change() {
	var iri = $("#box1").val();
	var isoLanguage= $("#box0").val();
	// create URI-encoded query string to get item names and IRIs
	var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
                +'PREFIX wd: <http://www.wikidata.org/entity/>'
                +'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
                +'SELECT DISTINCT ?property ?value WHERE {'
               + '<' + iri + '> ?propertyUri ?valueUri.'
                +'?valueUri rdfs:label ?value.'
                +'?genProp <http://wikiba.se/ontology#directClaim> ?propertyUri.'
                +'?genProp rdfs:label ?property.'
                +'FILTER(substr(str(?propertyUri),1,36)="http://www.wikidata.org/prop/direct/")'
                +'FILTER(LANG(?property) = "'+isoLanguage+'")'
                +'FILTER(LANG(?value) = "'+isoLanguage+'")'
                +'}'
                +'ORDER BY ASC(?property)';
	var encodedQuery = encodeURIComponent(string);

	// send query to endpoint
	$.ajax({
		type: 'GET',
		url: 'https://query.wikidata.org/sparql?query=' + encodedQuery,
		headers: {
			Accept: 'application/sparql-results+json'
		},
		success: function(returnedJson) {
			text = ''
			for (i = 0; i < returnedJson.results.bindings.length; i++) {
				property = returnedJson.results.bindings[i].property.value
				value = returnedJson.results.bindings[i].value.value
				text = text + property + ': <b>' + value + '</b><br/>'
			}
			$("#div1").html(text);
			$('#searchSpinner').hide();
		}
	});
}

function div2change() {
	var iri = $("#box1").val();
		
	var isoLanguage= $("#box0").val();
	// create URI-encoded query string to get property names, IDs, and compiled link URLs. model query here: https://w.wiki/XNq
	var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
                +'PREFIX wd: <http://www.wikidata.org/entity/>'
                +'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
				+'SELECT DISTINCT ?property ?valueUri ?URL WHERE {'
				+'<' + iri + '>  ?propertyUri ?valueUri.'
  				+'?genProp <http://wikiba.se/ontology#directClaim> ?propertyUri.'
  				+'?genProp rdfs:label ?property.'
  				+'FILTER(substr(str(?propertyUri),1,36)="http://www.wikidata.org/prop/direct/")'
  				+'FILTER(LANG(?property) = "'+isoLanguage+'")'
  				+'FILTER(substr(str(?valueUri),1,31)!="http://www.wikidata.org/entity/")'
  				+'OPTIONAL { ?genProp wdt:P1630 ?fmt_URL . }'
				+'FILTER(!BOUND(?fmt_URL))'
				+'}'
				+'ORDER BY ASC(?property)'

	var encodedQuery = encodeURIComponent(string);

	// send query to endpoint
	$.ajax({
		type: 'GET',
		url: 'https://query.wikidata.org/sparql?query=' + encodedQuery,
		headers: {
			Accept: 'application/sparql-results+json'
		},
		success: function(returnedJson) {
			text = ''
			for (i = 0; i < returnedJson.results.bindings.length; i++) {
				property = returnedJson.results.bindings[i].property.value
				value = returnedJson.results.bindings[i].valueUri.value
				//linkURL = returnedJson.results.bindings[i].URL.value
				//text = text + property + ': <b><a target="_blank" href="'+linkURL+'">' + value + '</a></b><br/>'
				//text = text + property + ': <b>' + value + '</b><br/>'
				
				if ((value.startsWith("http://"))||((value.startsWith("https://")))) {
					text = text + property + ': <b><a target="_blank" href="'+value+'">' + value + '</a></b><br/>'
				} else {
					text = text + property + ': <b>' + value + '</b><br/>'
				}

			}
			$("#div2").html(text);
			$('#searchSpinner').hide();
		}
	});
}

function div3change() {
	var iri = $("#box1").val();
		
	var isoLanguage= $("#box0").val();
	// create URI-encoded query string to get property names, IDs, and compiled link URLs. model query here: https://w.wiki/XNq
	var string = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'
                +'PREFIX wd: <http://www.wikidata.org/entity/>'
                +'PREFIX wdt: <http://www.wikidata.org/prop/direct/>'
				+'SELECT DISTINCT ?property ?valueUri ?URL WHERE {'
				+'<' + iri + '>  ?propertyUri ?valueUri.'
  				+'?genProp <http://wikiba.se/ontology#directClaim> ?propertyUri.'
  				+'?genProp rdfs:label ?property.'
  				+'FILTER(substr(str(?propertyUri),1,36)="http://www.wikidata.org/prop/direct/")'
  				+'FILTER(LANG(?property) = "'+isoLanguage+'")'
  				+'FILTER(substr(str(?valueUri),1,31)!="http://www.wikidata.org/entity/")'
  				+'?genProp wdt:P1630 ?fmt_URL .'
  				+'BIND (REPLACE( STR(?fmt_URL), "\\\\$1", ?valueUri ) AS ?URL)'
  				+'FILTER(BOUND(?URL))'
				+'}'
				+'ORDER BY ASC(?property)'

	var encodedQuery = encodeURIComponent(string);

	// send query to endpoint
	$.ajax({
		type: 'GET',
		url: 'https://query.wikidata.org/sparql?query=' + encodedQuery,
		headers: {
			Accept: 'application/sparql-results+json'
		},
		success: function(returnedJson) {
			text = ''
			for (i = 0; i < returnedJson.results.bindings.length; i++) {
				property = returnedJson.results.bindings[i].property.value
				value = returnedJson.results.bindings[i].valueUri.value
				linkURL = returnedJson.results.bindings[i].URL.value
				text = text + property + ': <b><a target="_blank" href="'+linkURL+'">' + value + '</a></b><br/>'
			$('#searchSpinner').hide();
			}
			//text = text+'<iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openlinkmap.org/small.php?lat=-33.413850&lon=149.565513&zoom=14" style="border: 1px solid black"></iframe>'
			$("#div3").html(text);
		}
	});
}

function div_wiki_change() {
	var iri = $("#box1").val();
	var isoLanguage= $("#box0").val();

	// create URI-encoded query string to get property names, IDs, and compiled link URLs. model query here: https://w.wiki/XNq
	var string = 'PREFIX schema: <http://schema.org/>'
				+'SELECT DISTINCT ?article WHERE {'
  				+'?article schema:about <' + iri + '> .'
  				+'?article schema:inLanguage "'+isoLanguage+'" .'
				+'}'
	var encodedQuery = encodeURIComponent(string);

	// send query to endpoint
	$.ajax({
		type: 'GET',
		url: 'https://query.wikidata.org/sparql?query=' + encodedQuery,
		headers: {
			Accept: 'application/sparql-results+json'
		},
		success: function(returnedJson) {
			text = ''
			for (i = 0; i < returnedJson.results.bindings.length; i++) {
				article = returnedJson.results.bindings[i].article.value
				site = 'article' //default, will apply to "other sites"
				if (article.includes(".wikipedia.")) {
// these long lists come from the query: https://w.wiki/XUx					
if (isoLanguage=='aa') {  site = 'Wikipedia'; }
if (isoLanguage=='ab') {  site = 'Авикипедиа'; }
if (isoLanguage=='ace') {  site = 'Wikipèdia'; }
if (isoLanguage=='ady') {  site = 'Википедие'; }
if (isoLanguage=='af') {  site = 'Wikipedia'; }
if (isoLanguage=='ak') {  site = 'Wikipedia'; }
if (isoLanguage=='am') {  site = 'ውክፔዲያ'; }
if (isoLanguage=='an') {  site = 'Biquipedia'; }
if (isoLanguage=='ar') {  site = 'ويكيبيديا'; }
if (isoLanguage=='arc') {  site = 'ܘܝܩܝܦܕܝܐ'; }
if (isoLanguage=='as') {  site = 'ৱিকিপিডিয়া'; }
if (isoLanguage=='ast') {  site = 'Wikipedia'; }
if (isoLanguage=='atj') {  site = 'Wikipetcia'; }
if (isoLanguage=='av') {  site = 'Википедия'; }
if (isoLanguage=='awa') {  site = 'विकिपीडिया'; }
if (isoLanguage=='ay') {  site = 'Wikipidiya'; }
if (isoLanguage=='az') {  site = 'Vikipediya'; }
if (isoLanguage=='ba') {  site = 'Википедия'; }
if (isoLanguage=='ban') {  site = 'Wikipédia'; }
if (isoLanguage=='bar') {  site = 'Wikipedia'; }
if (isoLanguage=='bcl') {  site = 'Wikipidya'; }
if (isoLanguage=='be') {  site = 'Вікіпедыя'; }
if (isoLanguage=='bg') {  site = 'Уикипедия'; }
if (isoLanguage=='bho') {  site = 'विकिपीडिया'; }
if (isoLanguage=='bi') {  site = 'Wikipedia'; }
if (isoLanguage=='bjn') {  site = 'Wikipidia'; }
if (isoLanguage=='bm') {  site = 'Wikipedi'; }
if (isoLanguage=='bn') {  site = 'উইকিপিডিয়া'; }
if (isoLanguage=='bo') {  site = 'ལྦེ་ཁེ་རིག་མཛོད'; }
if (isoLanguage=='bpy') {  site = 'উইকিপিডিয়া'; }
if (isoLanguage=='br') {  site = 'Wikipedia'; }
if (isoLanguage=='brh') {  site = 'Vikípeđíá'; }
if (isoLanguage=='bs') {  site = 'Wikipedia'; }
if (isoLanguage=='bug') {  site = 'Wikipedia'; }
if (isoLanguage=='bxr') {  site = 'Википеэди'; }
if (isoLanguage=='ca') {  site = 'Viquipèdia'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikipedia'; }
if (isoLanguage=='cdo') {  site = 'Wikipedia'; }
if (isoLanguage=='ce') {  site = 'Википеди'; }
if (isoLanguage=='ceb') {  site = 'Wikipedya'; }
if (isoLanguage=='ch') {  site = 'Wikipedia'; }
if (isoLanguage=='chr') {  site = 'ᏫᎩᏇᏗᏯ'; }
if (isoLanguage=='chy') {  site = 'Wikipedia'; }
if (isoLanguage=='ckb') {  site = 'ویکیپیدیا'; }
if (isoLanguage=='co') {  site = 'Wikipedia'; }
if (isoLanguage=='crh') {  site = 'Vikipediya'; }
if (isoLanguage=='cs') {  site = 'Wikipedie'; }
if (isoLanguage=='csb') {  site = 'Wikipedijô'; }
if (isoLanguage=='cu') {  site = 'Википєдїꙗ'; }
if (isoLanguage=='cv') {  site = 'Википеди'; }
if (isoLanguage=='cy') {  site = 'Wicipedia'; }
if (isoLanguage=='da') {  site = 'Wikipedia'; }
if (isoLanguage=='de') {  site = 'Wikipedia'; }
if (isoLanguage=='diq') {  site = 'Wikipediya'; }
if (isoLanguage=='dsb') {  site = 'Wikipedija'; }
if (isoLanguage=='dty') {  site = 'विकिपिडिया'; }
if (isoLanguage=='dv') {  site = 'ވިކިޕީޑިޔާ'; }
if (isoLanguage=='ee') {  site = 'Wikipiɖia'; }
if (isoLanguage=='el') {  site = 'Βικιπαίδεια'; }
if (isoLanguage=='el') {  site = 'Βικιπαίδεια'; }
if (isoLanguage=='eml') {  site = 'Vichipedìa'; }
if (isoLanguage=='en') {  site = 'Wikipedia'; }
if (isoLanguage=='en-ca') {  site = 'Wikipedia'; }
if (isoLanguage=='en-gb') {  site = 'Wikipedia'; }
if (isoLanguage=='es') {  site = 'Wikipedia'; }
if (isoLanguage=='et') {  site = 'Vikipeedia'; }
if (isoLanguage=='eu') {  site = 'Wikipedia'; }
if (isoLanguage=='ext') {  site = 'Wikipedia'; }
if (isoLanguage=='fa') {  site = 'ویکیپدیا'; }
if (isoLanguage=='ff') {  site = 'Wikipeediya'; }
if (isoLanguage=='fi') {  site = 'Wikipedia'; }
if (isoLanguage=='fj') {  site = 'Wikipedia'; }
if (isoLanguage=='fo') {  site = 'Wikipedia'; }
if (isoLanguage=='fr') {  site = 'Wikipédia'; }
if (isoLanguage=='frp') {  site = 'Vouiquipèdia'; }
if (isoLanguage=='frr') {  site = 'Wikipedia'; }
if (isoLanguage=='fur') {  site = 'Vichipedie'; }
if (isoLanguage=='fy') {  site = 'Wikipedy'; }
if (isoLanguage=='ga') {  site = 'Vicipéid'; }
if (isoLanguage=='gag') {  site = 'Vikipediya'; }
if (isoLanguage=='gan') {  site = '維基百科'; }
if (isoLanguage=='gcr') {  site = 'Wikipédja'; }
if (isoLanguage=='gd') {  site = 'Uicipeid'; }
if (isoLanguage=='gl') {  site = 'Wikipedia'; }
if (isoLanguage=='glk') {  site = 'Vikipөdiya'; }
if (isoLanguage=='gn') {  site = 'Vikipetã'; }
if (isoLanguage=='gor') {  site = 'Wikipedia'; }
if (isoLanguage=='gsw') {  site = 'Wikipedia'; }
if (isoLanguage=='gu') {  site = 'વિકિપીડિયા'; }
if (isoLanguage=='gv') {  site = 'Wikipedia'; }
if (isoLanguage=='ha') {  site = 'Wikipedia'; }
if (isoLanguage=='hak') {  site = 'Vì-kî Pak-khô'; }
if (isoLanguage=='haw') {  site = 'Wikipikia'; }
if (isoLanguage=='he') {  site = 'ויקיפדיה'; }
if (isoLanguage=='hi') {  site = 'विकिपीडिया'; }
if (isoLanguage=='hr') {  site = 'Wikipedija'; }
if (isoLanguage=='hsb') {  site = 'Wikipedija'; }
if (isoLanguage=='ht') {  site = 'Wikipedya'; }
if (isoLanguage=='hyw') {  site = 'Ուիքիփետիա'; }
if (isoLanguage=='id') {  site = 'Wikipedia'; }
if (isoLanguage=='ig') {  site = 'Wikipedia'; }
if (isoLanguage=='ik') {  site = 'Uiqipitia'; }
if (isoLanguage=='ilo') {  site = 'Wikipedia'; }
if (isoLanguage=='inh') {  site = 'Википеди'; }
if (isoLanguage=='is') {  site = 'Wikipedia'; }
if (isoLanguage=='it') {  site = 'Wikipedia'; }
if (isoLanguage=='iu') {  site = 'ᐅᐃᑭᐱᑎᐊ'; }
if (isoLanguage=='ja') {  site = 'ウィキペディア'; }
if (isoLanguage=='jam') {  site = 'Wikipidia'; }
if (isoLanguage=='jv') {  site = 'Wikipedia'; }
if (isoLanguage=='ka') {  site = 'ვიკიპედია'; }
if (isoLanguage=='kaa') {  site = 'Wikipedia'; }
if (isoLanguage=='kab') {  site = 'Wikipédia'; }
if (isoLanguage=='kbp') {  site = 'Wikipediya'; }
if (isoLanguage=='kg') {  site = 'Wikipedia'; }
if (isoLanguage=='ki') {  site = 'Wikipedia'; }
if (isoLanguage=='kk') {  site = 'Уикипедия'; }
if (isoLanguage=='kl') {  site = 'Wikipedia'; }
if (isoLanguage=='km') {  site = 'វិគីភីឌា'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿಪೀಡಿಯ'; }
if (isoLanguage=='ko') {  site = '위키백과'; }
if (isoLanguage=='koi') {  site = 'Википедия'; }
if (isoLanguage=='krc') {  site = 'Википедия'; }
if (isoLanguage=='ks') {  site = 'ویکیپیٖڈیا'; }
if (isoLanguage=='ksh') {  site = 'Wikkipedija'; }
if (isoLanguage=='ksh') {  site = 'Wikkipedija'; }
if (isoLanguage=='ku') {  site = 'Wîkîpediya'; }
if (isoLanguage=='ku') {  site = 'Wîkîpediya'; }
if (isoLanguage=='kw') {  site = 'Wikipedya'; }
if (isoLanguage=='ky') {  site = 'Уикипедия'; }
if (isoLanguage=='la') {  site = 'Vicipaedia'; }
if (isoLanguage=='lad') {  site = 'Vikipedya'; }
if (isoLanguage=='lb') {  site = 'Wikipedia'; }
if (isoLanguage=='lbe') {  site = 'Википедия'; }
if (isoLanguage=='lez') {  site = 'Википедия'; }
if (isoLanguage=='lg') {  site = 'Wikipedia'; }
if (isoLanguage=='li') {  site = 'Wikipedia'; }
if (isoLanguage=='lij') {  site = 'Wikipedia'; }
if (isoLanguage=='liv') {  site = 'Vikipēdij'; }
if (isoLanguage=='lmo') {  site = 'Wikipedia'; }
if (isoLanguage=='ln') {  site = 'Wikipedia'; }
if (isoLanguage=='lo') {  site = 'ວິກິພີເດຍ'; }
if (isoLanguage=='lt') {  site = 'Vikipedija'; }
if (isoLanguage=='ltg') {  site = 'Vikipedeja'; }
if (isoLanguage=='lv') {  site = 'Vikipēdija'; }
if (isoLanguage=='mai') {  site = 'विकिपिडिया'; }
if (isoLanguage=='map-bms') {  site = 'Wikipedia'; }
if (isoLanguage=='mdf') {  site = 'Википедие'; }
if (isoLanguage=='mg') {  site = 'Wikipedia'; }
if (isoLanguage=='mhr') {  site = 'Википедий'; }
if (isoLanguage=='mi') {  site = 'Wikipedia'; }
if (isoLanguage=='min') {  site = 'Wikipedia'; }
if (isoLanguage=='mk') {  site = 'Википедија'; }
if (isoLanguage=='ml') {  site = 'വിക്കിപീഡിയ'; }
if (isoLanguage=='mn') {  site = 'Википедиа'; }
if (isoLanguage=='mnw') {  site = 'ဝဳကဳပဳဒဳယာ'; }
if (isoLanguage=='mo') {  site = 'Википедия'; }
if (isoLanguage=='mr') {  site = 'विकिपीडिया'; }
if (isoLanguage=='mrj') {  site = 'Википеди'; }
if (isoLanguage=='ms') {  site = 'Wikipedia'; }
if (isoLanguage=='mt') {  site = 'Wikipedija'; }
if (isoLanguage=='mwl') {  site = 'Biquipédia'; }
if (isoLanguage=='my') {  site = 'ဝီကီပီးဒီးယား'; }
if (isoLanguage=='myv') {  site = 'Википедиясь'; }
if (isoLanguage=='mzn') {  site = 'ویکیپدیا'; }
if (isoLanguage=='na') {  site = 'Wikipediya'; }
if (isoLanguage=='nah') {  site = 'Huiquipedia'; }
if (isoLanguage=='nan') {  site = 'Wikipedia'; }
if (isoLanguage=='nap') {  site = 'Wikipedia'; }
if (isoLanguage=='nb') {  site = 'Wikipedia'; }
if (isoLanguage=='nds') {  site = 'Wikipedia'; }
if (isoLanguage=='nds-nl') {  site = 'Wikipedie'; }
if (isoLanguage=='ne') {  site = 'विकिपीडिया'; }
if (isoLanguage=='new') {  site = 'विकिपिडिया'; }
if (isoLanguage=='ng') {  site = 'Wikipedia'; }
if (isoLanguage=='nl') {  site = 'Wikipedia'; }
if (isoLanguage=='nn') {  site = 'Wikipedia'; }
if (isoLanguage=='no') {  site = 'Wikipedia'; }
if (isoLanguage=='nrm') {  site = 'Viqùipédie'; }
if (isoLanguage=='nso') {  site = 'Wikipedia'; }
if (isoLanguage=='ny') {  site = 'Wikipedia'; }
if (isoLanguage=='oc') {  site = 'Wikipèdia'; }
if (isoLanguage=='olo') {  site = 'Wikipedii'; }
if (isoLanguage=='om') {  site = 'Wiikiipiidiyaa'; }
if (isoLanguage=='or') {  site = 'ଉଇକିପିଡ଼ିଆ'; }
if (isoLanguage=='os') {  site = 'Википеди'; }
if (isoLanguage=='pa') {  site = 'ਵਿਕੀਪੀਡੀਆ'; }
if (isoLanguage=='pag') {  site = 'Wikipedia'; }
if (isoLanguage=='pap') {  site = 'Wikipedia'; }
if (isoLanguage=='pcd') {  site = 'Wikipédia'; }
if (isoLanguage=='pdc') {  site = 'Wikipedia'; }
if (isoLanguage=='pfl') {  site = 'Wikipedia'; }
if (isoLanguage=='pi') {  site = 'विकिपीडिया'; }
if (isoLanguage=='pih') {  site = 'Wikkapedya'; }
if (isoLanguage=='pl') {  site = 'Wikipedia'; }
if (isoLanguage=='pms') {  site = 'Wikipedia'; }
if (isoLanguage=='pnt') {  site = 'Βικιπαίδεια'; }
if (isoLanguage=='ps') {  site = 'ويکيپېډيا'; }
if (isoLanguage=='pt') {  site = 'Wikipédia'; }
if (isoLanguage=='pt-br') {  site = 'Wikipédia'; }
if (isoLanguage=='qu') {  site = 'Wikipidiya'; }
if (isoLanguage=='rm') {  site = 'Vichipedia'; }
if (isoLanguage=='rmy') {  site = 'Vikipidiya'; }
if (isoLanguage=='ro') {  site = 'Wikipedia'; }
if (isoLanguage=='ru') {  site = 'Википедия'; }
if (isoLanguage=='rue') {  site = 'Вікіпедія'; }
if (isoLanguage=='rup') {  site = 'Wikipedia'; }
if (isoLanguage=='rw') {  site = 'Wikipediya'; }
if (isoLanguage=='sa') {  site = 'विकिपीडिया'; }
if (isoLanguage=='sah') {  site = 'Бикипиэдьийэ'; }
if (isoLanguage=='sat') {  site = 'ᱣᱤᱠᱤᱯᱤᱰᱤᱭᱟ'; }
if (isoLanguage=='sc') {  site = 'Wikipedia'; }
if (isoLanguage=='scn') {  site = 'Wikipedia'; }
if (isoLanguage=='sco') {  site = 'Wikipaedia'; }
if (isoLanguage=='sd') {  site = 'وڪيپيڊيا'; }
if (isoLanguage=='se') {  site = 'Wikipedia'; }
if (isoLanguage=='sg') {  site = 'Wïkïpêdïyäa'; }
if (isoLanguage=='sgs') {  site = 'Vikipedėjė'; }
if (isoLanguage=='sh') {  site = 'Wikipedia'; }
if (isoLanguage=='shn') {  site = 'ဝီႇၶီႇၽီးတီးယႃး'; }
if (isoLanguage=='si') {  site = 'විකිපීඩියා'; }
if (isoLanguage=='sk') {  site = 'Wikipédia'; }
if (isoLanguage=='sl') {  site = 'Wikipedija'; }
if (isoLanguage=='sli') {  site = 'Wikipeedia'; }
if (isoLanguage=='sm') {  site = 'Wikipedia'; }
if (isoLanguage=='sn') {  site = 'Wikipedhiya'; }
if (isoLanguage=='so') {  site = 'Wikipedia'; }
if (isoLanguage=='sq') {  site = 'Wikipedia'; }
if (isoLanguage=='sr') {  site = 'Википедија'; }
if (isoLanguage=='srn') {  site = 'Wikipedia'; }
if (isoLanguage=='ss') {  site = 'Wikipedia'; }
if (isoLanguage=='stq') {  site = 'Wikipedia'; }
if (isoLanguage=='su') {  site = 'Wikipédia'; }
if (isoLanguage=='sv') {  site = 'Wikipedia'; }
if (isoLanguage=='sw') {  site = 'Wikipedia'; }
if (isoLanguage=='szl') {  site = 'Wikipedyjo'; }
if (isoLanguage=='szy') {  site = 'Wikipitiya'; }
if (isoLanguage=='ta') {  site = 'விக்கிப்பீடியா'; }
if (isoLanguage=='tcy') {  site = 'ವಿಕಿಪೀಡಿಯ'; }
if (isoLanguage=='te') {  site = 'వికీపీడియా'; }
if (isoLanguage=='tet') {  site = 'Wikipédia'; }
if (isoLanguage=='tg') {  site = 'Википедиа'; }
if (isoLanguage=='th') {  site = 'วิกิพีเดีย'; }
if (isoLanguage=='ti') {  site = 'ዊኪፔዲያ'; }
if (isoLanguage=='tk') {  site = 'Wikipediýa'; }
if (isoLanguage=='tl') {  site = 'Wikipedia'; }
if (isoLanguage=='tn') {  site = 'Wikipedia'; }
if (isoLanguage=='tpi') {  site = 'Wikipedia'; }
if (isoLanguage=='tr') {  site = 'Vikipedi'; }
if (isoLanguage=='ts') {  site = 'Wikipediya'; }
if (isoLanguage=='tt') {  site = 'Википедия'; }
if (isoLanguage=='tw') {  site = 'Wikipedia'; }
if (isoLanguage=='ty') {  site = 'Vitipetia'; }
if (isoLanguage=='tyv') {  site = 'Википедия'; }
if (isoLanguage=='udm') {  site = 'Википедия'; }
if (isoLanguage=='ug') {  site = 'ۋىكىپېدىيە'; }
if (isoLanguage=='uk') {  site = 'Вікіпедія'; }
if (isoLanguage=='ur') {  site = 'ویکیپیڈیا'; }
if (isoLanguage=='uz') {  site = 'Vikipediya'; }
if (isoLanguage=='ve') {  site = 'Wikipedia'; }
if (isoLanguage=='vec') {  site = 'Wikipedia'; }
if (isoLanguage=='vep') {  site = 'Vikipedii'; }
if (isoLanguage=='vi') {  site = 'Wikipedia'; }
if (isoLanguage=='vls') {  site = 'Wikipedia'; }
if (isoLanguage=='vls') {  site = 'Wikipedia'; }
if (isoLanguage=='vro') {  site = 'Vikipeediä'; }
if (isoLanguage=='wa') {  site = 'Wikipedia'; }
if (isoLanguage=='war') {  site = 'Wikipedia'; }
if (isoLanguage=='wo') {  site = 'Wikipedia'; }
if (isoLanguage=='wuu') {  site = '维基百科'; }
if (isoLanguage=='xal') {  site = 'Бикипеди'; }
if (isoLanguage=='xh') {  site = 'Wikipedia'; }
if (isoLanguage=='xmf') {  site = 'ვიკიპედია'; }
if (isoLanguage=='yi') {  site = 'וויקיפעדיע'; }
if (isoLanguage=='yo') {  site = 'Wikipédìà'; }
if (isoLanguage=='yue') {  site = '維基百科'; }
if (isoLanguage=='za') {  site = 'Vigibakgoh'; }
if (isoLanguage=='zea') {  site = 'Wikipedia'; }
if (isoLanguage=='zh') {  site = '维基百科'; }
if (isoLanguage=='zh-cn') {  site = '维基百科'; }
if (isoLanguage=='zh-hans') {  site = '维基百科'; }
if (isoLanguage=='zh-hant') {  site = '維基百科'; }
if (isoLanguage=='zh-sg') {  site = '维基百科'; }
if (isoLanguage=='zh-tw') {  site = '維基百科'; }
if (isoLanguage=='zh-tw') {  site = '維基百科'; }
if (isoLanguage=='zu') {  site = 'Wikipedia'; }

				}
				if (article.includes("commons.wikimedia.org")) {
if (isoLanguage=='aa') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ab') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ace') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ady') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='af') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ak') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='am') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='an') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ar') {  site = 'ويكيميديا كومنز'; }
if (isoLanguage=='arc') {  site = 'ܘܝܩܝܡܝܕܝܐ ܩܘܡܡܘܢܣ'; }
if (isoLanguage=='as') {  site = 'ৱিকিমিডিয়া কমন্স'; }
if (isoLanguage=='ast') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='atj') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='av') {  site = 'Викигъамас'; }
if (isoLanguage=='awa') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ay') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='az') {  site = 'Vikianbar'; }
if (isoLanguage=='ba') {  site = 'Викимилек'; }
if (isoLanguage=='ban') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bar') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bcl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='be') {  site = 'ВікіСховішча'; }
if (isoLanguage=='bg') {  site = 'Общомедия'; }
if (isoLanguage=='bho') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bi') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bjn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bm') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bn') {  site = 'উইকিমিডিয়া কমন্স'; }
if (isoLanguage=='bo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bpy') {  site = 'উইকিমিডিয়া কমন্স'; }
if (isoLanguage=='br') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='brh') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bs') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bug') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='bxr') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ca') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='cdo') {  site = 'Wiki Gê̤ṳng-hiōng'; }
if (isoLanguage=='ce') {  site = 'Викиларма'; }
if (isoLanguage=='ceb') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ch') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='chr') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='chy') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ckb') {  site = 'ویکیمیدیا کۆمنز'; }
if (isoLanguage=='co') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='crh') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='cs') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='csb') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='cu') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='cv') {  site = 'Викиампар'; }
if (isoLanguage=='cy') {  site = 'Comin Wicifryngau'; }
if (isoLanguage=='da') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='de') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='diq') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='dsb') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='dty') {  site = 'विकिमिडिया कमन्स'; }
if (isoLanguage=='dv') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ee') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='el') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='el') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='eml') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='en') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='en-ca') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='en-gb') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='es') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='et') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='eu') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ext') {  site = 'Commons'; }
if (isoLanguage=='fa') {  site = 'انبار ویکیمدیا'; }
if (isoLanguage=='ff') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='fi') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='fj') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='fo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='fr') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='frp') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='frr') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='fur') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='fy') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ga') {  site = 'Cómhaoin Wikimedia'; }
if (isoLanguage=='gag') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gan') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gcr') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gd') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='glk') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gor') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gsw') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='gu') {  site = 'વિકિમીડિયા કૉમન્સ'; }
if (isoLanguage=='gv') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ha') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='hak') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='haw') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='he') {  site = 'ויקישיתוף'; }
if (isoLanguage=='hi') {  site = 'विकिमीडिया कॉमन्स'; }
if (isoLanguage=='hr') {  site = 'Zajednički poslužitelj'; }
if (isoLanguage=='hsb') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ht') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='hyw') {  site = 'Ուիքիպահեստ'; }
if (isoLanguage=='id') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ig') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ik') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ilo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='inh') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='is') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='it') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='iu') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ja') {  site = 'ウィキメディア・コモンズ'; }
if (isoLanguage=='jam') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='jv') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ka') {  site = 'ვიკისაწყობი'; }
if (isoLanguage=='kaa') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='kab') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='kbp') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='kg') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ki') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='kk') {  site = 'Ортаққор'; }
if (isoLanguage=='kl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='km') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿಮೀಡಿಯ ಕಾಮನ್ಸ್'; }
if (isoLanguage=='ko') {  site = '위키미디어 공용'; }
if (isoLanguage=='koi') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='krc') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ks') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ksh') {  site = 'Wikkimedija Commons'; }
if (isoLanguage=='ksh') {  site = 'Wikkimedija Commons'; }
if (isoLanguage=='ku') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ku') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='kw') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ky') {  site = 'Уикиказына'; }
if (isoLanguage=='la') {  site = 'Vicimedia Communia'; }
if (isoLanguage=='lad') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lb') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lbe') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lez') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lg') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='li') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lij') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='liv') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lmo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ln') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='lt') {  site = 'Vikiteka'; }
if (isoLanguage=='ltg') {  site = 'Vikiteka'; }
if (isoLanguage=='lv') {  site = 'Vikikrātuve'; }
if (isoLanguage=='mai') {  site = 'विकिमिडिया कमन्स'; }
if (isoLanguage=='map-bms') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mdf') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mg') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mhr') {  site = 'Викиклат'; }
if (isoLanguage=='mi') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='min') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mk') {  site = 'Ризница'; }
if (isoLanguage=='ml') {  site = 'വിക്കിമീഡിയ കോമൺസ്'; }
if (isoLanguage=='mn') {  site = 'Викимедиа Коммонс'; }
if (isoLanguage=='mnw') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mr') {  site = 'विकिमीडिया कॉमन्स'; }
if (isoLanguage=='mrj') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ms') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mt') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mwl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='my') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='myv') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='mzn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='na') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nah') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nan') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nap') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nb') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nds') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nds-nl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ne') {  site = 'विकिमीडिया कमन्स'; }
if (isoLanguage=='new') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ng') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='no') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nrm') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='nso') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ny') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='oc') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='olo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='om') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='or') {  site = 'ଉଇକିମିଡ଼ିଆ କମନ୍ସ'; }
if (isoLanguage=='os') {  site = 'ВикиКъæбиц'; }
if (isoLanguage=='pa') {  site = 'ਵਿਕੀਮੀਡੀਆ ਕਾਮਨਜ਼'; }
if (isoLanguage=='pag') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pap') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pcd') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pdc') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pfl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pi') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pih') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pms') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pnt') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ps') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pt') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='pt-br') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='qu') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='rm') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='rmy') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ro') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ru') {  site = 'Викисклад'; }
if (isoLanguage=='rue') {  site = 'Вікісклад'; }
if (isoLanguage=='rup') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='rw') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sa') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sah') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sat') {  site = 'ᱣᱤᱠᱤᱢᱤᱰᱤᱭᱟ ᱠᱚᱢᱚᱱᱥ'; }
if (isoLanguage=='sc') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='scn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sco') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sd') {  site = 'وڪيميڊيا ڪامنز'; }
if (isoLanguage=='se') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sg') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sgs') {  site = 'Vikitėka'; }
if (isoLanguage=='sh') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='shn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='si') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sk') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sl') {  site = 'Wikimedijina zbirka'; }
if (isoLanguage=='sli') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sm') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='so') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sq') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sr') {  site = 'Остава Викимедије'; }
if (isoLanguage=='srn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ss') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='stq') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='su') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sv') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='sw') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='szl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='szy') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ta') {  site = 'விக்கிமீடியா பொதுவகம்'; }
if (isoLanguage=='tcy') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='te') {  site = 'వికీమీడియా కామన్స్'; }
if (isoLanguage=='tet') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tg') {  site = 'Викимедиаи Умумӣ'; }
if (isoLanguage=='th') {  site = 'วิกิมีเดียคอมมอนส์'; }
if (isoLanguage=='ti') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tk') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tl') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tn') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tpi') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tr') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ts') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tt') {  site = 'Викиҗыентык'; }
if (isoLanguage=='tw') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ty') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='tyv') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='udm') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='ug') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='uk') {  site = 'Вікісховище'; }
if (isoLanguage=='ur') {  site = 'ویکیمیڈیا العام'; }
if (isoLanguage=='uz') {  site = 'VikiOmbor'; }
if (isoLanguage=='ve') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='vec') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='vep') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='vi') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='vls') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='vls') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='vro') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='wa') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='war') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='wo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='wuu') {  site = '维基共享'; }
if (isoLanguage=='xal') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='xh') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='xmf') {  site = 'ვიკიოწკარუე'; }
if (isoLanguage=='yi') {  site = 'וויקיקאמאנס'; }
if (isoLanguage=='yo') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='yue') {  site = '維基同享'; }
if (isoLanguage=='za') {  site = 'Veizgiek Gunghyungh'; }
if (isoLanguage=='zea') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='zh') {  site = '维基共享资源'; }
if (isoLanguage=='zh-cn') {  site = '维基共享资源'; }
if (isoLanguage=='zh-hans') {  site = '维基共享资源'; }
if (isoLanguage=='zh-hant') {  site = '維基共享資源'; }
if (isoLanguage=='zh-sg') {  site = 'Wikimedia Commons'; }
if (isoLanguage=='zh-tw') {  site = '維基共享資源'; }
if (isoLanguage=='zh-tw') {  site = '維基共享資源'; }
if (isoLanguage=='zu') {  site = 'Wikimedia Commons'; }
				}
				if (article.includes(".wikibooks.")) {
if (isoLanguage=='aa') {  site = 'Wikibooks'; }
if (isoLanguage=='ab') {  site = 'Wikibooks'; }
if (isoLanguage=='ace') {  site = 'Wikibooks'; }
if (isoLanguage=='ady') {  site = 'Wikibooks'; }
if (isoLanguage=='af') {  site = 'Wikibooks'; }
if (isoLanguage=='ak') {  site = 'Wikibooks'; }
if (isoLanguage=='am') {  site = 'Wikibooks'; }
if (isoLanguage=='an') {  site = 'Wikibooks'; }
if (isoLanguage=='ar') {  site = 'ويكي الكتب'; }
if (isoLanguage=='arc') {  site = 'Wikibooks'; }
if (isoLanguage=='as') {  site = 'ৱিকিবুক্ছ'; }
if (isoLanguage=='ast') {  site = 'Wikillibros'; }
if (isoLanguage=='atj') {  site = 'Wikibooks'; }
if (isoLanguage=='av') {  site = 'Wikibooks'; }
if (isoLanguage=='awa') {  site = 'Wikibooks'; }
if (isoLanguage=='ay') {  site = 'Wikibooks'; }
if (isoLanguage=='az') {  site = 'VikiKitab'; }
if (isoLanguage=='ba') {  site = 'Wikibooks'; }
if (isoLanguage=='ban') {  site = 'Wikibooks'; }
if (isoLanguage=='bar') {  site = 'Wikibooks'; }
if (isoLanguage=='bcl') {  site = 'Wikibooks'; }
if (isoLanguage=='be') {  site = 'Вікіпадручнік'; }
if (isoLanguage=='bg') {  site = 'Уикикниги'; }
if (isoLanguage=='bho') {  site = 'Wikibooks'; }
if (isoLanguage=='bi') {  site = 'Wikibooks'; }
if (isoLanguage=='bjn') {  site = 'Wikibooks'; }
if (isoLanguage=='bm') {  site = 'Wikibooks'; }
if (isoLanguage=='bn') {  site = 'উইকিবই'; }
if (isoLanguage=='bo') {  site = 'Wikibooks'; }
if (isoLanguage=='bpy') {  site = 'Wikibooks'; }
if (isoLanguage=='br') {  site = 'Wikibooks'; }
if (isoLanguage=='brh') {  site = 'Wikibooks'; }
if (isoLanguage=='bs') {  site = 'Wikiknjige'; }
if (isoLanguage=='bug') {  site = 'Wikibooks'; }
if (isoLanguage=='bxr') {  site = 'Wikibooks'; }
if (isoLanguage=='ca') {  site = 'Viquillibres'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikibooks'; }
if (isoLanguage=='cdo') {  site = 'Wikibooks'; }
if (isoLanguage=='ce') {  site = 'Wikibooks'; }
if (isoLanguage=='ceb') {  site = 'Wikibooks'; }
if (isoLanguage=='ch') {  site = 'Wikibooks'; }
if (isoLanguage=='chr') {  site = 'Wikibooks'; }
if (isoLanguage=='chy') {  site = 'Wikibooks'; }
if (isoLanguage=='ckb') {  site = 'Wikibooks'; }
if (isoLanguage=='co') {  site = 'Wikibooks'; }
if (isoLanguage=='crh') {  site = 'Wikibooks'; }
if (isoLanguage=='cs') {  site = 'Wikiknihy'; }
if (isoLanguage=='csb') {  site = 'Wikibooks'; }
if (isoLanguage=='cu') {  site = 'Wikibooks'; }
if (isoLanguage=='cv') {  site = 'Викки-кĕнеке'; }
if (isoLanguage=='cy') {  site = 'Wicilyfrau'; }
if (isoLanguage=='da') {  site = 'Wikibooks'; }
if (isoLanguage=='de') {  site = 'Wikibooks'; }
if (isoLanguage=='diq') {  site = 'Wikikıtabi'; }
if (isoLanguage=='dsb') {  site = 'Wikibooks'; }
if (isoLanguage=='dty') {  site = 'Wikibooks'; }
if (isoLanguage=='dv') {  site = 'Wikibooks'; }
if (isoLanguage=='ee') {  site = 'Wikibooks'; }
if (isoLanguage=='el') {  site = 'Βικιβιβλία'; }
if (isoLanguage=='el') {  site = 'Βικιβιβλία'; }
if (isoLanguage=='eml') {  site = 'Wikibooks'; }
if (isoLanguage=='en') {  site = 'Wikibooks'; }
if (isoLanguage=='en-ca') {  site = 'Wikibooks'; }
if (isoLanguage=='en-gb') {  site = 'Wikibooks'; }
if (isoLanguage=='es') {  site = 'Wikilibros'; }
if (isoLanguage=='et') {  site = 'Vikiõpikud'; }
if (isoLanguage=='eu') {  site = 'Wikibooks'; }
if (isoLanguage=='ext') {  site = 'Wikibooks'; }
if (isoLanguage=='fa') {  site = 'ویکیکتاب'; }
if (isoLanguage=='ff') {  site = 'Wikibooks'; }
if (isoLanguage=='fi') {  site = 'Wikikirjasto'; }
if (isoLanguage=='fj') {  site = 'Wikibooks'; }
if (isoLanguage=='fo') {  site = 'Wikibooks'; }
if (isoLanguage=='fr') {  site = 'Wikibooks'; }
if (isoLanguage=='frp') {  site = 'Wikibooks'; }
if (isoLanguage=='frr') {  site = 'Wikibooks'; }
if (isoLanguage=='fur') {  site = 'Wikibooks'; }
if (isoLanguage=='fy') {  site = 'Wikibooks'; }
if (isoLanguage=='ga') {  site = 'Wikibooks'; }
if (isoLanguage=='gag') {  site = 'Wikibooks'; }
if (isoLanguage=='gan') {  site = 'Wikibooks'; }
if (isoLanguage=='gcr') {  site = 'Wikibooks'; }
if (isoLanguage=='gd') {  site = 'Wikibooks'; }
if (isoLanguage=='gl') {  site = 'Galilibros'; }
if (isoLanguage=='glk') {  site = 'Wikibooks'; }
if (isoLanguage=='gn') {  site = 'Wikibooks'; }
if (isoLanguage=='gor') {  site = 'Wikibooks'; }
if (isoLanguage=='gsw') {  site = 'Wikibooks'; }
if (isoLanguage=='gu') {  site = 'Wikibooks'; }
if (isoLanguage=='gv') {  site = 'Wikibooks'; }
if (isoLanguage=='ha') {  site = 'Wikibooks'; }
if (isoLanguage=='hak') {  site = 'Wikibooks'; }
if (isoLanguage=='haw') {  site = 'Wikibooks'; }
if (isoLanguage=='he') {  site = 'ויקיספר'; }
if (isoLanguage=='hi') {  site = 'विकिपुस्तक'; }
if (isoLanguage=='hr') {  site = 'Wikiknjige'; }
if (isoLanguage=='hsb') {  site = 'Wikibooks'; }
if (isoLanguage=='ht') {  site = 'Wikibooks'; }
if (isoLanguage=='hyw') {  site = 'Wikibooks'; }
if (isoLanguage=='id') {  site = 'Wikibooks'; }
if (isoLanguage=='ig') {  site = 'Wikibooks'; }
if (isoLanguage=='ik') {  site = 'Wikibooks'; }
if (isoLanguage=='ilo') {  site = 'Wikibooks'; }
if (isoLanguage=='inh') {  site = 'Wikibooks'; }
if (isoLanguage=='is') {  site = 'Wikibækur'; }
if (isoLanguage=='it') {  site = 'Wikibooks'; }
if (isoLanguage=='iu') {  site = 'Wikibooks'; }
if (isoLanguage=='ja') {  site = 'ウィキブックス'; }
if (isoLanguage=='jam') {  site = 'Wikibooks'; }
if (isoLanguage=='jv') {  site = 'Wikibooks'; }
if (isoLanguage=='ka') {  site = 'ვიკიწიგნები'; }
if (isoLanguage=='kaa') {  site = 'Wikibooks'; }
if (isoLanguage=='kab') {  site = 'Wikibooks'; }
if (isoLanguage=='kbp') {  site = 'Wikibooks'; }
if (isoLanguage=='kg') {  site = 'Wikibooks'; }
if (isoLanguage=='ki') {  site = 'Wikibooks'; }
if (isoLanguage=='kk') {  site = 'Wikibooks'; }
if (isoLanguage=='kl') {  site = 'Wikibooks'; }
if (isoLanguage=='km') {  site = 'Wikibooks'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿಬುಕ್ಸ್'; }
if (isoLanguage=='ko') {  site = '위키책'; }
if (isoLanguage=='koi') {  site = 'Wikibooks'; }
if (isoLanguage=='krc') {  site = 'Wikibooks'; }
if (isoLanguage=='ks') {  site = 'Wikibooks'; }
if (isoLanguage=='ksh') {  site = 'Wikibooks'; }
if (isoLanguage=='ksh') {  site = 'Wikibooks'; }
if (isoLanguage=='ku') {  site = 'Wikibooks'; }
if (isoLanguage=='ku') {  site = 'Wikibooks'; }
if (isoLanguage=='kw') {  site = 'Wikibooks'; }
if (isoLanguage=='ky') {  site = 'Wikibooks'; }
if (isoLanguage=='la') {  site = 'Vicilibri'; }
if (isoLanguage=='lad') {  site = 'Wikibooks'; }
if (isoLanguage=='lb') {  site = 'Wikibooks'; }
if (isoLanguage=='lbe') {  site = 'Wikibooks'; }
if (isoLanguage=='lez') {  site = 'Wikibooks'; }
if (isoLanguage=='lg') {  site = 'Wikibooks'; }
if (isoLanguage=='li') {  site = 'Wikibooks'; }
if (isoLanguage=='lij') {  site = 'Wikibooks'; }
if (isoLanguage=='liv') {  site = 'Wikibooks'; }
if (isoLanguage=='lmo') {  site = 'Wikibooks'; }
if (isoLanguage=='ln') {  site = 'Wikibooks'; }
if (isoLanguage=='lo') {  site = 'Wikibooks'; }
if (isoLanguage=='lt') {  site = 'Vikiknygos'; }
if (isoLanguage=='ltg') {  site = 'Wikibooks'; }
if (isoLanguage=='lv') {  site = 'Wikibooks'; }
if (isoLanguage=='mai') {  site = 'Wikibooks'; }
if (isoLanguage=='map-bms') {  site = 'Wikibooks'; }
if (isoLanguage=='mdf') {  site = 'Wikibooks'; }
if (isoLanguage=='mg') {  site = 'Wikibooks'; }
if (isoLanguage=='mhr') {  site = 'Wikibooks'; }
if (isoLanguage=='mi') {  site = 'Wikibooks'; }
if (isoLanguage=='min') {  site = 'Wikibooks'; }
if (isoLanguage=='mk') {  site = 'Викикниги'; }
if (isoLanguage=='ml') {  site = 'വിക്കിബുക്സ്'; }
if (isoLanguage=='mn') {  site = 'Wikibooks'; }
if (isoLanguage=='mnw') {  site = 'Wikibooks'; }
if (isoLanguage=='mo') {  site = 'Wikibooks'; }
if (isoLanguage=='mr') {  site = 'मराठी विकिबुक्स'; }
if (isoLanguage=='mrj') {  site = 'Wikibooks'; }
if (isoLanguage=='ms') {  site = 'Wikibuku'; }
if (isoLanguage=='mt') {  site = 'Wikitbiet'; }
if (isoLanguage=='mwl') {  site = 'Wikibooks'; }
if (isoLanguage=='my') {  site = 'Wikibooks'; }
if (isoLanguage=='myv') {  site = 'Wikibooks'; }
if (isoLanguage=='mzn') {  site = 'Wikibooks'; }
if (isoLanguage=='na') {  site = 'Wikibooks'; }
if (isoLanguage=='nah') {  site = 'Wikibooks'; }
if (isoLanguage=='nan') {  site = 'Wikibooks'; }
if (isoLanguage=='nap') {  site = 'Wikibooks'; }
if (isoLanguage=='nb') {  site = 'Wikibøker'; }
if (isoLanguage=='nds') {  site = 'Wikibooks'; }
if (isoLanguage=='nds-nl') {  site = 'Wikibooks'; }
if (isoLanguage=='ne') {  site = 'विकिबुक्स'; }
if (isoLanguage=='new') {  site = 'Wikibooks'; }
if (isoLanguage=='ng') {  site = 'Wikibooks'; }
if (isoLanguage=='nl') {  site = 'Wikibooks'; }
if (isoLanguage=='nn') {  site = 'Wikibooks'; }
if (isoLanguage=='no') {  site = 'Wikibøker'; }
if (isoLanguage=='nrm') {  site = 'Wikibooks'; }
if (isoLanguage=='nso') {  site = 'Wikibooks'; }
if (isoLanguage=='ny') {  site = 'Wikibooks'; }
if (isoLanguage=='oc') {  site = 'Wikibooks'; }
if (isoLanguage=='olo') {  site = 'Wikibooks'; }
if (isoLanguage=='om') {  site = 'Wikibooks'; }
if (isoLanguage=='or') {  site = 'ଉଇକିପୋଥି'; }
if (isoLanguage=='os') {  site = 'Wikibooks'; }
if (isoLanguage=='pa') {  site = 'ਵਿਕੀਬੁਕਸ'; }
if (isoLanguage=='pag') {  site = 'Wikibooks'; }
if (isoLanguage=='pap') {  site = 'Wikibooks'; }
if (isoLanguage=='pcd') {  site = 'Wikibooks'; }
if (isoLanguage=='pdc') {  site = 'Wikibooks'; }
if (isoLanguage=='pfl') {  site = 'Wikibooks'; }
if (isoLanguage=='pi') {  site = 'Wikibooks'; }
if (isoLanguage=='pih') {  site = 'Wikibooks'; }
if (isoLanguage=='pl') {  site = 'Wikibooks'; }
if (isoLanguage=='pms') {  site = 'Wikibooks'; }
if (isoLanguage=='pnt') {  site = 'Wikibooks'; }
if (isoLanguage=='ps') {  site = 'Wikibooks'; }
if (isoLanguage=='pt') {  site = 'Wikilivros'; }
if (isoLanguage=='pt-br') {  site = 'Wikilivros'; }
if (isoLanguage=='qu') {  site = 'Wikibooks'; }
if (isoLanguage=='rm') {  site = 'Wikibooks'; }
if (isoLanguage=='rmy') {  site = 'Wikibooks'; }
if (isoLanguage=='ro') {  site = 'Wikimanuale'; }
if (isoLanguage=='ru') {  site = 'Викиучебник'; }
if (isoLanguage=='rue') {  site = 'Wikibooks'; }
if (isoLanguage=='rup') {  site = 'Wikibooks'; }
if (isoLanguage=='rw') {  site = 'Wikibooks'; }
if (isoLanguage=='sa') {  site = 'Wikibooks'; }
if (isoLanguage=='sah') {  site = 'Wikibooks'; }
if (isoLanguage=='sat') {  site = 'Wikibooks'; }
if (isoLanguage=='sc') {  site = 'Wikibooks'; }
if (isoLanguage=='scn') {  site = 'Wikibooks'; }
if (isoLanguage=='sco') {  site = 'Wikibeuks'; }
if (isoLanguage=='sd') {  site = 'Wikibooks'; }
if (isoLanguage=='se') {  site = 'Wikibooks'; }
if (isoLanguage=='sg') {  site = 'Wikibooks'; }
if (isoLanguage=='sgs') {  site = 'Wikibooks'; }
if (isoLanguage=='sh') {  site = 'Wikibooks'; }
if (isoLanguage=='shn') {  site = 'Wikibooks'; }
if (isoLanguage=='si') {  site = 'Wikibooks'; }
if (isoLanguage=='sk') {  site = 'Wikiknihy'; }
if (isoLanguage=='sl') {  site = 'Wikiknjige'; }
if (isoLanguage=='sli') {  site = 'Wikibooks'; }
if (isoLanguage=='sm') {  site = 'Wikibooks'; }
if (isoLanguage=='sn') {  site = 'Wikibooks'; }
if (isoLanguage=='so') {  site = 'Wikibooks'; }
if (isoLanguage=='sq') {  site = 'Wikibooks'; }
if (isoLanguage=='sr') {  site = 'Викикњиге'; }
if (isoLanguage=='srn') {  site = 'Wikibooks'; }
if (isoLanguage=='ss') {  site = 'Wikibooks'; }
if (isoLanguage=='stq') {  site = 'Wikibooks'; }
if (isoLanguage=='su') {  site = 'Wikibooks'; }
if (isoLanguage=='sv') {  site = 'Wikibooks'; }
if (isoLanguage=='sw') {  site = 'Wikibooks'; }
if (isoLanguage=='szl') {  site = 'Wikibooks'; }
if (isoLanguage=='szy') {  site = 'Wikibooks'; }
if (isoLanguage=='ta') {  site = 'விக்கிநூல்கள்'; }
if (isoLanguage=='tcy') {  site = 'Wikibooks'; }
if (isoLanguage=='te') {  site = 'వికీబుక్స్'; }
if (isoLanguage=='tet') {  site = 'Wikibooks'; }
if (isoLanguage=='tg') {  site = 'Викикитоб'; }
if (isoLanguage=='th') {  site = 'วิกิตำรา'; }
if (isoLanguage=='ti') {  site = 'Wikibooks'; }
if (isoLanguage=='tk') {  site = 'Wikibooks'; }
if (isoLanguage=='tl') {  site = 'Wikibooks'; }
if (isoLanguage=='tn') {  site = 'Wikibooks'; }
if (isoLanguage=='tpi') {  site = 'Wikibooks'; }
if (isoLanguage=='tr') {  site = 'Vikikitap'; }
if (isoLanguage=='ts') {  site = 'Wikibooks'; }
if (isoLanguage=='tt') {  site = 'Викикитап'; }
if (isoLanguage=='tw') {  site = 'Wikibooks'; }
if (isoLanguage=='ty') {  site = 'Wikibooks'; }
if (isoLanguage=='tyv') {  site = 'Wikibooks'; }
if (isoLanguage=='udm') {  site = 'Wikibooks'; }
if (isoLanguage=='ug') {  site = 'Wikibooks'; }
if (isoLanguage=='uk') {  site = 'Вікіпідручник'; }
if (isoLanguage=='ur') {  site = 'وکی کتب'; }
if (isoLanguage=='uz') {  site = 'Vikikitob'; }
if (isoLanguage=='ve') {  site = 'Wikibooks'; }
if (isoLanguage=='vec') {  site = 'Wikibooks'; }
if (isoLanguage=='vep') {  site = 'Wikibooks'; }
if (isoLanguage=='vi') {  site = 'Wikibooks'; }
if (isoLanguage=='vls') {  site = 'Wikibooks'; }
if (isoLanguage=='vls') {  site = 'Wikibooks'; }
if (isoLanguage=='vro') {  site = 'Wikibooks'; }
if (isoLanguage=='wa') {  site = 'Wikibooks'; }
if (isoLanguage=='war') {  site = 'Wikibooks'; }
if (isoLanguage=='wo') {  site = 'Wikibooks'; }
if (isoLanguage=='wuu') {  site = '维基教科书'; }
if (isoLanguage=='xal') {  site = 'Wikibooks'; }
if (isoLanguage=='xh') {  site = 'Wikibooks'; }
if (isoLanguage=='xmf') {  site = 'Wikibooks'; }
if (isoLanguage=='yi') {  site = 'וויקיביכער'; }
if (isoLanguage=='yo') {  site = 'Wikibooks'; }
if (isoLanguage=='yue') {  site = '維基書本'; }
if (isoLanguage=='za') {  site = 'Veizgiek Gobwnj'; }
if (isoLanguage=='zea') {  site = 'Wikibooks'; }
if (isoLanguage=='zh') {  site = '維基教科書'; }
if (isoLanguage=='zh-cn') {  site = '维基教科书'; }
if (isoLanguage=='zh-hans') {  site = '维基教科书'; }
if (isoLanguage=='zh-hant') {  site = '維基教科書'; }
if (isoLanguage=='zh-sg') {  site = '维基教科书'; }
if (isoLanguage=='zh-tw') {  site = '維基教科書'; }
if (isoLanguage=='zh-tw') {  site = '維基教科書'; }
if (isoLanguage=='zu') {  site = 'Wikibooks'; }
				}
				if (article.includes(".wikinews.")) {
if (isoLanguage=='aa') {  site = 'Wikinews'; }
if (isoLanguage=='ab') {  site = 'Wikinews'; }
if (isoLanguage=='ace') {  site = 'Wikinews'; }
if (isoLanguage=='ady') {  site = 'Wikinews'; }
if (isoLanguage=='af') {  site = 'Wikinews'; }
if (isoLanguage=='ak') {  site = 'Wikinews'; }
if (isoLanguage=='am') {  site = 'Wikinews'; }
if (isoLanguage=='an') {  site = 'Wikinews'; }
if (isoLanguage=='ar') {  site = 'ويكي الأخبار'; }
if (isoLanguage=='arc') {  site = 'Wikinews'; }
if (isoLanguage=='as') {  site = 'ৱিকি নিউজ'; }
if (isoLanguage=='ast') {  site = 'Wikinoticies'; }
if (isoLanguage=='atj') {  site = 'Wikinews'; }
if (isoLanguage=='av') {  site = 'Wikinews'; }
if (isoLanguage=='awa') {  site = 'Wikinews'; }
if (isoLanguage=='ay') {  site = 'Wikinews'; }
if (isoLanguage=='az') {  site = 'VikiXəbər'; }
if (isoLanguage=='ba') {  site = 'Wikinews'; }
if (isoLanguage=='ban') {  site = 'Wikinews'; }
if (isoLanguage=='bar') {  site = 'Wikinews'; }
if (isoLanguage=='bcl') {  site = 'Wikinews'; }
if (isoLanguage=='be') {  site = 'Вікінавіны'; }
if (isoLanguage=='bg') {  site = 'Уикиновини'; }
if (isoLanguage=='bho') {  site = 'Wikinews'; }
if (isoLanguage=='bi') {  site = 'Wikinews'; }
if (isoLanguage=='bjn') {  site = 'Wikinews'; }
if (isoLanguage=='bm') {  site = 'Wikinews'; }
if (isoLanguage=='bn') {  site = 'উইকিসংবাদ'; }
if (isoLanguage=='bo') {  site = 'Wikinews'; }
if (isoLanguage=='bpy') {  site = 'Wikinews'; }
if (isoLanguage=='br') {  site = 'Wikinews'; }
if (isoLanguage=='brh') {  site = 'Wikinews'; }
if (isoLanguage=='bs') {  site = 'Wikinews'; }
if (isoLanguage=='bug') {  site = 'Wikinews'; }
if (isoLanguage=='bxr') {  site = 'Wikinews'; }
if (isoLanguage=='ca') {  site = 'Viquinotícies'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikinews'; }
if (isoLanguage=='cdo') {  site = 'Wiki Sĭng-ùng'; }
if (isoLanguage=='ce') {  site = 'Wikinews'; }
if (isoLanguage=='ceb') {  site = 'Wikinews'; }
if (isoLanguage=='ch') {  site = 'Wikinews'; }
if (isoLanguage=='chr') {  site = 'Wikinews'; }
if (isoLanguage=='chy') {  site = 'Wikinews'; }
if (isoLanguage=='ckb') {  site = 'Wikinews'; }
if (isoLanguage=='co') {  site = 'Wikinews'; }
if (isoLanguage=='crh') {  site = 'Wikinews'; }
if (isoLanguage=='cs') {  site = 'Wikizprávy'; }
if (isoLanguage=='csb') {  site = 'Wikinews'; }
if (isoLanguage=='cu') {  site = 'Wikinews'; }
if (isoLanguage=='cv') {  site = 'Викихыпар'; }
if (isoLanguage=='cy') {  site = 'Wikinews'; }
if (isoLanguage=='da') {  site = 'Wikinews'; }
if (isoLanguage=='de') {  site = 'Wikinews'; }
if (isoLanguage=='diq') {  site = 'Wikinews'; }
if (isoLanguage=='dsb') {  site = 'Wikinews'; }
if (isoLanguage=='dty') {  site = 'Wikinews'; }
if (isoLanguage=='dv') {  site = 'Wikinews'; }
if (isoLanguage=='ee') {  site = 'Wikinews'; }
if (isoLanguage=='el') {  site = 'Βικινέα'; }
if (isoLanguage=='el') {  site = 'Βικινέα'; }
if (isoLanguage=='eml') {  site = 'Wikinews'; }
if (isoLanguage=='en') {  site = 'Wikinews'; }
if (isoLanguage=='en-ca') {  site = 'Wikinews'; }
if (isoLanguage=='en-gb') {  site = 'Wikinews'; }
if (isoLanguage=='es') {  site = 'Wikinoticias'; }
if (isoLanguage=='et') {  site = 'Wikinews'; }
if (isoLanguage=='eu') {  site = 'Wikinews'; }
if (isoLanguage=='ext') {  site = 'Wikinews'; }
if (isoLanguage=='fa') {  site = 'ویکیخبر'; }
if (isoLanguage=='ff') {  site = 'Wikinews'; }
if (isoLanguage=='fi') {  site = 'Wikiuutiset'; }
if (isoLanguage=='fj') {  site = 'Wikinews'; }
if (isoLanguage=='fo') {  site = 'Wikinews'; }
if (isoLanguage=='fr') {  site = 'Wikinews'; }
if (isoLanguage=='frp') {  site = 'Wikinews'; }
if (isoLanguage=='frr') {  site = 'Wikinews'; }
if (isoLanguage=='fur') {  site = 'Wikinews'; }
if (isoLanguage=='fy') {  site = 'Wikinews'; }
if (isoLanguage=='ga') {  site = 'Wikinews'; }
if (isoLanguage=='gag') {  site = 'Wikinews'; }
if (isoLanguage=='gan') {  site = 'Wikinews'; }
if (isoLanguage=='gcr') {  site = 'Wikinews'; }
if (isoLanguage=='gd') {  site = 'Wikinews'; }
if (isoLanguage=='gl') {  site = 'Wikinews'; }
if (isoLanguage=='glk') {  site = 'Wikinews'; }
if (isoLanguage=='gn') {  site = 'Wikinews'; }
if (isoLanguage=='gor') {  site = 'Wikinews'; }
if (isoLanguage=='gsw') {  site = 'Wikinews'; }
if (isoLanguage=='gu') {  site = 'Wikinews'; }
if (isoLanguage=='gv') {  site = 'Wikinews'; }
if (isoLanguage=='ha') {  site = 'Wikinews'; }
if (isoLanguage=='hak') {  site = 'Wikinews'; }
if (isoLanguage=='haw') {  site = 'Wikinews'; }
if (isoLanguage=='he') {  site = 'ויקיחדשות'; }
if (isoLanguage=='hi') {  site = 'विकिसमाचार'; }
if (isoLanguage=='hr') {  site = 'Wikinews'; }
if (isoLanguage=='hsb') {  site = 'Wikinews'; }
if (isoLanguage=='ht') {  site = 'Wikinews'; }
if (isoLanguage=='hyw') {  site = 'Wikinews'; }
if (isoLanguage=='id') {  site = 'Wikinews'; }
if (isoLanguage=='ig') {  site = 'Wikinews'; }
if (isoLanguage=='ik') {  site = 'Wikinews'; }
if (isoLanguage=='ilo') {  site = 'Wikinews'; }
if (isoLanguage=='inh') {  site = 'Wikinews'; }
if (isoLanguage=='is') {  site = 'Wikinews'; }
if (isoLanguage=='it') {  site = 'Wikinews'; }
if (isoLanguage=='iu') {  site = 'Wikinews'; }
if (isoLanguage=='ja') {  site = 'ウィキニュース'; }
if (isoLanguage=='jam') {  site = 'Wikinews'; }
if (isoLanguage=='jv') {  site = 'Wikinews'; }
if (isoLanguage=='ka') {  site = 'ვიკისიახლეები'; }
if (isoLanguage=='kaa') {  site = 'Wikinews'; }
if (isoLanguage=='kab') {  site = 'Wikinews'; }
if (isoLanguage=='kbp') {  site = 'Wikinews'; }
if (isoLanguage=='kg') {  site = 'Wikinews'; }
if (isoLanguage=='ki') {  site = 'Wikinews'; }
if (isoLanguage=='kk') {  site = 'Wikinews'; }
if (isoLanguage=='kl') {  site = 'Wikinews'; }
if (isoLanguage=='km') {  site = 'Wikinews'; }
if (isoLanguage=='kn') {  site = 'Wikinews'; }
if (isoLanguage=='ko') {  site = '위키뉴스'; }
if (isoLanguage=='koi') {  site = 'Wikinews'; }
if (isoLanguage=='krc') {  site = 'Wikinews'; }
if (isoLanguage=='ks') {  site = 'Wikinews'; }
if (isoLanguage=='ksh') {  site = 'Wikinews'; }
if (isoLanguage=='ksh') {  site = 'Wikinews'; }
if (isoLanguage=='ku') {  site = 'Wîkînûçe'; }
if (isoLanguage=='ku') {  site = 'Wîkînûçe'; }
if (isoLanguage=='kw') {  site = 'Wikinews'; }
if (isoLanguage=='ky') {  site = 'Wikinews'; }
if (isoLanguage=='la') {  site = 'Vicinuntii'; }
if (isoLanguage=='lad') {  site = 'Wikinews'; }
if (isoLanguage=='lb') {  site = 'Wikinews'; }
if (isoLanguage=='lbe') {  site = 'Wikinews'; }
if (isoLanguage=='lez') {  site = 'Wikinews'; }
if (isoLanguage=='lg') {  site = 'Wikinews'; }
if (isoLanguage=='li') {  site = 'Wikinews'; }
if (isoLanguage=='lij') {  site = 'Wikinews'; }
if (isoLanguage=='liv') {  site = 'Wikinews'; }
if (isoLanguage=='lmo') {  site = 'Wikinews'; }
if (isoLanguage=='ln') {  site = 'Wikinews'; }
if (isoLanguage=='lo') {  site = 'Wikinews'; }
if (isoLanguage=='lt') {  site = 'Vikinaujienos'; }
if (isoLanguage=='ltg') {  site = 'Wikinews'; }
if (isoLanguage=='lv') {  site = 'Wikinews'; }
if (isoLanguage=='mai') {  site = 'Wikinews'; }
if (isoLanguage=='map-bms') {  site = 'Wikinews'; }
if (isoLanguage=='mdf') {  site = 'Wikinews'; }
if (isoLanguage=='mg') {  site = 'Wikinews'; }
if (isoLanguage=='mhr') {  site = 'Wikinews'; }
if (isoLanguage=='mi') {  site = 'Wikinews'; }
if (isoLanguage=='min') {  site = 'Wikinews'; }
if (isoLanguage=='mk') {  site = 'Викивести'; }
if (isoLanguage=='ml') {  site = 'വിക്കിവാർത്തകൾ'; }
if (isoLanguage=='mn') {  site = 'Wikinews'; }
if (isoLanguage=='mnw') {  site = 'Wikinews'; }
if (isoLanguage=='mo') {  site = 'Wikinews'; }
if (isoLanguage=='mr') {  site = 'Wikinews'; }
if (isoLanguage=='mrj') {  site = 'Wikinews'; }
if (isoLanguage=='ms') {  site = 'Wikinews'; }
if (isoLanguage=='mt') {  site = 'Wikibarijiet'; }
if (isoLanguage=='mwl') {  site = 'Wikinews'; }
if (isoLanguage=='my') {  site = 'Wikinews'; }
if (isoLanguage=='myv') {  site = 'Wikinews'; }
if (isoLanguage=='mzn') {  site = 'Wikinews'; }
if (isoLanguage=='na') {  site = 'Wikinews'; }
if (isoLanguage=='nah') {  site = 'Wikinews'; }
if (isoLanguage=='nan') {  site = 'Wikinews'; }
if (isoLanguage=='nap') {  site = 'Wikinews'; }
if (isoLanguage=='nb') {  site = 'Wikinytt'; }
if (isoLanguage=='nds') {  site = 'Wikinews'; }
if (isoLanguage=='nds-nl') {  site = 'Wikinews'; }
if (isoLanguage=='ne') {  site = 'विकिसमाचार'; }
if (isoLanguage=='new') {  site = 'Wikinews'; }
if (isoLanguage=='ng') {  site = 'Wikinews'; }
if (isoLanguage=='nl') {  site = 'Wikinieuws'; }
if (isoLanguage=='nn') {  site = 'Wikinews'; }
if (isoLanguage=='no') {  site = 'Wikinytt'; }
if (isoLanguage=='nrm') {  site = 'Wikinews'; }
if (isoLanguage=='nso') {  site = 'Wikinews'; }
if (isoLanguage=='ny') {  site = 'Wikinews'; }
if (isoLanguage=='oc') {  site = 'Wikinews'; }
if (isoLanguage=='olo') {  site = 'Wikinews'; }
if (isoLanguage=='om') {  site = 'Wikinews'; }
if (isoLanguage=='or') {  site = 'ଉଇକିଖବର'; }
if (isoLanguage=='os') {  site = 'Wikinews'; }
if (isoLanguage=='pa') {  site = 'Wikinews'; }
if (isoLanguage=='pag') {  site = 'Wikinews'; }
if (isoLanguage=='pap') {  site = 'Wikinews'; }
if (isoLanguage=='pcd') {  site = 'Wikinews'; }
if (isoLanguage=='pdc') {  site = 'Wikinews'; }
if (isoLanguage=='pfl') {  site = 'Wikinews'; }
if (isoLanguage=='pi') {  site = 'Wikinews'; }
if (isoLanguage=='pih') {  site = 'Wikinews'; }
if (isoLanguage=='pl') {  site = 'Wikinews'; }
if (isoLanguage=='pms') {  site = 'Wikinews'; }
if (isoLanguage=='pnt') {  site = 'Wikinews'; }
if (isoLanguage=='ps') {  site = 'ويکيخبرونه'; }
if (isoLanguage=='pt') {  site = 'Wikinotícias'; }
if (isoLanguage=='pt-br') {  site = 'Wikinotícias'; }
if (isoLanguage=='qu') {  site = 'Wikinews'; }
if (isoLanguage=='rm') {  site = 'Wikinews'; }
if (isoLanguage=='rmy') {  site = 'Wikinews'; }
if (isoLanguage=='ro') {  site = 'Wikiștiri'; }
if (isoLanguage=='ru') {  site = 'Викиновости'; }
if (isoLanguage=='rue') {  site = 'Wikinews'; }
if (isoLanguage=='rup') {  site = 'Wikinews'; }
if (isoLanguage=='rw') {  site = 'Wikinews'; }
if (isoLanguage=='sa') {  site = 'Wikinews'; }
if (isoLanguage=='sah') {  site = 'Биики Сонун'; }
if (isoLanguage=='sat') {  site = 'Wikinews'; }
if (isoLanguage=='sc') {  site = 'Wikinews'; }
if (isoLanguage=='scn') {  site = 'Wikinutizzi'; }
if (isoLanguage=='sco') {  site = 'Wikinews'; }
if (isoLanguage=='sd') {  site = 'Wikinews'; }
if (isoLanguage=='se') {  site = 'Wikinews'; }
if (isoLanguage=='sg') {  site = 'Wikinews'; }
if (isoLanguage=='sgs') {  site = 'Vikinaujīnas'; }
if (isoLanguage=='sh') {  site = 'Wikinews'; }
if (isoLanguage=='shn') {  site = 'Wikinews'; }
if (isoLanguage=='si') {  site = 'Wikinews'; }
if (isoLanguage=='sk') {  site = 'Wikisprávy'; }
if (isoLanguage=='sl') {  site = 'Wikinovice'; }
if (isoLanguage=='sli') {  site = 'Wikinews'; }
if (isoLanguage=='sm') {  site = 'Wikinews'; }
if (isoLanguage=='sn') {  site = 'Wikinews'; }
if (isoLanguage=='so') {  site = 'Wikinews'; }
if (isoLanguage=='sq') {  site = 'Wikinews'; }
if (isoLanguage=='sr') {  site = 'Викивести'; }
if (isoLanguage=='srn') {  site = 'Wikinews'; }
if (isoLanguage=='ss') {  site = 'Wikinews'; }
if (isoLanguage=='stq') {  site = 'Wikinews'; }
if (isoLanguage=='su') {  site = 'Wikinews'; }
if (isoLanguage=='sv') {  site = 'Wikinews'; }
if (isoLanguage=='sw') {  site = 'Wikinews'; }
if (isoLanguage=='szl') {  site = 'Wikinews'; }
if (isoLanguage=='szy') {  site = 'Wikinews'; }
if (isoLanguage=='ta') {  site = 'விக்கி செய்திகள்'; }
if (isoLanguage=='tcy') {  site = 'Wikinews'; }
if (isoLanguage=='te') {  site = 'వికీవార్తలు'; }
if (isoLanguage=='tet') {  site = 'Wikinews'; }
if (isoLanguage=='tg') {  site = 'Викиахбор'; }
if (isoLanguage=='th') {  site = 'วิกิข่าว'; }
if (isoLanguage=='ti') {  site = 'Wikinews'; }
if (isoLanguage=='tk') {  site = 'Wikinews'; }
if (isoLanguage=='tl') {  site = 'Wikinews'; }
if (isoLanguage=='tn') {  site = 'Wikinews'; }
if (isoLanguage=='tpi') {  site = 'Wikinews'; }
if (isoLanguage=='tr') {  site = 'Vikihaber'; }
if (isoLanguage=='ts') {  site = 'Wikinews'; }
if (isoLanguage=='tt') {  site = 'Викихәбәрләр'; }
if (isoLanguage=='tw') {  site = 'Wikinews'; }
if (isoLanguage=='ty') {  site = 'Wikinews'; }
if (isoLanguage=='tyv') {  site = 'Wikinews'; }
if (isoLanguage=='udm') {  site = 'Wikinews'; }
if (isoLanguage=='ug') {  site = 'Wikinews'; }
if (isoLanguage=='uk') {  site = 'Вікіновини'; }
if (isoLanguage=='ur') {  site = 'ویکی اخبار'; }
if (isoLanguage=='uz') {  site = 'Vikiyangiliklar'; }
if (isoLanguage=='ve') {  site = 'Wikinews'; }
if (isoLanguage=='vec') {  site = 'Wikinews'; }
if (isoLanguage=='vep') {  site = 'Wikinews'; }
if (isoLanguage=='vi') {  site = 'Wikinews'; }
if (isoLanguage=='vls') {  site = 'Wikinews'; }
if (isoLanguage=='vls') {  site = 'Wikinews'; }
if (isoLanguage=='vro') {  site = 'Wikinews'; }
if (isoLanguage=='wa') {  site = 'Wikinews'; }
if (isoLanguage=='war') {  site = 'Wikinews'; }
if (isoLanguage=='wo') {  site = 'Wikinews'; }
if (isoLanguage=='wuu') {  site = '维基新闻'; }
if (isoLanguage=='xal') {  site = 'Wikinews'; }
if (isoLanguage=='xh') {  site = 'Wikinews'; }
if (isoLanguage=='xmf') {  site = 'Wikinews'; }
if (isoLanguage=='yi') {  site = 'וויקינייעס'; }
if (isoLanguage=='yo') {  site = 'Wikinews'; }
if (isoLanguage=='yue') {  site = '維基新聞'; }
if (isoLanguage=='za') {  site = 'Veizgiek Sinhvwnz'; }
if (isoLanguage=='zea') {  site = 'Wikinews'; }
if (isoLanguage=='zh') {  site = '维基新闻'; }
if (isoLanguage=='zh-cn') {  site = '维基新闻'; }
if (isoLanguage=='zh-hans') {  site = '维基新闻'; }
if (isoLanguage=='zh-hant') {  site = '维基新闻'; }
if (isoLanguage=='zh-sg') {  site = '维基新闻'; }
if (isoLanguage=='zh-tw') {  site = '維基新聞'; }
if (isoLanguage=='zh-tw') {  site = '維基新聞'; }
if (isoLanguage=='zu') {  site = 'Wikinews'; }
				}
				if (article.includes(".wikiquote.")) {
if (isoLanguage=='aa') {  site = 'Wikiquote'; }
if (isoLanguage=='ab') {  site = 'Wikiquote'; }
if (isoLanguage=='ace') {  site = 'Wikiquote'; }
if (isoLanguage=='ady') {  site = 'Wikiquote'; }
if (isoLanguage=='af') {  site = 'Wikiquote'; }
if (isoLanguage=='ak') {  site = 'Wikiquote'; }
if (isoLanguage=='am') {  site = 'Wikiquote'; }
if (isoLanguage=='an') {  site = 'Wikiquote'; }
if (isoLanguage=='ar') {  site = 'ويكي الاقتباس'; }
if (isoLanguage=='arc') {  site = 'Wikiquote'; }
if (isoLanguage=='as') {  site = 'ৱিকিকোৱ\'ট'; }
if (isoLanguage=='ast') {  site = 'Wikicites'; }
if (isoLanguage=='atj') {  site = 'Wikiquote'; }
if (isoLanguage=='av') {  site = 'Wikiquote'; }
if (isoLanguage=='awa') {  site = 'Wikiquote'; }
if (isoLanguage=='ay') {  site = 'Wikiquote'; }
if (isoLanguage=='az') {  site = 'VikiSitat'; }
if (isoLanguage=='ba') {  site = 'Викиөҙөмтә'; }
if (isoLanguage=='ban') {  site = 'Wikiquote'; }
if (isoLanguage=='bar') {  site = 'Wikiquote'; }
if (isoLanguage=='bcl') {  site = 'Wikiquote'; }
if (isoLanguage=='be') {  site = 'Вікіцытатнік'; }
if (isoLanguage=='bg') {  site = 'Уикицитат'; }
if (isoLanguage=='bho') {  site = 'Wikiquote'; }
if (isoLanguage=='bi') {  site = 'Wikiquote'; }
if (isoLanguage=='bjn') {  site = 'Wikiquote'; }
if (isoLanguage=='bm') {  site = 'Wikiquote'; }
if (isoLanguage=='bn') {  site = 'উইকিউক্তি'; }
if (isoLanguage=='bo') {  site = 'Wikiquote'; }
if (isoLanguage=='bpy') {  site = 'উইকিউক্তি'; }
if (isoLanguage=='br') {  site = 'Wikiarroud'; }
if (isoLanguage=='brh') {  site = 'Wikiquote'; }
if (isoLanguage=='bs') {  site = 'Wikicitat'; }
if (isoLanguage=='bug') {  site = 'Wikiquote'; }
if (isoLanguage=='bxr') {  site = 'Wikiquote'; }
if (isoLanguage=='ca') {  site = 'Viquidites'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikiquote'; }
if (isoLanguage=='cdo') {  site = 'Wiki Ngṳ̄-luŏh'; }
if (isoLanguage=='ce') {  site = 'Wikiquote'; }
if (isoLanguage=='ceb') {  site = 'Wikiquote'; }
if (isoLanguage=='ch') {  site = 'Wikiquote'; }
if (isoLanguage=='chr') {  site = 'Wikiquote'; }
if (isoLanguage=='chy') {  site = 'Wikiquote'; }
if (isoLanguage=='ckb') {  site = 'ویکیوتە'; }
if (isoLanguage=='co') {  site = 'Wikiquote'; }
if (isoLanguage=='crh') {  site = 'Wikiquote'; }
if (isoLanguage=='cs') {  site = 'Wikicitáty'; }
if (isoLanguage=='csb') {  site = 'Wikiquote'; }
if (isoLanguage=='cu') {  site = 'Wikiquote'; }
if (isoLanguage=='cv') {  site = 'Викикаларăш'; }
if (isoLanguage=='cy') {  site = 'Wikiquote'; }
if (isoLanguage=='da') {  site = 'Wikiquote'; }
if (isoLanguage=='de') {  site = 'Wikiquote'; }
if (isoLanguage=='diq') {  site = 'Wikivate'; }
if (isoLanguage=='dsb') {  site = 'Wikiquote'; }
if (isoLanguage=='dty') {  site = 'Wikiquote'; }
if (isoLanguage=='dv') {  site = 'Wikiquote'; }
if (isoLanguage=='ee') {  site = 'Wikiquote'; }
if (isoLanguage=='el') {  site = 'Βικιφθέγματα'; }
if (isoLanguage=='el') {  site = 'Βικιφθέγματα'; }
if (isoLanguage=='eml') {  site = 'Wikiquote'; }
if (isoLanguage=='en') {  site = 'Wikiquote'; }
if (isoLanguage=='en-ca') {  site = 'Wikiquote'; }
if (isoLanguage=='en-gb') {  site = 'Wikiquote'; }
if (isoLanguage=='es') {  site = 'Wikiquote'; }
if (isoLanguage=='et') {  site = 'Vikitsitaadid'; }
if (isoLanguage=='eu') {  site = 'Wikiesanak'; }
if (isoLanguage=='ext') {  site = 'Wikiquote'; }
if (isoLanguage=='fa') {  site = 'ویکیگفتاورد'; }
if (isoLanguage=='ff') {  site = 'Wikiquote'; }
if (isoLanguage=='fi') {  site = 'Wikisitaatit'; }
if (isoLanguage=='fj') {  site = 'Wikiquote'; }
if (isoLanguage=='fo') {  site = 'Wikiquote'; }
if (isoLanguage=='fr') {  site = 'Wikiquote'; }
if (isoLanguage=='frp') {  site = 'Wikiquote'; }
if (isoLanguage=='frr') {  site = 'Wikiquote'; }
if (isoLanguage=='fur') {  site = 'Wikiquote'; }
if (isoLanguage=='fy') {  site = 'Wikiquote'; }
if (isoLanguage=='ga') {  site = 'Wikiquote'; }
if (isoLanguage=='gag') {  site = 'Wikiquote'; }
if (isoLanguage=='gan') {  site = 'Wikiquote'; }
if (isoLanguage=='gcr') {  site = 'Wikiquote'; }
if (isoLanguage=='gd') {  site = 'Wikiquote'; }
if (isoLanguage=='gl') {  site = 'Wikiquote'; }
if (isoLanguage=='glk') {  site = 'Wikiquote'; }
if (isoLanguage=='gn') {  site = 'Wikiquote'; }
if (isoLanguage=='gor') {  site = 'Wikiquote'; }
if (isoLanguage=='gsw') {  site = 'Wikiquote'; }
if (isoLanguage=='gu') {  site = 'Wikiquote'; }
if (isoLanguage=='gv') {  site = 'Wikiquote'; }
if (isoLanguage=='ha') {  site = 'Wikiquote'; }
if (isoLanguage=='hak') {  site = 'Wikiquote'; }
if (isoLanguage=='haw') {  site = 'Wikiquote'; }
if (isoLanguage=='he') {  site = 'ויקיציטוט'; }
if (isoLanguage=='hi') {  site = 'विकिसूक्ति'; }
if (isoLanguage=='hr') {  site = 'Wikicitat'; }
if (isoLanguage=='hsb') {  site = 'Wikiquote'; }
if (isoLanguage=='ht') {  site = 'Wikiquote'; }
if (isoLanguage=='hyw') {  site = 'Wikiquote'; }
if (isoLanguage=='id') {  site = 'Wikiquote'; }
if (isoLanguage=='ig') {  site = 'Wikiquote'; }
if (isoLanguage=='ik') {  site = 'Wikiquote'; }
if (isoLanguage=='ilo') {  site = 'Wikiquote'; }
if (isoLanguage=='inh') {  site = 'Wikiquote'; }
if (isoLanguage=='is') {  site = 'Wikivitnun'; }
if (isoLanguage=='it') {  site = 'Wikiquote'; }
if (isoLanguage=='iu') {  site = 'Wikiquote'; }
if (isoLanguage=='ja') {  site = 'ウィキクォート'; }
if (isoLanguage=='jam') {  site = 'Wikiquote'; }
if (isoLanguage=='jv') {  site = 'Wikiquote'; }
if (isoLanguage=='ka') {  site = 'ვიკიციტატა'; }
if (isoLanguage=='kaa') {  site = 'Wikiquote'; }
if (isoLanguage=='kab') {  site = 'Wikiquote'; }
if (isoLanguage=='kbp') {  site = 'Wikiquote'; }
if (isoLanguage=='kg') {  site = 'Wikiquote'; }
if (isoLanguage=='ki') {  site = 'Wikiquote'; }
if (isoLanguage=='kk') {  site = 'Wikiquote'; }
if (isoLanguage=='kl') {  site = 'Wikiquote'; }
if (isoLanguage=='km') {  site = 'ខ្មែរ'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿಕೋಟ್'; }
if (isoLanguage=='ko') {  site = '위키인용집'; }
if (isoLanguage=='koi') {  site = 'Wikiquote'; }
if (isoLanguage=='krc') {  site = 'Wikiquote'; }
if (isoLanguage=='ks') {  site = 'Wikiquote'; }
if (isoLanguage=='ksh') {  site = 'Wikiquote'; }
if (isoLanguage=='ksh') {  site = 'Wikiquote'; }
if (isoLanguage=='ku') {  site = 'Wîkîgotin'; }
if (isoLanguage=='ku') {  site = 'Wîkîgotin'; }
if (isoLanguage=='kw') {  site = 'Wikiquote'; }
if (isoLanguage=='ky') {  site = 'Wikiquote'; }
if (isoLanguage=='la') {  site = 'Vicicitatio'; }
if (isoLanguage=='lad') {  site = 'Wikiquote'; }
if (isoLanguage=='lb') {  site = 'Wikiquote'; }
if (isoLanguage=='lbe') {  site = 'Wikiquote'; }
if (isoLanguage=='lez') {  site = 'Wikiquote'; }
if (isoLanguage=='lg') {  site = 'Wikiquote'; }
if (isoLanguage=='li') {  site = 'Wikiquote'; }
if (isoLanguage=='lij') {  site = 'Wikiquote'; }
if (isoLanguage=='liv') {  site = 'Wikiquote'; }
if (isoLanguage=='lmo') {  site = 'Wikiquote'; }
if (isoLanguage=='ln') {  site = 'Wikiquote'; }
if (isoLanguage=='lo') {  site = 'Wikiquote'; }
if (isoLanguage=='lt') {  site = 'Vikicitatos'; }
if (isoLanguage=='ltg') {  site = 'Wikiquote'; }
if (isoLanguage=='lv') {  site = 'Wikiquote'; }
if (isoLanguage=='mai') {  site = 'Wikiquote'; }
if (isoLanguage=='map-bms') {  site = 'Wikiquote'; }
if (isoLanguage=='mdf') {  site = 'Wikiquote'; }
if (isoLanguage=='mg') {  site = 'Wikiquote'; }
if (isoLanguage=='mhr') {  site = 'Wikiquote'; }
if (isoLanguage=='mi') {  site = 'Wikiquote'; }
if (isoLanguage=='min') {  site = 'Wikiquote'; }
if (isoLanguage=='mk') {  site = 'Викицитат'; }
if (isoLanguage=='ml') {  site = 'വിക്കിക്വോട്ട്'; }
if (isoLanguage=='mn') {  site = 'Wikiquote'; }
if (isoLanguage=='mnw') {  site = 'Wikiquote'; }
if (isoLanguage=='mo') {  site = 'Wikiquote'; }
if (isoLanguage=='mr') {  site = 'Wikiquote'; }
if (isoLanguage=='mrj') {  site = 'Wikiquote'; }
if (isoLanguage=='ms') {  site = 'Wikiquote'; }
if (isoLanguage=='mt') {  site = 'Wikikwota'; }
if (isoLanguage=='mwl') {  site = 'Wikiquote'; }
if (isoLanguage=='my') {  site = 'Wikiquote'; }
if (isoLanguage=='myv') {  site = 'Wikiquote'; }
if (isoLanguage=='mzn') {  site = 'Wikiquote'; }
if (isoLanguage=='na') {  site = 'Wikiquote'; }
if (isoLanguage=='nah') {  site = 'Wikiquote'; }
if (isoLanguage=='nan') {  site = 'Wikiquote'; }
if (isoLanguage=='nap') {  site = 'Wikiquote'; }
if (isoLanguage=='nb') {  site = 'Wikiquote'; }
if (isoLanguage=='nds') {  site = 'Wikiquote'; }
if (isoLanguage=='nds-nl') {  site = 'Wikiquote'; }
if (isoLanguage=='ne') {  site = 'विकिकोट'; }
if (isoLanguage=='new') {  site = 'Wikiquote'; }
if (isoLanguage=='ng') {  site = 'Wikiquote'; }
if (isoLanguage=='nl') {  site = 'Wikiquote'; }
if (isoLanguage=='nn') {  site = 'Wikifrasar'; }
if (isoLanguage=='no') {  site = 'Wikiquote'; }
if (isoLanguage=='nrm') {  site = 'Wikiquote'; }
if (isoLanguage=='nso') {  site = 'Wikiquote'; }
if (isoLanguage=='ny') {  site = 'Wikiquote'; }
if (isoLanguage=='oc') {  site = 'Wikiquote'; }
if (isoLanguage=='olo') {  site = 'Wikiquote'; }
if (isoLanguage=='om') {  site = 'Wikiquote'; }
if (isoLanguage=='or') {  site = 'ଉଇକିକଥା'; }
if (isoLanguage=='os') {  site = 'Wikiquote'; }
if (isoLanguage=='pa') {  site = 'Wikiquote'; }
if (isoLanguage=='pag') {  site = 'Wikiquote'; }
if (isoLanguage=='pap') {  site = 'Wikiquote'; }
if (isoLanguage=='pcd') {  site = 'Wikiquote'; }
if (isoLanguage=='pdc') {  site = 'Wikiquote'; }
if (isoLanguage=='pfl') {  site = 'Wikiquote'; }
if (isoLanguage=='pi') {  site = 'Wikiquote'; }
if (isoLanguage=='pih') {  site = 'Wikiquote'; }
if (isoLanguage=='pl') {  site = 'Wikicytaty'; }
if (isoLanguage=='pms') {  site = 'Wikiquote'; }
if (isoLanguage=='pnt') {  site = 'Wikiquote'; }
if (isoLanguage=='ps') {  site = 'ويکيوراشه'; }
if (isoLanguage=='pt') {  site = 'Wikiquote'; }
if (isoLanguage=='pt-br') {  site = 'Wikiquote'; }
if (isoLanguage=='qu') {  site = 'Wikiquote'; }
if (isoLanguage=='rm') {  site = 'Wikiquote'; }
if (isoLanguage=='rmy') {  site = 'Wikiquote'; }
if (isoLanguage=='ro') {  site = 'Wikicitat'; }
if (isoLanguage=='ru') {  site = 'Викицитатник'; }
if (isoLanguage=='rue') {  site = 'Wikiquote'; }
if (isoLanguage=='rup') {  site = 'Wikiquote'; }
if (isoLanguage=='rw') {  site = 'Wikiquote'; }
if (isoLanguage=='sa') {  site = 'विकिसूक्तयः'; }
if (isoLanguage=='sah') {  site = 'Биики Домох'; }
if (isoLanguage=='sat') {  site = 'Wikiquote'; }
if (isoLanguage=='sc') {  site = 'Wikiquote'; }
if (isoLanguage=='scn') {  site = 'Wikiquote'; }
if (isoLanguage=='sco') {  site = 'Wikiquote'; }
if (isoLanguage=='sd') {  site = 'Wikiquote'; }
if (isoLanguage=='se') {  site = 'Wikiquote'; }
if (isoLanguage=='sg') {  site = 'Wikiquote'; }
if (isoLanguage=='sgs') {  site = 'Wikiquote'; }
if (isoLanguage=='sh') {  site = 'Wikicitat'; }
if (isoLanguage=='shn') {  site = 'Wikiquote'; }
if (isoLanguage=='si') {  site = 'Wikiquote'; }
if (isoLanguage=='sk') {  site = 'Wikicitáty'; }
if (isoLanguage=='sl') {  site = 'Wikinavedek'; }
if (isoLanguage=='sli') {  site = 'Wikiquote'; }
if (isoLanguage=='sm') {  site = 'Wikiquote'; }
if (isoLanguage=='sn') {  site = 'Wikiquote'; }
if (isoLanguage=='so') {  site = 'Wikiquote'; }
if (isoLanguage=='sq') {  site = 'Wikicitat'; }
if (isoLanguage=='sr') {  site = 'Викицитат'; }
if (isoLanguage=='srn') {  site = 'Wikiquote'; }
if (isoLanguage=='ss') {  site = 'Wikiquote'; }
if (isoLanguage=='stq') {  site = 'Wikiquote'; }
if (isoLanguage=='su') {  site = 'Wikiquote'; }
if (isoLanguage=='sv') {  site = 'Wikiquote'; }
if (isoLanguage=='sw') {  site = 'Wikiquote'; }
if (isoLanguage=='szl') {  site = 'Wikiquote'; }
if (isoLanguage=='szy') {  site = 'Wikiquote'; }
if (isoLanguage=='ta') {  site = 'விக்கிமேற்கோள்'; }
if (isoLanguage=='tcy') {  site = 'Wikiquote'; }
if (isoLanguage=='te') {  site = 'వికీవ్యాఖ్య'; }
if (isoLanguage=='tet') {  site = 'Wikiquote'; }
if (isoLanguage=='tg') {  site = 'Викииқтибос'; }
if (isoLanguage=='th') {  site = 'วิกิคำคม'; }
if (isoLanguage=='ti') {  site = 'Wikiquote'; }
if (isoLanguage=='tk') {  site = 'Wikiquote'; }
if (isoLanguage=='tl') {  site = 'Wikiquote'; }
if (isoLanguage=='tn') {  site = 'Wikiquote'; }
if (isoLanguage=='tpi') {  site = 'Wikiquote'; }
if (isoLanguage=='tr') {  site = 'Vikisöz'; }
if (isoLanguage=='ts') {  site = 'Wikiquote'; }
if (isoLanguage=='tt') {  site = 'Викиөзек'; }
if (isoLanguage=='tw') {  site = 'Wikiquote'; }
if (isoLanguage=='ty') {  site = 'Wikiquote'; }
if (isoLanguage=='tyv') {  site = 'Wikiquote'; }
if (isoLanguage=='udm') {  site = 'Wikiquote'; }
if (isoLanguage=='ug') {  site = 'Wikiquote'; }
if (isoLanguage=='uk') {  site = 'Вікіцитати'; }
if (isoLanguage=='ur') {  site = 'وکی اقتباسات'; }
if (isoLanguage=='uz') {  site = 'Vikiiqtibos'; }
if (isoLanguage=='ve') {  site = 'Wikiquote'; }
if (isoLanguage=='vec') {  site = 'Wikiquote'; }
if (isoLanguage=='vep') {  site = 'Wikiquote'; }
if (isoLanguage=='vi') {  site = 'Wikiquote'; }
if (isoLanguage=='vls') {  site = 'Wikiquote'; }
if (isoLanguage=='vls') {  site = 'Wikiquote'; }
if (isoLanguage=='vro') {  site = 'Wikiquote'; }
if (isoLanguage=='wa') {  site = 'Wikiquote'; }
if (isoLanguage=='war') {  site = 'Wikiquote'; }
if (isoLanguage=='wo') {  site = 'Wikiquote'; }
if (isoLanguage=='wuu') {  site = '维基语录'; }
if (isoLanguage=='xal') {  site = 'Wikiquote'; }
if (isoLanguage=='xh') {  site = 'Wikiquote'; }
if (isoLanguage=='xmf') {  site = 'ვიკიციტატა'; }
if (isoLanguage=='yi') {  site = 'וויקיציטאט'; }
if (isoLanguage=='yo') {  site = 'Wikiquote'; }
if (isoLanguage=='yue') {  site = '維基語錄'; }
if (isoLanguage=='za') {  site = 'Veizgiek Yijluz'; }
if (isoLanguage=='zea') {  site = 'Wikiquote'; }
if (isoLanguage=='zh') {  site = '维基语录'; }
if (isoLanguage=='zh-cn') {  site = '维基语录'; }
if (isoLanguage=='zh-hans') {  site = '维基语录'; }
if (isoLanguage=='zh-hant') {  site = '维基语录'; }
if (isoLanguage=='zh-sg') {  site = 'Wikiquote'; }
if (isoLanguage=='zh-tw') {  site = '維基語錄'; }
if (isoLanguage=='zh-tw') {  site = '維基語錄'; }
if (isoLanguage=='zu') {  site = 'Wikiquote'; }
				}
				if (article.includes(".wikisource.")) {
if (isoLanguage=='aa') {  site = 'Wikisource'; }
if (isoLanguage=='ab') {  site = 'Wikisource'; }
if (isoLanguage=='ace') {  site = 'Wikisource'; }
if (isoLanguage=='ady') {  site = 'Wikisource'; }
if (isoLanguage=='af') {  site = 'Wikisource'; }
if (isoLanguage=='ak') {  site = 'Wikisource'; }
if (isoLanguage=='am') {  site = 'Wikisource'; }
if (isoLanguage=='an') {  site = 'Wikisource'; }
if (isoLanguage=='ar') {  site = 'ويكي مصدر'; }
if (isoLanguage=='arc') {  site = 'Wikisource'; }
if (isoLanguage=='as') {  site = 'ৱিকিচ\'ৰ্ছ'; }
if (isoLanguage=='ast') {  site = 'Wikiesbilla'; }
if (isoLanguage=='atj') {  site = 'Wikisource'; }
if (isoLanguage=='av') {  site = 'Викимактаб'; }
if (isoLanguage=='awa') {  site = 'Wikisource'; }
if (isoLanguage=='ay') {  site = 'Wikisource'; }
if (isoLanguage=='az') {  site = 'Vikimənbə'; }
if (isoLanguage=='ba') {  site = 'Викикитапхана'; }
if (isoLanguage=='ban') {  site = 'Wikisource'; }
if (isoLanguage=='bar') {  site = 'Wikisource'; }
if (isoLanguage=='bcl') {  site = 'Wikisource'; }
if (isoLanguage=='be') {  site = 'Вікікрыніцы'; }
if (isoLanguage=='bg') {  site = 'Уикиизточник'; }
if (isoLanguage=='bho') {  site = 'Wikisource'; }
if (isoLanguage=='bi') {  site = 'Wikisource'; }
if (isoLanguage=='bjn') {  site = 'Wikisource'; }
if (isoLanguage=='bm') {  site = 'Wikisource'; }
if (isoLanguage=='bn') {  site = 'উইকিসংকলন'; }
if (isoLanguage=='bo') {  site = 'Wikisource'; }
if (isoLanguage=='bpy') {  site = 'Wikisource'; }
if (isoLanguage=='br') {  site = 'Wikimammenn'; }
if (isoLanguage=='brh') {  site = 'Wikisource'; }
if (isoLanguage=='bs') {  site = 'Wikisource'; }
if (isoLanguage=='bug') {  site = 'Wikisource'; }
if (isoLanguage=='bxr') {  site = 'Wikisource'; }
if (isoLanguage=='ca') {  site = 'Viquitexts'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikisource'; }
if (isoLanguage=='cdo') {  site = 'Wiki Dù-cṳ̆-guāng'; }
if (isoLanguage=='ce') {  site = 'Wikisource'; }
if (isoLanguage=='ceb') {  site = 'Wikisource'; }
if (isoLanguage=='ch') {  site = 'Wikisource'; }
if (isoLanguage=='chr') {  site = 'Wikisource'; }
if (isoLanguage=='chy') {  site = 'Wikisource'; }
if (isoLanguage=='ckb') {  site = 'کردی'; }
if (isoLanguage=='co') {  site = 'Wikisource'; }
if (isoLanguage=='crh') {  site = 'Wikisource'; }
if (isoLanguage=='cs') {  site = 'Wikizdroje'; }
if (isoLanguage=='csb') {  site = 'Wikisource'; }
if (isoLanguage=='cu') {  site = 'Wikisource'; }
if (isoLanguage=='cv') {  site = 'Викивулавăш'; }
if (isoLanguage=='cy') {  site = 'Wicidestun'; }
if (isoLanguage=='da') {  site = 'Wikisource'; }
if (isoLanguage=='de') {  site = 'Wikisource'; }
if (isoLanguage=='diq') {  site = 'Wikisource'; }
if (isoLanguage=='dsb') {  site = 'Wikisource'; }
if (isoLanguage=='dty') {  site = 'Wikisource'; }
if (isoLanguage=='dv') {  site = 'Wikisource'; }
if (isoLanguage=='ee') {  site = 'Wikisource'; }
if (isoLanguage=='el') {  site = 'Βικιθήκη'; }
if (isoLanguage=='el') {  site = 'Βικιθήκη'; }
if (isoLanguage=='eml') {  site = 'Wikisource'; }
if (isoLanguage=='en') {  site = 'Wikisource'; }
if (isoLanguage=='en-ca') {  site = 'Wikisource'; }
if (isoLanguage=='en-gb') {  site = 'Wikisource'; }
if (isoLanguage=='es') {  site = 'Wikisource'; }
if (isoLanguage=='et') {  site = 'Vikitekstid'; }
if (isoLanguage=='eu') {  site = 'Wikiteka'; }
if (isoLanguage=='ext') {  site = 'Wikisource'; }
if (isoLanguage=='fa') {  site = 'ویکینبشته'; }
if (isoLanguage=='ff') {  site = 'Wikisource'; }
if (isoLanguage=='fi') {  site = 'Wikiaineisto'; }
if (isoLanguage=='fj') {  site = 'Wikisource'; }
if (isoLanguage=='fo') {  site = 'Wikipedia:Keldur'; }
if (isoLanguage=='fr') {  site = 'Wikisource'; }
if (isoLanguage=='frp') {  site = 'Wikisource'; }
if (isoLanguage=='frr') {  site = 'Wikisource'; }
if (isoLanguage=='fur') {  site = 'Wikisource'; }
if (isoLanguage=='fy') {  site = 'Wikipedy:Publike boarnen'; }
if (isoLanguage=='ga') {  site = 'Wikisource'; }
if (isoLanguage=='gag') {  site = 'Vikikaynak'; }
if (isoLanguage=='gan') {  site = '維基文庫'; }
if (isoLanguage=='gcr') {  site = 'Wikisource'; }
if (isoLanguage=='gd') {  site = 'Wikisource'; }
if (isoLanguage=='gl') {  site = 'Wikisource'; }
if (isoLanguage=='glk') {  site = 'Wikisource'; }
if (isoLanguage=='gn') {  site = 'Wikisource'; }
if (isoLanguage=='gor') {  site = 'Wikisource'; }
if (isoLanguage=='gsw') {  site = 'Wikisource'; }
if (isoLanguage=='gu') {  site = 'વિકિસ્રોત'; }
if (isoLanguage=='gv') {  site = 'Wikisource'; }
if (isoLanguage=='ha') {  site = 'Wikisource'; }
if (isoLanguage=='hak') {  site = 'Wikisource'; }
if (isoLanguage=='haw') {  site = 'Wikisource'; }
if (isoLanguage=='he') {  site = 'ויקיטקסט'; }
if (isoLanguage=='hi') {  site = 'विकिस्रोत'; }
if (isoLanguage=='hr') {  site = 'Wikizvor'; }
if (isoLanguage=='hsb') {  site = 'Wikisource'; }
if (isoLanguage=='ht') {  site = 'Wikisource'; }
if (isoLanguage=='hyw') {  site = 'Wikisource'; }
if (isoLanguage=='id') {  site = 'Wikisource'; }
if (isoLanguage=='ig') {  site = 'Wikisource'; }
if (isoLanguage=='ik') {  site = 'Wikisource'; }
if (isoLanguage=='ilo') {  site = 'Wikisource'; }
if (isoLanguage=='inh') {  site = 'Wikisource'; }
if (isoLanguage=='is') {  site = 'Wikiheimild'; }
if (isoLanguage=='it') {  site = 'Wikisource'; }
if (isoLanguage=='iu') {  site = 'Wikisource'; }
if (isoLanguage=='ja') {  site = 'ウィキソース'; }
if (isoLanguage=='jam') {  site = 'Wikisource'; }
if (isoLanguage=='jv') {  site = 'Wikisource'; }
if (isoLanguage=='ka') {  site = 'ვიკიწყარო'; }
if (isoLanguage=='kaa') {  site = 'Wikisource'; }
if (isoLanguage=='kab') {  site = 'Wikisource'; }
if (isoLanguage=='kbp') {  site = 'Wikisource'; }
if (isoLanguage=='kg') {  site = 'Wikisource'; }
if (isoLanguage=='ki') {  site = 'Wikisource'; }
if (isoLanguage=='kk') {  site = 'Wikisource'; }
if (isoLanguage=='kl') {  site = 'Wikisource'; }
if (isoLanguage=='km') {  site = 'Wikisource'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿಸೋರ್ಸ್'; }
if (isoLanguage=='ko') {  site = '위키문헌'; }
if (isoLanguage=='koi') {  site = 'Wikisource'; }
if (isoLanguage=='krc') {  site = 'Wikisource'; }
if (isoLanguage=='ks') {  site = 'Wikisource'; }
if (isoLanguage=='ksh') {  site = 'Wikisource'; }
if (isoLanguage=='ksh') {  site = 'Wikisource'; }
if (isoLanguage=='ku') {  site = 'Wikisource'; }
if (isoLanguage=='ku') {  site = 'Wikisource'; }
if (isoLanguage=='kw') {  site = 'Wikisource'; }
if (isoLanguage=='ky') {  site = 'Wikisource'; }
if (isoLanguage=='la') {  site = 'Vicifons'; }
if (isoLanguage=='lad') {  site = 'Vikifuentes'; }
if (isoLanguage=='lb') {  site = 'Wikisource'; }
if (isoLanguage=='lbe') {  site = 'Wikisource'; }
if (isoLanguage=='lez') {  site = 'Wikisource'; }
if (isoLanguage=='lg') {  site = 'Wikisource'; }
if (isoLanguage=='li') {  site = 'Wikibrónne'; }
if (isoLanguage=='lij') {  site = 'Wikisource'; }
if (isoLanguage=='liv') {  site = 'Wikisource'; }
if (isoLanguage=='lmo') {  site = 'Wikisource'; }
if (isoLanguage=='ln') {  site = 'Wikisource'; }
if (isoLanguage=='lo') {  site = 'Wikisource'; }
if (isoLanguage=='lt') {  site = 'Vikišaltiniai'; }
if (isoLanguage=='ltg') {  site = 'Wikisource'; }
if (isoLanguage=='lv') {  site = 'Wikisource'; }
if (isoLanguage=='mai') {  site = 'Wikisource'; }
if (isoLanguage=='map-bms') {  site = 'Wikisource'; }
if (isoLanguage=='mdf') {  site = 'Викилисьма'; }
if (isoLanguage=='mg') {  site = 'Wikisource'; }
if (isoLanguage=='mhr') {  site = 'Викитеке'; }
if (isoLanguage=='mi') {  site = 'Wikisource'; }
if (isoLanguage=='min') {  site = 'Wikisource'; }
if (isoLanguage=='mk') {  site = 'Викиизвор'; }
if (isoLanguage=='ml') {  site = 'വിക്കിഗ്രന്ഥശാല'; }
if (isoLanguage=='mn') {  site = 'Wikisource'; }
if (isoLanguage=='mnw') {  site = 'Wikisource'; }
if (isoLanguage=='mo') {  site = 'Wikisource'; }
if (isoLanguage=='mr') {  site = 'मराठी विकिस्रोत'; }
if (isoLanguage=='mrj') {  site = 'Wikisource'; }
if (isoLanguage=='ms') {  site = 'Wikisource'; }
if (isoLanguage=='mt') {  site = 'Wikisors'; }
if (isoLanguage=='mwl') {  site = 'Wikisource'; }
if (isoLanguage=='my') {  site = 'Wikisource'; }
if (isoLanguage=='myv') {  site = 'Wikisource'; }
if (isoLanguage=='mzn') {  site = 'Wikisource'; }
if (isoLanguage=='na') {  site = 'Wikisource'; }
if (isoLanguage=='nah') {  site = 'Wikisource'; }
if (isoLanguage=='nan') {  site = 'Wikisource'; }
if (isoLanguage=='nap') {  site = 'Wikisource'; }
if (isoLanguage=='nb') {  site = 'Wikikilden'; }
if (isoLanguage=='nds') {  site = 'Wikisource'; }
if (isoLanguage=='nds-nl') {  site = 'Wikisource'; }
if (isoLanguage=='ne') {  site = 'विकिस्रोत'; }
if (isoLanguage=='new') {  site = 'Wikisource'; }
if (isoLanguage=='ng') {  site = 'Wikisource'; }
if (isoLanguage=='nl') {  site = 'Wikisource'; }
if (isoLanguage=='nn') {  site = 'Wikisource'; }
if (isoLanguage=='no') {  site = 'Wikikilden'; }
if (isoLanguage=='nrm') {  site = 'Wikisource'; }
if (isoLanguage=='nso') {  site = 'Wikisource'; }
if (isoLanguage=='ny') {  site = 'Wikisource'; }
if (isoLanguage=='oc') {  site = 'Wikisource'; }
if (isoLanguage=='olo') {  site = 'Wikisource'; }
if (isoLanguage=='om') {  site = 'Wikisource'; }
if (isoLanguage=='or') {  site = 'ଉଇକିପାଠାଗାର'; }
if (isoLanguage=='os') {  site = 'Wikisource'; }
if (isoLanguage=='pa') {  site = 'ਵਿਕੀਸੋਰਸ'; }
if (isoLanguage=='pag') {  site = 'Wikisource'; }
if (isoLanguage=='pap') {  site = 'Wikisource'; }
if (isoLanguage=='pcd') {  site = 'Wikisource'; }
if (isoLanguage=='pdc') {  site = 'Wikisource'; }
if (isoLanguage=='pfl') {  site = 'Wikisource'; }
if (isoLanguage=='pi') {  site = 'Wikisource'; }
if (isoLanguage=='pih') {  site = 'Wikisource'; }
if (isoLanguage=='pl') {  site = 'Wikiźródła'; }
if (isoLanguage=='pms') {  site = 'Wikisource'; }
if (isoLanguage=='pnt') {  site = 'Wikisource'; }
if (isoLanguage=='ps') {  site = 'ويکيسرچينه'; }
if (isoLanguage=='pt') {  site = 'Wikisource'; }
if (isoLanguage=='pt-br') {  site = 'Wikisource'; }
if (isoLanguage=='qu') {  site = 'Wikisource'; }
if (isoLanguage=='rm') {  site = 'Wikisource'; }
if (isoLanguage=='rmy') {  site = 'Wikisource'; }
if (isoLanguage=='ro') {  site = 'Wikisursă'; }
if (isoLanguage=='ru') {  site = 'Викитека'; }
if (isoLanguage=='rue') {  site = 'Wikisource'; }
if (isoLanguage=='rup') {  site = 'Wikisource'; }
if (isoLanguage=='rw') {  site = 'Wikisource'; }
if (isoLanguage=='sa') {  site = 'विकिसूक्तिः'; }
if (isoLanguage=='sah') {  site = 'Wikisource'; }
if (isoLanguage=='sat') {  site = 'Wikisource'; }
if (isoLanguage=='sc') {  site = 'Wikisource'; }
if (isoLanguage=='scn') {  site = 'Wikisource'; }
if (isoLanguage=='sco') {  site = 'Wikisoorce'; }
if (isoLanguage=='sd') {  site = 'Wikisource'; }
if (isoLanguage=='se') {  site = 'Wikisource'; }
if (isoLanguage=='sg') {  site = 'Wikisource'; }
if (isoLanguage=='sgs') {  site = 'Wikisource'; }
if (isoLanguage=='sh') {  site = 'Wikizvor'; }
if (isoLanguage=='shn') {  site = 'Wikisource'; }
if (isoLanguage=='si') {  site = 'විකිමූලාශ්ර'; }
if (isoLanguage=='sk') {  site = 'Wikizdroje'; }
if (isoLanguage=='sl') {  site = 'Wikivir'; }
if (isoLanguage=='sli') {  site = 'Wikisource'; }
if (isoLanguage=='sm') {  site = 'Wikisource'; }
if (isoLanguage=='sn') {  site = 'Wikisource'; }
if (isoLanguage=='so') {  site = 'Wikisource'; }
if (isoLanguage=='sq') {  site = 'Wikisource'; }
if (isoLanguage=='sr') {  site = 'Викизворник'; }
if (isoLanguage=='srn') {  site = 'Wikisource'; }
if (isoLanguage=='ss') {  site = 'Wikisource'; }
if (isoLanguage=='stq') {  site = 'Wikisource'; }
if (isoLanguage=='su') {  site = 'Wikisource'; }
if (isoLanguage=='sv') {  site = 'Wikisource'; }
if (isoLanguage=='sw') {  site = 'Wikisource'; }
if (isoLanguage=='szl') {  site = 'Wikisource'; }
if (isoLanguage=='szy') {  site = 'Wikisource'; }
if (isoLanguage=='ta') {  site = 'விக்கிமூலம்'; }
if (isoLanguage=='tcy') {  site = 'Wikisource'; }
if (isoLanguage=='te') {  site = 'వికీసోర్స్'; }
if (isoLanguage=='tet') {  site = 'Wikisource'; }
if (isoLanguage=='tg') {  site = 'Викитека'; }
if (isoLanguage=='th') {  site = 'วิกิซอร์ซ'; }
if (isoLanguage=='ti') {  site = 'Wikisource'; }
if (isoLanguage=='tk') {  site = 'Wikisource'; }
if (isoLanguage=='tl') {  site = 'Wikisource'; }
if (isoLanguage=='tn') {  site = 'Wikisource'; }
if (isoLanguage=='tpi') {  site = 'Wikisource'; }
if (isoLanguage=='tr') {  site = 'Vikikaynak'; }
if (isoLanguage=='ts') {  site = 'Wikisource'; }
if (isoLanguage=='tt') {  site = 'Викиханә'; }
if (isoLanguage=='tw') {  site = 'Wikisource'; }
if (isoLanguage=='ty') {  site = 'Wikisource'; }
if (isoLanguage=='tyv') {  site = 'Wikisource'; }
if (isoLanguage=='udm') {  site = 'Викитека'; }
if (isoLanguage=='ug') {  site = 'Wikisource'; }
if (isoLanguage=='uk') {  site = 'Вікіджерела'; }
if (isoLanguage=='ur') {  site = 'ویکی ماخذ'; }
if (isoLanguage=='uz') {  site = 'Vikimanba'; }
if (isoLanguage=='ve') {  site = 'Wikisource'; }
if (isoLanguage=='vec') {  site = 'Wikisource'; }
if (isoLanguage=='vep') {  site = 'Wikisource'; }
if (isoLanguage=='vi') {  site = 'Wikisource'; }
if (isoLanguage=='vls') {  site = 'Wikisource'; }
if (isoLanguage=='vls') {  site = 'Wikisource'; }
if (isoLanguage=='vro') {  site = 'Wikisource'; }
if (isoLanguage=='wa') {  site = 'Wikisource'; }
if (isoLanguage=='war') {  site = 'Wikisource'; }
if (isoLanguage=='wo') {  site = 'Wikisource'; }
if (isoLanguage=='wuu') {  site = '维基文库'; }
if (isoLanguage=='xal') {  site = 'Wikisource'; }
if (isoLanguage=='xh') {  site = 'Wikisource'; }
if (isoLanguage=='xmf') {  site = 'ვიკიწყუ'; }
if (isoLanguage=='yi') {  site = 'וויקיביבליאטעק'; }
if (isoLanguage=='yo') {  site = 'Wikisource'; }
if (isoLanguage=='yue') {  site = '維基文庫'; }
if (isoLanguage=='za') {  site = 'Veizgiek Vwnzgu'; }
if (isoLanguage=='zea') {  site = 'Wikisource'; }
if (isoLanguage=='zh') {  site = '维基文库'; }
if (isoLanguage=='zh-cn') {  site = '维基文库'; }
if (isoLanguage=='zh-hans') {  site = '维基文库'; }
if (isoLanguage=='zh-hant') {  site = '維基文庫'; }
if (isoLanguage=='zh-sg') {  site = 'Wikisource'; }
if (isoLanguage=='zh-tw') {  site = '維基文庫'; }
if (isoLanguage=='zh-tw') {  site = '維基文庫'; }
if (isoLanguage=='zu') {  site = 'Wikisource'; }
				}
				if (article.includes(".wikiversity.")) {
if (isoLanguage=='aa') {  site = 'Wikiversity'; }
if (isoLanguage=='ab') {  site = 'Wikiversity'; }
if (isoLanguage=='ace') {  site = 'Wikiversity'; }
if (isoLanguage=='ady') {  site = 'Wikiversity'; }
if (isoLanguage=='af') {  site = 'Wikiversity'; }
if (isoLanguage=='ak') {  site = 'Wikiversity'; }
if (isoLanguage=='am') {  site = 'Wikiversity'; }
if (isoLanguage=='an') {  site = 'Wikiversity'; }
if (isoLanguage=='ar') {  site = 'ويكي الجامعة'; }
if (isoLanguage=='arc') {  site = 'Wikiversity'; }
if (isoLanguage=='as') {  site = 'ৱিকিভাৰ্চিটী'; }
if (isoLanguage=='ast') {  site = 'Wikiversidá'; }
if (isoLanguage=='atj') {  site = 'Wikiversity'; }
if (isoLanguage=='av') {  site = 'Wikiversity'; }
if (isoLanguage=='awa') {  site = 'Wikiversity'; }
if (isoLanguage=='ay') {  site = 'Wikiversity'; }
if (isoLanguage=='az') {  site = 'VikiVersitet'; }
if (isoLanguage=='ba') {  site = 'Wikiversity'; }
if (isoLanguage=='ban') {  site = 'Wikiversity'; }
if (isoLanguage=='bar') {  site = 'Wikiversity'; }
if (isoLanguage=='bcl') {  site = 'Wikiversity'; }
if (isoLanguage=='be') {  site = 'Віківерсітэт'; }
if (isoLanguage=='bg') {  site = 'Уикиверситет'; }
if (isoLanguage=='bho') {  site = 'Wikiversity'; }
if (isoLanguage=='bi') {  site = 'Wikiversity'; }
if (isoLanguage=='bjn') {  site = 'Wikiversity'; }
if (isoLanguage=='bm') {  site = 'Wikiversity'; }
if (isoLanguage=='bn') {  site = 'উইকিবিশ্ববিদ্যালয়'; }
if (isoLanguage=='bo') {  site = 'Wikiversity'; }
if (isoLanguage=='bpy') {  site = 'Wikiversity'; }
if (isoLanguage=='br') {  site = 'Wikiversity'; }
if (isoLanguage=='brh') {  site = 'Wikiversity'; }
if (isoLanguage=='bs') {  site = 'Wikiversity'; }
if (isoLanguage=='bug') {  site = 'Wikiversity'; }
if (isoLanguage=='bxr') {  site = 'Wikiversity'; }
if (isoLanguage=='ca') {  site = 'Wikiversity'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikiversity'; }
if (isoLanguage=='cdo') {  site = 'Wiki Dâi-hŏk'; }
if (isoLanguage=='ce') {  site = 'Wikiversity'; }
if (isoLanguage=='ceb') {  site = 'Wikiversity'; }
if (isoLanguage=='ch') {  site = 'Wikiversity'; }
if (isoLanguage=='chr') {  site = 'Wikiversity'; }
if (isoLanguage=='chy') {  site = 'Wikiversity'; }
if (isoLanguage=='ckb') {  site = 'Wikiversity'; }
if (isoLanguage=='co') {  site = 'Wikiversity'; }
if (isoLanguage=='crh') {  site = 'Wikiversity'; }
if (isoLanguage=='cs') {  site = 'Wikiverzita'; }
if (isoLanguage=='csb') {  site = 'Wikiversity'; }
if (isoLanguage=='cu') {  site = 'Wikiversity'; }
if (isoLanguage=='cv') {  site = 'Викиверситет'; }
if (isoLanguage=='cy') {  site = 'Wikiversity'; }
if (isoLanguage=='da') {  site = 'Wikiversity'; }
if (isoLanguage=='de') {  site = 'Wikiversity'; }
if (isoLanguage=='diq') {  site = 'Wikiversity'; }
if (isoLanguage=='dsb') {  site = 'Wikiversity'; }
if (isoLanguage=='dty') {  site = 'Wikiversity'; }
if (isoLanguage=='dv') {  site = 'Wikiversity'; }
if (isoLanguage=='ee') {  site = 'Wikiversity'; }
if (isoLanguage=='el') {  site = 'Βικιεπιστήμιο'; }
if (isoLanguage=='el') {  site = 'Βικιεπιστήμιο'; }
if (isoLanguage=='eml') {  site = 'Wikiversity'; }
if (isoLanguage=='en') {  site = 'Wikiversity'; }
if (isoLanguage=='en-ca') {  site = 'Wikiversity'; }
if (isoLanguage=='en-gb') {  site = 'Wikiversity'; }
if (isoLanguage=='es') {  site = 'Wikiversidad'; }
if (isoLanguage=='et') {  site = 'Vikiülikool'; }
if (isoLanguage=='eu') {  site = 'Wikibertsitatea'; }
if (isoLanguage=='ext') {  site = 'Wikiversity'; }
if (isoLanguage=='fa') {  site = 'ویکیدانشگاه'; }
if (isoLanguage=='ff') {  site = 'Wikiversity'; }
if (isoLanguage=='fi') {  site = 'Wikiopisto'; }
if (isoLanguage=='fj') {  site = 'Wikiversity'; }
if (isoLanguage=='fo') {  site = 'Wikiversity'; }
if (isoLanguage=='fr') {  site = 'Wikiversité'; }
if (isoLanguage=='frp') {  site = 'Wikiversity'; }
if (isoLanguage=='frr') {  site = 'Wikiversity'; }
if (isoLanguage=='fur') {  site = 'Wikiversity'; }
if (isoLanguage=='fy') {  site = 'Wikiversity'; }
if (isoLanguage=='ga') {  site = 'Wikiversity'; }
if (isoLanguage=='gag') {  site = 'Wikiversity'; }
if (isoLanguage=='gan') {  site = 'Wikiversity'; }
if (isoLanguage=='gcr') {  site = 'Wikiversity'; }
if (isoLanguage=='gd') {  site = 'Wikiversity'; }
if (isoLanguage=='gl') {  site = 'Wikiversity'; }
if (isoLanguage=='glk') {  site = 'Wikiversity'; }
if (isoLanguage=='gn') {  site = 'Wikiversity'; }
if (isoLanguage=='gor') {  site = 'Wikiversity'; }
if (isoLanguage=='gsw') {  site = 'Wikiversity'; }
if (isoLanguage=='gu') {  site = 'Wikiversity'; }
if (isoLanguage=='gv') {  site = 'Wikiversity'; }
if (isoLanguage=='ha') {  site = 'Wikiversity'; }
if (isoLanguage=='hak') {  site = 'Wikiversity'; }
if (isoLanguage=='haw') {  site = 'Wikiversity'; }
if (isoLanguage=='he') {  site = 'ויקיברסיטה'; }
if (isoLanguage=='hi') {  site = 'विकिविद्यालय'; }
if (isoLanguage=='hr') {  site = 'Wiki-sveučilište'; }
if (isoLanguage=='hsb') {  site = 'Wikiversity'; }
if (isoLanguage=='ht') {  site = 'Wikiversity'; }
if (isoLanguage=='hyw') {  site = 'Wikiversity'; }
if (isoLanguage=='id') {  site = 'Wikiversity'; }
if (isoLanguage=='ig') {  site = 'Wikiversity'; }
if (isoLanguage=='ik') {  site = 'Wikiversity'; }
if (isoLanguage=='ilo') {  site = 'Wikiversity'; }
if (isoLanguage=='inh') {  site = 'Wikiversity'; }
if (isoLanguage=='is') {  site = 'Wikiversity'; }
if (isoLanguage=='it') {  site = 'Wikiversità'; }
if (isoLanguage=='iu') {  site = 'Wikiversity'; }
if (isoLanguage=='ja') {  site = 'ウィキバーシティ'; }
if (isoLanguage=='jam') {  site = 'Wikiversity'; }
if (isoLanguage=='jv') {  site = 'Wikiversity'; }
if (isoLanguage=='ka') {  site = 'ვიკივერსიტეტი'; }
if (isoLanguage=='kaa') {  site = 'Wikiversity'; }
if (isoLanguage=='kab') {  site = 'Wikiversity'; }
if (isoLanguage=='kbp') {  site = 'Wikiversity'; }
if (isoLanguage=='kg') {  site = 'Wikiversity'; }
if (isoLanguage=='ki') {  site = 'Wikiversity'; }
if (isoLanguage=='kk') {  site = 'Wikiversity'; }
if (isoLanguage=='kl') {  site = 'Wikiversity'; }
if (isoLanguage=='km') {  site = 'Wikiversity'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿವಿದ್ಯಾಲಯ'; }
if (isoLanguage=='ko') {  site = '위키배움터'; }
if (isoLanguage=='koi') {  site = 'Wikiversity'; }
if (isoLanguage=='krc') {  site = 'Wikiversity'; }
if (isoLanguage=='ks') {  site = 'Wikiversity'; }
if (isoLanguage=='ksh') {  site = 'Wikiversity'; }
if (isoLanguage=='ksh') {  site = 'Wikiversity'; }
if (isoLanguage=='ku') {  site = 'Wikiversity'; }
if (isoLanguage=='ku') {  site = 'Wikiversity'; }
if (isoLanguage=='kw') {  site = 'Wikiversity'; }
if (isoLanguage=='ky') {  site = 'Wikiversity'; }
if (isoLanguage=='la') {  site = 'Viciversitas'; }
if (isoLanguage=='lad') {  site = 'Wikiversity'; }
if (isoLanguage=='lb') {  site = 'Wikiversity'; }
if (isoLanguage=='lbe') {  site = 'Wikiversity'; }
if (isoLanguage=='lez') {  site = 'Wikiversity'; }
if (isoLanguage=='lg') {  site = 'Wikiversity'; }
if (isoLanguage=='li') {  site = 'Wikiversity'; }
if (isoLanguage=='lij') {  site = 'Wikiversity'; }
if (isoLanguage=='liv') {  site = 'Wikiversity'; }
if (isoLanguage=='lmo') {  site = 'Wikiversity'; }
if (isoLanguage=='ln') {  site = 'Wikiversity'; }
if (isoLanguage=='lo') {  site = 'Wikiversity'; }
if (isoLanguage=='lt') {  site = 'Vikiversitetas'; }
if (isoLanguage=='ltg') {  site = 'Wikiversity'; }
if (isoLanguage=='lv') {  site = 'Wikiversity'; }
if (isoLanguage=='mai') {  site = 'Wikiversity'; }
if (isoLanguage=='map-bms') {  site = 'Wikiversity'; }
if (isoLanguage=='mdf') {  site = 'Wikiversity'; }
if (isoLanguage=='mg') {  site = 'Wikiversity'; }
if (isoLanguage=='mhr') {  site = 'Wikiversity'; }
if (isoLanguage=='mi') {  site = 'Wikiversity'; }
if (isoLanguage=='min') {  site = 'Wikiversity'; }
if (isoLanguage=='mk') {  site = 'Викиуниверзитет'; }
if (isoLanguage=='ml') {  site = 'വിക്കിവേഴ്സിറ്റി'; }
if (isoLanguage=='mn') {  site = 'Wikiversity'; }
if (isoLanguage=='mnw') {  site = 'Wikiversity'; }
if (isoLanguage=='mo') {  site = 'Wikiversity'; }
if (isoLanguage=='mr') {  site = 'Wikiversity'; }
if (isoLanguage=='mrj') {  site = 'Wikiversity'; }
if (isoLanguage=='ms') {  site = 'Wikiversity'; }
if (isoLanguage=='mt') {  site = 'Wikiversità'; }
if (isoLanguage=='mwl') {  site = 'Wikiversity'; }
if (isoLanguage=='my') {  site = 'Wikiversity'; }
if (isoLanguage=='myv') {  site = 'Wikiversity'; }
if (isoLanguage=='mzn') {  site = 'Wikiversity'; }
if (isoLanguage=='na') {  site = 'Wikiversity'; }
if (isoLanguage=='nah') {  site = 'Wikiversity'; }
if (isoLanguage=='nan') {  site = 'Wikiversity'; }
if (isoLanguage=='nap') {  site = 'Wikiversity'; }
if (isoLanguage=='nb') {  site = 'Wikiversity'; }
if (isoLanguage=='nds') {  site = 'Wikiversity'; }
if (isoLanguage=='nds-nl') {  site = 'Wikiversity'; }
if (isoLanguage=='ne') {  site = 'विकिभर्सिटी'; }
if (isoLanguage=='new') {  site = 'Wikiversity'; }
if (isoLanguage=='ng') {  site = 'Wikiversity'; }
if (isoLanguage=='nl') {  site = 'Wikiversity'; }
if (isoLanguage=='nn') {  site = 'Wikiversity'; }
if (isoLanguage=='no') {  site = 'Wikiversity'; }
if (isoLanguage=='nrm') {  site = 'Wikiversity'; }
if (isoLanguage=='nso') {  site = 'Wikiversity'; }
if (isoLanguage=='ny') {  site = 'Wikiversity'; }
if (isoLanguage=='oc') {  site = 'Wikiversity'; }
if (isoLanguage=='olo') {  site = 'Wikiversity'; }
if (isoLanguage=='om') {  site = 'Wikiversity'; }
if (isoLanguage=='or') {  site = 'ଉଇକି ମହାବିହାର'; }
if (isoLanguage=='os') {  site = 'Wikiversity'; }
if (isoLanguage=='pa') {  site = 'ਵਿਕੀਵਰਸਿਟੀ'; }
if (isoLanguage=='pag') {  site = 'Wikiversity'; }
if (isoLanguage=='pap') {  site = 'Wikiversity'; }
if (isoLanguage=='pcd') {  site = 'Wikiversity'; }
if (isoLanguage=='pdc') {  site = 'Wikiversity'; }
if (isoLanguage=='pfl') {  site = 'Wikiversity'; }
if (isoLanguage=='pi') {  site = 'Wikiversity'; }
if (isoLanguage=='pih') {  site = 'Wikiversity'; }
if (isoLanguage=='pl') {  site = 'Wikiversity'; }
if (isoLanguage=='pms') {  site = 'Wikiversity'; }
if (isoLanguage=='pnt') {  site = 'Wikiversity'; }
if (isoLanguage=='ps') {  site = 'ويکيپوهنتون'; }
if (isoLanguage=='pt') {  site = 'Wikiversidade'; }
if (isoLanguage=='pt-br') {  site = 'Wikiversidade'; }
if (isoLanguage=='qu') {  site = 'Wikiversity'; }
if (isoLanguage=='rm') {  site = 'Wikiversity'; }
if (isoLanguage=='rmy') {  site = 'Wikiversity'; }
if (isoLanguage=='ro') {  site = 'Wikiversity'; }
if (isoLanguage=='ru') {  site = 'Викиверситет'; }
if (isoLanguage=='rue') {  site = 'Wikiversity'; }
if (isoLanguage=='rup') {  site = 'Wikiversity'; }
if (isoLanguage=='rw') {  site = 'Wikiversity'; }
if (isoLanguage=='sa') {  site = 'Wikiversity'; }
if (isoLanguage=='sah') {  site = 'Wikiversity'; }
if (isoLanguage=='sat') {  site = 'Wikiversity'; }
if (isoLanguage=='sc') {  site = 'Wikiversity'; }
if (isoLanguage=='scn') {  site = 'Wikiversity'; }
if (isoLanguage=='sco') {  site = 'Wikiversity'; }
if (isoLanguage=='sd') {  site = 'Wikiversity'; }
if (isoLanguage=='se') {  site = 'Wikiversity'; }
if (isoLanguage=='sg') {  site = 'Wikiversity'; }
if (isoLanguage=='sgs') {  site = 'Wikiversity'; }
if (isoLanguage=='sh') {  site = 'Wikiversity'; }
if (isoLanguage=='shn') {  site = 'Wikiversity'; }
if (isoLanguage=='si') {  site = 'Wikiversity'; }
if (isoLanguage=='sk') {  site = 'Wikiversity'; }
if (isoLanguage=='sl') {  site = 'Wikiverza'; }
if (isoLanguage=='sli') {  site = 'Wikiversity'; }
if (isoLanguage=='sm') {  site = 'Wikiversity'; }
if (isoLanguage=='sn') {  site = 'Wikiversity'; }
if (isoLanguage=='so') {  site = 'Wikiversity'; }
if (isoLanguage=='sq') {  site = 'Wikiversity'; }
if (isoLanguage=='sr') {  site = 'Викиверзитет'; }
if (isoLanguage=='srn') {  site = 'Wikiversity'; }
if (isoLanguage=='ss') {  site = 'Wikiversity'; }
if (isoLanguage=='stq') {  site = 'Wikiversity'; }
if (isoLanguage=='su') {  site = 'Wikiversity'; }
if (isoLanguage=='sv') {  site = 'Wikiversity'; }
if (isoLanguage=='sw') {  site = 'Wikiversity'; }
if (isoLanguage=='szl') {  site = 'Wikiversity'; }
if (isoLanguage=='szy') {  site = 'Wikiversity'; }
if (isoLanguage=='ta') {  site = 'விக்கிப்பல்கலைக்கழகம்'; }
if (isoLanguage=='tcy') {  site = 'Wikiversity'; }
if (isoLanguage=='te') {  site = 'వికీవర్సిటీ'; }
if (isoLanguage=='tet') {  site = 'Wikiversity'; }
if (isoLanguage=='tg') {  site = 'Викидонишгоҳ'; }
if (isoLanguage=='th') {  site = 'วิกิวิทยาลัย'; }
if (isoLanguage=='ti') {  site = 'Wikiversity'; }
if (isoLanguage=='tk') {  site = 'Wikiversity'; }
if (isoLanguage=='tl') {  site = 'Wikiversity'; }
if (isoLanguage=='tn') {  site = 'Wikiversity'; }
if (isoLanguage=='tpi') {  site = 'Wikiversity'; }
if (isoLanguage=='tr') {  site = 'Vikiversite'; }
if (isoLanguage=='ts') {  site = 'Wikiversity'; }
if (isoLanguage=='tt') {  site = 'Wikiversitet'; }
if (isoLanguage=='tw') {  site = 'Wikiversity'; }
if (isoLanguage=='ty') {  site = 'Wikiversity'; }
if (isoLanguage=='tyv') {  site = 'Wikiversity'; }
if (isoLanguage=='udm') {  site = 'Wikiversity'; }
if (isoLanguage=='ug') {  site = 'Wikiversity'; }
if (isoLanguage=='uk') {  site = 'Віківерситет'; }
if (isoLanguage=='ur') {  site = 'ویکی جامعہ'; }
if (isoLanguage=='uz') {  site = 'Vikiversitet'; }
if (isoLanguage=='ve') {  site = 'Wikiversity'; }
if (isoLanguage=='vec') {  site = 'Wikiversità'; }
if (isoLanguage=='vep') {  site = 'Wikiversity'; }
if (isoLanguage=='vi') {  site = 'Wikiversity'; }
if (isoLanguage=='vls') {  site = 'Wikiversity'; }
if (isoLanguage=='vls') {  site = 'Wikiversity'; }
if (isoLanguage=='vro') {  site = 'Wikiversity'; }
if (isoLanguage=='wa') {  site = 'Wikiversity'; }
if (isoLanguage=='war') {  site = 'Wikiversity'; }
if (isoLanguage=='wo') {  site = 'Wikiversity'; }
if (isoLanguage=='wuu') {  site = '维基学院'; }
if (isoLanguage=='xal') {  site = 'Wikiversity'; }
if (isoLanguage=='xh') {  site = 'Wikiversity'; }
if (isoLanguage=='xmf') {  site = 'ვიკივერსიტეტი'; }
if (isoLanguage=='yi') {  site = 'Wikiversity'; }
if (isoLanguage=='yo') {  site = 'Wikiversity'; }
if (isoLanguage=='yue') {  site = '維基學府'; }
if (isoLanguage=='za') {  site = 'Veizgiek Hagdangz'; }
if (isoLanguage=='zea') {  site = 'Wikiversity'; }
if (isoLanguage=='zh') {  site = '维基学院'; }
if (isoLanguage=='zh-cn') {  site = '维基学院'; }
if (isoLanguage=='zh-hans') {  site = '维基学院'; }
if (isoLanguage=='zh-hant') {  site = '維基學院'; }
if (isoLanguage=='zh-sg') {  site = 'Wikiversity'; }
if (isoLanguage=='zh-tw') {  site = '維基學院'; }
if (isoLanguage=='zh-tw') {  site = '維基學院'; }
if (isoLanguage=='zu') {  site = 'Wikiversity'; }
				}
				if (article.includes(".wikivoyage.")) {
if (isoLanguage=='aa') {  site = 'Wikivoyage'; }
if (isoLanguage=='ab') {  site = 'Wikivoyage'; }
if (isoLanguage=='ace') {  site = 'Wikivoyage'; }
if (isoLanguage=='ady') {  site = 'Wikivoyage'; }
if (isoLanguage=='af') {  site = 'Wikivoyage'; }
if (isoLanguage=='ak') {  site = 'Wikivoyage'; }
if (isoLanguage=='am') {  site = 'Wikivoyage'; }
if (isoLanguage=='an') {  site = 'Wikivoyage'; }
if (isoLanguage=='ar') {  site = 'ويكي الرحلات'; }
if (isoLanguage=='arc') {  site = 'Wikivoyage'; }
if (isoLanguage=='as') {  site = 'Wikivoyage'; }
if (isoLanguage=='ast') {  site = 'Wikiviaxes'; }
if (isoLanguage=='atj') {  site = 'Wikivoyage'; }
if (isoLanguage=='av') {  site = 'Wikivoyage'; }
if (isoLanguage=='awa') {  site = 'Wikivoyage'; }
if (isoLanguage=='ay') {  site = 'Wikivoyage'; }
if (isoLanguage=='az') {  site = 'Vikisəyahət'; }
if (isoLanguage=='ba') {  site = 'Wikivoyage'; }
if (isoLanguage=='ban') {  site = 'Wikivoyage'; }
if (isoLanguage=='bar') {  site = 'Wikivoyage'; }
if (isoLanguage=='bcl') {  site = 'Wikivoyage'; }
if (isoLanguage=='be') {  site = 'Віківандроўка'; }
if (isoLanguage=='bg') {  site = 'Уикипътешественик'; }
if (isoLanguage=='bho') {  site = 'Wikivoyage'; }
if (isoLanguage=='bi') {  site = 'Wikivoyage'; }
if (isoLanguage=='bjn') {  site = 'Wikivoyage'; }
if (isoLanguage=='bm') {  site = 'Wikivoyage'; }
if (isoLanguage=='bn') {  site = 'উইকিভ্রমণ'; }
if (isoLanguage=='bo') {  site = 'Wikivoyage'; }
if (isoLanguage=='bpy') {  site = 'Wikivoyage'; }
if (isoLanguage=='br') {  site = 'Wikibeaj'; }
if (isoLanguage=='brh') {  site = 'Wikivoyage'; }
if (isoLanguage=='bs') {  site = 'Wikivoyage'; }
if (isoLanguage=='bug') {  site = 'Wikivoyage'; }
if (isoLanguage=='bxr') {  site = 'Wikivoyage'; }
if (isoLanguage=='ca') {  site = 'Viquiviatges'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikivoyage'; }
if (isoLanguage=='cdo') {  site = 'Wikivoyage'; }
if (isoLanguage=='ce') {  site = 'Wikivoyage'; }
if (isoLanguage=='ceb') {  site = 'Wikivoyage'; }
if (isoLanguage=='ch') {  site = 'Wikivoyage'; }
if (isoLanguage=='chr') {  site = 'Wikivoyage'; }
if (isoLanguage=='chy') {  site = 'Wikivoyage'; }
if (isoLanguage=='ckb') {  site = 'Wikivoyage'; }
if (isoLanguage=='co') {  site = 'Wikivoyage'; }
if (isoLanguage=='crh') {  site = 'Wikivoyage'; }
if (isoLanguage=='cs') {  site = 'Wikicesty'; }
if (isoLanguage=='csb') {  site = 'Wikivoyage'; }
if (isoLanguage=='cu') {  site = 'Wikivoyage'; }
if (isoLanguage=='cv') {  site = 'Wikivoyage'; }
if (isoLanguage=='cy') {  site = 'Wikivoyage'; }
if (isoLanguage=='da') {  site = 'Wikivoyage'; }
if (isoLanguage=='de') {  site = 'Wikivoyage'; }
if (isoLanguage=='diq') {  site = 'Wikivoyage'; }
if (isoLanguage=='dsb') {  site = 'Wikivoyage'; }
if (isoLanguage=='dty') {  site = 'Wikivoyage'; }
if (isoLanguage=='dv') {  site = 'Wikivoyage'; }
if (isoLanguage=='ee') {  site = 'Wikivoyage'; }
if (isoLanguage=='el') {  site = 'Βικιταξίδια'; }
if (isoLanguage=='el') {  site = 'Βικιταξίδια'; }
if (isoLanguage=='eml') {  site = 'Wikivoyage'; }
if (isoLanguage=='en') {  site = 'Wikivoyage'; }
if (isoLanguage=='en-ca') {  site = 'Wikivoyage'; }
if (isoLanguage=='en-gb') {  site = 'Wikivoyage'; }
if (isoLanguage=='es') {  site = 'Wikiviajes'; }
if (isoLanguage=='et') {  site = 'Wikivoyage'; }
if (isoLanguage=='eu') {  site = 'Wikibidaiak'; }
if (isoLanguage=='ext') {  site = 'Wikivoyage'; }
if (isoLanguage=='fa') {  site = 'ویکیسفر'; }
if (isoLanguage=='ff') {  site = 'Wikivoyage'; }
if (isoLanguage=='fi') {  site = 'Wikimatkat'; }
if (isoLanguage=='fj') {  site = 'Wikivoyage'; }
if (isoLanguage=='fo') {  site = 'Wikivoyage'; }
if (isoLanguage=='fr') {  site = 'Wikivoyage'; }
if (isoLanguage=='frp') {  site = 'Wikivoyage'; }
if (isoLanguage=='frr') {  site = 'Wikivoyage'; }
if (isoLanguage=='fur') {  site = 'Wikivoyage'; }
if (isoLanguage=='fy') {  site = 'Wikivoyage'; }
if (isoLanguage=='ga') {  site = 'Wikivoyage'; }
if (isoLanguage=='gag') {  site = 'Wikivoyage'; }
if (isoLanguage=='gan') {  site = 'Wikivoyage'; }
if (isoLanguage=='gcr') {  site = 'Wikivoyage'; }
if (isoLanguage=='gd') {  site = 'Wikivoyage'; }
if (isoLanguage=='gl') {  site = 'Wikivoyage'; }
if (isoLanguage=='glk') {  site = 'Wikivoyage'; }
if (isoLanguage=='gn') {  site = 'Wikivoyage'; }
if (isoLanguage=='gor') {  site = 'Wikivoyage'; }
if (isoLanguage=='gsw') {  site = 'Wikivoyage'; }
if (isoLanguage=='gu') {  site = 'વિકિપ્રવાસ'; }
if (isoLanguage=='gv') {  site = 'Wikivoyage'; }
if (isoLanguage=='ha') {  site = 'Wikivoyage'; }
if (isoLanguage=='hak') {  site = 'Wikivoyage'; }
if (isoLanguage=='haw') {  site = 'Wikivoyage'; }
if (isoLanguage=='he') {  site = 'ויקימסע'; }
if (isoLanguage=='hi') {  site = 'विकियात्रा'; }
if (isoLanguage=='hr') {  site = 'Wikivoyage'; }
if (isoLanguage=='hsb') {  site = 'Wikivoyage'; }
if (isoLanguage=='ht') {  site = 'Wikivoyage'; }
if (isoLanguage=='hyw') {  site = 'Wikivoyage'; }
if (isoLanguage=='id') {  site = 'Wikivoyage'; }
if (isoLanguage=='ig') {  site = 'Wikivoyage'; }
if (isoLanguage=='ik') {  site = 'Wikivoyage'; }
if (isoLanguage=='ilo') {  site = 'Wikivoyage'; }
if (isoLanguage=='inh') {  site = 'Wikivoyage'; }
if (isoLanguage=='is') {  site = 'Wikivoyage'; }
if (isoLanguage=='it') {  site = 'Wikivoyage'; }
if (isoLanguage=='iu') {  site = 'Wikivoyage'; }
if (isoLanguage=='ja') {  site = 'ウィキボヤージュ'; }
if (isoLanguage=='jam') {  site = 'Wikivoyage'; }
if (isoLanguage=='jv') {  site = 'Wikivoyage'; }
if (isoLanguage=='ka') {  site = 'ვიკივოიაჟი'; }
if (isoLanguage=='kaa') {  site = 'Wikivoyage'; }
if (isoLanguage=='kab') {  site = 'Wikivoyage'; }
if (isoLanguage=='kbp') {  site = 'Wikivoyage'; }
if (isoLanguage=='kg') {  site = 'Wikivoyage'; }
if (isoLanguage=='ki') {  site = 'Wikivoyage'; }
if (isoLanguage=='kk') {  site = 'Wikivoyage'; }
if (isoLanguage=='kl') {  site = 'Wikivoyage'; }
if (isoLanguage=='km') {  site = 'វិគីទេសចរណ៍'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿ ವೋಯೇಜ್'; }
if (isoLanguage=='ko') {  site = '위키여행'; }
if (isoLanguage=='koi') {  site = 'Wikivoyage'; }
if (isoLanguage=='krc') {  site = 'Wikivoyage'; }
if (isoLanguage=='ks') {  site = 'Wikivoyage'; }
if (isoLanguage=='ksh') {  site = 'Wikivoyage'; }
if (isoLanguage=='ksh') {  site = 'Wikivoyage'; }
if (isoLanguage=='ku') {  site = 'Wîkîger'; }
if (isoLanguage=='ku') {  site = 'Wîkîger'; }
if (isoLanguage=='kw') {  site = 'Wikivoyage'; }
if (isoLanguage=='ky') {  site = 'Wikivoyage'; }
if (isoLanguage=='la') {  site = 'Vicivia'; }
if (isoLanguage=='lad') {  site = 'Wikivoyage'; }
if (isoLanguage=='lb') {  site = 'Wikivoyage'; }
if (isoLanguage=='lbe') {  site = 'Wikivoyage'; }
if (isoLanguage=='lez') {  site = 'Wikivoyage'; }
if (isoLanguage=='lg') {  site = 'Wikivoyage'; }
if (isoLanguage=='li') {  site = 'Wikivoyage'; }
if (isoLanguage=='lij') {  site = 'Wikivoyage'; }
if (isoLanguage=='liv') {  site = 'Wikivoyage'; }
if (isoLanguage=='lmo') {  site = 'Wikivoyage'; }
if (isoLanguage=='ln') {  site = 'Wikivoyage'; }
if (isoLanguage=='lo') {  site = 'Wikivoyage'; }
if (isoLanguage=='lt') {  site = 'Vikikelionės'; }
if (isoLanguage=='ltg') {  site = 'Wikivoyage'; }
if (isoLanguage=='lv') {  site = 'Wikivoyage'; }
if (isoLanguage=='mai') {  site = 'Wikivoyage'; }
if (isoLanguage=='map-bms') {  site = 'Wikivoyage'; }
if (isoLanguage=='mdf') {  site = 'Wikivoyage'; }
if (isoLanguage=='mg') {  site = 'Wikivoyage'; }
if (isoLanguage=='mhr') {  site = 'Wikivoyage'; }
if (isoLanguage=='mi') {  site = 'Wikivoyage'; }
if (isoLanguage=='min') {  site = 'Wikivoyage'; }
if (isoLanguage=='mk') {  site = 'Википатување'; }
if (isoLanguage=='ml') {  site = 'വിക്കിപര്യടനം'; }
if (isoLanguage=='mn') {  site = 'Wikivoyage'; }
if (isoLanguage=='mnw') {  site = 'Wikivoyage'; }
if (isoLanguage=='mo') {  site = 'Wikivoyage'; }
if (isoLanguage=='mr') {  site = 'Wikivoyage'; }
if (isoLanguage=='mrj') {  site = 'Wikivoyage'; }
if (isoLanguage=='ms') {  site = 'Wikivoyage'; }
if (isoLanguage=='mt') {  site = 'Wikivoyage'; }
if (isoLanguage=='mwl') {  site = 'Wikivoyage'; }
if (isoLanguage=='my') {  site = 'Wikivoyage'; }
if (isoLanguage=='myv') {  site = 'Wikivoyage'; }
if (isoLanguage=='mzn') {  site = 'Wikivoyage'; }
if (isoLanguage=='na') {  site = 'Wikivoyage'; }
if (isoLanguage=='nah') {  site = 'Wikivoyage'; }
if (isoLanguage=='nan') {  site = 'Wikivoyage'; }
if (isoLanguage=='nap') {  site = 'Wikivoyage'; }
if (isoLanguage=='nb') {  site = 'Wikivoyage'; }
if (isoLanguage=='nds') {  site = 'Wikivoyage'; }
if (isoLanguage=='nds-nl') {  site = 'Wikivoyage'; }
if (isoLanguage=='ne') {  site = 'विकियात्रा'; }
if (isoLanguage=='new') {  site = 'Wikivoyage'; }
if (isoLanguage=='ng') {  site = 'Wikivoyage'; }
if (isoLanguage=='nl') {  site = 'Wikivoyage'; }
if (isoLanguage=='nn') {  site = 'Wikivoyage'; }
if (isoLanguage=='no') {  site = 'Wikivoyage'; }
if (isoLanguage=='nrm') {  site = 'Wikivoyage'; }
if (isoLanguage=='nso') {  site = 'Wikivoyage'; }
if (isoLanguage=='ny') {  site = 'Wikivoyage'; }
if (isoLanguage=='oc') {  site = 'Wikiviatge'; }
if (isoLanguage=='olo') {  site = 'Wikivoyage'; }
if (isoLanguage=='om') {  site = 'Wikivoyage'; }
if (isoLanguage=='or') {  site = 'ଉଇକିଭ୍ରମଣ'; }
if (isoLanguage=='os') {  site = 'Wikivoyage'; }
if (isoLanguage=='pa') {  site = 'ਵਿਕੀਵੌਇਜ'; }
if (isoLanguage=='pag') {  site = 'Wikivoyage'; }
if (isoLanguage=='pap') {  site = 'Wikivoyage'; }
if (isoLanguage=='pcd') {  site = 'Wikivoyage'; }
if (isoLanguage=='pdc') {  site = 'Wikivoyage'; }
if (isoLanguage=='pfl') {  site = 'Wikivoyage'; }
if (isoLanguage=='pi') {  site = 'Wikivoyage'; }
if (isoLanguage=='pih') {  site = 'Wikivoyage'; }
if (isoLanguage=='pl') {  site = 'Wikipodróże'; }
if (isoLanguage=='pms') {  site = 'Wikivoyage'; }
if (isoLanguage=='pnt') {  site = 'Wikivoyage'; }
if (isoLanguage=='ps') {  site = 'ويکيسفر'; }
if (isoLanguage=='pt') {  site = 'Wikivoyage'; }
if (isoLanguage=='pt-br') {  site = 'Wikivoyage'; }
if (isoLanguage=='qu') {  site = 'Wikivoyage'; }
if (isoLanguage=='rm') {  site = 'Wikivoyage'; }
if (isoLanguage=='rmy') {  site = 'Wikivoyage'; }
if (isoLanguage=='ro') {  site = 'Wikivoyage'; }
if (isoLanguage=='ru') {  site = 'Викигид'; }
if (isoLanguage=='rue') {  site = 'Wikivoyage'; }
if (isoLanguage=='rup') {  site = 'Wikivoyage'; }
if (isoLanguage=='rw') {  site = 'Wikivoyage'; }
if (isoLanguage=='sa') {  site = 'Wikivoyage'; }
if (isoLanguage=='sah') {  site = 'Wikivoyage'; }
if (isoLanguage=='sat') {  site = 'Wikivoyage'; }
if (isoLanguage=='sc') {  site = 'Wikivoyage'; }
if (isoLanguage=='scn') {  site = 'Wikivoyage'; }
if (isoLanguage=='sco') {  site = 'Wikivoyage'; }
if (isoLanguage=='sd') {  site = 'Wikivoyage'; }
if (isoLanguage=='se') {  site = 'Wikivoyage'; }
if (isoLanguage=='sg') {  site = 'Wikivoyage'; }
if (isoLanguage=='sgs') {  site = 'Wikivoyage'; }
if (isoLanguage=='sh') {  site = 'Wikivoyage'; }
if (isoLanguage=='shn') {  site = 'Wikivoyage'; }
if (isoLanguage=='si') {  site = 'Wikivoyage'; }
if (isoLanguage=='sk') {  site = 'Wikicesty'; }
if (isoLanguage=='sl') {  site = 'Wikivoyage'; }
if (isoLanguage=='sli') {  site = 'Wikivoyage'; }
if (isoLanguage=='sm') {  site = 'Wikivoyage'; }
if (isoLanguage=='sn') {  site = 'Wikivoyage'; }
if (isoLanguage=='so') {  site = 'Wikivoyage'; }
if (isoLanguage=='sq') {  site = 'Wikivoyage'; }
if (isoLanguage=='sr') {  site = 'Википутовања'; }
if (isoLanguage=='srn') {  site = 'Wikivoyage'; }
if (isoLanguage=='ss') {  site = 'Wikivoyage'; }
if (isoLanguage=='stq') {  site = 'Wikivoyage'; }
if (isoLanguage=='su') {  site = 'Wikivoyage'; }
if (isoLanguage=='sv') {  site = 'Wikivoyage'; }
if (isoLanguage=='sw') {  site = 'Wikivoyage'; }
if (isoLanguage=='szl') {  site = 'Wikivoyage'; }
if (isoLanguage=='szy') {  site = 'Wikivoyage'; }
if (isoLanguage=='ta') {  site = 'விக்கிபயணம்'; }
if (isoLanguage=='tcy') {  site = 'Wikivoyage'; }
if (isoLanguage=='te') {  site = 'Wikivoyage'; }
if (isoLanguage=='tet') {  site = 'Wikivoyage'; }
if (isoLanguage=='tg') {  site = 'Викигид'; }
if (isoLanguage=='th') {  site = 'วิกิท่องเที่ยว'; }
if (isoLanguage=='ti') {  site = 'Wikivoyage'; }
if (isoLanguage=='tk') {  site = 'Wikivoyage'; }
if (isoLanguage=='tl') {  site = 'Wikivoyage'; }
if (isoLanguage=='tn') {  site = 'Wikivoyage'; }
if (isoLanguage=='tpi') {  site = 'Wikivoyage'; }
if (isoLanguage=='tr') {  site = 'Vikigezgin'; }
if (isoLanguage=='ts') {  site = 'Wikivoyage'; }
if (isoLanguage=='tt') {  site = 'Викисәфәр'; }
if (isoLanguage=='tw') {  site = 'Wikivoyage'; }
if (isoLanguage=='ty') {  site = 'Wikivoyage'; }
if (isoLanguage=='tyv') {  site = 'Wikivoyage'; }
if (isoLanguage=='udm') {  site = 'Wikivoyage'; }
if (isoLanguage=='ug') {  site = 'Wikivoyage'; }
if (isoLanguage=='uk') {  site = 'Вікімандри'; }
if (isoLanguage=='ur') {  site = 'ویکی سفرنامہ'; }
if (isoLanguage=='uz') {  site = 'Vikigid'; }
if (isoLanguage=='ve') {  site = 'Wikivoyage'; }
if (isoLanguage=='vec') {  site = 'Wikivoyage'; }
if (isoLanguage=='vep') {  site = 'Wikivoyage'; }
if (isoLanguage=='vi') {  site = 'Wikivoyage'; }
if (isoLanguage=='vls') {  site = 'Wikivoyage'; }
if (isoLanguage=='vls') {  site = 'Wikivoyage'; }
if (isoLanguage=='vro') {  site = 'Wikivoyage'; }
if (isoLanguage=='wa') {  site = 'Wikivoyage'; }
if (isoLanguage=='war') {  site = 'Wikivoyage'; }
if (isoLanguage=='wo') {  site = 'Wikivoyage'; }
if (isoLanguage=='wuu') {  site = '维基导游'; }
if (isoLanguage=='xal') {  site = 'Wikivoyage'; }
if (isoLanguage=='xh') {  site = 'Wikivoyage'; }
if (isoLanguage=='xmf') {  site = 'Wikivoyage'; }
if (isoLanguage=='yi') {  site = 'Wikivoyage'; }
if (isoLanguage=='yo') {  site = 'Wikivoyage'; }
if (isoLanguage=='yue') {  site = '維基導遊'; }
if (isoLanguage=='za') {  site = 'Veizgiek Lijyouz'; }
if (isoLanguage=='zea') {  site = 'Wikivoyage'; }
if (isoLanguage=='zh') {  site = '维基导游'; }
if (isoLanguage=='zh-cn') {  site = '维基导游'; }
if (isoLanguage=='zh-hans') {  site = '维基导游'; }
if (isoLanguage=='zh-hant') {  site = '維基導遊'; }
if (isoLanguage=='zh-sg') {  site = 'Wikivoyage'; }
if (isoLanguage=='zh-tw') {  site = '維基導遊'; }
if (isoLanguage=='zh-tw') {  site = '維基導遊'; }
if (isoLanguage=='zu') {  site = 'Wikivoyage'; }
				}
				if (article.includes(".wiktionary.")) {
if (isoLanguage=='aa') {  site = 'Wiktionary'; }
if (isoLanguage=='ab') {  site = 'Wiktionary'; }
if (isoLanguage=='ace') {  site = 'Wiktionary'; }
if (isoLanguage=='ady') {  site = 'Wiktionary'; }
if (isoLanguage=='af') {  site = 'WikiWoordeboek'; }
if (isoLanguage=='ak') {  site = 'Wiktionary'; }
if (isoLanguage=='am') {  site = 'Wiktionary'; }
if (isoLanguage=='an') {  site = 'Biquizionario'; }
if (isoLanguage=='ar') {  site = 'ويكاموس'; }
if (isoLanguage=='arc') {  site = 'Wiktionary'; }
if (isoLanguage=='as') {  site = 'ৱিক্স্যনেৰী'; }
if (isoLanguage=='ast') {  site = 'Wikcionariu'; }
if (isoLanguage=='atj') {  site = 'Wiktionary'; }
if (isoLanguage=='av') {  site = 'Wiktionary'; }
if (isoLanguage=='awa') {  site = 'Wiktionary'; }
if (isoLanguage=='ay') {  site = 'Wiktionary'; }
if (isoLanguage=='az') {  site = 'VikiLüğət'; }
if (isoLanguage=='ba') {  site = 'Wiktionary'; }
if (isoLanguage=='ban') {  site = 'Wiktionary'; }
if (isoLanguage=='bar') {  site = 'Wiktionary'; }
if (isoLanguage=='bcl') {  site = 'Wiktionary'; }
if (isoLanguage=='be') {  site = 'Вікіслоўнік'; }
if (isoLanguage=='bg') {  site = 'Уикиречник'; }
if (isoLanguage=='bho') {  site = 'विक्शनरी'; }
if (isoLanguage=='bi') {  site = 'Wiktionary'; }
if (isoLanguage=='bjn') {  site = 'Wiktionary'; }
if (isoLanguage=='bm') {  site = 'Wiktionary'; }
if (isoLanguage=='bn') {  site = 'উইকিঅভিধান'; }
if (isoLanguage=='bo') {  site = 'Wiktionary'; }
if (isoLanguage=='bpy') {  site = 'Wiktionary'; }
if (isoLanguage=='br') {  site = 'Wikeriadur'; }
if (isoLanguage=='brh') {  site = 'Wiktionary'; }
if (isoLanguage=='bs') {  site = 'Wikirječnik'; }
if (isoLanguage=='bug') {  site = 'Wiktionary'; }
if (isoLanguage=='bxr') {  site = 'Wiktionary'; }
if (isoLanguage=='ca') {  site = 'Viccionari'; }
if (isoLanguage=='cbk-zam') {  site = 'Wiktionary'; }
if (isoLanguage=='cdo') {  site = 'Wiktionary'; }
if (isoLanguage=='ce') {  site = 'Викидошам'; }
if (isoLanguage=='ceb') {  site = 'Wiktionary'; }
if (isoLanguage=='ch') {  site = 'Wiktionary'; }
if (isoLanguage=='chr') {  site = 'Wiktionary'; }
if (isoLanguage=='chy') {  site = 'Wiktionary'; }
if (isoLanguage=='ckb') {  site = 'Wiktionary'; }
if (isoLanguage=='co') {  site = 'Wikizziunariu'; }
if (isoLanguage=='crh') {  site = 'Wiktionary'; }
if (isoLanguage=='cs') {  site = 'Wikislovník'; }
if (isoLanguage=='csb') {  site = 'Słowôrz Wikipediji'; }
if (isoLanguage=='cu') {  site = 'Wiktionary'; }
if (isoLanguage=='cv') {  site = 'Викисăмахсар'; }
if (isoLanguage=='cy') {  site = 'Wiciadur'; }
if (isoLanguage=='da') {  site = 'Wiktionary'; }
if (isoLanguage=='de') {  site = 'Wiktionary'; }
if (isoLanguage=='diq') {  site = 'Wiktionary'; }
if (isoLanguage=='dsb') {  site = 'Wiktionary'; }
if (isoLanguage=='dty') {  site = 'Wiktionary'; }
if (isoLanguage=='dv') {  site = 'Wiktionary'; }
if (isoLanguage=='ee') {  site = 'Wiktionary'; }
if (isoLanguage=='el') {  site = 'Βικιλεξικό'; }
if (isoLanguage=='el') {  site = 'Βικιλεξικό'; }
if (isoLanguage=='eml') {  site = 'Wiktionary'; }
if (isoLanguage=='en') {  site = 'Wiktionary'; }
if (isoLanguage=='en-ca') {  site = 'Wiktionary'; }
if (isoLanguage=='en-gb') {  site = 'Wiktionary'; }
if (isoLanguage=='es') {  site = 'Wikcionario'; }
if (isoLanguage=='et') {  site = 'Vikisõnastik'; }
if (isoLanguage=='eu') {  site = 'Wikiztegia'; }
if (isoLanguage=='ext') {  site = 'Wiktionary'; }
if (isoLanguage=='fa') {  site = 'ویکیواژه'; }
if (isoLanguage=='ff') {  site = 'Wiktionary'; }
if (isoLanguage=='fi') {  site = 'Wikisanakirja'; }
if (isoLanguage=='fj') {  site = 'Wiktionary'; }
if (isoLanguage=='fo') {  site = 'Wiktionary'; }
if (isoLanguage=='fr') {  site = 'Wiktionnaire'; }
if (isoLanguage=='frp') {  site = 'Wiktionary'; }
if (isoLanguage=='frr') {  site = 'Wiktionary'; }
if (isoLanguage=='fur') {  site = 'Wiktionary'; }
if (isoLanguage=='fy') {  site = 'Wiktionary'; }
if (isoLanguage=='ga') {  site = 'Vicífhoclóir'; }
if (isoLanguage=='gag') {  site = 'Wiktionary'; }
if (isoLanguage=='gan') {  site = 'Wiktionary'; }
if (isoLanguage=='gcr') {  site = 'Wiktionary'; }
if (isoLanguage=='gd') {  site = 'Wiktionary'; }
if (isoLanguage=='gl') {  site = 'Wiktionary'; }
if (isoLanguage=='glk') {  site = 'Wiktionary'; }
if (isoLanguage=='gn') {  site = 'Wikiñe\'ẽndy'; }
if (isoLanguage=='gor') {  site = 'Wiktionary'; }
if (isoLanguage=='gsw') {  site = 'Wiktionary'; }
if (isoLanguage=='gu') {  site = 'વિક્શનરી'; }
if (isoLanguage=='gv') {  site = 'Wiktionary'; }
if (isoLanguage=='ha') {  site = 'Wiktionary'; }
if (isoLanguage=='hak') {  site = 'Wiktionary'; }
if (isoLanguage=='haw') {  site = 'Wiktionary'; }
if (isoLanguage=='he') {  site = 'ויקימילון'; }
if (isoLanguage=='hi') {  site = 'विक्षनरी'; }
if (isoLanguage=='hr') {  site = 'Wječnik'; }
if (isoLanguage=='hsb') {  site = 'Wiktionary'; }
if (isoLanguage=='ht') {  site = 'Wiktionary'; }
if (isoLanguage=='hyw') {  site = 'Ուիքիբառարան'; }
if (isoLanguage=='id') {  site = 'Wiktionary'; }
if (isoLanguage=='ig') {  site = 'Wiktionary'; }
if (isoLanguage=='ik') {  site = 'Wiktionary'; }
if (isoLanguage=='ilo') {  site = 'Wiktionary'; }
if (isoLanguage=='inh') {  site = 'Wiktionary'; }
if (isoLanguage=='is') {  site = 'Wikiorðabókin'; }
if (isoLanguage=='it') {  site = 'Wikizionario'; }
if (isoLanguage=='iu') {  site = 'Wiktionary'; }
if (isoLanguage=='ja') {  site = 'ウィクショナリー'; }
if (isoLanguage=='jam') {  site = 'Wiktionary'; }
if (isoLanguage=='jv') {  site = 'Wiktionary'; }
if (isoLanguage=='ka') {  site = 'ვიქსიკონი'; }
if (isoLanguage=='kaa') {  site = 'Wiktionary'; }
if (isoLanguage=='kab') {  site = 'Wiktionary'; }
if (isoLanguage=='kbp') {  site = 'Wiktionary'; }
if (isoLanguage=='kg') {  site = 'Wiktionary'; }
if (isoLanguage=='ki') {  site = 'Wiktionary'; }
if (isoLanguage=='kk') {  site = 'Wiktionary'; }
if (isoLanguage=='kl') {  site = 'Wiktionary'; }
if (isoLanguage=='km') {  site = 'វិគីនានុក្រម'; }
if (isoLanguage=='kn') {  site = 'ವಿಕ್ಷನರಿ'; }
if (isoLanguage=='ko') {  site = '위키낱말사전'; }
if (isoLanguage=='koi') {  site = 'Wiktionary'; }
if (isoLanguage=='krc') {  site = 'Wiktionary'; }
if (isoLanguage=='ks') {  site = 'Wiktionary'; }
if (isoLanguage=='ksh') {  site = 'Wiktionary'; }
if (isoLanguage=='ksh') {  site = 'Wiktionary'; }
if (isoLanguage=='ku') {  site = 'Wîkîferheng'; }
if (isoLanguage=='ku') {  site = 'Wîkîferheng'; }
if (isoLanguage=='kw') {  site = 'Wiktionary'; }
if (isoLanguage=='ky') {  site = 'Wiktionary'; }
if (isoLanguage=='la') {  site = 'Victionarium'; }
if (isoLanguage=='lad') {  site = 'Viksiyonaryo'; }
if (isoLanguage=='lb') {  site = 'Wiktionary'; }
if (isoLanguage=='lbe') {  site = 'Wiktionary'; }
if (isoLanguage=='lez') {  site = 'Wiktionary'; }
if (isoLanguage=='lg') {  site = 'Wiktionary'; }
if (isoLanguage=='li') {  site = 'Wiktionary'; }
if (isoLanguage=='lij') {  site = 'Wiktionary'; }
if (isoLanguage=='liv') {  site = 'Wiktionary'; }
if (isoLanguage=='lmo') {  site = 'Wiktionary'; }
if (isoLanguage=='ln') {  site = 'Wiktionary'; }
if (isoLanguage=='lo') {  site = 'Wiktionary'; }
if (isoLanguage=='lt') {  site = 'Vikižodynas'; }
if (isoLanguage=='ltg') {  site = 'Wiktionary'; }
if (isoLanguage=='lv') {  site = 'Vikivārdnīca'; }
if (isoLanguage=='mai') {  site = 'Wiktionary'; }
if (isoLanguage=='map-bms') {  site = 'Wiktionary'; }
if (isoLanguage=='mdf') {  site = 'Wiktionary'; }
if (isoLanguage=='mg') {  site = 'Wikibolana'; }
if (isoLanguage=='mhr') {  site = 'Wiktionary'; }
if (isoLanguage=='mi') {  site = 'Wiktionary'; }
if (isoLanguage=='min') {  site = 'Wiktionary'; }
if (isoLanguage=='mk') {  site = 'Викиречник'; }
if (isoLanguage=='ml') {  site = 'വിക്ഷണറി'; }
if (isoLanguage=='mn') {  site = 'Wiktionary'; }
if (isoLanguage=='mnw') {  site = 'Wiktionary'; }
if (isoLanguage=='mo') {  site = 'Wiktionary'; }
if (isoLanguage=='mr') {  site = 'विक्शनरी'; }
if (isoLanguage=='mrj') {  site = 'Wiktionary'; }
if (isoLanguage=='ms') {  site = 'Wikikamus'; }
if (isoLanguage=='mt') {  site = 'Wikizzjunarju'; }
if (isoLanguage=='mwl') {  site = 'Wiktionary'; }
if (isoLanguage=='my') {  site = 'ဝစ်ရှင်နရီ'; }
if (isoLanguage=='myv') {  site = 'Wiktionary'; }
if (isoLanguage=='mzn') {  site = 'Wiktionary'; }
if (isoLanguage=='na') {  site = 'Wiktionary'; }
if (isoLanguage=='nah') {  site = 'Wiktionary'; }
if (isoLanguage=='nan') {  site = 'Wiktionary'; }
if (isoLanguage=='nap') {  site = 'Wiktionary'; }
if (isoLanguage=='nb') {  site = 'Wiktionary'; }
if (isoLanguage=='nds') {  site = 'Wiktionary'; }
if (isoLanguage=='nds-nl') {  site = 'Wiktionary'; }
if (isoLanguage=='ne') {  site = 'विक्सनरी'; }
if (isoLanguage=='new') {  site = 'Wiktionary'; }
if (isoLanguage=='ng') {  site = 'Wiktionary'; }
if (isoLanguage=='nl') {  site = 'WikiWoordenboek'; }
if (isoLanguage=='nn') {  site = 'Wiktionary'; }
if (isoLanguage=='no') {  site = 'Wiktionary'; }
if (isoLanguage=='nrm') {  site = 'Wiktionary'; }
if (isoLanguage=='nso') {  site = 'Wiktionary'; }
if (isoLanguage=='ny') {  site = 'Wiktionary'; }
if (isoLanguage=='oc') {  site = 'Wikiccionari'; }
if (isoLanguage=='olo') {  site = 'Wiktionary'; }
if (isoLanguage=='om') {  site = 'Wiktionary'; }
if (isoLanguage=='or') {  site = 'ଉଇକି ଅଭିଧାନ'; }
if (isoLanguage=='os') {  site = 'Wiktionary'; }
if (isoLanguage=='pa') {  site = 'ਵਿਕਸ਼ਨਰੀ'; }
if (isoLanguage=='pag') {  site = 'Wiktionary'; }
if (isoLanguage=='pap') {  site = 'Wiktionary'; }
if (isoLanguage=='pcd') {  site = 'Wiktionary'; }
if (isoLanguage=='pdc') {  site = 'Wiktionary'; }
if (isoLanguage=='pfl') {  site = 'Wiktionary'; }
if (isoLanguage=='pi') {  site = 'Wiktionary'; }
if (isoLanguage=='pih') {  site = 'Wiktionary'; }
if (isoLanguage=='pl') {  site = 'Wikisłownik'; }
if (isoLanguage=='pms') {  site = 'Wiktionary'; }
if (isoLanguage=='pnt') {  site = 'Wiktionary'; }
if (isoLanguage=='ps') {  site = 'ويکيسيند'; }
if (isoLanguage=='pt') {  site = 'Wikcionário'; }
if (isoLanguage=='pt-br') {  site = 'Wikcionário'; }
if (isoLanguage=='qu') {  site = 'Wiktionary'; }
if (isoLanguage=='rm') {  site = 'Wiktionary'; }
if (isoLanguage=='rmy') {  site = 'Wiktionary'; }
if (isoLanguage=='ro') {  site = 'Wikționar'; }
if (isoLanguage=='ru') {  site = 'Викисловарь'; }
if (isoLanguage=='rue') {  site = 'Wiktionary'; }
if (isoLanguage=='rup') {  site = 'Wikționar'; }
if (isoLanguage=='rw') {  site = 'Wiktionary'; }
if (isoLanguage=='sa') {  site = 'Wiktionary'; }
if (isoLanguage=='sah') {  site = 'Wiktionary'; }
if (isoLanguage=='sat') {  site = 'Wiktionary'; }
if (isoLanguage=='sc') {  site = 'Wiktionary'; }
if (isoLanguage=='scn') {  site = 'Wikizziunariu'; }
if (isoLanguage=='sco') {  site = 'Wiktionar'; }
if (isoLanguage=='sd') {  site = 'وڪي لغت'; }
if (isoLanguage=='se') {  site = 'Wiktionary'; }
if (isoLanguage=='sg') {  site = 'Wïkïtënëbûku'; }
if (isoLanguage=='sgs') {  site = 'Wiktionary'; }
if (isoLanguage=='sh') {  site = 'Wečnik'; }
if (isoLanguage=='shn') {  site = 'Wiktionary'; }
if (isoLanguage=='si') {  site = 'වික්ෂනරි'; }
if (isoLanguage=='sk') {  site = 'Wikislovník'; }
if (isoLanguage=='sl') {  site = 'Wikislovar'; }
if (isoLanguage=='sli') {  site = 'Wiktionary'; }
if (isoLanguage=='sm') {  site = 'Wiktionary'; }
if (isoLanguage=='sn') {  site = 'Wiktionary'; }
if (isoLanguage=='so') {  site = 'Wiktionary'; }
if (isoLanguage=='sq') {  site = 'Wiktionary'; }
if (isoLanguage=='sr') {  site = 'Викиречник'; }
if (isoLanguage=='srn') {  site = 'Wiktionary'; }
if (isoLanguage=='ss') {  site = 'Wiktionary'; }
if (isoLanguage=='stq') {  site = 'Wiktionary'; }
if (isoLanguage=='su') {  site = 'Wiktionary'; }
if (isoLanguage=='sv') {  site = 'Wiktionary'; }
if (isoLanguage=='sw') {  site = 'Wiktionary'; }
if (isoLanguage=='szl') {  site = 'Wiktionary'; }
if (isoLanguage=='szy') {  site = 'Wiktionary'; }
if (isoLanguage=='ta') {  site = 'விக்சனரி'; }
if (isoLanguage=='tcy') {  site = 'Wiktionary'; }
if (isoLanguage=='te') {  site = 'విక్షనరీ'; }
if (isoLanguage=='tet') {  site = 'Wiktionary'; }
if (isoLanguage=='tg') {  site = 'Викилуғат'; }
if (isoLanguage=='th') {  site = 'วิกิพจนานุกรม'; }
if (isoLanguage=='ti') {  site = 'Wiktionary'; }
if (isoLanguage=='tk') {  site = 'Wiktionary'; }
if (isoLanguage=='tl') {  site = 'Wiktionary'; }
if (isoLanguage=='tn') {  site = 'Wiki-Tlhanodi'; }
if (isoLanguage=='tpi') {  site = 'Wiktionary'; }
if (isoLanguage=='tr') {  site = 'Vikisözlük'; }
if (isoLanguage=='ts') {  site = 'Wiktionary'; }
if (isoLanguage=='tt') {  site = 'Викисүзлек'; }
if (isoLanguage=='tw') {  site = 'Wiktionary'; }
if (isoLanguage=='ty') {  site = 'Wiktionary'; }
if (isoLanguage=='tyv') {  site = 'Wiktionary'; }
if (isoLanguage=='udm') {  site = 'Wiktionary'; }
if (isoLanguage=='ug') {  site = 'Wiktionary'; }
if (isoLanguage=='uk') {  site = 'Вікісловник'; }
if (isoLanguage=='ur') {  site = 'ویکی لغت'; }
if (isoLanguage=='uz') {  site = 'Vikilugʻat'; }
if (isoLanguage=='ve') {  site = 'Wiktionary'; }
if (isoLanguage=='vec') {  site = 'Wikisionario'; }
if (isoLanguage=='vep') {  site = 'Wiktionary'; }
if (isoLanguage=='vi') {  site = 'Wiktionary'; }
if (isoLanguage=='vls') {  site = 'Wiktionary'; }
if (isoLanguage=='vls') {  site = 'Wiktionary'; }
if (isoLanguage=='vro') {  site = 'Wiktionary'; }
if (isoLanguage=='wa') {  site = 'Wiccionaire'; }
if (isoLanguage=='war') {  site = 'Wiktionary'; }
if (isoLanguage=='wo') {  site = 'Wikbaatukaay'; }
if (isoLanguage=='wuu') {  site = '维基词典'; }
if (isoLanguage=='xal') {  site = 'Wiktionary'; }
if (isoLanguage=='xh') {  site = 'Wiktionary'; }
if (isoLanguage=='xmf') {  site = 'Wiktionary'; }
if (isoLanguage=='yi') {  site = 'וויקיווערטערבוך'; }
if (isoLanguage=='yo') {  site = 'Wiktionary'; }
if (isoLanguage=='yue') {  site = '維基辭典'; }
if (isoLanguage=='za') {  site = 'Veizgiek Swzdenj'; }
if (isoLanguage=='zea') {  site = 'Wiktionary'; }
if (isoLanguage=='zh') {  site = '维基词典'; }
if (isoLanguage=='zh-cn') {  site = '维基词典'; }
if (isoLanguage=='zh-hans') {  site = '维基词典'; }
if (isoLanguage=='zh-hant') {  site = '維基詞典'; }
if (isoLanguage=='zh-sg') {  site = 'Wiktionary'; }
if (isoLanguage=='zh-tw') {  site = '維基詞典'; }
if (isoLanguage=='zh-tw') {  site = '維基詞典'; }
if (isoLanguage=='zu') {  site = 'Wiktionary'; }
				}
				if (article.includes("species.wikimedia.org")) {
if (isoLanguage=='aa') {  site = 'Wikispecies'; }
if (isoLanguage=='ab') {  site = 'Wikispecies'; }
if (isoLanguage=='ace') {  site = 'Wikispecies'; }
if (isoLanguage=='ady') {  site = 'Wikispecies'; }
if (isoLanguage=='af') {  site = 'Wikispecies'; }
if (isoLanguage=='ak') {  site = 'Wikispecies'; }
if (isoLanguage=='am') {  site = 'Wikispecies'; }
if (isoLanguage=='an') {  site = 'Biquiespecies'; }
if (isoLanguage=='ar') {  site = 'ويكي أنواع'; }
if (isoLanguage=='arc') {  site = 'Wikispecies'; }
if (isoLanguage=='as') {  site = 'ৱিকিস্পিচিজ'; }
if (isoLanguage=='ast') {  site = 'Wikispecies'; }
if (isoLanguage=='atj') {  site = 'Wikispecies'; }
if (isoLanguage=='av') {  site = 'Wikispecies'; }
if (isoLanguage=='awa') {  site = 'Wikispecies'; }
if (isoLanguage=='ay') {  site = 'Wikispecies'; }
if (isoLanguage=='az') {  site = 'VikiNövlər'; }
if (isoLanguage=='ba') {  site = 'Wikispecies'; }
if (isoLanguage=='ban') {  site = 'Wikispecies'; }
if (isoLanguage=='bar') {  site = 'Wikispecies'; }
if (isoLanguage=='bcl') {  site = 'Wikispecies'; }
if (isoLanguage=='be') {  site = 'Віківіды'; }
if (isoLanguage=='bg') {  site = 'Уикивидове'; }
if (isoLanguage=='bho') {  site = 'Wikispecies'; }
if (isoLanguage=='bi') {  site = 'Wikispecies'; }
if (isoLanguage=='bjn') {  site = 'Wikispecies'; }
if (isoLanguage=='bm') {  site = 'Wikispecies'; }
if (isoLanguage=='bn') {  site = 'উইকিপ্রজাতি'; }
if (isoLanguage=='bo') {  site = 'Wikispecies'; }
if (isoLanguage=='bpy') {  site = 'উইকিপ্রজাতি'; }
if (isoLanguage=='br') {  site = 'Wikispecies'; }
if (isoLanguage=='brh') {  site = 'Wikispecies'; }
if (isoLanguage=='bs') {  site = 'Wikivrste'; }
if (isoLanguage=='bug') {  site = 'Wikispecies'; }
if (isoLanguage=='bxr') {  site = 'Wikispecies'; }
if (isoLanguage=='ca') {  site = 'Viquiespècies'; }
if (isoLanguage=='cbk-zam') {  site = 'Wikispecies'; }
if (isoLanguage=='cdo') {  site = 'Wiki Ŭk-cṳ̄ng'; }
if (isoLanguage=='ce') {  site = 'Wikispecies'; }
if (isoLanguage=='ceb') {  site = 'Wikispecies'; }
if (isoLanguage=='ch') {  site = 'Wikispecies'; }
if (isoLanguage=='chr') {  site = 'Wikispecies'; }
if (isoLanguage=='chy') {  site = 'Wikispecies'; }
if (isoLanguage=='ckb') {  site = 'Wikispecies'; }
if (isoLanguage=='co') {  site = 'Wikispecies'; }
if (isoLanguage=='crh') {  site = 'Wikispecies'; }
if (isoLanguage=='cs') {  site = 'Wikidruhy'; }
if (isoLanguage=='csb') {  site = 'Wikispecies'; }
if (isoLanguage=='cu') {  site = 'Wikispecies'; }
if (isoLanguage=='cv') {  site = 'Викитĕссем'; }
if (isoLanguage=='cy') {  site = 'Wicirywogaeth'; }
if (isoLanguage=='da') {  site = 'Wikispecies'; }
if (isoLanguage=='de') {  site = 'Wikispecies'; }
if (isoLanguage=='diq') {  site = 'Wikispecies'; }
if (isoLanguage=='dsb') {  site = 'Wikispecies'; }
if (isoLanguage=='dty') {  site = 'Wikispecies'; }
if (isoLanguage=='dv') {  site = 'Wikispecies'; }
if (isoLanguage=='ee') {  site = 'Wikispecies'; }
if (isoLanguage=='el') {  site = 'Βικιείδη'; }
if (isoLanguage=='el') {  site = 'Βικιείδη'; }
if (isoLanguage=='eml') {  site = 'Wikispecies'; }
if (isoLanguage=='en') {  site = 'Wikispecies'; }
if (isoLanguage=='en-ca') {  site = 'Wikispecies'; }
if (isoLanguage=='en-gb') {  site = 'Wikispecies'; }
if (isoLanguage=='es') {  site = 'Wikispecies'; }
if (isoLanguage=='et') {  site = 'Wikispecies'; }
if (isoLanguage=='eu') {  site = 'Wikiespezieak'; }
if (isoLanguage=='ext') {  site = 'Güiquiespéciis'; }
if (isoLanguage=='fa') {  site = 'ویکیگونه'; }
if (isoLanguage=='ff') {  site = 'Wikispecies'; }
if (isoLanguage=='fi') {  site = 'Wikispecies'; }
if (isoLanguage=='fj') {  site = 'Wikispecies'; }
if (isoLanguage=='fo') {  site = 'Wikispecies'; }
if (isoLanguage=='fr') {  site = 'Wikispecies'; }
if (isoLanguage=='frp') {  site = 'Wikispecies'; }
if (isoLanguage=='frr') {  site = 'Wikispecies'; }
if (isoLanguage=='fur') {  site = 'Wikispecies'; }
if (isoLanguage=='fy') {  site = 'Wikispecies'; }
if (isoLanguage=='ga') {  site = 'Wikispecies'; }
if (isoLanguage=='gag') {  site = 'Wikispecies'; }
if (isoLanguage=='gan') {  site = 'Wikispecies'; }
if (isoLanguage=='gcr') {  site = 'Wikispecies'; }
if (isoLanguage=='gd') {  site = 'Wikispecies'; }
if (isoLanguage=='gl') {  site = 'Wikispecies'; }
if (isoLanguage=='glk') {  site = 'Wikispecies'; }
if (isoLanguage=='gn') {  site = 'Wikispecies'; }
if (isoLanguage=='gor') {  site = 'Wikispecies'; }
if (isoLanguage=='gsw') {  site = 'Wikispecies'; }
if (isoLanguage=='gu') {  site = 'Wikispecies'; }
if (isoLanguage=='gv') {  site = 'Wikispecies'; }
if (isoLanguage=='ha') {  site = 'Wikispecies'; }
if (isoLanguage=='hak') {  site = 'Wikispecies'; }
if (isoLanguage=='haw') {  site = 'Wikispecies'; }
if (isoLanguage=='he') {  site = 'ויקימינים'; }
if (isoLanguage=='hi') {  site = 'विकिप्रजाति'; }
if (isoLanguage=='hr') {  site = 'Wikispecies'; }
if (isoLanguage=='hsb') {  site = 'Wikispecies'; }
if (isoLanguage=='ht') {  site = 'Wikispecies'; }
if (isoLanguage=='hyw') {  site = 'Wikispecies'; }
if (isoLanguage=='id') {  site = 'Wikispecies'; }
if (isoLanguage=='ig') {  site = 'Wikispecies'; }
if (isoLanguage=='ik') {  site = 'Wikispecies'; }
if (isoLanguage=='ilo') {  site = 'Wikispecies'; }
if (isoLanguage=='inh') {  site = 'Wikispecies'; }
if (isoLanguage=='is') {  site = 'Wikilífverur'; }
if (isoLanguage=='it') {  site = 'Wikispecies'; }
if (isoLanguage=='iu') {  site = 'Wikispecies'; }
if (isoLanguage=='ja') {  site = 'ウィキスピーシーズ'; }
if (isoLanguage=='jam') {  site = 'Wikispecies'; }
if (isoLanguage=='jv') {  site = 'Wikispecies'; }
if (isoLanguage=='ka') {  site = 'Wikispecies'; }
if (isoLanguage=='kaa') {  site = 'Wikispecies'; }
if (isoLanguage=='kab') {  site = 'Wikispecies'; }
if (isoLanguage=='kbp') {  site = 'Wikispecies'; }
if (isoLanguage=='kg') {  site = 'Wikispecies'; }
if (isoLanguage=='ki') {  site = 'Wikispecies'; }
if (isoLanguage=='kk') {  site = 'Wikispecies'; }
if (isoLanguage=='kl') {  site = 'Wikispecies'; }
if (isoLanguage=='km') {  site = 'Wikispecies'; }
if (isoLanguage=='kn') {  site = 'ವಿಕಿ ಸ್ಪೀಷೀಸ್'; }
if (isoLanguage=='ko') {  site = '위키생물종'; }
if (isoLanguage=='koi') {  site = 'Wikispecies'; }
if (isoLanguage=='krc') {  site = 'Wikispecies'; }
if (isoLanguage=='ks') {  site = 'Wikispecies'; }
if (isoLanguage=='ksh') {  site = 'Wikispecies'; }
if (isoLanguage=='ksh') {  site = 'Wikispecies'; }
if (isoLanguage=='ku') {  site = 'Wikispecies'; }
if (isoLanguage=='ku') {  site = 'Wikispecies'; }
if (isoLanguage=='kw') {  site = 'Wikispecies'; }
if (isoLanguage=='ky') {  site = 'Wikispecies'; }
if (isoLanguage=='la') {  site = 'Wikispecies'; }
if (isoLanguage=='lad') {  site = 'Wikispecies'; }
if (isoLanguage=='lb') {  site = 'Wikispecies'; }
if (isoLanguage=='lbe') {  site = 'Wikispecies'; }
if (isoLanguage=='lez') {  site = 'Wikispecies'; }
if (isoLanguage=='lg') {  site = 'Wikispecies'; }
if (isoLanguage=='li') {  site = 'Wikispecies'; }
if (isoLanguage=='lij') {  site = 'Wikispecies'; }
if (isoLanguage=='liv') {  site = 'Wikispecies'; }
if (isoLanguage=='lmo') {  site = 'Wikispecies'; }
if (isoLanguage=='ln') {  site = 'Wikispecies'; }
if (isoLanguage=='lo') {  site = 'Wikispecies'; }
if (isoLanguage=='lt') {  site = 'Vikirūšys'; }
if (isoLanguage=='ltg') {  site = 'Wikispecies'; }
if (isoLanguage=='lv') {  site = 'Wikispecies'; }
if (isoLanguage=='mai') {  site = 'Wikispecies'; }
if (isoLanguage=='map-bms') {  site = 'Wikispecies'; }
if (isoLanguage=='mdf') {  site = 'Wikispecies'; }
if (isoLanguage=='mg') {  site = 'Wikispecies'; }
if (isoLanguage=='mhr') {  site = 'Wikispecies'; }
if (isoLanguage=='mi') {  site = 'Wikispecies'; }
if (isoLanguage=='min') {  site = 'Wikispecies'; }
if (isoLanguage=='mk') {  site = 'Викивидови'; }
if (isoLanguage=='ml') {  site = 'വിക്കിസ്പീഷിസ്'; }
if (isoLanguage=='mn') {  site = 'Wikispecies'; }
if (isoLanguage=='mnw') {  site = 'Wikispecies'; }
if (isoLanguage=='mo') {  site = 'Wikispecies'; }
if (isoLanguage=='mr') {  site = 'Wikispecies'; }
if (isoLanguage=='mrj') {  site = 'Wikispecies'; }
if (isoLanguage=='ms') {  site = 'Wikispecies'; }
if (isoLanguage=='mt') {  site = 'Wikispeċi'; }
if (isoLanguage=='mwl') {  site = 'Wikispecies'; }
if (isoLanguage=='my') {  site = 'Wikispecies'; }
if (isoLanguage=='myv') {  site = 'Wikispecies'; }
if (isoLanguage=='mzn') {  site = 'Wikispecies'; }
if (isoLanguage=='na') {  site = 'Wikispecies'; }
if (isoLanguage=='nah') {  site = 'Wikispecies'; }
if (isoLanguage=='nan') {  site = 'Wikispecies'; }
if (isoLanguage=='nap') {  site = 'Wikispecies'; }
if (isoLanguage=='nb') {  site = 'Wikispecies'; }
if (isoLanguage=='nds') {  site = 'Wikispecies'; }
if (isoLanguage=='nds-nl') {  site = 'Wikispecies'; }
if (isoLanguage=='ne') {  site = 'विकिस्पेसिज'; }
if (isoLanguage=='new') {  site = 'Wikispecies'; }
if (isoLanguage=='ng') {  site = 'Wikispecies'; }
if (isoLanguage=='nl') {  site = 'Wikispecies'; }
if (isoLanguage=='nn') {  site = 'Wikispecies'; }
if (isoLanguage=='no') {  site = 'Wikispecies'; }
if (isoLanguage=='nrm') {  site = 'Wikispecies'; }
if (isoLanguage=='nso') {  site = 'Wikispecies'; }
if (isoLanguage=='ny') {  site = 'Wikispecies'; }
if (isoLanguage=='oc') {  site = 'Wikispecies'; }
if (isoLanguage=='olo') {  site = 'Wikispecies'; }
if (isoLanguage=='om') {  site = 'Wikispecies'; }
if (isoLanguage=='or') {  site = 'ଉଇକିସ୍ପିସିସ'; }
if (isoLanguage=='os') {  site = 'Wikispecies'; }
if (isoLanguage=='pa') {  site = 'Wikispecies'; }
if (isoLanguage=='pag') {  site = 'Wikispecies'; }
if (isoLanguage=='pap') {  site = 'Wikispecies'; }
if (isoLanguage=='pcd') {  site = 'Wikispecies'; }
if (isoLanguage=='pdc') {  site = 'Wikispecies'; }
if (isoLanguage=='pfl') {  site = 'Wikispecies'; }
if (isoLanguage=='pi') {  site = 'Wikispecies'; }
if (isoLanguage=='pih') {  site = 'Wikispecies'; }
if (isoLanguage=='pl') {  site = 'Wikispecies'; }
if (isoLanguage=='pms') {  site = 'Wikispecies'; }
if (isoLanguage=='pnt') {  site = 'Wikispecies'; }
if (isoLanguage=='ps') {  site = 'Wikispecies'; }
if (isoLanguage=='pt') {  site = 'Wikispecies'; }
if (isoLanguage=='pt-br') {  site = 'Wikispecies'; }
if (isoLanguage=='qu') {  site = 'Wikispecies'; }
if (isoLanguage=='rm') {  site = 'Wikispecies'; }
if (isoLanguage=='rmy') {  site = 'Wikispecies'; }
if (isoLanguage=='ro') {  site = 'Wikispecies'; }
if (isoLanguage=='ru') {  site = 'Викивиды'; }
if (isoLanguage=='rue') {  site = 'Віківиды'; }
if (isoLanguage=='rup') {  site = 'Wikispecies'; }
if (isoLanguage=='rw') {  site = 'Wikispecies'; }
if (isoLanguage=='sa') {  site = 'Wikispecies'; }
if (isoLanguage=='sah') {  site = 'Wikispecies'; }
if (isoLanguage=='sat') {  site = 'Wikispecies'; }
if (isoLanguage=='sc') {  site = 'Wikispecies'; }
if (isoLanguage=='scn') {  site = 'Wikispecies'; }
if (isoLanguage=='sco') {  site = 'Wikispecies'; }
if (isoLanguage=='sd') {  site = 'Wikispecies'; }
if (isoLanguage=='se') {  site = 'Wikispecies'; }
if (isoLanguage=='sg') {  site = 'Wikispecies'; }
if (isoLanguage=='sgs') {  site = 'Wikispecies'; }
if (isoLanguage=='sh') {  site = 'Wikispecies'; }
if (isoLanguage=='shn') {  site = 'Wikispecies'; }
if (isoLanguage=='si') {  site = 'Wikispecies'; }
if (isoLanguage=='sk') {  site = 'Wikidruhy'; }
if (isoLanguage=='sl') {  site = 'Wikivrste'; }
if (isoLanguage=='sli') {  site = 'Wikispecies'; }
if (isoLanguage=='sm') {  site = 'Wikispecies'; }
if (isoLanguage=='sn') {  site = 'Wikispecies'; }
if (isoLanguage=='so') {  site = 'Wikispecies'; }
if (isoLanguage=='sq') {  site = 'Wikispecies'; }
if (isoLanguage=='sr') {  site = 'Викиврсте'; }
if (isoLanguage=='srn') {  site = 'Wikispecies'; }
if (isoLanguage=='ss') {  site = 'Wikispecies'; }
if (isoLanguage=='stq') {  site = 'Wikispecies'; }
if (isoLanguage=='su') {  site = 'Wikispecies'; }
if (isoLanguage=='sv') {  site = 'Wikispecies'; }
if (isoLanguage=='sw') {  site = 'Wikispecies'; }
if (isoLanguage=='szl') {  site = 'Wikispecies'; }
if (isoLanguage=='szy') {  site = 'Wikispecies'; }
if (isoLanguage=='ta') {  site = 'விக்கியினங்கள்'; }
if (isoLanguage=='tcy') {  site = 'Wikispecies'; }
if (isoLanguage=='te') {  site = 'వికీస్పీసిస్'; }
if (isoLanguage=='tet') {  site = 'Wikispecies'; }
if (isoLanguage=='tg') {  site = 'Викинамуд'; }
if (isoLanguage=='th') {  site = 'วิกิสปีชีส์'; }
if (isoLanguage=='ti') {  site = 'Wikispecies'; }
if (isoLanguage=='tk') {  site = 'Wikispecies'; }
if (isoLanguage=='tl') {  site = 'Wikispecies'; }
if (isoLanguage=='tn') {  site = 'Wikispecies'; }
if (isoLanguage=='tpi') {  site = 'Wikispecies'; }
if (isoLanguage=='tr') {  site = 'Vikitür'; }
if (isoLanguage=='ts') {  site = 'Wikispecies'; }
if (isoLanguage=='tt') {  site = 'Wikitörlär'; }
if (isoLanguage=='tw') {  site = 'Wikispecies'; }
if (isoLanguage=='ty') {  site = 'Wikispecies'; }
if (isoLanguage=='tyv') {  site = 'Wikispecies'; }
if (isoLanguage=='udm') {  site = 'Wikispecies'; }
if (isoLanguage=='ug') {  site = 'Wikispecies'; }
if (isoLanguage=='uk') {  site = 'Віківиди'; }
if (isoLanguage=='ur') {  site = 'ویکی انواع'; }
if (isoLanguage=='uz') {  site = 'Vikiturlar'; }
if (isoLanguage=='ve') {  site = 'Wikispecies'; }
if (isoLanguage=='vec') {  site = 'Wikispecies'; }
if (isoLanguage=='vep') {  site = 'Wikispecies'; }
if (isoLanguage=='vi') {  site = 'Wikispecies'; }
if (isoLanguage=='vls') {  site = 'Wikispecies'; }
if (isoLanguage=='vls') {  site = 'Wikispecies'; }
if (isoLanguage=='vro') {  site = 'Wikispecies'; }
if (isoLanguage=='wa') {  site = 'Wikispecies'; }
if (isoLanguage=='war') {  site = 'Wikispecies'; }
if (isoLanguage=='wo') {  site = 'Wikispecies'; }
if (isoLanguage=='wuu') {  site = '维基物种'; }
if (isoLanguage=='xal') {  site = 'Wikispecies'; }
if (isoLanguage=='xh') {  site = 'Wikispecies'; }
if (isoLanguage=='xmf') {  site = 'Wikispecies'; }
if (isoLanguage=='yi') {  site = 'Wikispecies'; }
if (isoLanguage=='yo') {  site = 'Wikispecies'; }
if (isoLanguage=='yue') {  site = '維基物種'; }
if (isoLanguage=='za') {  site = 'Veizgiek Vuzcungj'; }
if (isoLanguage=='zea') {  site = 'Wikispecies'; }
if (isoLanguage=='zh') {  site = '維基物種'; }
if (isoLanguage=='zh-cn') {  site = '维基物种'; }
if (isoLanguage=='zh-hans') {  site = '维基物种'; }
if (isoLanguage=='zh-hant') {  site = '維基物種'; }
if (isoLanguage=='zh-sg') {  site = 'Wikispecies'; }
if (isoLanguage=='zh-tw') {  site = '維基物種'; }
if (isoLanguage=='zh-tw') {  site = '維基物種'; }
if (isoLanguage=='zu') {  site = 'Wikispecies'; }
				}
				
				name=replaceAll(article.substring(1+article.lastIndexOf("/")),"_"," ");
				
				
				text = text + site + ': <b><a target="_blank" href="'+article+'">' + name + '</a></b><br/>'
			$('#searchSpinner').hide();
			}
			
			// later could display mini map if the item has coords			
			//text = text+'<iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openlinkmap.org/small.php?lat=-33.4&lon=149.5&zoom=14" style="border: 1px solid black"></iframe>'
			$("#div_wiki").html(text);
		}
	});
}

function box1change() {
	div_wd_change();
	div_wiki_change();
	div1change();
	div2change();
	div3change();
	//later could add images and maps
}


$(document).ready(function(){
		
	// not searching initially, so hide the spinner icon
	$('#searchSpinner').hide();
    
	// fires when there is a change in the language dropdown
	$("#box0").change(function(){
		box0change();
	});

	// fires when there is a change in the item dropdown
	$("#box1").change(function(){
		box1change();
	});
	
	// Main routine: execute SPARQL queries to get values and add them to the select options
	gettabURL(function() {
		setStatusOptions(isoLanguage);
	});

});