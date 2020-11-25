canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var MouseEvent="empty";
var LastX,LastY;
color="white";
var WidthOfTheLine=3;
canvas.addEventListener("mousedown",my_mouseDown);

function my_mouseDown(e) {
    MouseEvent="mouseDOWN";
}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e) {
    MouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseLeave);

function my_mouseLeave(e) {
    MouseEvent="mouseLEAVE";
}

canvas.addEventListener("mousemove",my_mouseMove);

function my_mouseMove(e) {
    MouseEvent="mouseMOVE";
    CurrentPositionOfX=e.clientX-canvas.offsetLeft;
    CurrentPositionOfY=e.clientY-canvas.offsetTop;
    if(MouseEvent=="mouseDOWN") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=WidthOfTheLine;
        console.log(" Last Position Of 'X' And 'Y' ");
        console.log(" X= "+LastX+" Y= "+LastY);
        ctx.moveTo(LastX,LastY);
        ctx.lineTo(CurrentPositionOfX,CurrentPositionOfY);
        ctx.stroke();
    }
    LastX=CurrentPositionOfX;
    LastY=CurrentPositionOfY;
}
