//create a element li
const li = document.createElement("li");

//Add a class
li.className = "collection-item";

//Add a id
li.id = "new-item";

//Add an attribute
li.setAttribute("title", "new item");

//Add a text node
li.appendChild(document.createTextNode("New node "));

//create an a tag element
const a = document.createElement("a");

//add icon to HTML
a.innerHTML = ' <i class="fa fa-remove"></i>';

//add a class to a tag
a.className = "delete-item secondary-content";

//add the a tag to the created li
li.appendChild(a);

//add li to ul with collection class
document.querySelector("ul.collection").appendChild(li);

console.log(li);
