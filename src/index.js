import "./styles/style.css";
import { displayController } from "./pages/display_controller";

displayController.domReady(() => document.body.style.visibility = 'visible')


// displayController.openModal();