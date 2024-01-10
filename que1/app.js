function fib(number) {
    var fibArray = [0, 1];
    for (let i = 2; i < number; i++) {
        let n = fibArray[i - 1] + fibArray[i - 2]
        if (n < number) {
            fibArray.push(n);
        }
    }
    return fibArray;
}

console.log(fib(10));