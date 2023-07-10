// call
let user1 = {
    name: 'Amit',
    age: 20,
    occpation: 'software engineer',
    printDetails: function() {
        console.log(this.name + " - " + this.age)
    }
}

// user1.printDetails();

let user2 = {
    name: 'Aman',
    age: 21,
    occpation: 'software engineer 2',
    // printDetails: function() {
    //     console.log(this.name + " - " + this.age)
    // }
}

// user1.printDetails.call(user2);


//creating generic function
let printDetails = function() {
    console.log(this.name)
}

// printDetails.call(user1);


//passing parameter

let printDetailsWithParams = function(state) {
    console.log(this.name + " " + state)
}

// printDetailsWithParams.call(user2, "delhi")


// apply - passing multiple param in a array

let printDetailsWithMultipleParams = function(state, country) {
    console.log(this.name + " " + state + " " + country)
}

// printDetailsWithMultipleParams.apply(user1, ['delhi', 'india'])


// bind - not using but copying the function for later use

let newFun = printDetailsWithMultipleParams.bind(user1, "delhi", "India")

newFun()
