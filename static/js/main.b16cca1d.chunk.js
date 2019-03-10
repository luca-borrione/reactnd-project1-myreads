(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports={basename:{"luca-borrione.github.io":"reactnd-project1-myreads"}}},27:function(e,t,n){e.exports=n(41)},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),s=n(21),c=n.n(s),i=n(43),u=n(14),l=n(12),h=n(9),f=n.n(h),d=n(13),p=n(3),b=n(4),m=n(7),v=n(5),k=n(6),S=n(8),g=n(45),O=n(44),E=n(26),j=function(e){var t=e.component,n=e.path,a=Object(E.a)(e,["component","path"]);return r.a.createElement(O.a,Object.assign({},a,{path:n,render:function(e){return r.a.createElement(t,Object(u.a)({},a,e))}}))},w=n(42),y=n(25),R=n(15),T=n(1),A=n.n(T),B=(Object.freeze({authors:A.a.arrayOf(A.a.string.isRequired),id:A.a.string.isRequired,shelf:A.a.string.isRequired,thumbnail:A.a.string,title:A.a.string.isRequired}),Object.freeze({CURRENTLY_READING:"currentlyReading",WANT_TO_READ:"wantToRead",READ:"read",NONE:"none"})),N=Object.freeze((a={},Object(R.a)(a,B.CURRENTLY_READING,"Currently Reading"),Object(R.a)(a,B.WANT_TO_READ,"Want to Read"),Object(R.a)(a,B.READ,"Read"),Object(R.a)(a,B.NONE,"None"),a)),U="unexpected result from BooksAPI",x="the books passed are contained in multiple shelves",I="unexpected status",C=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={selectedValue:"",status:""},n.onSelectChange=n.onSelectChange.bind(Object(S.a)(Object(S.a)(n))),n}return Object(k.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onSelectChange",value:function(e){var t=this,n=this.constructor.STATUS,a=this.props,o=a.book,r=a.updateBookShelf;this.setState({selectedValue:e.target.value,status:n.BUSY},Object(d.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.selectedValue,e.next=3,r(o,a);case 3:t.mounted&&t.setState({status:n.READY});case 4:case"end":return e.stop()}},e)})))}},{key:"render",value:function(){var e=this.constructor.STATUS,t=this.state,n=t.status,a=t.selectedValue;return r.a.createElement("div",{className:"book-shelf-changer"},n===e.BUSY&&r.a.createElement("div",{id:"loading"}),r.a.createElement("select",{value:a,onChange:this.onSelectChange},r.a.createElement("option",{value:"move",disabled:!0},"Move to..."),Object.entries(N).map(function(e){var t=Object(y.a)(e,2),n=t[0],a=t[1];return r.a.createElement("option",{key:n,value:n},a)})))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return""===n.selectedValue?{selectedValue:e.book.shelf,status:t.STATUS.READY}:null}}]),t}(r.a.Component);C.STATUS={BUSY:"STATUS.BUSY",READY:"STATUS.READY"};var D=C,Y=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,n=e.updateBookShelf,a=t.imageLinks&&t.imageLinks.thumbnail?t.imageLinks.thumbnail:"https://books.google.co.uk/googlebooks/images/no_cover_thumb.gif";return r.a.createElement("li",null,r.a.createElement("div",{className:"book"},r.a.createElement("div",{className:"book-top"},r.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundSize:"cover",backgroundImage:"url(".concat(a,")")}}),r.a.createElement(D,{key:"".concat(t.id,"-changer"),book:t,updateBookShelf:n})),r.a.createElement("div",{className:"book-title"},function(e){var t=["a","abaft","aboard","about","above","absent","across","afore","after","against","along","alongside","amid","amidst","among","amongst","an","and","anenst","apropos","apud","around","as","aside","astride","at","athwart","atop","barring","before","behind","below","beneath","beside","besides","between","beyond","but","by","circa","concerning","despite","down","during","except","excluding","failing","following","for","forenenst","from","given","in","including","inside","into","like","mid","midst","minus","modulo","near","next","notwithstanding","o","of","off","on","onto","opposite","or","out","outside","over","pace","past","per","plus","pro","qua","regarding","round","s","sans","save","since","so","than","the","through","thru","throughout","thruout","till","times","to","toward","towards","under","underneath","unlike","until","unto","up","upon","versus","vs","via","vice","vis","with","within","without","worth","this"];return e.replace(/\w+/gi,function(e){var n=e.toLowerCase();return t.includes(n)?n:e.toLowerCase().replace(/\S/,function(e){return e.toUpperCase()})}).replace(/(^\S|:\s*\S)/g,function(e){return e.toUpperCase()})}(t.title)),r.a.createElement("div",{className:"book-authors"},(t.authors||[]).map(function(e,t){return r.a.createElement("span",{className:"author",key:t},e.toLowerCase().replace(/\b\S/g,function(e){return e.toUpperCase()}))}))))}}]),t}(r.a.Component),_=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(b.a)(t,[{key:"shouldComponentUpdate",value:function(e){return function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=[]).concat.apply(e,Object(l.a)(n.map(function(e,t){var a,o=n.slice(0);o.splice(t,1);var r=Object(l.a)(new Set((a=[]).concat.apply(a,Object(l.a)(o))));return e.filter(function(e){return!r.includes(e)})})))}(this.props.books,e.books).length>0}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.updateBookShelf;return r.a.createElement("ol",{className:"books-grid"},t.map(function(e){return r.a.createElement(Y,{key:e.id,book:e,updateBookShelf:n})}))}}]),t}(r.a.Component),L=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,n=e.updateBookShelf,a=Object(l.a)(new Set(t.map(function(e){return e.shelf})));if(a.length>1)throw new Error(x,a);var o=N[a[0]];return r.a.createElement("div",{className:"bookshelf"},r.a.createElement("h2",{className:"bookshelf-title"},o),r.a.createElement("div",{className:"bookshelf-books"},r.a.createElement(_,{books:t,updateBookShelf:n})))}}]),t}(r.a.Component),q=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.booksInShelves,n=e.updateBookShelf;return r.a.createElement("div",{className:"list-books"},r.a.createElement("div",{className:"list-books-title"},r.a.createElement("h1",null,"MyReads")),r.a.createElement("div",{className:"list-books-content"},Object.keys(N).map(function(e){var a=t.filter(function(t){return t.shelf===e});return a.length>0?r.a.createElement(L,{key:e,books:a,updateBookShelf:n}):null})),r.a.createElement("div",{className:"open-search"},r.a.createElement(w.a,{to:"/search",id:"goto-search"},"Add a book")))}}]),t}(r.a.Component),M=n(23),W=n.n(M),P="https://reactnd-books-api.udacity.com",V=localStorage.token;V||(V=localStorage.token=Math.random().toString(36).substr(-8));var z={Accept:"application/json",Authorization:V},K=function(e,t){return fetch("".concat(P,"/books/").concat(e.id),{method:"PUT",headers:Object(u.a)({},z,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},G=function(e,t){return fetch("".concat(P,"/search"),{method:"POST",headers:Object(u.a)({},z,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})},J=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={query:""},n.async={onTyping:null};var a=n.constructor.DEBOUNCING_TIME;return n.onTyping=n.onTyping.bind(Object(S.a)(Object(S.a)(n))),n.search=W()(n.search,a),n}return Object(k.a)(t,e),Object(b.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.query!==t.query}},{key:"onTyping",value:function(e){var t=this,n=e.target.value,a=this.props.showResult;this.async.onTyping=new Promise(function(){var e=Object(d.a)(f.a.mark(function e(o){var r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({query:n});case 2:return e.next=4,t.fetchBooks(n);case 4:return r=e.sent,e.next=7,a(r);case 7:o(r);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"search",value:function(){var e=Object(d.a)(f.a.mark(function e(t,n,a){var o,r,s,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.constructor.SEARCH_LIMIT,r=this.props.getBookShelf,""!==t){e.next=5;break}return s=[],e.abrupt("return",n(s));case 5:return e.prev=5,e.next=8,G(t,o);case 8:return c=e.sent,s=!c||c.error?[]:c.map(function(e){var t=e.shelf||r(e.id);return Object(u.a)({},e,{shelf:t})}),e.abrupt("return",n(s));case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",a(e.t0));case 16:case"end":return e.stop()}},e,this,[[5,13]])}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"fetchBooks",value:function(e){var t=this,n=this.constructor.BOOKS_STATUS;return new Promise(function(n,a){t.search(e,n,a)}).then(function(e){var t=Object(l.a)(e);return t.status=n.READY,t}).catch(function(e){!1===/testing/.test(e.message)&&console.error("ERROR: ",e);var t=[];return t.status=n.ERROR,t})}},{key:"render",value:function(){var e=this.state.query;return r.a.createElement("div",{className:"search-books-input-wrapper"},r.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:e,onChange:this.onTyping}))}}]),t}(r.a.Component);J.SEARCH_LIMIT=20,J.DEBOUNCING_TIME=250,J.BOOKS_STATUS={READY:"BOOKS_STATUS.READY",ERROR:"BOOKS_STATUS.ERROR"};var F=J,H=function(){return r.a.createElement("div",{className:"panel-error"},"Something went wrong. Please try again later.")},Q=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={books:[]},n.showResult=n.showResult.bind(Object(S.a)(Object(S.a)(n))),n}return Object(k.a)(t,e),Object(b.a)(t,[{key:"showResult",value:function(){var e=Object(d.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({books:t});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=F.BOOKS_STATUS,t=this.state.books,n=this.props,a=n.getBookShelf,o=n.updateBookShelf;return r.a.createElement("div",{className:"search-books"},r.a.createElement("div",{className:"search-books-bar"},r.a.createElement(w.a,{to:"/",id:"goto-home",className:"close-search"},"Close"),r.a.createElement(F,{getBookShelf:a,showResult:this.showResult})),t.status===e.ERROR?r.a.createElement(H,null):r.a.createElement("div",{className:"search-books-results"},r.a.createElement(_,{books:t,updateBookShelf:o})))}}]),t}(r.a.Component),$=function(){return r.a.createElement("div",{className:"notfound-page-wrap"},r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"Not Found"))},X=function(e){var t=e.booksInShelves,n=e.getBookShelf,a=e.updateBookShelf;return r.a.createElement(g.a,null,r.a.createElement(j,{exact:!0,path:"/",component:q,booksInShelves:t,updateBookShelf:a}),r.a.createElement(j,{path:"/search",component:Q,getBookShelf:n,updateBookShelf:a}),r.a.createElement(O.a,{component:$}))},Z=function(){return r.a.createElement("div",{className:"book-loader"},r.a.createElement("div",{className:"book-page"}),r.a.createElement("div",{className:"book-page"}),r.a.createElement("div",{className:"book-page"}))},ee=(n(37),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).async={fetchAllBooks:null},n.state={status:n.constructor.STATUS.INITIAL,booksInShelves:null},n.updateBookShelf=n.updateBookShelf.bind(Object(S.a)(Object(S.a)(n))),n.getBookShelf=n.getBookShelf.bind(Object(S.a)(Object(S.a)(n))),n}return Object(k.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.fetchAllBooks()}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.constructor.STATUS;return t.status!==n.BUSY}},{key:"getBookShelf",value:function(e){var t=this.state.booksInShelves.find(function(t){return t.id===e});return t?t.shelf:B.NONE}},{key:"fetchAllBooks",value:function(){var e=this;return this.async.fetchAllBooks=new Promise(function(){var t=Object(d.a)(f.a.mark(function t(n){var a,o;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.constructor.STATUS,o=[],t.prev=2,t.next=5,fetch("".concat(P,"/books"),{headers:z}).then(function(e){return e.json()}).then(function(e){return e.books});case 5:return o=t.sent,t.next=8,e.setState({status:a.READY,booksInShelves:o});case 8:t.next=15;break;case 10:return t.prev=10,t.t0=t.catch(2),!1===/testing/.test(t.t0.message)&&console.error(t.t0),t.next=15,e.setState({status:a.ERROR,booksInShelves:o});case 15:n(o);case 16:case"end":return t.stop()}},t,null,[[2,10]])}));return function(e){return t.apply(this,arguments)}}()),this.async.fetchAllBooks}},{key:"updateBookShelf",value:function(){var e=Object(d.a)(f.a.mark(function e(t,n){var a,o,r,s,c,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.constructor.STATUS,o=this.state.booksInShelves,r=[],s=a.BUSY,e.next=6,this.setState({status:s});case 6:return e.prev=6,e.next=9,K(t,n);case 9:c=e.sent,e.t0=n,e.next=e.t0===B.NONE?13:20;break;case 13:return e.next=15,h=t.id,fetch("".concat(P,"/books/").concat(h),{headers:z}).then(function(e){return e.ok?e.json():{book:void 0}}).then(function(e){return e.book});case 15:if(e.sent.shelf===n){e.next=18;break}throw new Error("".concat(U,": update(").concat(t.id,", ").concat(n,")"));case 18:return r=o.filter(function(e){return e.id!==t.id}),e.abrupt("break",25);case 20:if(c[n].find(function(e){return e===t.id})){e.next=22;break}throw new Error("".concat(U,": update(").concat(t.id,", ").concat(n,")"));case 22:return-1===(i=o.findIndex(function(e){return e.id===t.id}))?r=[].concat(Object(l.a)(o),[Object(u.a)({},t,{shelf:n})]):(o[i].shelf=n,r=o),e.abrupt("break",25);case 25:s=a.READY,e.next=32;break;case 28:e.prev=28,e.t1=e.catch(6),!1===/testing/.test(e.t1.message)&&console.error(e.t1),s=a.ERROR;case 32:return e.next=34,this.setState({status:s,booksInShelves:r});case 34:return e.abrupt("return",r);case 35:case"end":return e.stop()}var h},e,this,[[6,28]])}));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.constructor.STATUS,t=this.state,n=t.booksInShelves,a=t.status;switch(a){case e.INITIAL:return r.a.createElement(Z,null);case e.ERROR:return r.a.createElement(H,null);case e.READY:return r.a.createElement(X,{booksInShelves:n,getBookShelf:this.getBookShelf,updateBookShelf:this.updateBookShelf});default:throw new Error(I,a)}}}]),t}(r.a.Component));ee.STATUS={INITIAL:"STATUS.INITIAL",BUSY:"STATUS.BUSY",READY:"STATUS.READY",ERROR:"STATUS.ERROR"};var te=ee,ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),ae=function(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})},oe=function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})};n(39);var re=n(24);function se(){var e=re.basename||{};return e[window.location.hostname]?"/".concat(e[window.location.hostname],"/"):"/"}c.a.render(r.a.createElement(i.a,{basename:se()},r.a.createElement(te,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/reactnd-project1-myreads",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/reactnd-project1-myreads","/service-worker.js");ne?(oe(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ae(e)})}}()}},[[27,2,1]]]);
//# sourceMappingURL=main.b16cca1d.chunk.js.map