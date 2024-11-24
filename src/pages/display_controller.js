import { makeTask, makeProject } from "../components/task_elements";
export { displayController };


const displayController = (function() {
  const addProjectButton = document.querySelector('#add-project'),
        closeModalButton = document.querySelector('.close-modal'),
        addTaskButton = document.querySelector('.sidebar .action-button'),
        project = document.querySelector('.project'),
        modal = document.querySelector('.modal'),
        modalForm = document.querySelector('.modal form'),
        modalAddTaskButton = document.querySelector('.project button:first-of-type');
  addProjectButton.addEventListener('click', () => modal.style.display = 'flex');
  closeModalButton.addEventListener('click', () => modal.style.display = 'none');
  addTaskButton.addEventListener('click' , () => addTask);
  modalAddTaskButton.addEventListener('click', () => addTask);

  function addTask(e) {
    modalAddTaskButton.style.display = 'none';
    modalForm.name = 'task_form';
  }

  const domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  }

  return {domReady}

})(); 