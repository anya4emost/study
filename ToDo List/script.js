(function() {
    var list = document.getElementById("list");
    var taskEl = document.querySelector('#task');

    function setTask(text) {
        var div = document.createElement("div"),
            span = document.createElement("span"),
            input = document.createElement('input'),
            buttonRemove = document.createElement("button"),
            buttonEdit = document.createElement("button"),
            buttonSave = document.createElement("button");

        span.innerText = text;

        buttonRemove.innerText = "remove";
        buttonEdit.innerText = "edit";
        buttonSave.innerText = "save";
        buttonSave.classList.add('hide');
        input.classList.add('hide');

        div.appendChild(span);
        div.appendChild(buttonRemove);
        div.appendChild(buttonEdit);
        div.appendChild(buttonSave);
        div.insertBefore(input, div.firstChild);

        return {
            div: div,
            buttonRemove: buttonRemove,
            buttonEdit: buttonEdit,
            buttonSave: buttonSave,
            input: input,
            span: span,
        };
    }

    function add() {

        if (taskEl.value == "") {
            return;
        }

        var elements = setTask(taskEl.value);
        list.appendChild(elements.div);

        elements.buttonRemove.addEventListener("click", function() {
            elements.div.remove();
        });

        elements.buttonEdit.addEventListener("click", function Edit() {
            elements.input.value = elements.span.innerText;
            elements.buttonSave.classList.remove('hide');
            elements.buttonEdit.classList.add('hide');
            elements.input.classList.remove('hide');
            elements.span.classList.add('hide');
        });
        elements.buttonSave.addEventListener("click", function() {
            elements.span.innerText = elements.input.value;
            elements.span.classList.remove('hide');
            elements.buttonSave.classList.add('hide');
            elements.buttonEdit.classList.remove('hide');
            elements.input.classList.add('hide');
        });
        taskEl.value = "";
    };
    var buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener("click", add);
})();
