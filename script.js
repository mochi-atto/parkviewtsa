document.getElementById("button").onclick = toggleVisibility();
function toggleVisibility(){
  document.getElementById("content").classList.toggle("visibility")
}

var clientHeight = document.getElementById('container').clientHeight;
