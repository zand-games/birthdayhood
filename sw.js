if(!self.define){let e,i={};const t=(t,n)=>(t=new URL(t+".js",n).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const c=e=>t(e,o),f={module:{uri:o},exports:s,require:c};i[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3dd7a3c1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bde99736.css",revision:"cb02c0c9b004f037fa69391c2bd9e14b"},{url:"f61f0a98.js",revision:"39545b45f8b04adfef5132f49ca5f28d"},{url:"index.html",revision:"631c73525e5b2843d189216313c1438f"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
