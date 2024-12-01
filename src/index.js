import "./styles/style.css";
import { displayController } from "./pages/display_controller";

displayController.domReady(() => {
  //update dom with previously saved projects
  if (storageAvailable("localStorage")) {
    displayController.recallFromStorage();
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


