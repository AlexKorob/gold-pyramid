(this["webpackJsonpgold-piramid"]=this["webpackJsonpgold-piramid"]||[]).push([[0],{54:function(e,n,t){e.exports=t(64)},59:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),l=t.n(o),i=(t(59),t(11)),c=t(48),u=t(22),s=t(12),f=t(18);function d(){var e=Object(s.a)(["\n      :hover {\n        cursor: pointer;\n        outline: 3px solid darkred;\n        border: 2px solid darkred;\n      }\n    "]);return d=function(){return e},e}function m(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.5px;\n  cursor: default;\n  color: ",";\n  background-color: ",";\n  border: 2px solid black;\n  min-width: 25px;\n  min-height: 25px;\n  ","\n"]);return m=function(){return e},e}var h=f.default.div(m(),(function(e){return e.showValue?"white":"#333"}),(function(e){return e.backgroundColor||"darkgray"}),(function(e){return e.isClickable&&Object(f.css)(d())})),v=function(e){var n=e.cellData,t=e.handleClick;return r.a.createElement(h,{id:"".concat(n.indexPos1,"-").concat(n.indexPos2),onClick:function(){return t(n.indexPos1,n.indexPos2)},backgroundColor:n.showValue&&n.backgroundColor,isClickable:n.isClickable,showValue:n.showValue},n.value)};function b(){var e=Object(s.a)(["\n  margin-top: 2rem;\n  text-align: center;\n"]);return b=function(){return e},e}function g(){var e=Object(s.a)(["\n  display: flex;\n  margin-top: 20px;\n  flex-direction: column;\n  justify-content: center;\n  & > .row {\n    display: flex;\n    justify-content: center;\n  }\n"]);return g=function(){return e},e}var p=t(18).default,k=p.div(g()),j=p.div(b());function w(){var e=Object(s.a)(["\n  color: darkred;\n  font-size: 24px;\n  position: fixed;\n  background-color: white;\n  z-index: 1;\n  top: 1rem;\n  left: 1rem;\n"]);return w=function(){return e},e}var O=f.default.div(w()),y=function(e){var n=e.value;return r.a.createElement(O,{leftOffset:!0},n)},x=t(99),E=t(96),C=t(93),W=Object(C.a)({spinnerWrapper:{marginTop:"2rem",textAlign:"center"},spinner:{color:"#1a90ff",animationDuration:"550ms",margin:"0 auto"}}),S=function(){var e=W();return r.a.createElement("div",{className:e.spinnerWrapper},r.a.createElement(E.a,{variant:"indeterminate",disableShrink:!0,className:e.spinner,size:40,value:100,thickness:4}))},V=t(46),P=t(47),M=new Blob(["func = ".concat(function(e){var n=e.rows;return new(function(){function e(n){Object(V.a)(this,e),this.arr=n,this.allWays=[]}return Object(P.a)(e,[{key:"getBestWay",value:function(){return this.getAllWays(this.arr),this.allWays.reduce((function(e,n){return e[0]>n[0]?e:n}))}},{key:"getAllWays",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];null!==t||null!==n?0!==e.length?(this.getAllWays(e.slice(1),n,t=e[0][n]+t,a=a.concat(n)),this.getAllWays(e.slice(1),n+=1,t=e[0][n]-e[0][n-1]+t,a=a.slice(0,a.length-1).concat(n))):this.allWays.push([t,a]):this.getAllWays(e.slice(1),n=0,t=e[0][0],a=[0])}}]),e}())(n.map((function(e){return e.map((function(e){return e.value}))}))).getBestWay()}.toString(),";"),"self.onmessage = (e) => {","  const result = func(e.data);","  self.postMessage(result);","};"],{type:"text/javascript"}),A=URL.createObjectURL(M),N=function(e){var n=e.countRows,t=new Worker(A),a=r.a.useState([]),o=Object(i.a)(a,2),l=o[0],s=o[1],f=r.a.useState(!1),d=Object(i.a)(f,2),m=d[0],h=d[1],b=r.a.useState(!1),g=Object(i.a)(b,2),p=g[0],w=g[1],O=r.a.useState([]),E=Object(i.a)(O,2),C=E[0],W=E[1],V=r.a.useState(0),P=Object(i.a)(V,2),M=P[0],N=P[1],B=r.a.useState(0),R=Object(i.a)(B,2),z=R[0],D=R[1],I=r.a.useState(!1),T=Object(i.a)(I,2),F=T[0],J=T[1],L=function(){var e=["green","brown","blue","crimson","coral","forestgreen","goldenrod","darkgreen","darkseagreen"];return e[Math.floor(Math.random()*e.length)]};r.a.useEffect((function(){s([]),w(!1);for(var e=[],t=0;t<n;t++){for(var a=[],r=0;r<t+1;r++)a.push({indexPos1:t,indexPos2:r,value:Math.ceil(99*Math.random()),showValue:!1,isClickable:!1,backgroundColor:L()});e.push(a)}e[0][0]=Object(u.a)({},e[0][0],{showValue:!0}),e[1][0]=Object(u.a)({},e[1][0],{isClickable:!0}),e[1][1]=Object(u.a)({},e[1][1],{isClickable:!0}),D(e[0][0].value),W(e)}),[n]);var U=function(e,t){var a=C[e][t];if(!a.isClickable)return null;W((function(r){return r[e]=r[e].map((function(e){return a===e?Object(u.a)({},e,{showValue:!0,isClickable:!1}):Object.defineProperty(e,"isClickable",{value:!1})})),e!==n-1?r[e+1]=r[e+1].map((function(e,n){return n===t||n===t+1?Object.defineProperty(e,"isClickable",{value:!0}):e})):h(!0),Object(c.a)(r)})),D((function(e){return e+a.value}))};r.a.useEffect((function(){t.onmessage=function(e){if(e&&e.data){var n=Object(i.a)(e.data,2),t=n[0],a=n[1];W((function(e){return e.map((function(e,n){return e.map((function(e,t){return t===parseInt(a[n])?Object(u.a)({},e,{showValue:!0}):Object(u.a)({},e,{showValue:!1})}))}))})),J(!1),D(t),w(!0)}}}),[t]);return F?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{value:z}),r.a.createElement(k,null,C.map((function(e,n){return r.a.createElement("div",{className:"row",key:n},e.map((function(e,n){return r.a.createElement(v,{cellData:e,handleClick:U,key:n})})))}))),r.a.createElement(j,null,r.a.createElement(x.a,{onClick:function(){if(p)return W(l),s([]),D(M),void w(!1);s(C),N(z),J(!0),t.postMessage({rows:C})},disabled:!m,color:"primary",variant:"contained"},p?"Hide":"Show"," best way")))};function B(){var e=Object(s.a)(["\n  margin-top: 20px;\n  text-align: center;\n"]);return B=function(){return e},e}var R=t(18).default.div(B()),z=t(98),D=function(){var e=r.a.useState(),n=Object(i.a)(e,2),t=n[0],a=n[1],o=r.a.useState([]),l=Object(i.a)(o,2),c=l[0],u=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,r.a.createElement(z.a,{error:c.length>0,label:"enter count rows of pyramid",onChange:function(e){var n=parseInt(e.target.value);0!==e.target.value.length?e.target.value.length>1&&Number.isNaN(n)?u(["This is not number"]):n>22?u(["Value must be grade then 1 and less then 23"]):(u([]),a(n)):a("")},value:t||"",helperText:c.join(r.a.createElement("hr",null)),variant:"outlined"})),t>1&&r.a.createElement(N,{countRows:t}))};var I=function(){return r.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.c1a60d81.chunk.js.map