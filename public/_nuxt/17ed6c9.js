(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{449:function(e,t,n){var content=n(458);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(68).default)("51c85ee4",content,!0,{sourceMap:!1})},457:function(e,t,n){"use strict";n(449)},458:function(e,t,n){(t=n(67)(!1)).push([e.i,"input[type=color][data-v-b8343472]::-webkit-color-swatch-wrapper{padding:0}#colorPicker[data-v-b8343472]{border:0;padding:0;margin:0;width:30px;height:30px}",""]),e.exports=t},459:function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4);var r=n(448),o={data:function(){return{title:"Highmaps (Africa) basic demo",mapChart:{mapName:"africa",mapData:r},watchers:["options.title"]}},computed:{chartOptions:function(){return{chart:{map:"africa"},title:{text:this.title},subtitle:{text:'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'},mapNavigation:{enabled:!0,buttonOptions:{alignTo:"spacingBox"}},colorAxis:{min:0},series:[{name:"Random data",states:{hover:{color:"#BADA55"}},dataLabels:{enabled:!0,format:"{point.name}"},allAreas:!1,data:[["ug",0],["ng",1],["st",2],["tz",3],["sl",4],["gw",5],["cv",6],["sc",7],["tn",8],["mg",9],["ke",10],["cd",11],["fr",12],["mr",13],["dz",14],["er",15],["gq",16],["mu",17],["sn",18],["km",19],["et",20],["ci",21],["gh",22],["zm",23],["na",24],["rw",25],["sx",26],["so",27],["cm",28],["cg",29],["eh",30],["bj",31],["bf",32],["tg",33],["ne",34],["ly",35],["lr",36],["mw",37],["gm",38],["td",39],["ga",40],["dj",41],["bi",42],["ao",43],["gn",44],["zw",45],["za",46],["mz",47],["sz",48],["ml",49],["bw",50],["sd",51],["ma",52],["eg",53],["ls",54],["ss",55],["cf",56]]}]}}}},l=n(66),m=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control centered",domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),n("highmap",{attrs:{mapChart:e.mapChart,options:e.chartOptions,update:e.watchers}})],1)}),[],!1,null,"2002cc64",null).exports,d=(n(25),n(10),n(39),n(27),n(34),n(38)),c={data:function(){return{caption:"Chart caption here",title:"Basic Chart",subtitle:"More details here",points:[10,0,8,2,6,4,5,5],seriesColor:"",animationDuration:1e3,chartType:"",colorInputIsSupported:null,chartTypes:[],durations:[0,500,1e3,2e3],seriesName:"My Data",yAxis:"My Values",watchers:void 0,colors:["Red","Green","Blue","Pink","Orange","Brown","Black","Purple"],lastPointClicked:{timestamp:"",x:"",y:""},sexy:!1}},computed:{invertedColor:function(){var e=this;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"#"+((16777215^parseInt("0x".concat(e.seriesColor.split("#")[1])))+t).toString(16)}},chartOptions:function(){var e=this;return{caption:{text:this.caption,style:{color:this.sexy?this.invertedColor(0):"#black"}},chart:{backgroundColor:this.sexy?{linearGradient:{x1:0,x2:0,y1:0,y2:1},stops:[[0,this.seriesColor],[.5,"#ffffff"],[1,this.seriesColor]]}:"#ffffff",className:"my-chart",type:this.chartType.toLowerCase()},plotOptions:{series:{cursor:"pointer",point:{events:{click:function(){e.$emit("pointClicked",this)}}}}},yAxis:[{title:{text:this.yAxis,style:{color:"#000000"}}}],title:{style:{color:this.sexy?this.invertedColor(0):"#black"},text:"".concat(this.title," ")+(""!==this.lastPointClicked.timestamp?"(Point clicked: ".concat(this.lastPointClicked.timestamp,")"):"")},subtitle:{style:{color:this.sexy?this.invertedColor(0):"#black"},text:"".concat(this.subtitle)},legend:{itemStyle:{color:this.sexy?this.invertedColor(0):"#black"}},series:[{name:this.seriesName,data:this.points,color:this.seriesColor}]}}},mounted:function(){var e=this,i=document.createElement("input");i.setAttribute("type","color"),this.colorInputIsSupported="color"===i.type,this.chartTypes=this.$highcharts.chartTypes,this.chartType=this.chartTypes[0],this.seriesColor=this.colorInputIsSupported?"#6020cd":this.colors[0],this.$on("pointClicked",(function(t){e.$nextTick((function(){e.doubleIt(t.x,t.y)}))}))},methods:{chartLoaded:function(e){console.log("Chart Loaded! "),console.log("If you need to interact with the API directly, here you go!",e),console.log("Helpul tip: away from the docs? chart.__proto__ in dev tools will show you the methods:",e.__proto__)},doubleIt:function(e,t){Object.assign(this.lastPointClicked,{x:e,y:t}),this.lastPointClicked.timestamp=(new Date).toUTCString(),this.points[e]*=2},setBoth:function(){var e=this;this.title="New Title",this.points[5]=0,this.points=Object(d.a)(this.points),setTimeout((function(){e.points[5]=100,e.points=Object(d.a)(e.points)}),500)}}},v=(n(457),Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chartElem"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-3-auto col-md-3"},[n("div",{attrs:{id:"chartType"}},[n("label",[e._v("Chart Type")]),e._v(" "),n("b-form-select",{attrs:{options:e.chartTypes},model:{value:e.chartType,callback:function(t){e.chartType=t},expression:"chartType"}})],1),e._v(" "),n("div",{attrs:{id:"animationDuration"}},[n("label",[e._v("Animation Duration")]),e._v(" "),n("b-form-select",{attrs:{options:e.durations},model:{value:e.animationDuration,callback:function(t){e.animationDuration=e._n(t)},expression:"animationDuration"}})],1),e._v(" "),n("div",{attrs:{id:"yAxis"}},[n("label",[e._v("y-axis Title")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.yAxis,expression:"yAxis"}],staticClass:"form-control centered",domProps:{value:e.yAxis},on:{focus:function(t){e.watchers=["options.yAxis"]},blur:function(t){e.watchers=void 0},input:function(t){t.target.composing||(e.yAxis=t.target.value)}}})]),e._v(" "),n("div",{attrs:{id:"seriesName"}},[n("label",[e._v("Series Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.seriesName,expression:"seriesName"}],staticClass:"form-control centered",domProps:{value:e.seriesName},on:{focus:function(t){e.watchers=["options.series"]},blur:function(t){e.watchers=void 0},input:function(t){t.target.composing||(e.seriesName=t.target.value)}}})]),e._v(" "),n("div",{attrs:{id:"seriesColor"}},[n("label",[e._v("Series Color")]),e._v(" "),n("div",[e.colorInputIsSupported?n("input",{directives:[{name:"model",rawName:"v-model",value:e.seriesColor,expression:"seriesColor"}],attrs:{id:"colorPicker",type:"color"},domProps:{value:e.seriesColor},on:{input:function(t){t.target.composing||(e.seriesColor=t.target.value)}}}):n("b-form-select",{attrs:{options:e.colors},model:{value:e.seriesColor,callback:function(t){e.seriesColor=t},expression:"seriesColor"}})],1),e._v(" "),n("p",[e._v("Current color: "+e._s(e.seriesColor))])]),e._v(" "),n("div",{attrs:{id:"sexy-bkg"}},[n("b-form-checkbox",{model:{value:e.sexy,callback:function(t){e.sexy=t},expression:"sexy"}},[e._v("\n          Make it sexy\n        ")])],1),e._v(" "),n("div",{attrs:{id:"last-point-info"}},[n("label",[e._v("Click a point to trigger event")]),e._v(" "),n("div",[n("div",[e._v("x: "+e._s(e.lastPointClicked.x))]),e._v(" "),n("div",[e._v("y: "+e._s(e.lastPointClicked.y))])])]),e._v(" "),n("div",{attrs:{id:"caption"}},[n("label",[e._v("Set chart caption")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.caption,expression:"caption"}],staticClass:"form-control centered",domProps:{value:e.caption},on:{focus:function(t){e.watchers=["options.caption"]},blur:function(t){e.watchers=void 0},input:function(t){t.target.composing||(e.caption=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col-9-auto col-md-9"},[n("label",[e._v("Set the chart title (reactively)")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control centered",domProps:{value:e.title},on:{focus:function(t){e.watchers=["options.title"]},blur:function(t){e.watchers=void 0},input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.subtitle,expression:"subtitle"}],staticClass:"form-control centered",domProps:{value:e.subtitle},on:{focus:function(t){e.watchers=["options.subtitle"]},blur:function(t){e.watchers=void 0},input:function(t){t.target.composing||(e.subtitle=t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.setBoth()}}},[e._v("\n        Set two things at once\n      ")]),e._v(" "),n("highchart",{attrs:{options:e.chartOptions,animation:{duration:e.animationDuration},exporting:!0,update:e.watchers},on:{chartLoaded:e.chartLoaded}}),e._v(" "),n("div",[n("b-input-group",{staticClass:"mt-3"},e._l(e.points.length,(function(t){return n("b-form-input",{key:t,staticClass:"centered",attrs:{type:"number"},on:{focus:function(t){e.watchers=["options.series"]},blur:function(t){e.watchers=void 0}},model:{value:e.points[t-1],callback:function(n){e.$set(e.points,t-1,e._n(n))},expression:"points[index-1]"}})})),1),e._v(" "),n("label",[e._v("^^------------ Modify the series data (reactively) ------------^^")])],1)],1)])])}),[],!1,null,"b8343472",null).exports),h=(n(14),{data:function(){return{symbol:"AAPL",watchers:["options.title","options.subtitle","options.series"],result:{},itemsResp:[]}},computed:{companyName:function(){return void 0!==this.quote?this.quote.companyName:"[fetching]"},quote:function(){return null!==this.itemsResp?this.itemsResp[0]:{}},ohlcv:function(){if(null===this.itemsResp||void 0===this.itemsResp[1])return[];var e=this.itemsResp[1].history.map((function(e){return[e.epochTime,e.open,e.high,e.low,e.close]}));return e},chartOptions:function(){return{chart:{type:"candlestick"},rangeSelector:{selected:1},title:{text:"".concat(this.symbol," Stock Price")},subtitle:{text:"".concat(this.companyName," Stock Price")},series:[{name:this.symbol,data:this.ohlcv,tooltip:{valueDecimals:2}}]}},itemsMsg:function(){return{items:["quote","ohlcv"],symbol:this.symbol}}},mounted:function(){this.socket=this.$nuxtSocket({channel:"/finance",namespaceCfg:{emitters:["getItems + itemsMsg --\x3e itemsResp"]}}),this.getItems()},methods:{onInput:function(e){0},updateChart:function(e){e.target.blur(),this.chartOptions.series[0].data=[],this.getItems().then((function(){e.target.focus(),e.target.select()}))}}}),f=Object(l.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-input-group",{staticClass:"mt-3"},[n("b-form-input",{staticClass:"form-control centered",attrs:{id:"symbol"},on:{input:function(t){return e.onInput(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateChart(t)},focus:function(t){e.watchers=["options.title","options.subtitle"]},blur:function(t){e.watchers=["options.title","options.subtitle","options.series"]}},model:{value:e.symbol,callback:function(t){e.symbol=t},expression:"symbol"}}),e._v(" "),n("b-input-group-append",[n("b-button",{staticClass:"btn btn-primary",attrs:{id:"submit-btn",variant:"info"},on:{click:function(t){return e.getItems()}}},[e._v("Get Chart")])],1)],1),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-9-auto col-md-9"},[n("highstock",{attrs:{options:e.chartOptions,update:e.watchers}})],1),e._v(" "),n("div",{staticClass:"col-3-auto col-md-3"},[n("b-table-lite",{attrs:{striped:"","thead-class":"d-none",items:e.quote?Object.entries(e.quote):[]}})],1)])],1)}),[],!1,null,"38b9a705",null).exports,y={data:function(){return{title:"Highmaps basic demo",watchers:["options.title"]}},computed:{chartOptions:function(){return{chart:{map:"myMapName"},title:{text:this.title},subtitle:{text:'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'},mapNavigation:{enabled:!0,buttonOptions:{alignTo:"spacingBox"}},colorAxis:{min:0},series:[{name:"Random data",states:{hover:{color:"#BADA55"}},dataLabels:{enabled:!0,format:"{point.name}"},allAreas:!1,data:[["fo",0],["um",1],["us",2],["jp",3],["sc",4],["in",5],["fr",6],["fm",7],["cn",8],["pt",9],["sw",10],["sh",11],["br",12],["ki",13],["ph",14],["mx",15],["es",16],["bu",17],["mv",18],["sp",19],["gb",20],["gr",21],["as",22],["dk",23],["gl",24],["gu",25],["mp",26],["pr",27],["vi",28],["ca",29],["st",30],["cv",31],["dm",32],["nl",33],["jm",34],["ws",35],["om",36],["vc",37],["tr",38],["bd",39],["lc",40],["nr",41],["no",42],["kn",43],["bh",44],["to",45],["fi",46],["id",47],["mu",48],["se",49],["tt",50],["my",51],["pa",52],["pw",53],["tv",54],["mh",55],["cl",56],["th",57],["gd",58],["ee",59],["ag",60],["tw",61],["bb",62],["it",63],["mt",64],["vu",65],["sg",66],["cy",67],["lk",68],["km",69],["fj",70],["ru",71],["va",72],["sm",73],["kz",74],["az",75],["tj",76],["ls",77],["uz",78],["ma",79],["co",80],["tl",81],["tz",82],["ar",83],["sa",84],["pk",85],["ye",86],["ae",87],["ke",88],["pe",89],["do",90],["ht",91],["pg",92],["ao",93],["kh",94],["vn",95],["mz",96],["cr",97],["bj",98],["ng",99],["ir",100],["sv",101],["sl",102],["gw",103],["hr",104],["bz",105],["za",106],["cf",107],["sd",108],["cd",109],["kw",110],["de",111],["be",112],["ie",113],["kp",114],["kr",115],["gy",116],["hn",117],["mm",118],["ga",119],["gq",120],["ni",121],["lv",122],["ug",123],["mw",124],["am",125],["sx",126],["tm",127],["zm",128],["nc",129],["mr",130],["dz",131],["lt",132],["et",133],["er",134],["gh",135],["si",136],["gt",137],["ba",138],["jo",139],["sy",140],["mc",141],["al",142],["uy",143],["cnm",144],["mn",145],["rw",146],["so",147],["bo",148],["cm",149],["cg",150],["eh",151],["rs",152],["me",153],["tg",154],["la",155],["af",156],["ua",157],["sk",158],["jk",159],["bg",160],["qa",161],["li",162],["at",163],["sz",164],["hu",165],["ro",166],["ne",167],["lu",168],["ad",169],["ci",170],["lr",171],["bn",172],["iq",173],["ge",174],["gm",175],["ch",176],["td",177],["kv",178],["lb",179],["dj",180],["bi",181],["sr",182],["il",183],["ml",184],["sn",185],["gn",186],["zw",187],["pl",188],["mk",189],["py",190],["by",191],["cz",192],["bf",193],["na",194],["ly",195],["tn",196],["bt",197],["md",198],["ss",199],["bw",200],["bs",201],["nz",202],["cu",203],["ec",204],["au",205],["ve",206],["sb",207],["mg",208],["is",209],["eg",210],["kg",211],["np",212]]}]}}}},C=Object(l.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control centered",domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),n("highmap",{attrs:{options:e.chartOptions,update:e.watchers}})],1)}),[],!1,null,"09a4f968",null).exports,w={data:function(){return{title:"Highmaps (Africa) basic demo",mapChart:{mapName:"africa",mapData:r},watchers:["options.title"]}},computed:{chartOptions:function(){return{chart:{map:"africa"},title:{text:this.title},subtitle:{text:'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'},mapNavigation:{enabled:!0,buttonOptions:{alignTo:"spacingBox"}},colorAxis:{min:0},series:[{name:"Random data",states:{hover:{color:"#BADA55"}},dataLabels:{enabled:!0,format:"{point.name}"},allAreas:!1,data:[["ug",0],["ng",1],["st",2],["tz",3],["sl",4],["gw",5],["cv",6],["sc",7],["tn",8],["mg",9],["ke",10],["cd",11],["fr",12],["mr",13],["dz",14],["er",15],["gq",16],["mu",17],["sn",18],["km",19],["et",20],["ci",21],["gh",22],["zm",23],["na",24],["rw",25],["sx",26],["so",27],["cm",28],["cg",29],["eh",30],["bj",31],["bf",32],["tg",33],["ne",34],["ly",35],["lr",36],["mw",37],["gm",38],["td",39],["ga",40],["dj",41],["bi",42],["ao",43],["gn",44],["zw",45],["za",46],["mz",47],["sz",48],["ml",49],["bw",50],["sd",51],["ma",52],["eg",53],["ls",54],["ss",55],["cf",56]]}]}}}},k=Object(l.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Quick Mods (change mods with prop names)\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control centered",domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),n("highchart",{attrs:{modules:["map"],map:e.mapChart,options:e.chartOptions,update:e.watchers}}),e._v(" "),n("br"),e._v('\n  Chart above should match the "highmap" below:\n  '),n("highmap",{attrs:{mapChart:e.mapChart,options:e.chartOptions,update:e.watchers}})],1)}),[],!1,null,"dbd01fac",null).exports,x=(n(239),[{id:"0.0",parent:"",name:"The World"},{id:"1.3",parent:"0.0",name:"Asia"},{id:"1.1",parent:"0.0",name:"Africa"},{id:"1.2",parent:"0.0",name:"America"},{id:"1.4",parent:"0.0",name:"Europe"},{id:"1.5",parent:"0.0",name:"Oceanic"},{id:"2.1",parent:"1.1",name:"Eastern Africa"},{id:"3.1",parent:"2.1",name:"Ethiopia",value:104957438},{id:"3.2",parent:"2.1",name:"Tanzania",value:57310019},{id:"3.3",parent:"2.1",name:"Kenya",value:49699862},{id:"3.4",parent:"2.1",name:"Uganda",value:42862958},{id:"3.5",parent:"2.1",name:"Mozambique",value:29668834},{id:"3.6",parent:"2.1",name:"Madagascar",value:25570895},{id:"3.7",parent:"2.1",name:"Malawi",value:18622104},{id:"3.8",parent:"2.1",name:"Zambia",value:17094130},{id:"3.9",parent:"2.1",name:"Zimbabwe",value:16529904},{id:"3.10",parent:"2.1",name:"Somalia",value:14742523},{id:"3.11",parent:"2.1",name:"South Sudan",value:12575714},{id:"3.12",parent:"2.1",name:"Rwanda",value:12208407},{id:"3.13",parent:"2.1",name:"Burundi",value:10864245},{id:"3.14",parent:"2.1",name:"Eritrea",value:5068831},{id:"3.15",parent:"2.1",name:"Mauritius",value:1265138},{id:"3.16",parent:"2.1",name:"Djibouti",value:956985},{id:"3.17",parent:"2.1",name:"Réunion",value:876562},{id:"3.18",parent:"2.1",name:"Comoros",value:813912},{id:"3.19",parent:"2.1",name:"Mayotte",value:253045},{id:"3.20",parent:"2.1",name:"Seychelles",value:94737},{id:"2.5",parent:"1.1",name:"Western Africa"},{id:"3.42",parent:"2.5",name:"Nigeria",value:190886311},{id:"3.43",parent:"2.5",name:"Ghana",value:28833629},{id:"3.44",parent:"2.5",name:"Côte Ivoire",value:24294750},{id:"3.45",parent:"2.5",name:"Niger",value:21477348},{id:"3.46",parent:"2.5",name:"Burkina Faso",value:19193382},{id:"3.47",parent:"2.5",name:"Mali",value:18541980},{id:"3.48",parent:"2.5",name:"Senegal",value:15850567},{id:"3.49",parent:"2.5",name:"Guinea",value:12717176},{id:"3.50",parent:"2.5",name:"Benin",value:11175692},{id:"3.51",parent:"2.5",name:"Togo",value:7797694},{id:"3.52",parent:"2.5",name:"Sierra Leone",value:7557212},{id:"3.53",parent:"2.5",name:"Liberia",value:4731906},{id:"3.54",parent:"2.5",name:"Mauritania",value:4420184},{id:"3.55",parent:"2.5",name:"The Gambia",value:2100568},{id:"3.56",parent:"2.5",name:"Guinea-Bissau",value:1861283},{id:"3.57",parent:"2.5",name:"Cabo Verde",value:546388},{id:"3.58",parent:"2.5",name:"Saint Helena, Ascension and Tristan da Cunha",value:4049},{id:"2.3",parent:"1.1",name:"North Africa"},{id:"3.30",parent:"2.3",name:"Egypt",value:97553151},{id:"3.31",parent:"2.3",name:"Algeria",value:41318142},{id:"3.32",parent:"2.3",name:"Sudan",value:40533330},{id:"3.33",parent:"2.3",name:"Morocco",value:35739580},{id:"3.34",parent:"2.3",name:"Tunisia",value:11532127},{id:"3.35",parent:"2.3",name:"Libya",value:6374616},{id:"3.36",parent:"2.3",name:"Western Sahara",value:552628},{id:"2.2",parent:"1.1",name:"Central Africa"},{id:"3.21",parent:"2.2",name:"Democratic Republic of the Congo",value:81339988},{id:"3.22",parent:"2.2",name:"Angola",value:29784193},{id:"3.23",parent:"2.2",name:"Cameroon",value:24053727},{id:"3.24",parent:"2.2",name:"Chad",value:14899994},{id:"3.25",parent:"2.2",name:"Congo",value:5260750},{id:"3.26",parent:"2.2",name:"Central African Republic",value:4659080},{id:"3.27",parent:"2.2",name:"Gabon",value:2025137},{id:"3.28",parent:"2.2",name:"Equatorial Guinea",value:1267689},{id:"3.29",parent:"2.2",name:"Sao Tome and Principe",value:204327},{id:"2.4",parent:"1.1",name:"South America"},{id:"3.37",parent:"2.4",name:"South Africa",value:56717156},{id:"3.38",parent:"2.4",name:"Namibia",value:2533794},{id:"3.39",parent:"2.4",name:"Botswana",value:2291661},{id:"3.40",parent:"2.4",name:"Lesotho",value:2233339},{id:"3.41",parent:"2.4",name:"Swaziland",value:1367254},{id:"2.9",parent:"1.2",name:"South America"},{id:"3.98",parent:"2.9",name:"Brazil",value:209288278},{id:"3.99",parent:"2.9",name:"Colombia",value:49065615},{id:"3.100",parent:"2.9",name:"Argentina",value:44271041},{id:"3.101",parent:"2.9",name:"Peru",value:32165485},{id:"3.102",parent:"2.9",name:"Venezuela",value:31977065},{id:"3.103",parent:"2.9",name:"Chile",value:18054726},{id:"3.104",parent:"2.9",name:"Ecuador",value:16624858},{id:"3.105",parent:"2.9",name:"Bolivia",value:11051600},{id:"3.106",parent:"2.9",name:"Paraguay",value:6811297},{id:"3.107",parent:"2.9",name:"Uruguay",value:3456750},{id:"3.108",parent:"2.9",name:"Guyana",value:777859},{id:"3.109",parent:"2.9",name:"Suriname",value:563402},{id:"3.110",parent:"2.9",name:"French Guiana",value:282731},{id:"3.111",parent:"2.9",name:"Falkland Islands",value:2910},{id:"2.8",parent:"1.2",name:"Northern America"},{id:"3.93",parent:"2.8",name:"United States",value:324459463},{id:"3.94",parent:"2.8",name:"Canada",value:36624199},{id:"3.95",parent:"2.8",name:"Bermuda",value:61349},{id:"3.96",parent:"2.8",name:"Greenland",value:56480},{id:"3.97",parent:"2.8",name:"Saint Pierre and Miquelon",value:6320},{id:"2.7",parent:"1.2",name:"Central America"},{id:"3.85",parent:"2.7",name:"Mexico",value:129163276},{id:"3.86",parent:"2.7",name:"Guatemala",value:16913503},{id:"3.87",parent:"2.7",name:"Honduras",value:9265067},{id:"3.88",parent:"2.7",name:"El Salvador",value:6377853},{id:"3.89",parent:"2.7",name:"Nicaragua",value:6217581},{id:"3.90",parent:"2.7",name:"Costa Rica",value:4905769},{id:"3.91",parent:"2.7",name:"Panama",value:4098587},{id:"3.92",parent:"2.7",name:"Belize",value:374681},{id:"2.6",parent:"1.2",name:"Caribbean"},{id:"3.59",parent:"2.6",name:"Cuba",value:11484636},{id:"3.60",parent:"2.6",name:"Haiti",value:10981229},{id:"3.61",parent:"2.6",name:"Dominican Republic",value:10766998},{id:"3.62",parent:"2.6",name:"Puerto Rico",value:3663131},{id:"3.63",parent:"2.6",name:"Jamaica",value:2890299},{id:"3.64",parent:"2.6",name:"Trinidad and Tobago",value:1369125},{id:"3.65",parent:"2.6",name:"Guadeloupe",value:449568},{id:"3.66",parent:"2.6",name:"Bahamas",value:395361},{id:"3.67",parent:"2.6",name:"Martinique",value:384896},{id:"3.68",parent:"2.6",name:"Barbados",value:285719},{id:"3.69",parent:"2.6",name:"Saint Lucia",value:178844},{id:"3.70",parent:"2.6",name:"Curaçao",value:160539},{id:"3.71",parent:"2.6",name:"Saint Vincent and the Grenadines",value:109897},{id:"3.72",parent:"2.6",name:"Grenada",value:107825},{id:"3.73",parent:"2.6",name:"Aruba",value:105264},{id:"3.74",parent:"2.6",name:"United States Virgin Islands",value:104901},{id:"3.75",parent:"2.6",name:"Antigua and Barbuda",value:102012},{id:"3.76",parent:"2.6",name:"Dominica",value:73925},{id:"3.77",parent:"2.6",name:"Cayman Islands",value:61559},{id:"3.78",parent:"2.6",name:"Saint Kitts and Nevis",value:55345},{id:"3.79",parent:"2.6",name:"Sint Maarten",value:40120},{id:"3.80",parent:"2.6",name:"Turks and Caicos Islands",value:35446},{id:"3.81",parent:"2.6",name:"British Virgin Islands",value:31196},{id:"3.82",parent:"2.6",name:"Caribbean Netherlands",value:25398},{id:"3.83",parent:"2.6",name:"Anguilla",value:14909},{id:"3.84",parent:"2.6",name:"Montserrat",value:5177},{id:"2.13",parent:"1.3",name:"Southern Asia"},{id:"3.136",parent:"2.13",name:"India",value:1339180127},{id:"3.137",parent:"2.13",name:"Pakistan",value:197015955},{id:"3.138",parent:"2.13",name:"Bangladesh",value:164669751},{id:"3.139",parent:"2.13",name:"Iran",value:81162788},{id:"3.140",parent:"2.13",name:"Afghanistan",value:35530081},{id:"3.141",parent:"2.13",name:"Nepal",value:29304998},{id:"3.142",parent:"2.13",name:"Sri Lanka",value:20876917},{id:"3.143",parent:"2.13",name:"Bhutan",value:807610},{id:"3.144",parent:"2.13",name:"Maldives",value:436330},{id:"2.11",parent:"1.3",name:"Eastern Asia"},{id:"3.117",parent:"2.11",name:"China",value:1409517397},{id:"3.118",parent:"2.11",name:"Japan",value:127484450},{id:"3.119",parent:"2.11",name:"South Korea",value:50982212},{id:"3.120",parent:"2.11",name:"North Korea",value:25490965},{id:"3.121",parent:"2.11",name:"Taiwan",value:23626456},{id:"3.122",parent:"2.11",name:"Hong Kong",value:7364883},{id:"3.123",parent:"2.11",name:"Mongolia",value:3075647},{id:"3.124",parent:"2.11",name:"Macau",value:622567},{id:"2.12",parent:"1.3",name:"South-Eastern Asia"},{id:"3.125",parent:"2.12",name:"Indonesia",value:263991379},{id:"3.126",parent:"2.12",name:"Philippines",value:104918090},{id:"3.127",parent:"2.12",name:"Vietnam",value:95540800},{id:"3.128",parent:"2.12",name:"Thailand",value:69037513},{id:"3.129",parent:"2.12",name:"Myanmar",value:53370609},{id:"3.130",parent:"2.12",name:"Malaysia",value:31624264},{id:"3.131",parent:"2.12",name:"Cambodia",value:16005373},{id:"3.132",parent:"2.12",name:"Laos",value:6858160},{id:"3.133",parent:"2.12",name:"Singapore",value:5708844},{id:"3.134",parent:"2.12",name:"Timor-Leste",value:1296311},{id:"3.135",parent:"2.12",name:"Brunei",value:428697},{id:"2.14",parent:"1.3",name:"Western Asia"},{id:"3.145",parent:"2.14",name:"Turkey",value:80745020},{id:"3.146",parent:"2.14",name:"Iraq",value:38274618},{id:"3.147",parent:"2.14",name:"Saudi Arabia",value:32938213},{id:"3.148",parent:"2.14",name:"Yemen",value:28250420},{id:"3.149",parent:"2.14",name:"Syria",value:18269868},{id:"3.150",parent:"2.14",name:"Azerbaijan",value:9827589},{id:"3.151",parent:"2.14",name:"Jordan",value:9702353},{id:"3.152",parent:"2.14",name:"United Arab Emirates",value:9400145},{id:"3.153",parent:"2.14",name:"Israel",value:8321570},{id:"3.154",parent:"2.14",name:"Lebanon",value:6082357},{id:"3.155",parent:"2.14",name:"Palestine",value:4920724},{id:"3.156",parent:"2.14",name:"Oman",value:4636262},{id:"3.157",parent:"2.14",name:"Kuwait",value:4136528},{id:"3.158",parent:"2.14",name:"Georgia",value:3912061},{id:"3.159",parent:"2.14",name:"Armenia",value:2930450},{id:"3.160",parent:"2.14",name:"Qatar",value:2639211},{id:"3.161",parent:"2.14",name:"Bahrain",value:1492584},{id:"2.10",parent:"1.3",name:"Central Asia"},{id:"3.112",parent:"2.10",name:"Uzbekistan",value:31910641},{id:"3.113",parent:"2.10",name:"Kazakhstan",value:18204499},{id:"3.114",parent:"2.10",name:"Tajikistan",value:8921343},{id:"3.115",parent:"2.10",name:"Kyrgyzstan",value:6045117},{id:"3.116",parent:"2.10",name:"Turkmenistan",value:5758075},{id:"2.15",parent:"1.4",name:"Eastern Europe"},{id:"3.162",parent:"2.15",name:"Russia",value:143989754},{id:"3.163",parent:"2.15",name:"Ukraine",value:44222947},{id:"3.164",parent:"2.15",name:"Poland",value:38170712},{id:"3.165",parent:"2.15",name:"Romania",value:19679306},{id:"3.166",parent:"2.15",name:"Czechia",value:10618303},{id:"3.167",parent:"2.15",name:"Hungary",value:9721559},{id:"3.168",parent:"2.15",name:"Belarus",value:9468338},{id:"3.169",parent:"2.15",name:"Bulgaria",value:7084571},{id:"3.170",parent:"2.15",name:"Slovakia",value:5447662},{id:"3.171",parent:"2.15",name:"Moldova",value:4051212},{id:"3.172",parent:"2.15",name:"Cyprus",value:1179551},{id:"2.16",parent:"1.4",name:"Northern Europe"},{id:"3.173",parent:"2.16",name:"United Kingdom",value:66181585},{id:"3.174",parent:"2.16",name:"Sweden",value:9910701},{id:"3.175",parent:"2.16",name:"Denmark",value:5733551},{id:"3.176",parent:"2.16",name:"Finland",value:5523231},{id:"3.177",parent:"2.16",name:"Norway",value:5305383},{id:"3.178",parent:"2.16",name:"Ireland",value:4761657},{id:"3.179",parent:"2.16",name:"Lithuania",value:2890297},{id:"3.180",parent:"2.16",name:"Latvia",value:1949670},{id:"3.181",parent:"2.16",name:"Estonia",value:1309632},{id:"3.182",parent:"2.16",name:"Iceland",value:335025},{id:"3.183",parent:"2.16",name:"Guernsey and  Jersey",value:165314},{id:"3.184",parent:"2.16",name:"Isle of Man",value:84287},{id:"3.185",parent:"2.16",name:"Faroe Islands",value:49290},{id:"2.17",parent:"1.4",name:"Southern Europe"},{id:"3.186",parent:"2.17",name:"Italy",value:59359900},{id:"3.187",parent:"2.17",name:"Spain",value:46354321},{id:"3.188",parent:"2.17",name:"Greece",value:11159773},{id:"3.189",parent:"2.17",name:"Portugal",value:10329506},{id:"3.190",parent:"2.17",name:"Serbia",value:8790574},{id:"3.191",parent:"2.17",name:"Croatia",value:4189353},{id:"3.192",parent:"2.17",name:"Bosnia and Herzegovina",value:3507017},{id:"3.193",parent:"2.17",name:"Albania",value:2930187},{id:"3.194",parent:"2.17",name:"Republic of Macedonia",value:2083160},{id:"3.195",parent:"2.17",name:"Slovenia",value:2079976},{id:"3.196",parent:"2.17",name:"Montenegro",value:628960},{id:"3.197",parent:"2.17",name:"Malta",value:430835},{id:"3.198",parent:"2.17",name:"Andorra",value:76965},{id:"3.199",parent:"2.17",name:"Gibraltar",value:34571},{id:"3.200",parent:"2.17",name:"San Marino",value:33400},{id:"3.201",parent:"2.17",name:"Vatican City",value:792},{id:"2.18",parent:"1.4",name:"Western Europe"},{id:"3.202",parent:"2.18",name:"Germany",value:82114224},{id:"3.203",parent:"2.18",name:"France",value:64979548},{id:"3.204",parent:"2.18",name:"Netherlands",value:17035938},{id:"3.205",parent:"2.18",name:"Belgium",value:11429336},{id:"3.206",parent:"2.18",name:"Austria",value:8735453},{id:"3.207",parent:"2.18",name:"Switzerland",value:8476005},{id:"3.208",parent:"2.18",name:"Luxembourg",value:583455},{id:"3.209",parent:"2.18",name:"Monaco",value:38695},{id:"3.210",parent:"2.18",name:"Liechtenstein",value:37922},{id:"2.19",parent:"1.5",name:"Australia and New Zealand"},{id:"3.211",parent:"2.19",name:"Australia",value:24450561},{id:"3.212",parent:"2.19",name:"New Zealand",value:4705818},{id:"2.20",parent:"1.5",name:"Melanesia"},{id:"3.213",parent:"2.20",name:"Papua New Guinea"},{id:"3.214",parent:"2.20",name:"Fiji",value:905502},{id:"3.215",parent:"2.20",name:"Solomon Islands",value:611343},{id:"3.216",parent:"2.20",name:"New Caledonia",value:276255},{id:"3.217",parent:"2.20",name:"Vanuatu",value:276244},{id:"2.21",parent:"1.5",name:"Micronesia"},{id:"3.218",parent:"2.21",name:"Guam",value:164229},{id:"3.219",parent:"2.21",name:"Kiribati",value:116398},{id:"3.220",parent:"2.21",name:"Federated States of Micronesia",value:105544},{id:"3.221",parent:"2.21",name:"Northern Mariana Islands",value:55144},{id:"3.222",parent:"2.21",name:"Marshall Islands",value:53127},{id:"3.223",parent:"2.21",name:"Palau",value:21729},{id:"3.224",parent:"2.21",name:"Nauru",value:11359},{id:"2.22",parent:"1.5",name:"Polynesia"},{id:"3.225",parent:"2.22",name:"French Polynesia",value:283007},{id:"3.226",parent:"2.22",name:"Samoa",value:196440},{id:"3.227",parent:"2.22",name:"Tonga",value:108020},{id:"3.228",parent:"2.22",name:"American Samoa",value:55641},{id:"3.229",parent:"2.22",name:"Cook Islands",value:17380},{id:"3.230",parent:"2.22",name:"Wallis and Futuna",value:11773},{id:"3.231",parent:"2.22",name:"Tuvalu",value:11192},{id:"3.232",parent:"2.22",name:"Niue",value:1618},{id:"3.233",parent:"2.22",name:"Tokelau",value:1300}]),_={data:function(){return{chartOptions:{chart:{height:"100%"},title:{text:"World population 2017"},subtitle:{text:'Source <href="https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)">Wikipedia</a>'},series:[{type:"sunburst",data:x,allowDrillToNode:!0,cursor:"pointer",dataLabels:{format:"{point.name}",filter:{property:"innerArcLength",operator:">",value:16},rotationMode:"circular"},levels:[{level:1,levelIsConstant:!1,dataLabels:{filter:{property:"outerArcLength",operator:">",value:64}}},{level:2,colorByPoint:!0},{level:3,colorVariation:{key:"brightness",to:-.5}},{level:4,colorVariation:{key:"brightness",to:.5}}]}],tooltip:{headerFormat:"",pointFormat:"The population of <b>{point.name}</b> is <b>{point.value}</b>"}}}},mounted:function(){this.$refs.sunburst.highcharts.getOptions().colors.splice(0,0,"transparent")}},A={components:{AfricaMap:m,Chart:v,StockChart:f,MapChart:C,QuickMods:k,SunburstChart:Object(l.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._v("\n  Sunburst chart:\n  "),t("sunburst",{ref:"sunburst",attrs:{options:this.chartOptions}})],1)}),[],!1,null,"0b51efc0",null).exports}},S=Object(l.a)(A,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{attrs:{name:"page"}},[t(this.$route.params.chart,{tag:"component"})],1)],1)}),[],!1,null,null,null);t.default=S.exports}}]);