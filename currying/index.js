// Currying

function addition(a, b, c) {
    return a+b+c;
}

const result = addition(2,3,4)
// console.log(result)


function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// console.log(Addition(2)(3)(4))


// Infinite currying
function add(a){
    return function(b){
        if(b) return add(a+b)
        return a;
    };
}

console.log(add(2)(3)());