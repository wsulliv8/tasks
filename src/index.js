import { pageLoad } from "./home";
import { createMenu } from "./menu";
import "./style.css";

const pages = {
  Home : pageLoad,
  Menu : createMenu,
};
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', handleClick));

pageLoad();

function handleClick(e) {
  const content = document.querySelector('#content').innerHTML = '';
  pages[e.target.innerText]();
}


