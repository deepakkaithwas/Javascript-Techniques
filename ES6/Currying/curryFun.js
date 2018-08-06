/*
* Create any function as curry function in ES6 way
*/

function curryFun(fun) {
    return function curried(...args) {
        // Check if passed args length is great then or equal to the function which is getting curried's arrity length
        if (args.length >= fun.length) {
            fun(...args);
        } else {
            return function (a) {
                // Concat the args with passed argument from curried function
                return curried(...[...args,a]);
            }
        }
    }
}

var sum = function (a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

var curriedSum = curryFun(sum);
var threeArg = curriedSum("AA")("BB")("CC");
threeArg("EE");