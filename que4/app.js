function sortArrayOfObject(a){
    return a.sort((x, y) => x.age - y.age);
}

const data = [
    {name: 'John', age: 30},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 35}
];

console.log(sortArrayOfObject(data));