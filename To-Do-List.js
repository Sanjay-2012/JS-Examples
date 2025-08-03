let taskInput = document.querySelector("input");
let addButton = document.getElementById("btn");
let taskList = document.querySelector("ul");

addButton.addEventListener("click", function () {
  let taskText = taskInput.value;

  if (taskText !== "") {
    let newTask = document.createElement("li");
    newTask.innerText = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";
 }
});