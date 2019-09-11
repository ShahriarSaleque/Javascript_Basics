document.querySelector(".clear-tasks").addEventListener("click", e => {
  //console.log("clicked");

  let val = e.target.value;

  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = "Clicked";

  //Event Type
  val = e.type;

  //Co-ordinates of event relative to window(from top of page)
  val = e.clientY;
  val = e.clientX;

  //Co-ords relative to the button
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
  e.preventDefault();
});
