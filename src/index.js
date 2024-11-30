import "./styles/style.css";
import { displayController } from "./pages/display_controller";
import { elementController, makeProject, makeTask } from "./components/task_elements";

displayController.domReady(() => {
  if (storageAvailable("localStorage")) {
    let projects = JSON.parse(localStorage.getItem('projects'));
    Object.values(projects).forEach((project) => {
      const newProject = makeProject(objectToForm(project.info));
      project.tasks.forEach((task) => {
        const newTask = makeTask(objectToForm(task.info));
        newProject.addTask(newTask);
      })
      elementController.addProject(newProject);
    })
  }
  document.body.style.visibility = 'visible';
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function objectToForm(object) {
  const form = new FormData();
  for (const infoKey in object) {
    form.append(infoKey, object[infoKey]);
  }
  return form;
}

