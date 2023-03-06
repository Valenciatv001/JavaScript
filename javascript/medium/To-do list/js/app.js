let taskList = [];

function addTask() {
	let taskInput = document.getElementById("taskInput");
	let taskListElem = document.getElementById("taskList");

	let task = taskInput.value;

	if (task === "") {
		alert("Please enter a task!");
		return;
	}

	taskList.push(task);

	let listItem = document.createElement("li");
	listItem.innerHTML = task;
	taskListElem.appendChild(listItem);

	taskInput.value = "";
}
