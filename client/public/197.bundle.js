(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{289:function(n,e){!function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,a){"string"==typeof e&&(e=[e]),e.forEach((function(e){!function(e,a){var o=n.languages[e];if(o){var t=o["doc-comment"];if(!t){var r={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};t=(o=n.languages.insertBefore(e,"comment",r))["doc-comment"]}if(t instanceof RegExp&&(t=o["doc-comment"]={pattern:t}),Array.isArray(t))for(var i=0,s=t.length;i<s;i++)t[i]instanceof RegExp&&(t[i]={pattern:t[i]}),a(t[i]);else a(t)}}(e,(function(n){n.inside||(n.inside={}),n.inside.rest=a}))}))}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);