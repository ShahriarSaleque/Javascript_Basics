//single element selectors

//get element by id

//get attributes from the element
console.log(document.getElementById("task-title").className);

//init var with the required element
const task = document.getElementById("task-title");

//Change the styling
task.style.background = "#333";
task.style.color = "#fff";
task.style.padding = "10px";
// task.style.display = "none";

//change the content
task.textContent = "more text with textContent";
task.innerText = "more text with inner text";
task.innerHTML = '<span style="color:blue">Task</span> List';

//Query Selector = Single element Selector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";

//Pseudo classes
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(3)").style.color = "purple";
document.querySelector("li:nth-child(4)").style.color = "green";

//can also do odd and even with this, will select the first odd and the first even individually off the list
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";
