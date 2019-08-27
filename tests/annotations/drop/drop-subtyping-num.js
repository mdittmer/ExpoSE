"use strict";
var S$ = require('S$');

var A = S$.SecAnn("A");
var B = S$.SecAnn("B", A);
var C = S$.SecAnn("C", B);
A = new A([]);
B = new B([]);
C = new C([]);

var res = S$.drop(S$.annotate(1, C), B);

S$.assert(res === 1, "value lost");
S$.assert(S$.annotations(res) === "Top<!A<!!>!>", "annotation not dropped");