var angle = 0;
function gallerycar(sign) {
    carr = document.querySelector("#carr");
if (!sign) { angle = angle + 45; } else {
    angle = angle - 45; }
    carr.setAttribute("style","-webkit-transform: rotateY("+angle +"deg); -moz-transform: rotateY("+angle +"deg); transform: rotateY("+angle +"deg);")
}

