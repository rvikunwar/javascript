// Event bubbling and capturing

// Stop propagation, Immediate propagation & Prevent defaults

const div = document.getElementById('div')
const btn = document.getElementById('btn')

// event bubling - child to parent bubling of event ( in this case button -> div )
div.addEventListener("click", ()=>{
    console.log("1, div - on click called !!")
})  
btn.addEventListener("click", ()=>{
    console.log("1, btn - on click called !!")
})  

//capturing - parent to child (html -> body -> div -> button)
div.addEventListener("click", ()=>{
    console.log("2, div - on click called !!")
}, true)  
btn.addEventListener("click", ()=>{
    console.log("2, btn - on click called !!")
}, true)  

// stop propagate -  stops external component/parent events
btn.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("3, btn - on click called !!")
})  

//Immediate propagation
const btn1 = document.getElementById('btn1')

btn1.addEventListener("click", (e)=>{
    console.log("4, btn - on click called !!")
}) 

btn1.addEventListener("click", (e)=>{
    e.stopImmediatePropagation() // stops the propagation at this point
    console.log("4, btn - on click called !!")
}) 

btn1.addEventListener("click", (e)=>{
    console.log("4, btn - on click called !!")
}) 

//preventing default behaviour of element
const a =  document.getElementById('a')
a.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("Prevents")
})