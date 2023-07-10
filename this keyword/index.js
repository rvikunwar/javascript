//node js
// console.log(this) //will give empty object

// object
const object = {
    name: 'js',
    platform: 'node js',
    version: function(){
        return this.platform + " " + 14.02
    }
}

// console.log(object.version()) //node js 14.02, as here 'this' will refer to it's owner object

//regular function/calls
function language(){
    return this; //this always refers to an object, 
    //so here we don't have any object defined which results into returning of global node object
    //or in the case of common js, it will refer to global window object
}
// console.log(language())

// example 2
const object2 = {
    sno: 2,
    version: function(){
        console.log(this) // will return the current object

        //regular function
        function call2(){
            console.log(this) // this will refer global objector window object for a regular function call
        }
        call2() // regular function call
    }
}

object2.version()