console.log("hello")
let myArray=[
    "karley",
     "laney",
     "fist"
]
console.log(Array)

let names = document.querySelectorAll("li")

let target = document.querySelector("#receiver")

console.log(names)

names.forEach(item => {
    let newEl = document.createElement("li");
    newEl.innerText = "hi"+item.innerText;
    newEl.style.fontWeight = 800;
    target.appendChild(newEl)


})

