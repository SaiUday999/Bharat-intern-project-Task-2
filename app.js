document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          addTask(taskText);
          taskInput.value = '';
      }
  });

  function addTask(taskText) {
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">Delete</button>
      `;
      taskList.appendChild(li);

      // Add event listener to delete button
      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function () {
          li.remove();
      });
  }
});
