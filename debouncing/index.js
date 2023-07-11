function debounce(func, delay) {
    let timeoutId; //closure

    return function (...args) {
        // console.log(this)
        // const context = this;
        console.log(typeof args, args, typeof [1,2,3])
        clearTimeout(timeoutId)
        timeoutId = setTimeout(function () {
            func.apply(null, args);
        }, delay);
    };
}

const performSearch = (text) => {
    console.log(typeof text, text)
    console.log(`Performing some search for ${text}`)
}

let debounceSearch = debounce(performSearch, 2000)

const handleUserInput = (value) => {
    debounceSearch(value, '1')
}

const input = "Hello world"

handleUserInput(input)

let word = "";
setTimeout(()=>{
    word += "Hello "
    handleUserInput(word)
}, 1000)


const value = [1,2,3,4]
console.log(`abc ${value}`)