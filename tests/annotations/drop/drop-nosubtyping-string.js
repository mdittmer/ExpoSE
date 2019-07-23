"use strict";
var S$ = require('S$');

var A = S$.SecAnn("A");
var B = S$.SecAnn("B");
A = new A([]);
B = new B([]);

var res = S$.drop(S$.annotate(S$.annotate("string", A), B), B);

S$.assert(res === "string", "value lost");
S$.assert(S$.annotations(res) === "Top<!A<!!>!>", "annotation not dropped");