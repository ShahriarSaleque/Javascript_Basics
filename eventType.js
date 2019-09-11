const clearbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//Click event
clearbtn.addEventListener("click", runEvent);

//Double click
clearbtn.addEventListener("dblclick", runEvent);

//MouseDown event
clearbtn.addEventListener("mousedown", runEvent);

//Mouseup event
clearbtn.addEventListener("mouseup", runEvent);

//Mouseenter event
card.addEventListener("mouseenter", runEvent);

//Mouseleave event
card.addEventListener("mouseleave", runEvent);

//Mouseover event
card.addEventListener("mouseover", runEvent);

//Mouseout event
card.addEventListener("mouseout", runEvent);

//Mousemove event
card.addEventListener("mousemove", runEvent);

//Event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `{MouseX: ${e.offsetX} MouseY: ${e.offsetY}}`;

  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
