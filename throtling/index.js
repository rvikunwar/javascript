function throtle(fn){
    let loading = false; // closure 

    return function(){
        if(!loading){
            loading = true // setting loading state to false
            setTimeout(()=>{
                fn();
                loading = false;
            }, 4000)
        } else {
            console.log("Can't call function")
        }
    }
}

const call = throtle(()=>{
    console.log("Calling API")
})

call(); // will call main function and sets loading state to true 

call(); // function is disabled 

call(); // function is disabled for this call

// basically throtling is used to avoid unwanted calls of a function until and unless it is required!