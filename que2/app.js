function password(string){
    var small = /[a-z]/; // for all Small Characters
    var cap = /[A-Z]/; // for all Capital Characters
    var num = /[0-9]/; // for Number 0 to 9
    var spec = /\W/; // for Special Characters
    if(string.match(small) && string.match(cap) && string.match(num) && string.match(spec)){
        return "Password is Valid";
    }
    else{
        return "Password is Not Valid";
    }
}

console.log(password("Test@123"));
console.log(password("Test123"));