var elArray = document.querySelectorAll(".field>div");
var but = document.querySelector("button");

elArray.forEach(function(element){
  element.addEventListener('click', function(){
    but.className = '';
    but.classList.add(element.className);
  });
});
