function getMax(arr){
    let a = arr.flat();
    for(let i = 0; i < arr.length; i++){
        a = a.flat();
    }
    let max = Math.max(...a);   
    return max;
}

console.log(getMax([2, 3, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]));