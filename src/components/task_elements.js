import { formatDate, compareDate } from "./date-fns";

function makeTask(taskData) {
  const taskData = new FormData(taskData);
  const task = {}
  for (const [key, value] of taskData) 
    task[key] = taskData.get(key);

  return { task }
}

function Project(projectData) {
  const project = makeTask(projectData);
  project.tasks = [];
  project.completedTasks = [];

  const addTask = (task) => project.tasks.push(task);
}