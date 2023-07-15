var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}function $(t,n){return new t(n)}let y;function v(t){y=t}function b(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const w=[],x=[],j=[],_=[],k=Promise.resolve();let T=!1;function C(t){j.push(t)}const S=new Set;let E=0;function O(){if(0!==E)return;const t=y;do{try{for(;E<w.length;){const t=w[E];E++,v(t),P(t.$$)}}catch(t){throw w.length=0,E=0,t}for(v(null),w.length=0,E=0;x.length;)x.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];S.has(n)||(S.add(n),n())}j.length=0}while(w.length);for(;_.length;)_.pop()();T=!1,S.clear(),v(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const N=new Set;let A;function J(t,n){t&&t.i&&(N.delete(t),t.i(n))}function L(t,n,e,o){if(t&&t.o){if(N.has(t))return;N.add(t),A.c.push((()=>{N.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function z(t){t&&t.c()}function B(t,e,i,r){const{fragment:a,after_update:u}=t.$$;a&&a.m(e,i),r||C((()=>{const e=t.$$.on_mount.map(n).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(C)}function D(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,n){-1===t.$$.dirty[0]&&(w.push(t),T||(T=!0,k.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function K(n,c,i,r,a,l,s,f=[-1]){const d=y;v(n);const h=n.$$={fragment:null,ctx:[],props:l,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:c.target||d.$$.root};s&&s(h.root);let p=!1;if(h.ctx=i?i(n,c.props||{},((t,e,...o)=>{const c=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=c)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](c),p&&G(n,t)),e})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();c.intro&&J(n.$$.fragment),B(n,c.target,c.anchor,c.customElement),O()}v(d)}class R{$destroy(){D(this,1),this.$destroy=t}$on(n,e){if(!c(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=(t=>t.apiKey)({apiKey:"http://localhost:3000"});async function F(t){let n=q+`/api/auth/searchUsers?search=${t}`;const e=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok){const t=await e.json();return Promise.reject(t)}return await e.json()}function I(t,n,e){const o=t.slice();return o[11]=n[e],o}function M(t,n,e){const o=t.slice();return o[14]=n[e],o}function U(t){let n,e,o,c,i,l,h,g=t[14].name+"",$=t[14].email+"";return{c(){n=s("li"),e=s("span"),o=f(g),c=d(),i=s("span"),l=f($),h=d(),p(n,"id","searchResult"),p(n,"class","svelte-21eufl")},m(t,u){a(t,n,u),r(n,e),r(e,o),r(n,c),r(n,i),r(i,l),r(n,h)},p(t,n){2&n&&g!==(g=t[14].name+"")&&m(o,g),2&n&&$!==($=t[14].email+"")&&m(l,$)},d(t){t&&u(n)}}}function H(t){let n,e,o,c,i,l,h,g=t[11].name+"",$=t[11].email+"";return{c(){n=s("li"),e=s("span"),o=f(g),c=d(),i=s("span"),l=f($),h=d(),p(n,"id","searchResult"),p(n,"class","svelte-21eufl")},m(t,u){a(t,n,u),r(n,e),r(e,o),r(n,c),r(n,i),r(i,l),r(n,h)},p(t,n){4&n&&g!==(g=t[11].name+"")&&m(o,g),4&n&&$!==($=t[11].email+"")&&m(l,$)},d(t){t&&u(n)}}}function Q(n){let e,c,i,f,m,$,y,v,b,w,x,j,_,k,T,C,S,E,O,P=n[1],N=[];for(let t=0;t<P.length;t+=1)N[t]=U(M(n,P,t));let A=n[2],J=[];for(let t=0;t<A.length;t+=1)J[t]=H(I(n,A,t));return{c(){e=s("main"),c=s("div"),i=s("div"),f=s("input"),m=d(),$=s("div"),y=s("ul");for(let t=0;t<N.length;t+=1)N[t].c();v=d(),b=s("div"),w=s("div"),x=s("ul");for(let t=0;t<J.length;t+=1)J[t].c();j=d(),_=s("div"),k=s("div"),T=d(),C=s("div"),S=s("input"),p(f,"type","text"),p(f,"placeholder","Seach"),p(c,"id","SearchDiv"),p(c,"class","svelte-21eufl"),p(k,"id","chatBox"),p(k,"class","svelte-21eufl"),p(S,"type","text"),p(C,"id","chatInput"),p(_,"id","chatSide"),p(_,"class","svelte-21eufl"),p(b,"id","chatArea"),p(b,"class","svelte-21eufl"),p(e,"class","svelte-21eufl")},m(t,o){a(t,e,o),r(e,c),r(c,i),r(i,f),g(f,n[0]),r(c,m),r(c,$),r($,y);for(let t=0;t<N.length;t+=1)N[t].m(y,null);r(e,v),r(e,b),r(b,w),r(w,x);for(let t=0;t<J.length;t+=1)J[t].m(x,null);r(b,j),r(b,_),r(_,k),r(_,T),r(_,C),r(C,S),g(S,n[3]),E||(O=[h(f,"input",n[5]),h(f,"input",n[4]),h(S,"input",n[6])],E=!0)},p(t,[n]){if(1&n&&f.value!==t[0]&&g(f,t[0]),2&n){let e;for(P=t[1],e=0;e<P.length;e+=1){const o=M(t,P,e);N[e]?N[e].p(o,n):(N[e]=U(o),N[e].c(),N[e].m(y,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=P.length}if(4&n){let e;for(A=t[2],e=0;e<A.length;e+=1){const o=I(t,A,e);J[e]?J[e].p(o,n):(J[e]=H(o),J[e].c(),J[e].m(x,null))}for(;e<J.length;e+=1)J[e].d(1);J.length=A.length}8&n&&S.value!==t[3]&&g(S,t[3])},i:t,o:t,d(t){t&&u(e),l(N,t),l(J,t),E=!1,o(O)}}}function V(t,n,e){let o,c,i=[],r=[];return b((async()=>{(async function(t){let n=q+"/api/chat/chats";const e=await fetch(n,{method:"POST",body:{uid:t}});if(!e.ok){const t=await e.json();return Promise.reject(t)}return await e.json()})("6426fcc0ed69036fd8cf15e8").then((t=>{e(2,r=t),console.log(t)})).catch((t=>{console.log(t)}))})),[o,i,r,c,function(){F(o).then((t=>{e(1,i=t)})).catch((t=>{console.log(t)}))},function(){o=this.value,e(0,o)},function(){c=this.value,e(3,c)}]}class W extends R{constructor(t){super(),K(this,t,V,Q,i,{})}}function X(n){let e,c,i,l,f,m,$,y,v,b,w,x,j,_,k,T;return{c(){e=s("main"),c=s("input"),i=d(),l=s("input"),f=d(),m=s("button"),m.textContent="Get Team",$=d(),y=s("button"),y.textContent="Join Team",v=d(),b=s("button"),b.textContent="Create Team",w=d(),x=s("button"),x.textContent="Logout",j=d(),_=s("input"),p(c,"type","text"),p(l,"type","text"),p(l,"placeholder","Code"),p(_,"type","text"),p(_,"placeholder","Seach")},m(t,o){a(t,e,o),r(e,c),g(c,n[0]),r(e,i),r(e,l),g(l,n[1]),r(e,f),r(e,m),r(e,$),r(e,y),r(e,v),r(e,b),r(e,w),r(e,x),r(e,j),r(e,_),g(_,n[2]),k||(T=[h(c,"input",n[7]),h(l,"input",n[8]),h(m,"click",n[5]),h(y,"click",n[4]),h(b,"click",n[3]),h(x,"click",Y),h(_,"input",n[9]),h(_,"input",n[6])],k=!0)},p(t,[n]){1&n&&c.value!==t[0]&&g(c,t[0]),2&n&&l.value!==t[1]&&g(l,t[1]),4&n&&_.value!==t[2]&&g(_,t[2])},i:t,o:t,d(t){t&&u(e),k=!1,o(T)}}}function Y(){api.Default_Size()}function Z(t,n,e){let o,c,i,r="63f4fcb5180330d004fca3b8";return[o,c,i,function(){(async function(t,n,e){const o=q+"/api/teams/createTeams",c=await fetch(o,{method:"POST",body:JSON.stringify({name:n,uid:t,code:e}),headers:{"Content-Type":"application/json"}});if(!c.ok){const t=await c.json();return Promise.reject(t)}return await c.json()})(r,o,c).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))},function(){(async function(t,n){const e=q+"/api/teams/joinTeam",o=await fetch(e,{method:"POST",body:JSON.stringify({uid:t,code:n}),headers:{"Content-Type":"application/json"}});if(!o.ok){const t=await o.json();return Promise.reject(t)}return await o.json()})(r,c).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))},function(){(async function(t){const n=q+"/api/teams/getTeams",e=await fetch(n,{method:"POST",body:JSON.stringify({uid:t}),headers:{"Content-Type":"application/json"}});if(!e.ok){const t=await e.json();return Promise.reject(t)}return await e.json()})(r).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))},function(){F(i).then((t=>{})).catch((t=>{console.log(t)}))},function(){o=this.value,e(0,o)},function(){c=this.value,e(1,c)},function(){i=this.value,e(2,i)}]}class tt extends R{constructor(t){super(),K(this,t,Z,X,i,{})}}function nt(t){let n,e,c;var i=t[0]||W;return i&&(n=$(i,{}),n.$on("viewChange",t[1])),{c(){n&&z(n.$$.fragment),e=f("")},m(t,o){n&&B(n,t,o),a(t,e,o),c=!0},p(t,[c]){if(i!==(i=t[0]||W)){if(n){A={r:0,c:[],p:A};const t=n;L(t.$$.fragment,1,0,(()=>{D(t,1)})),A.r||o(A.c),A=A.p}i?(n=$(i,{}),n.$on("viewChange",t[1]),z(n.$$.fragment),J(n.$$.fragment,1),B(n,e.parentNode,e)):n=null}},i(t){c||(n&&J(n.$$.fragment,t),c=!0)},o(t){n&&L(n.$$.fragment,t),c=!1},d(t){t&&u(e),n&&D(n,t)}}}function et(t,n,e){let o,c=!0;return[o,t=>{c=t.detail,e(0,o=c?W:tt)}]}return new class extends R{constructor(t){super(),K(this,t,et,nt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
