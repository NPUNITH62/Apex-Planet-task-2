// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return;
  }
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }
  alert("Form submitted successfully!");
  document.getElementById('contactForm').reset();
});

// To-Do List
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  let taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;

  let delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-sm", "btn-light");
  delBtn.innerText = "Delete";
  delBtn.onclick = function () {
    taskDiv.remove();
  };

  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(delBtn);

  document.getElementById("taskList").appendChild(taskDiv);
  taskInput.value = "";
}
