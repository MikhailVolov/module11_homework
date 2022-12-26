function sum(x) {
    return function(y) {
        return x + y;
    };
}

console.log( sum(1)(2), sum(6)(2), sum(35)(2) );