(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),o=n(15),a=n.n(o),i=(n(70),n(21)),c=n(22),u=n(25),l=n(23),p=n(24),h=n(57),f=n.n(h),d=(n(72),n(74),n(76),n(78),n(159)),m=function(){return s.a.createElement("div",null,s.a.createElement(d.a,{inverse:!0,collapseOnSelect:!0},s.a.createElement(d.a.Header,null,s.a.createElement(d.a.Brand,null,s.a.createElement("a",{href:"http://svc.metrotransit.org/",target:"_blank",rel:"noopener noreferrer"},"Metro Transit")),s.a.createElement(d.a.Toggle,null))))},v=n(37),g=n(2),b=n.n(g),x=n(4),j=n(6),T=n(35),k=n(62),w=n(63),y=n(8),E=n.n(y);function O(){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(b.a.mark(function e(){var t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://svc.metrotransit.org/NexTrip/Routes?format=json",e.prev=1,e.next=4,E.a.get("http://svc.metrotransit.org/NexTrip/Routes?format=json");case 4:return t=e.sent,n=t.data,r=[],n.forEach(function(e){r.push(e.Description)}),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),console.error("This is error: ",e.t0);case 14:case"end":return e.stop()}},e,this,[[1,11]])}))).apply(this,arguments)}function C(e,t,n,r){return D.apply(this,arguments)}function D(){return(D=Object(x.a)(b.a.mark(function e(t,n,r,s){var o,a,i,c,u,l,p,h;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(t);case 3:o=e.sent,a=o.data,console.log("This is response from data.js: ",o.data),i=!0,c=!1,u=void 0,e.prev=9,l=a[Symbol.iterator]();case 11:if(i=(p=l.next()).done){e.next=20;break}if(h=p.value,console.log("this is item inside data function: ",h),s!==h[n]){e.next=17;break}return console.log("This is item from data: ",h[r]),e.abrupt("return",h[r]);case 17:i=!0,e.next=11;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(9),c=!0,u=e.t0;case 26:e.prev=26,e.prev=27,i||null==l.return||l.return();case 29:if(e.prev=29,!c){e.next=32;break}throw u;case 32:return e.finish(29);case 33:return e.finish(26);case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(0),console.error("This is error: ",e.t1);case 39:case"end":return e.stop()}},e,this,[[0,36],[9,22,26,34],[27,,29,33]])}))).apply(this,arguments)}function R(e){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(b.a.mark(function e(t){var n,r,s,o,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("This is route from getDirection: ",t),"http://svc.metrotransit.org/NexTrip/Routes?format=json",e.next=4,C("http://svc.metrotransit.org/NexTrip/Routes?format=json","Description","Route",t);case 4:return n=e.sent,console.log("This is routeId in direction: ",n),r="http://svc.metrotransit.org/NexTrip/Directions/"+n+"?format=json",console.log("url from directions: ",r),e.prev=8,e.next=11,E.a.get(r);case 11:return s=e.sent,o=s.data,a=[],o.forEach(function(e){a.push(e)}),console.log("This is Directions inside direction.js: ",a),e.abrupt("return",a);case 19:e.prev=19,e.t0=e.catch(8),console.error("This is error: ",e.t0);case 22:case"end":return e.stop()}},e,this,[[8,19]])}))).apply(this,arguments)}function B(e,t){return L.apply(this,arguments)}function L(){return(L=Object(x.a)(b.a.mark(function e(t,n){var r,s,o,a,i,c,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("This is route from getStop: ",t),console.log("This is direction from getStop",n),"http://svc.metrotransit.org/NexTrip/Routes?format=json",e.next=5,C("http://svc.metrotransit.org/NexTrip/Routes?format=json","Description","Route",t);case 5:return r=e.sent,console.log("This is routeId in direction: ",r),s="http://svc.metrotransit.org/NexTrip/Directions/"+r+"?format=json",e.next=10,C(s,"Text","Value",n);case 10:return o=e.sent,console.log("url from stops: ",s),a="http://svc.metrotransit.org/NexTrip/Stops/"+r+"/"+o+"?format=json",e.prev=13,e.next=16,E.a.get(a);case 16:return i=e.sent,c=i.data,u=[],c.forEach(function(e){u.push(e.Text)}),console.log("This is Stops inside direction.js: ",u),e.abrupt("return",u);case 24:e.prev=24,e.t0=e.catch(13),console.error("This is error: ",e.t0);case 27:case"end":return e.stop()}},e,this,[[13,24]])}))).apply(this,arguments)}var A=n(36),I=n.n(A);function q(e,t,n){return M.apply(this,arguments)}function M(){return(M=Object(x.a)(b.a.mark(function e(t,n,r){var s,o,a,i,c,u,l,p,h,f,d,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return(a=Object(x.a)(b.a.mark(function e(t){var n,r,s,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.substring(6,16),r=I()(n,"X").unix(),s=I()().unix(),o=parseInt((r-s)/60),e.abrupt("return",o);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)},o=function(e){return a.apply(this,arguments)},i=(s="http://svc.metrotransit.org/NexTrip/")+"Routes?format=json",e.next=6,C(i,"Description","Route",t);case 6:if(c=e.sent){e.next=9;break}return e.abrupt("return",console.log(t+" is not a valid route."));case 9:return u=s+"Directions/"+c+"?format=json",e.next=12,C(u,"Text","Value",n);case 12:if(l=e.sent){e.next=15;break}return e.abrupt("return",console.log(t+" doesn't go "+n));case 15:return p=s+"Stops/"+c+"/"+l+"?format=json",e.next=18,C(p,"Text","Value",r);case 18:if(h=e.sent){e.next=21;break}return e.abrupt("return",console.log(r+" it's not a valid stop for route "+t+" "+n));case 21:return f=s+c+"/"+l+"/"+h+"?format=json",e.next=24,C(f,"RouteDirection","DepartureTime",n);case 24:if(d=e.sent){e.next=27;break}return e.abrupt("return",console.log("Could not get next connection"));case 27:return e.next=29,o(d);case 29:if(!((m=e.sent)>1)){e.next=35;break}return console.log("Next bus arriving in ",m,"minutes!"),e.abrupt("return","Next bus arriving in "+m+"minutes!");case 35:return console.log("Next bus arriving in 1 minute or less"),e.abrupt("return","Next bus arriving in 1 minute or less");case 37:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var W=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={filteredRoutes:null,direction:null,filteredStops:null,nextBus:null,disabledButton:"disabled"},e.filterRoutes=e.filterRoutes.bind(Object(j.a)(Object(j.a)(e))),e.onDirectionChange=e.onDirectionChange.bind(Object(j.a)(Object(j.a)(e))),e.filterStops=e.filterStops.bind(Object(j.a)(Object(j.a)(e))),e.handleClick=e.handleClick.bind(Object(j.a)(Object(j.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:this.routes=e.sent,console.log(this.state.route);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getDirectionsFromState",value:function(){var e=Object(x.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("This is route before await: ",t),e.next=3,R(t);case 3:this.directions=e.sent,this.setState({direction:this.directions}),console.log("This is route inside getDirectionformState: ",t),console.log("This is directions: ",this.directions),console.log("This is value: ",this.state.route),console.log("This is state!!!!!!!!",this.state);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"filterRoutes",value:function(e){var t=this;setTimeout(function(){var n;n=0===e.query.length?Object(v.a)(t.routes):t.routes.filter(function(t){return t.toLowerCase().startsWith(e.query.toLowerCase())}),t.setState({filteredRoutes:n})},250)}},{key:"onDirectionChange",value:function(){var e=Object(x.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("This is e.value direction: ",t.value),this.setState({direction:t.value}),!t.value){e.next=6;break}return e.next=5,B(this.state.route,t.value.Text);case 5:this.stops=e.sent;case 6:console.log("This is stops!!!!!!!: ",this.stops);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"filterStops",value:function(e){var t=this;setTimeout(function(){var n;n=0===e.query.length?Object(v.a)(t.stops):t.stops.filter(function(t){return t.toLowerCase().startsWith(e.query.toLowerCase())}),t.setState({filteredStops:n})},250)}},{key:"handleClick",value:function(){var e=Object(x.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("This is state: ",this.state),e.next=3,q(this.state.route,this.state.direction.Text,this.state.stop);case 3:this.nextBus=e.sent,console.log("This is time till bus: ",this.nextBus),this.setState({nextBus:this.nextBus});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{paddingLeft:"10px",paddingTop:"10px"}},s.a.createElement("div",null,s.a.createElement("h3",null,"Choose a Route"),s.a.createElement(T.AutoComplete,{value:this.state.route,suggestions:this.state.filteredRoutes,completeMethod:this.filterRoutes,size:50,placeholder:"Routes",dropdown:!0,minLength:1,onChange:function(t){return e.setState({route:t.value})},onSelect:function(t){return e.getDirectionsFromState(t.value)}})),s.a.createElement("div",null,this.directions&&0!==this.directions.length&&s.a.createElement("div",{style:{justifyContent:"center",alignItems:"center"}},s.a.createElement("h3",null,"Choose a Direction"),s.a.createElement(k.ListBox,{value:this.state.direction,options:this.directions,onChange:this.onDirectionChange,optionLabel:"Text",style:{justifyContent:"center"}}))),s.a.createElement("div",null),this.stops&&0!==this.stops.length&&s.a.createElement("div",null,s.a.createElement("h3",null,"Choose a Stop"),s.a.createElement(T.AutoComplete,{value:this.state.stop,suggestions:this.state.filteredStops,completeMethod:this.filterStops,size:50,placeholder:"Stops",dropdown:!0,minLength:1,onChange:function(t){return e.setState({stop:t.value,disabledButton:""})}})),s.a.createElement("div",{style:{paddingTop:"10px"}},s.a.createElement(w.Button,{label:"Submit",onClick:this.handleClick,disabled:this.state.disabledButton})),this.nextBus?s.a.createElement("h4",null,this.nextBus):null)}}]),t}(r.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"Header"},s.a.createElement(m,null)),s.a.createElement("div",{className:"App"},s.a.createElement(W,null),s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(s.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},64:function(e,t,n){e.exports=n(157)},70:function(e,t,n){},72:function(e,t,n){}},[[64,2,1]]]);
//# sourceMappingURL=main.efcd9bf4.chunk.js.map