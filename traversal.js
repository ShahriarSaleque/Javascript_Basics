let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item");

//gets all the child items and text that comes from line-breaks as nodeList
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[9].nodeType;

//get all child nodes as HTML collection
val = list.children;
val = list.children[0];
list.children[1].textContent = "test";

// children of children
val = list.children[3].children[0];

//classes and id's can also be added
list.children[3].children[0].id = "test";

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//Get Parent node
val = listItem.parentElement.parentElement;

//Get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//values for nodeTypes
// 1 = Element
// 2 = attribute (deprecated)
// 3 = Text Node
// 8 = comment
// 9 = document itself
// 10 = doctype

console.log(val);
