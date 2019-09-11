//create a new heading
const newHeading = document.createElement("h2");

//add a title
newHeading.setAttribute("title", "new Heading");

//add a text Node to it
newHeading.appendChild(document.createTextNode("Task List"));

//get the old heading
const oldHeading = document.getElementById("task-title");

//parent element
const cardAction = document.querySelector(".card-action");

//Replace action called on parent of element that is to be replaced
cardAction.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

//Remove an element
lis[0].remove();
list.removeChild(lis[2]);

//Classes and attributes
const firstli = document.querySelector("li:first-child");
const link = firstli.children[0];

//Classes
let val;
link.classList.add("test");
link.classList.remove("test");
val = link;

//Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://gmail.com");

val = link.hasAttribute("href");

console.log(val);
