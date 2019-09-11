const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

///Submit
form.addEventListener("submit", runEvent);

//keydown
taskInput.addEventListener("keydown", runEvent);

//keyup
taskInput.addEventListener("keyup", runEvent);

//keypress
taskInput.addEventListener("keypress", runEvent);

//Focus
taskInput.addEventListener("focus", runEvent);

//blur
taskInput.addEventListener("blur", runEvent);

//Cut
taskInput.addEventListener("cut", runEvent);

//Paste
taskInput.addEventListener("paste", runEvent);

//Input
taskInput.addEventListener("input", runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  //heading.innerText = e.target.value;

  //console.log(taskInput.value);

  e.preventDefault();
}
