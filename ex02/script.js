// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // 1. target the div
  let target=document.querySelector("#text-content")
  console.log(target)
  //2. set inner text to something new
  target.innerText="something new"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let target=document.querySelector("#task2")
  console.log(target)
  target.style.backgroundColor ="red"
}

// Write your task 3 code inside this function!
function task3() {
 console.log("Running task 3");
 let target=document.querySelector("#list")
 console.log(target)
 let parent=document.querySelector('#list')
 let child=document.createElement("li")
 child.textContent="This is a list item"
 parent.appendChild(child)
}
