(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{215:function(a,e){var n;(n=Prism).languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:n.languages.lua}},n.hooks.add("before-tokenize",(function(a){n.languages["markup-templating"].buildPlaceholders(a,"etlua",/<%[\s\S]+?%>/g)})),n.hooks.add("after-tokenize",(function(a){n.languages["markup-templating"].tokenizePlaceholders(a,"etlua")}))}}]);