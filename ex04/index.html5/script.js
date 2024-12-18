const colors=["red","blue","lightgreen","orange","yellow","pink","purple","violet","black"]

const hex = [1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"]
    

    //get the DOM elements 
const colorSpan = document.querySelector("#color");
const colorButton = document.querySelector("#get-color");
const randomButton=document.querySelector("#random-color");

colorButton.addEventListener("click", function(){
    console.log("clicked")
    //get an element from the color array
    let pickedColor = getRandomNumber(colors)
    // change the background
    document.body.style.backgroundColor = colors[pickedColor]
    //update the color span
    colorSpan.innerText =colors[pickedColor]
})

randomButton.addEventListener("click", function(){
    console.log("clicked random")
    //start a hex string
    let pickedColor = "#";
    //pick 6 random values from hex array
    for(let el = 0; el<6; el++){
        pickedColor += hex[getRandomNumber(hex) ];
        console.log(pickedColor)
    }
    //set the background
    document.body.style.backgroundColor= pickedColor;
    //update colorSpan
    colorSpan.innerText = pickedColor;

})

function getRandomNumber(list){
    return Math.floor(Math.random()*list.length)
    console.log(list)
}

colorButton.addEventListener("click", function(){
    console.log("saved")
    document.body.style.backgroundColor = colors[savedColor]
    colorSpan.innerText =colors[savedColor]
    let parent=document.createElement("li")
    let child= document.
    appendChild
    
    


})

