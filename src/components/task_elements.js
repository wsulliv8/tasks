import { formatDate, compareDate } from "../../node_modules/date-fns";
export { makeTask, makeProject };

function makeTask(taskData) {
  taskData = new FormData(taskData);
  const task = {};
  let complete = false;
  for (const [key, value] of taskData) 
    task[key] = taskData.get(key);

  const setComplete = () => complete=true;

  return { task }
}

function makeProject(projectData) {
  const project = makeTask(projectData);
  project.tasks = [];
  project.completedTasks = [];
  let complete = false;

  const addTask = (task) => project.tasks.push(task);

  const setComplete = () => complete=true;
  

  return { project };
}