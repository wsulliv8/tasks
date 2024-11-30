import { formatDate, compareDate } from "../../node_modules/date-fns";
export { makeTask, makeProject, elementController };

const elementController = (function() {
  const projects = {};
  let newTaskId = 0;

  const addProject = (project) => {
    projects[project.info['project_title']] = project;
  }

  const removeProject = (project) => delete projects[project.info['project_title']];

/*   function functionToString() {
    //create deep copy of projects to convert to string
    const projectsCopy = structuredClone(projects);
    for (const project of projectsCopy) {
      for (const task of project.tasks) {
        task.getTaskId = task.getTaskId.toString();
        task.setTaskId = task.setTaskId.toString();
      }
      project.addTask = project.addTask.toString();
      project.removeTask = project.removeTask.toString();s
    }
    return projectsCopy;
  } */

  function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(projects, function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    }, 2);
    cache = null; // reset the cache
 
/*     Object.values(projects).forEach((project) => {
      let str = [JSON.stringify(project, ['info'], 2)]
      project.tasks.forEach((task) => {
        str.push(JSON.stringify(task, ['info'], 2))
      })
    }) */

    return str;
  }

  const getNewTaskId = (task) => ++newTaskId;

  return { projects, addProject, removeProject, getNewTaskId, stringify }
})();

function makeProject(projectData) {
  const info = {};
  let tasks = [];

  for (const [key, value] of projectData) 
    info[key] = projectData.get(key);  
  

  function addTask (task) { 
    this.tasks.push(task)
    return this
  };

  function removeTask(task) {
    this.tasks = this.tasks.filter((currentTask) => {
      let c = currentTask.getTaskId()
      let t = task.getTaskId()
      return currentTask.getTaskId() !== task.getTaskId()
    });
    return this;
  }
  
  return { info, addTask, removeTask, tasks };
}

function makeTask(taskData) {
  const info = {};
  let taskId = 0;
  let project = '';

  for (const [key, value] of taskData) 
    info[key] = taskData.get(key);

  const getTaskId = () => taskId;

  const setTaskId = (id) => {
    taskId = id;
    return taskId;
  }

  return { info, getTaskId, setTaskId, project }
}