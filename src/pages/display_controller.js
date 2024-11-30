import { makeTask, makeProject, elementController } from "../components/task_elements";
export { displayController };


const displayController = (function() {
  const projectNodes = new WeakMap();
  const taskNodes = new WeakMap();

  const main = document.querySelector('main'),
        addProjectButton = document.querySelector('#add-project'),
        projectFlexSidebar = document.querySelector('.sidebar .project-flex'),
        closeModalButton = document.querySelector('.close-modal'),
        modal = document.querySelector('.modal'),
        modalForm = document.querySelector('.modal form'),
        modalTaskFlex = document.querySelector('form .task-flex'),
        modalAddTaskButton = document.querySelector('.modal .project button:first-of-type'),
        modalSubmitProject = document.querySelector(`.modal button[value = 'project_submit']`),
        taskFormTemplate = document.getElementById('task-form-template'),
        taskTemplate = document.getElementById('task-template'),
        projectTemplate = document.getElementById('project-template');
  addProjectButton.addEventListener('click', addProject);
  modalSubmitProject.addEventListener('click', saveProject);
  closeModalButton.addEventListener('click', () => closeModal(modal));
  modalAddTaskButton.addEventListener('click', addTask);

  function addTask(e) {
    const newTaskForm = taskFormTemplate.cloneNode(true);
    let taskFlex;
    newTaskForm.style.display = 'block';
    newTaskForm.removeAttribute('id');
    
    //if called from edit button, fill in form as applicable
    if (e.currentTarget.name === 'edit'){
      newTaskForm.querySelectorAll('[data-content]').forEach(input => {
        input.value = taskNodes.get(e.currentTarget.closest('.task-container')).info[input.dataset.content] 
      });
      taskFlex = e.currentTarget.closest('.project-container')
        ? e.currentTarget.closest('.project-container').querySelector('.task-flex')
        : modalTaskFlex;
    } else {
      taskFlex = e.currentTarget.previousElementSibling;
    }
    taskFlex.appendChild(newTaskForm);

    newTaskForm.querySelector('button.close-modal').addEventListener('click', () => {
      newTaskForm.remove();
    })

    newTaskForm.querySelector(`button[type='submit']`).addEventListener('click', (e) => {
      e.preventDefault();
      const form = e.currentTarget.form;
      const task = makeTask(new FormData(form));
      const projectNode = form.closest('.project-container');
      if (projectNode) 
        saveTask(task, projectNodes.get(projectNode))

      appendTask(task, taskFlex);
      newTaskForm.remove();
    });
  }

  function appendTask(task, node) {
    const newTaskNodeContainer = taskTemplate.cloneNode(true);
    const newTaskNode = newTaskNodeContainer.querySelector('.task');
    taskNodes.set(newTaskNodeContainer, task);
    newTaskNode.querySelectorAll('[data-content]').forEach(node => {
      node.innerText = task.info[node.dataset.content];
    });
    newTaskNode.querySelector(`.triangle`)
      .style.backgroundColor = `var(--color-priority-${task.info['task_priority']})`;
    addEditButton(newTaskNodeContainer);

    const taskId = task.setTaskId(elementController.getNewTaskId());
    newTaskNode.querySelector('input.collapsible').setAttribute('id', `task-toggle-${taskId}`);
    newTaskNode.querySelector('label.collapsible').setAttribute('for', `task-toggle-${taskId}`);
    newTaskNode.style.display = 'grid';
    newTaskNodeContainer.removeAttribute('id');
    newTaskNodeContainer.style.display = 'block';
    node.appendChild(newTaskNodeContainer);
  }

  function saveTask(task, project) {
    task.project = project;
    project.addTask(task);
    localStorage.setItem('projects', elementController.stringify());
    console.log(localStorage.getItem('projects'))

  }

  function addProject(e) {
    //!!Need to check if project name is already taken!!
    modal.style.display = 'flex';

    if (e.currentTarget.name === 'edit'){
      const project = projectNodes.get(e.currentTarget.closest('.project-container'));
      modal.querySelectorAll('[data-content]').forEach(input => {
        input.value = project.info[input.dataset.content];
      });
      project.tasks.forEach((task) => appendTask(task, modalTaskFlex));
    }

  }

  function saveProject(e) {
    e.preventDefault();
    const newProjectNode = projectTemplate.cloneNode(true);
    const newProject = makeProject(new FormData(modalForm));
    const newProjectTitle = newProject.info['project_title'];
    projectNodes.set(newProjectNode, newProject);
    elementController.addProject(newProject);

    //append all tasks to newProject
    for (const node of modalTaskFlex.children) {
      saveTask(taskNodes.get(node), newProject);
      taskNodes.delete(node);
    }

    localStorage.setItem('projects', elementController.stringify());
    closeModal(modal);
    modalForm.reset();
    modalTaskFlex.innerHTML = '';

    //update content of newly created project node
    newProjectNode.querySelectorAll('[data-content]').forEach(node => {
      node.innerText = newProject.info[node.dataset.content];
    });
    newProjectNode.querySelector(`.triangle`)
    .style.backgroundColor = `var(--color-priority-${newProject.info['project_priority']})`;

    elementController.projects[newProjectTitle].tasks.forEach((task) => {
      appendTask(task, newProjectNode.querySelector('.task-flex'));
    })

    //Activate project node
    newProjectNode.querySelector('button.action-button').addEventListener('click',addTask);
    addEditButton(newProjectNode);

    newProjectNode.style.display = 'grid';
    newProjectNode.removeAttribute('id');
    newProjectNode.style.display = 'block';
    main.appendChild(newProjectNode);

    //Append project on sidebar
    const projectCheckbox = document.getElementById('project-checkbox-template').cloneNode(true);
    projectCheckbox.style.display = 'block';
    projectCheckbox.removeAttribute('id');
    const projectLabel = projectCheckbox.querySelector('label');
    const projectInput = projectCheckbox.querySelector('input');
    projectLabel.innerText = newProjectTitle;
    projectLabel.setAttribute('for', newProjectTitle.replace(/ /g,"-"));
    projectInput.setAttribute('id', newProjectTitle.replace(/ /g,"-"));
    projectInput.setAttribute('value', newProjectTitle);
    projectCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) newProjectNode.style.display = 'grid';
      else newProjectNode.style.display = 'none';
    })
    projectFlexSidebar.appendChild(projectCheckbox);

    //Relate project checkbox to project
    newProjectNode.projectCheckbox = projectCheckbox;
  }

  function addEditButton(node) {
    const popup = node.querySelector('.popup');
    node.querySelector('button.edit-button').addEventListener('click', () => {
      popup.style.display = 'flex';
      popup.querySelector('.close-modal').addEventListener('click', () => closeModal(popup));
      popup.querySelector(`button[name='delete']`).addEventListener('click', () => deleteNode(node));
      popup.querySelector(`button[name='edit']`).addEventListener('click', (e) => {
        if (e.currentTarget.closest('.task-container'))
          addTask(e);
        else
          addProject(e);
        deleteNode(node);
      })
    })
  }

  function deleteNode(node) {
    if (node.projectCheckbox) {
      node.projectCheckbox.remove();
      const project = projectNodes.get(node);
      //Delete all project tasks from project object and WeakMap
      for (const taskNode of node.querySelector('.task-flex').children) {
        project.removeTask(taskNodes.get(taskNode));
        taskNodes.delete(taskNode);
      }
      elementController.removeProject(project);
      projectNodes.delete(node);
    } else {
      if (taskNodes.get(node).project)
        taskNodes.get(node).project.removeTask(taskNodes.get(node));
      taskNodes.delete(node);
    }
    node.remove();
    localStorage.setItem('projects', elementController.stringify());
    console.log(localStorage.getItem('projects'))

  }

  function closeModal(modal) {
    modal.style.display = 'none';
  }

  const domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  }

  return {domReady}

})(); 