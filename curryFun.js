function curryFun(fun) {
    return function curried() {
        var arr = Array.prototype.slice.call(arguments);
        if (arr.length === fun.length) {
            fun.apply(null, arr);
        } else {
            return function (a) {
                var newArgs = [].concat(arr);
                newArgs.push(a);
                return curried.apply(null, newArgs);
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