let arr = [];

function outerFunction(){
    let count = 0;
    function innerFunction(){
        for(let i = 0; i < 10; i++){
            count++;
            arr.push(count);
        }
        return;
    };
    return innerFunction();
}

outerFunction();

console.log(arr);