(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{478:function(e,n){var t;(t=Prism).languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},t.hooks.add("before-tokenize",(function(e){var n=!1;t.languages["markup-templating"].buildPlaceholders(e,"smarty",/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,(function(e){return"{/literal}"===e&&(n=!1),!n&&("{literal}"===e&&(n=!0),!0)}))})),t.hooks.add("after-tokenize",(function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"smarty")}))}}]);