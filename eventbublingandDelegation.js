//Event Bubling = child to parent = child event triggers also parent event

document.querySelector(".card-title").addEventListener("click", function() {
  console.log("card-title");
});

document.querySelector(".card-content").addEventListener("click", function() {
  console.log("card-content");
});

document.querySelector(".card").addEventListener("click", function() {
  console.log("card");
});

document.querySelector(".col").addEventListener("click", function() {
  console.log("col");
});

//Event Delegation = Parent event passed to child through custom logic = also passed to child dynamically added to the parent collection

document.body.addEventListener("click", delItem);

function delItem(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }
}
