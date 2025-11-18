let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    render();

    function addTask() {
      const input = document.getElementById("taskInput");
      if (!input.value.trim()) return;
      tasks.push(input.value.trim());
      input.value = "";
      save(); render();
    }

    function deleteTask(i) {
      tasks.splice(i, 1);
      save(); render();
    }

    function editTask(i) {
     const newVal = prompt("Edit task", tasks[i]);
      if (newVal !== null && newVal.trim()) {
        tasks[i] = newVal.trim();
        save(); render();
      }
    }

    function render() {
      const ul = document.getElementById("taskList");
      ul.innerHTML = "";
      tasks.forEach((t, i) => {
        ul.innerHTML += `<li>${t}
          <button onclick="editTask(${i})">Edit</button>
          <button onclick="deleteTask(${i})">Delete</button>
        </li>`;
      });
    }

    function save() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }