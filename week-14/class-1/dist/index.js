"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeting(greet) {
    console.log(`Hello ${greet}`);
}
function sum(a, b) {
    return a + b;
}
function takeFunctionInput(fn) {
    setTimeout(fn, 1000);
}
takeFunctionInput(function () {
    console.log("Hi there");
});
console.log(sum(1, 2));
greeting("yash");
//# sourceMappingURL=index.js.map