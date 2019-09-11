let val;

val = document;

//collection = like an array but array methods like for and foreach cannot be used with these
val = document.all;
val = document.all[2];
val = document.contentType;
val = document.URL;
val = document.domain;

//selectors (not recommended)
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

//Links can also be selected
val = document.links[4];
val = document.links[4].className;

//returns a DOM tokenlist --> is a collection
val = document.links[4].classList;

//Scripts
val = document.scripts;
val = document.scripts[0].getAttribute("src");

//convert collection to array to use array methods
let scripts = document.scripts;

let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
  console.log(script);
});

console.log(val);
