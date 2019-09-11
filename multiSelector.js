//Returns an HTML collection
const items = document.getElementsByClassName("collection-item");

console.log(items);
// console.log(items[0]);

//can be accessed like an array
items[0].style.color = "blue";
items[2].textContent = "test";

//select the collection-items in ul class
const ulList = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(ulList);

// ulList[0].style.color = "red";

//getElementsByTagName
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[2]);

//Convert an HTML collection to array to use Array Methods
li = Array.from(li);

//li.reverse();

li.forEach((li, index) => {
  console.log(li.className);
  li.textContent = `${index}: Changed `; //reversed index due to earlier reverse method implementation
});

console.log(li);

//Node-List --> QuerySelectorAll returns a nodelist, array methods can be used here

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach((item, index) => {
  item.textContent = `${index}: Changed`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

console.log(liOdd);
console.log(liEven);

liOdd.forEach(element => {
  element.style.background = "#ccc";
});

liEven.forEach(element => {
  element.style.background = "#cc2";
});

console.log(items);
