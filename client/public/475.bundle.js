(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{566:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(17),r=a(28),o=function(){return function(e){e({type:r.a.GET_ALL_REQUEST}),n.c.getAll().then((function(t){return e({type:r.a.GET_ALL_SUCCESS,payload:t.data.data})})).catch((function(t){return e({type:r.a.GET_ALL_FAILURE,payload:t})}))}}},735:function(e,t,a){var n=a(16),r=a(736);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},736:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n)()(!1);r.push([e.i,".card{margin:1em auto 4em;display:flex;box-shadow:0px 3px 10px rgba(0,0,0,0.25);transition:box-shadow 0.3s ease-in-out}.card:hover{box-shadow:0px 0px 0px rgba(0,0,0,0.25)}.card>a{width:30%;overflow:hidden;height:13em}.card__image{width:100%;height:auto}.card__info{background-color:#fff;width:70%;padding:1em 2em;display:flex;flex-direction:column;justify-content:space-evenly}.card__info--title{font-weight:500;text-overflow:ellipsis;line-height:2;text-decoration:none;color:#202121}.card__info--title:hover{text-decoration:underline}.card__info--orther{margin:1em 0;display:flex;justify-content:space-between;font-size:0.8em}.card__info--orther>.in_category{color:#c3c3c3}.card__info--orther>.in_category a{text-decoration:none;font-weight:500;font-size:1.2em;color:#3EAA6C}.card__info--orther>.in_category a:hover{text-decoration:underline}.card__info--orther>.publish_date{color:#c3c3c3}\n",""]),t.default=r},737:function(e,t,a){var n=a(16),r=a(738);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},738:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n)()(!1);r.push([e.i,".articles{margin:4em auto;max-width:1000px}\n",""]),t.default=r},739:function(e,t,a){var n=a(16),r=a(740);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},740:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n)()(!1);r.push([e.i,".home__menubar{display:flex;box-shadow:1px 0 0 0 #E2E2E2,0 1px 0 0 #E2E2E2,0px 0px 0 0 #E2E2E2,0px 0 0 0 #E2E2E2 inset,0 0px 0 0 #E2E2E2 inset}.home__menubar>*{box-shadow:1px 0 0 0 #E2E2E2,0 1px 0 0 #E2E2E2,0px 0px 0 0 #E2E2E2,0px 0 0 0 #E2E2E2 inset,0 0px 0 0 #E2E2E2 inset;user-select:none;width:150px}.home__menubar>* .title{font-family:var(--font-family-second);font-size:1em;display:block;width:10.15em;padding:2em;text-transform:uppercase;text-align:center;position:relative;cursor:pointer;transition:all .3s ease-in-out}.home__menubar>* .title:hover ~ .content{transform:translateY(0)}.home__menubar--category .content,.home__menubar--tag .content{display:grid;transform:translateY(-300%);position:absolute;background-color:#fff;flex-direction:column;padding:2em 5em;grid-template-columns:repeat(3, 1fr);box-shadow:1px 0 0 0 #E2E2E2,0 1px 0 0 #E2E2E2,0px 0px 0 0 #E2E2E2,1px 0 0 0 #E2E2E2 inset,0 1px 0 0 #E2E2E2 inset}.home__menubar--category .content:hover,.home__menubar--tag .content:hover{transform:translateY(0)}.home__menubar--category .content--item,.home__menubar--tag .content--item{padding:1em;margin:1em;border:1px solid;justify-content:center;align-items:center;display:flex}.home__menubar--category .content--item a,.home__menubar--tag .content--item a{text-decoration:none;color:#202121}\n",""]),t.default=r},780:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(13),c=a(11),i=a(566),l=a(90);a(735);var s=function(e){var t=e.title,a=e.slug,n=e.updatedAt,o=e.category,i=e.summary;return r.a.createElement("div",{className:"card"},r.a.createElement(c.b,{to:"/article/"+a},r.a.createElement("img",{className:"card__image",src:"https://images-platform.99static.com/hspcyKRvXHRmOn9gHVVv0-6eUUw=/500x500/top/smart/99designs-contests-attachments/8/8066/attachment_8066795",alt:"card"})),r.a.createElement("div",{className:"card__info"},r.a.createElement(c.b,{to:"/article/"+a,className:"card__info--title"},t),r.a.createElement("p",null,i),r.a.createElement("div",{className:"card__info--orther"},r.a.createElement("span",{className:"in_category"},"Added to",r.a.createElement(c.b,{to:"/category/"+o.slug},o.title)),r.a.createElement("span",{className:"publish_date"},n))))};a(737);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=function(e){var t=e.articles;return r.a.createElement("section",{className:"articles"},t&&t.map((function(e,t){return r.a.createElement(s,u({key:t},e))})))};a(739);t.default=Object(o.b)((function(e){return{categories:e.CategoryReducer,articles:e.ArticleReducer.articlesInfo}}),(function(e){return{getAllCategory:function(){return e(Object(i.a)())},getAllArticle:function(){return e(Object(l.b)())}}}))((function(e){var t=e.categories,a=e.articles,o=e.getAllCategory,i=e.getAllArticle;return Object(n.useEffect)((function(){o()}),[o]),Object(n.useEffect)((function(){i()}),[i]),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__menubar"},r.a.createElement("div",{className:"home__menubar--category"},r.a.createElement("span",{className:"title"},"category"),r.a.createElement("ul",{className:"content"},t&&t.map((function(e,t){return r.a.createElement("li",{className:"content--item",key:t},r.a.createElement(c.b,{to:"/category/"+e.slug},e.title))}))))),r.a.createElement(d,{articles:a}))}))},90:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return l}));var n=a(17),r=a(22),o=function(){return function(e){e({type:r.a.GET_ALL_REQUEST}),n.a.getAll().then((function(t){return e({type:r.a.GET_ALL_SUCCESS,payload:t.data.data})})).catch((function(t){return e({type:r.a.GET_ALL_FAILURE,payload:t})}))}},c=function(e){return function(t){t({type:r.a.GET_DETAIL_REQUEST}),n.a.getDetail(e).then((function(e){return t({type:r.a.GET_DETAIL_SUCCESS,payload:e.data.data})})).catch((function(e){return t({type:r.a.GET_DETAIL_FAILURE,payload:e})}))}},i=function(e,t){return function(a){a({type:r.a.CREATE_REQUEST}),n.a.create(e).then((function(e){a({type:r.a.CREATE_SUCCESS,payload:e.data.data}),t("/admin/article")})).catch((function(e){return a({type:r.a.CREATE_FAILURE,payload:e})}))}},l=function(e,t){return function(a){a({type:r.a.UPDATE_REQUEST}),n.a.update(e).then((function(e){a({type:r.a.UPDATE_SUCCESS,payload:e.data.data}),t("/admin/article")})).catch((function(e){return a({type:r.a.UPDATE_FAILURE,payload:e})}))}}}}]);