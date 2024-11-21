import { formatDate, compareDate } from "./date-fns";

function makeTask(taskData) {
  const taskData = new FormData(taskData);
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