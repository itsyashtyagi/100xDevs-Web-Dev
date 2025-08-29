
function greeting(greet : string){
     console.log(`Hello ${greet}`);
}

function sum(a : number, b : number): number {
     return a+b;
}

function takeFunctionInput(fn : () => void){
     setTimeout(fn, 1000);
}

takeFunctionInput(function (){
     console.log("Hi there");
});

console.log(sum(1, 2));
greeting("yash");