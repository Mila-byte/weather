(function(t){function e(e){for(var n,o,c=e[0],s=e[1],d=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/weather-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2dd1":function(t,e,a){"use strict";a("33e6")},"33e6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("h1",[t._v("Weather app")]),a("v-container",{staticClass:"col-sm-10 col-lg-6"},[a("router-view")],1)],1)],1)},r=[],o={name:"App",created:function(){localStorage.getItem("cities")&&this.$store.dispatch("setCities"),this.getGeolocation()},methods:{getGeolocation:function(){var t=this;this.$getLocation().then((function(e){t.$store.dispatch("setMyCity",e)})).catch((function(){alert("geolocation disabled")}))}}},c=o,s=(a("5c0b"),a("2877")),d=a("6544"),u=a.n(d),l=a("7496"),p=a("a523"),f=Object(s["a"])(c,i,r,!1,null,null,null),h=f.exports;u()(f,{VApp:l["a"],VContainer:p["a"]});var m=a("2f62"),v={arrCity:[],myCity:null},y=(a("99af"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("1da1")),g={addCity:function(t,e){var a=t.commit;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737")).then((function(t){return t.json()})).then((function(t){t.cod>=400&&t.cod<500?alert(t.message):200===t.cod&&(console.log(t),a("addCity",t))})).catch((function(t){return console.log(t)}))},deleteCity:function(t,e){var a=t.commit;a("deleteCity",e)},setCities:function(t){return Object(y["a"])(regeneratorRuntime.mark((function e(){var a,n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,n=JSON.parse(localStorage.getItem("cities")),i=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n[e].name,"&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737")).then((function(t){return t.json()})).then((function(t){n[e]=t})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})),r=0;case 4:if(!(r<n.length)){e.next=9;break}return e.delegateYield(i(r),"t0",6);case 6:r++,e.next=4;break;case 9:a("setCities",n);case 10:case"end":return e.stop()}}),e)})))()},updateData:function(t,e){return Object(y["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737")).then((function(t){return t.json()})).then((function(t){n("updateData",t)})).catch((function(t){return console.log(t)}));case 3:case"end":return a.stop()}}),a)})))()},setMyCity:function(t,e){return Object(y["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lat,"&lon=").concat(e.lng,"&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737")).then((function(t){return t.json()})).then((function(t){n("setMyCity",t)})).catch((function(t){return console.log(t)}));case 3:case"end":return a.stop()}}),a)})))()}},b=(a("a434"),a("b85c")),C={addCity:function(t,e){var a,n=Object(b["a"])(t.arrCity);try{for(n.s();!(a=n.n()).done;){var i=a.value;if(i.id===e.id)return void alert("City ".concat(e.name," is already exists"))}}catch(r){n.e(r)}finally{n.f()}t.arrCity.push(e),localStorage.setItem("cities",JSON.stringify(t.arrCity))},deleteCity:function(t,e){t.arrCity.splice(e,1),localStorage.setItem("cities",JSON.stringify(t.arrCity))},setCities:function(t,e){t.arrCity=e},updateData:function(t,e){for(var a=0;a<t.arrCity.length;a++)if(e.id===t.arrCity[a].id){t.arrCity.splice(a,1,e),localStorage.setItem("cities",JSON.stringify(t.arrCity));break}},setMyCity:function(t,e){for(var a=0;a<t.arrCity.length;a++)if(e.id===t.arrCity[a].id)return t.arrCity.splice(a,1,e),console.log("updated my location"),void localStorage.setItem("cities",JSON.stringify(t.arrCity));t.arrCity.push(e)}},w=a("2909"),_={getDataOfCity:function(t){return t.myCity?[].concat(Object(w["a"])(t.arrCity),[t.myCity]):t.arrCity}};n["a"].use(m["a"]);var x=new m["a"].Store({state:v,actions:g,mutations:C,getters:_}),k=a("f309");n["a"].use(k["a"]);var O=new k["a"]({}),j=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"info"}},[a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{color:"accent",elevation:"2",outlined:""}},[t._v("back ")])],1),a("v-card",{staticClass:"mx-auto brown lighten-4"},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(t.name)+" ")]),a("v-list-item-subtitle",[t._v(t._s(t.day)+", "+t._s(t.time.substring(0,5))+" "+t._s(t.description))])],1)],1),a("v-card-text",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"display-3",attrs:{cols:"6"}},[t._v(" "+t._s(t.temp)+"°C ")]),a("v-col",{attrs:{cols:"3"}},[a("v-img",{attrs:{src:t.imageSrc,"max-width":"200"}})],1)],1)],1),a("div",{staticClass:"chart"},[t.hourlyTemp.length?a("ul",{staticClass:"graph"},t._l(t.hourlyTemp,(function(e,n){return a("li",{key:n},[a("img",{staticClass:"graph-icon",attrs:{src:"https://www.openweathermap.org/img/wn/"+e.icon+"@2x.png",alt:"iconWeather"}}),a("div",{staticClass:"temp",style:"background-color: "+e.color},[t._v(" "+t._s(e.temp)+" ")]),a("div",{staticClass:"padding",style:"padding-top: "+5*e.padding+"px"}),a("div",{staticClass:"time"},[a("span",{class:{today:"today"===e.day}},[t._v(t._s(e.hours))])])])})),0):t._e()]),a("v-card-text",[a("p",[a("b",[t._v("Wind Speed:")]),t._v(" "+t._s(t.wind)+" km/h")]),a("p",[a("b",[t._v("Pressure:")]),t._v(" "+t._s(t.pressure)+" hPa")]),a("p",[a("b",[t._v("Humidity:")]),t._v(" "+t._s(t.humidity)+" %")])])],1)],1)},V=[],T=(a("a4d3"),a("e01a"),a("d81d"),a("b680"),a("5530")),D={name:"FullInfo",data:function(){return{temp:0,name:"",description:"",day:"",time:"",icon:"",wind:"",pressure:0,humidity:0,lat:0,lon:0,hourlyTemp:[]}},computed:Object(T["a"])({imageSrc:function(){return this.icon?"https://www.openweathermap.org/img/wn/".concat(this.icon,"@2x.png"):""}},Object(m["c"])(["arrCity"])),watch:{arrCity:{handler:"setCity",deep:!0,immediate:!0}},methods:{setCity:function(t){var e,a=parseInt(this.$route.params.name),n=Object(b["a"])(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(a===i.id){this.temp=i.main.temp,this.name=i.name,this.description=i.weather[0].description,this.wind=i.wind.speed,this.pressure=i.main.pressure,this.humidity=i.main.humidity,this.lat=i.coord.lat,this.lon=i.coord.lon;var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];this.day=new Date,this.day=r[this.day.getDay()],this.time=(new Date).toLocaleTimeString(),this.icon=i.weather[0].icon,this.getHourlyTemp();break}}}catch(o){n.e(o)}finally{n.f()}},getHourlyTemp:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var a,n,i,r,o,c,s,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=[],n=[],i=[],r=[],e.next=6,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.lat,"&lon=").concat(t.lon,"&exclude=current,minutely,daily,alerts&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737")).then((function(t){return t.json()})).then((function(t){for(var e=0;e<24;e+=3)a.push(+t.hourly[e].temp.toFixed()),i.push(t.hourly[e].weather[0].icon),n.push(new Date(1e3*t.hourly[e].dt).toLocaleTimeString().substring(0,5)),r.push(new Date(1e3*t.hourly[e].dt).toLocaleDateString().substring(0,2))})).catch((function(t){return console.log(t)}));case 6:for(o=Math.min.apply(Math,a),c=a.map((function(t){return t===o?0:t>0?t-o:Math.abs(o)-Math.abs(t)})),s=(new Date).toLocaleDateString().substring(0,2),d=[],u=0;u<8;u++)d.push({temp:a[u],padding:c[u],hours:n[u],icon:i[u],color:a[u]>0?"#e7a45c":0!==a[u]?" #9dcddb":"#cae2e8",day:r[u]===s?"today":"tomorrow"});t.hourlyTemp=d;case 12:case"end":return e.stop()}}),e)})))()}}},I=D,M=(a("6f43"),a("8336")),A=a("b0af"),$=a("99d9"),P=a("62ad"),R=a("adda"),L=a("da13"),B=a("5d23"),E=a("0fd9"),F=Object(s["a"])(I,S,V,!1,null,"0315d81b",null),J=F.exports;u()(F,{VBtn:M["a"],VCard:A["a"],VCardText:$["c"],VCol:P["a"],VImg:R["a"],VListItem:L["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VRow:E["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("AddCity"),a("CardOfCity")],1)},W=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{tile:""}},[a("v-text-field",{attrs:{label:"City"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCity(e)}},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),a("v-btn",{attrs:{elevation:"2",medium:""},on:{click:t.addCity}},[t._v("Search ")])],1)},q=[],G={name:"AddCity",data:function(){return{city:""}},methods:{addCity:function(){this.$store.dispatch("addCity",this.city),this.city=""}}},X=G,Y=a("8654"),z=Object(s["a"])(X,H,q,!1,null,"3fa8ff1c",null),K=z.exports;u()(z,{VBtn:M["a"],VCard:A["a"],VTextField:Y["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"card"}},t._l(t.getDataOfCity,(function(e,n){return a("v-card",{key:e.id,staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-list-item-avatar",{staticClass:"brown lighten-3"},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://www.openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png"}})],1),a("v-icon",{attrs:{color:"green darken-1"},on:{click:function(a){return t.updateData(e.name)}}},[t._v(" mdi-backup-restore ")]),a("v-btn",{staticClass:"del",attrs:{color:"red darken-4",text:""},on:{click:function(e){return t.deleteCity(n)}}},[t._v(" X ")]),a("v-card-title",[t._v(" "+t._s(e.name)+" ")]),a("v-card-subtitle",[a("p",{staticClass:"description"},[t._v(" "+t._s(e.weather[0].description)+" ")])]),a("v-card-text",[a("p",[t._v("Temperature: "+t._s(+e.main.temp.toFixed())+" ℃")]),a("p",[t._v("Feels like: "+t._s(+e.main.feels_like.toFixed())+" ℃")])]),a("v-card-actions",[a("router-link",{attrs:{to:"/info/"+e.id+"-"+e.name.toLowerCase()}},[a("v-btn",{attrs:{elevation:"2"}},[t._v("Read More ")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.showMoreInfo(e.id)}}},[a("v-icon",[t._v(t._s(t.idActiveBlock===e.id?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.idActiveBlock===e.id,expression:"idActiveBlock === city.id"}]},[a("v-divider"),a("v-card-text",[a("p",[t._v("Wind speed: "+t._s(e.wind.speed)+" km/h")]),a("p",[t._v("Pressure: "+t._s(e.main.pressure)+" hPa")]),a("p",[t._v("Humidity: "+t._s(e.main.humidity)+" %")])])],1)])],1)})),1)},U=[],Z={name:"CardOfCity",computed:Object(T["a"])({},Object(m["b"])(["getDataOfCity"])),data:function(){return{idActiveBlock:!1}},methods:{deleteCity:function(t){this.$store.dispatch("deleteCity",t)},showMoreInfo:function(t){this.idActiveBlock!==t?this.idActiveBlock=t:this.idActiveBlock=!1},updateData:function(t){this.$store.dispatch("updateData",t)}}},tt=Z,et=(a("2dd1"),a("ce7e")),at=a("0789"),nt=a("132d"),it=a("8270"),rt=a("2fa4"),ot=Object(s["a"])(tt,Q,U,!1,null,"48e05b58",null),ct=ot.exports;u()(ot,{VBtn:M["a"],VCard:A["a"],VCardActions:$["a"],VCardSubtitle:$["b"],VCardText:$["c"],VCardTitle:$["d"],VDivider:et["a"],VExpandTransition:at["a"],VIcon:nt["a"],VImg:R["a"],VListItemAvatar:it["a"],VSpacer:rt["a"]});var st={name:"MainPage",components:{CardOfCity:ct,AddCity:K}},dt=st,ut=Object(s["a"])(dt,N,W,!1,null,"91e022d6",null),lt=ut.exports;n["a"].use(j["a"]);var pt=[{path:"/info/:name",component:J},{path:"/",component:lt}],ft=new j["a"]({routes:pt}),ht=a("ebfd"),mt=a.n(ht);n["a"].use(mt.a),n["a"].config.productionTip=!1,new n["a"]({store:x,vuetify:O,router:ft,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6f43":function(t,e,a){"use strict";a("fd64")},"9c0c":function(t,e,a){},fd64:function(t,e,a){}});
//# sourceMappingURL=app.37fdb97a.js.map