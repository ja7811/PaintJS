const canvas= document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

//추가할 기능
//1. input(range)태그에 eventListener("input", <함수이름>) 추가
//2. Filling Mode/ Brush Mode 전환할 수 있게 변경 (버튼으로 둘 중 하나 선택, default는 brush mode)
//3. Save / Undo 기능 추가 (undo - html canvas 문서 참고)

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = 'black';
ctx.lineWidth = 2.5;

let painting = false;

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
}


function startPainting(event){
    const x = event.offsetX;
    const y = event.offsetY;
    
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


function handleRangeInput(event){
    strokeWidth = event.target.value;
    ctx.lineWidth = strokeWidth;
}


if(canvas){
    canvas.addEventListener("mousemove", startPainting);
    canvas.addEventListener("mousedown", function(event){painting = true;});
    canvas.addEventListener("mouseleave", function(event){painting = false;});
    canvas.addEventListener("mouseup", function(event){painting = false;});
}else{
    console.log("canvas not found!!");
}

if(range){
    range.addEventListener("input", handleRangeInput);
}else{
    console.log("range not found!");
}

if(colors){
    Array.from(colors).forEach(color => addEventListener("mousedown", handleColorClick));
}else{
    console.log("colors not found!");
}