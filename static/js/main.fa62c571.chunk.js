(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=(a(14),a(1)),u=(a(15),a(4)),m=a(5),s=a(7),i=a(6),h=a(8),p=Object(n.createContext)({userName:"",chatRoomName:"",setUserName:function(){},setChatRoomName:function(){}}),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).setUserName=function(e){a.setState({userName:e})},a.setChatRoomName=function(e){a.setState({chatRoomName:e})},a.state={userName:"",chatRoomName:"",setUserName:a.setUserName,setChatRoomName:a.setChatRoomName},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),f=p.Consumer;var v=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),u=Object(c.a)(l,2),m=u[0],s=u[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",null,r.a.createElement(f,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:a,onChange:function(e){return o(e.target.value)},placeholder:"Your name"}),r.a.createElement("br",null),r.a.createElement("input",{value:m,onChange:function(e){return s(e.target.value)},placeholder:"Chat room name"}),r.a.createElement("br",null),0!==a.length&&0!==m.length&&r.a.createElement("button",{type:"button",onClick:function(){e.setUserName(a),e.setChatRoomName(m),o(""),s("")}},"save"))}))),r.a.createElement("div",null,r.a.createElement(f,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"User: ",e.userName),r.a.createElement("br",null),r.a.createElement("span",null,"Chat room: ",e.chatRoomName))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(E,null,r.a.createElement(v,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fa62c571.chunk.js.map