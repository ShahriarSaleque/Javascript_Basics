//local Storage = part of the window object = saves key pair values as strings only
//Session storage = alomst same as local storage except that it stores value until the session is restarted

//Set an item
localStorage.setItem("name", "shahriar");
localStorage.setItem("name1", "saleque");
localStorage.setItem("name2", 123);

//Remove an item , can also be done from the browser
localStorage.removeItem("name");

//session storage = persists only when the session is open browser closes -> session ends
sessionStorage.setItem("id", 123);

//get item from local Storage
const name = localStorage.getItem("name1");
console.log(name);

//clear local Storage
localStorage.clear();

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;

  //Create an array
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("task saved!!");

  console.log(task);

  e.preventDefault();
});

const tasks = localStorage.getItem("tasks");

//tasks is a string formatted like an array , making it an JSON object will allow us to use the forEach method
const taskObj = JSON.parse(tasks);

taskObj.forEach(task => {
  console.log(task);
});
