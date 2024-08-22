let todoList = [];

function newElement() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === "") {
        alert("Please enter a task!");
    } else {
        let todoItem = {
            item: inputValue,
            status: false
        };
        todoList.push(todoItem);
        document.getElementById("myInput").value = "";
        displayTasks();
        displayData();
    }
}

function displayTasks() {
    let ul = document.getElementById("myUL");
    ul.innerHTML = "";
    todoList.forEach((element, index) => {
        let li = document.createElement("li");
        li.innerHTML = element.item;
        if (element.status) {
            li.classList.add("checked");
        }
        li.addEventListener("click", function() {
            toggleStatus(index);
        });
        ul.appendChild(li);
    });
}