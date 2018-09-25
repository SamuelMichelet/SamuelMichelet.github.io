const gradient = document.querySelector("body");

function onMouseMove(event) {
  gradient.style.background = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(200,200,200,.9) 0, #fff 70%)';
}
document.addEventListener("mousemove", onMouseMove);


