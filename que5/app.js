function divideArrayIntoChunk(arr, input) {
    var ans = [];
    for (var j = 0; j < arr.length; j++) {
        ans.push(arr.slice(0, input));
        for (var i = 0; i < input; i++) {
            arr.shift();
        }
    }
    return ans;
}

console.log(divideArrayIntoChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));