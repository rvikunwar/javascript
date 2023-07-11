// inheritance

// const obj1 = new Object({
//     name: 'JS'
// })

// const obj2 = new obj1()

// const obj3 = {
//     name: 'Python'
// }



const obj1 = {
    name: "JS",
    getName: function(){
        return this.name
    }
}

const obj2 = {
    roll: 1,
    __proto__: obj1 // inheritance from obj1
}

console.log(obj2)

// array

const array = [ 'Aman', 'Ram', 'Rohit' ]

// console.log(array, )


// polyfill - custom function like (map, forEach, push)
// poly fill provides a way to add new functionality to our web browser which are not suppoerted by
// our native js, let's say there a function which is not implemented in old js browser, then polyfill can come in handy
// , they can be used to provide a similar feature
Array.prototype.show = function(){
    return this;
}

const city = [ "delhi", "mumbai" ];
console.log(city.show())

Array.prototype.toObject = function(){
    let obj = new Object();
    let index = 0;
    this.forEach((ele) => {
        obj[index] = ele
        index++;
    })
    return obj;
}

console.log(city.toObject())


function MyPrototype(name){
    this.name = name
}
MyPrototype.prototype = obj1

const myproto = new MyPrototype("Python")
console.log(myproto)

// polyfill for includes

if(!Array.prototype.includes){
    Array.prototype.includes = function(item){
        for(let i=0; i<this.length; i++){
            if(this[i] === item){
                return true;
            }
        }
        return false;
    }
} else {
    console.log('polyfill for includes is present!!')
}


function Person(name){
    this.name = name;
    console.log(name, this)
}

Person.prototype.getName = function(){
    return this.name
}

const a = new Person('abc')
console.log(a.getName())