const canvas= document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
Array.from(colors).forEach(color => addEventListener("mousedown", handleColorClick));

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
        console.log("Not Painting!");
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        console.log("Painting : x=%d  y=%d", x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

if(canvas){
    canvas.addEventListener("mousemove", startPainting);
    canvas.addEventListener("mousedown", function(event){painting = true;});
    canvas.addEventListener("mouseleave", function(event){painting = false;});
    canvas.addEventListener("mouseup", function(event){painting = false;});
}
else{
    console.log("canvas not found!!");
}