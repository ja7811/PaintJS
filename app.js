const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const undo = document.getElementById("jsUndo");
const mode = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.lineWidth = 2.5;

ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";

let painting = false;
let filling = false;

function handleCanvasClick(event) {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function startPainting(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleRangeInput(event) {
  strokeWidth = event.target.value;
  ctx.lineWidth = strokeWidth;
}


function stopPainting(event) {
  painting = false;
}

  
if (canvas) {
  canvas.addEventListener("mousemove", startPainting);
  canvas.addEventListener("mousedown", function (event) {
    painting = true;
  });
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
} else {
  console.log("canvas not found!!");
}

if (range) {
  range.addEventListener("input", handleRangeInput);
} else {
  console.log("range not found!");
}

if (colors) {
  Array.from(colors).forEach((color) =>
    addEventListener("mousedown", handleColorClick)
  );
} else {
  console.log("colors not found!");
}

}

if (mode) {
  mode.addEventListener("click", function (event) {
    filling = !filling;
    if (filling === true) {
      mode.innerText = "paint";
    } else {
      mode.innerText = "fill";
    }
  });
} else {
  console.log("mode not found!");
}