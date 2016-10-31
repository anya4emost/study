(function(){
  var todo = new Object();
  todo.list = new Array();
  var list = document.getElementById("list");
  todo.add = function(){
  var taskEl = document.querySelector('#task');
    if (taskEl.value !== ""){
      todo.list.push(taskEl.value);
    }
    var div = document.createElement("div");
    var text = document.createTextNode(taskEl.value);
    var buttonRemove = document.createElement("button");
    buttonRemove.innerText = "remove";
    list.appendChild(div);
    div.appendChild(text);
    div.appendChild(buttonRemove);

    buttonRemove.addEventListener("click",function(){
      div.remove();  
    });

    taskEl.value = "";
  };
  var add = document.getElementById('add');
  add.addEventListener("click", todo.add);

  document.getElementById("list").innerHTML = todo.list;

})();
