(this["webpackJsonpevent-log-viewer"]=this["webpackJsonpevent-log-viewer"]||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(28),n(29),n(30),n(53)),i=n(15),u=n.n(i),l=n(18),m=n(20),v=n(16),d=function(e,t){switch(t.type){case"ADD_EVENTS":return[].concat(Object(v.a)(e),Object(v.a)(t.events));default:return e}},f=Object(a.createContext)(),p=function(e){var t=Object(a.useReducer)(d,[]),n=Object(m.a)(t,2),o=n[0],c=n[1],s=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://ldnmnsqigb.execute-api.us-east-1.amazonaws.com/dev/hvac-eventlog/").then((function(e){return e.json()})).then((function(e){c({type:"ADD_EVENTS",events:e})})).catch(console.log);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),r.a.createElement(f.Provider,{value:{events:o,dispatch:c}},e.children)},g=n(55),h=n(56),b=n(57),E=Object(s.a)((function(e){return{root:{padding:10},listItem:{background:"lightgrey",margin:1},leftJustify:{textAlign:"left"}}}));function w(e){var t="";return t+=e.substring(4,6)+"-"+e.substring(6,8)+"-"+e.substring(0,4),t+=" at "+e.substring(9,17)}function y(e,t){var n="";try{switch(e){case"ZoneChange":n+="User moved from zone "+t.PreviousZone+" to zone "+t.NextZone+".";break;case"DMMTestEvent":n+="User took a DMM reading with "+t.ProbeType+" to test "+t.TestMode+" from "+t.TestLocation0+" to "+t.TestLocation1+" and received a reading of "+t.Output+".";break;case"ClampTestEvent":n+="User took a clamp meter reading to test "+t.TestMode+" at "+t.TestLocation+" and received a reading of "+t.Output+".";break;case"TemperatureTestEvent":n+="User took a temperature gun reading at "+t.TestLocation+" and received a reading of "+t.Output+"."}}catch(a){return"ERROR: "+a.message}return n}var T=function(){var e=E(),t=Object(a.useContext)(f).events;return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,null,t.map((function(t,n){return r.a.createElement(h.a,{className:e.listItem},r.a.createElement(b.a,{primary:t.UserId,secondary:w(t.Timestamp)}),r.a.createElement(b.a,{className:e.leftJustify,primary:y(t.EventKey,t.EventProps)}))}))))};var O=function(){return r.a.createElement(p,null,r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.76f35165.chunk.js.map