let taskInput = document.getElementById("task-input");
let addTaskButton = document.getElementById("add-task");
let taskList = document.getElementById("task-list");
let categoryInput = document.getElementById("category-input"); // tambahkan input untuk kategori

let tasks = [];

let gymTodoList = {
  addTask(task, category) {
    let newTask = {
      taskName: task,
      category: category,
    };
    tasks.push(newTask);
    this.renderTaskList();
  },

  deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      this.renderTaskList();
    }
  },

  editTask(index, newTask, newCategory) {
    if (index >= 0 && index < tasks.length) {
      tasks[index] = {
        taskName: newTask,
        category: newCategory,
      };
      this.renderTaskList();
    }
  },

  renderTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      let taskElement = document.createElement("li");
      taskElement.className = "task";
      taskElement.textContent = task.taskName;
      taskElement.dataset.index = index;

      let deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        this.deleteTask(index);
      });

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        taskElement.contentEditable = "true";
        taskElement.className += " edit-mode";
        taskElement.addEventListener("blur", () => {
          this.editTask(index, taskElement.textContent, task.category);
          taskElement.contentEditable = "false";
          taskElement.className = "task";
        });
      });

      let categoryButton = document.createElement("button");
      categoryButton.className = "category-button";
      categoryButton.textContent = task.category;
      categoryButton.addEventListener("click", () => {
        this.filterTasksByCategory(task.category);
      });

      taskElement.appendChild(deleteButton);
      taskElement.appendChild(editButton);
      taskElement.appendChild(categoryButton);
      taskList.appendChild(taskElement);
    });
  },

  filterTasksByCategory(category) {
    let filteredTasks = tasks.filter((task) => task.category === category);
    taskList.innerHTML = "";
    filteredTasks.forEach((task, index) => {
      let taskElement = document.createElement("li");
      taskElement.className = "task";
      taskElement.textContent = task.taskName;
      taskElement.dataset.index = index;

      let deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        this.deleteTask(index);
      });

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        taskElement.contentEditable = "true";
        taskElement.className += " edit-mode";
        taskElement.addEventListener("blur", () => {
          this.editTask(index, taskElement.textContent, task.category);
          taskElement.contentEditable = "false";
          taskElement.className = "task";
        });
      });

      let categoryButton = document.createElement("button");
      categoryButton.className = "category-button";
      categoryButton.textContent = task.category;
      categoryButton.addEventListener("click", () => {
        this.filterTasksByCategory(task.category);
      });

      taskElement.appendChild(deleteButton);
      taskElement.appendChild(editButton);
      taskElement.appendChild(categoryButton);
      taskList.appendChild(taskElement);
    });
  },
};

addTaskButton.addEventListener("click", () => {
  let task = taskInput.value.trim();
  let category = categoryInput.value.trim();
  if (task !== "" && category !== "") {
    gymTodoList.addTask(task, category);
    taskInput.value = "";
    categoryInput.value = "";
  }
});
