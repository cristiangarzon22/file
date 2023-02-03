const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    continue;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

controls.addEventListener("click", function(event) {
  const target = event.target;
  const amount = controls.querySelector("input").value;
  console.log("Click event fired");
  if (target.dataset.create) {
    createBoxes(amount);
  } else if (target.dataset.destroy) {
    destroyBoxes();
  }
});

const controls2 = document.querySelector("#controls");
console.log(controls2);

const boxes1 = document.querySelector("#boxes");
console.log(boxes1);