/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/triangle.svg */ "./src/assets/images/triangle.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

#root, #__next {
  isolation: isolate;
}

:root {
  --color-dark-lavender: #ac65ca;
  --color-lavender: #c189d9;
  --color-faded-lavender: #c596d9;
  --color-warm-gray: #d5d9d2;
  --color-bright-red: #f24405;
  --color-coral: #f27457; 
  --color-beige: #f5f5dc;
  --color-priority-1: #ff6138;
  --color-priority-2: #ffff9d;
  --color-priority-3: #79bd8f;
  --font-size: 1.2rem;
  --height-header: 5rem;
  --height-footer: 2rem;
  --height-main: calc(calc(100vh - var(--height-header)) - var(--height-footer));
  font-size: var(--font-size);
}

h1 {
  font-size: calc(1.4*var(--font-size));
  font-weight: 600;
}

h2 {
  font-size: calc(1.2*var(--font-size));
  font-weight: 600;
}

h3 {
  font-size: calc(1.1*var(--font-size));
  font-weight: 500;
}

p, form * {
  font-size: calc(0.7*var(--font-size));
}

body {
  display: grid;
  grid-template: var(--height-header) var(--height-main) var(--height-footer) / 12rem 1fr;
  grid-template-areas: 
    "header   header"
    "sidebar  main"
    "footer   footer";
  justify-content: flex-start;
  height: 100vh;
  background-color: var(--color-warm-gray);
}

header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-lavender);
  padding: 1rem;
}

header > nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
}

nav > button {
  border: none;
  background: none;
  cursor: pointer;
}

nav > button:hover {
  color: var(--color-beige);
}

header > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
}

#logo {
  display: inline;
  height: calc(3*var(--font-size));
  width: auto;
}

.sidebar {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center  ;
  gap: 0.5rem;
  padding: 1rem 1rem;
  background-color: var(--color-beige);
}

.sidebar .project-flex {
  align-self: flex-start;
}

.sidebar h3 {
  padding-top: 1rem;
}

.sort-flex {
  align-self:flex-start;
}

.sort-flex form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 1.2rem;
  border: none;
  border-radius: 20px ;
  background-color: var(--color-coral);
}

.action-button  img {
  display: inline;
  height: 1rem;
  width: auto;
}

main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  overflow-y: hidden;
  padding: 1rem;
}

.project-container {
  flex: auto;
  max-height: 100%;
  min-height: min-content;
}

.project-container > div {
  position: relative;
  height: 100%;
  width: auto;
}

.edit-button {
  position: absolute;
  top: 5px;
  left: 5px; 
  z-index: 1; 
  border: none;
  background-color: transparent;
}

.popup {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 5px;
  width: 10rem;
  padding: 1rem 0;
  background-color: var(--color-beige);
  border-radius: 14px;
}

.popup ul {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.popup ul button {
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  background-color: transparent;
}

.popup ul button:hover {
  background-color: var(--color-dark-lavender);
}

.popup li {
  list-style-type: none;
  text-align: left;
  width: 5rem;
}

.popup ul > li {
  padding-left: 1rem; 
}

.popup > ul > li:nth-of-type(2) {
  margin-top: 1rem;
}

.title-line {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.title-line h2 {
  flex: auto;
  text-align: center;
  max-width: 300px;
}

.triangle {
  background-color: var(--color-priority-1);
  width: 1.5rem;
  height: 1.5rem;
  mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  mask-size: 1.5rem 1.5rem;
  mask-repeat: none;
  text-anchor: middle;
}

.project {
  flex: 0;
  display: grid;
  grid-template-rows: min-content max-content max-content max-content;
  grid-template-columns: auto 30%;
  grid-template-areas: 
  "title   date"
  "desc    desc"
  "tasks   tasks"
  "add     add";
  align-items: center;
  position: relative;
  gap: 0.5rem;
  width: 600px;
  background-color: var(--color-faded-lavender);
  padding: 1rem;
  border-radius: 14px;
}

.project :nth-child(1),
.task :nth-child(1) {
  grid-area: title;
  justify-self: center;
}

.project > :nth-child(2),
.task > :nth-child(2) {
  grid-area: date;
  padding-right: 1rem; 
}

.project :nth-child(3),
.task :nth-child(3) {
  grid-area: desc;
}


.project > :last-child { 
  grid-area: add;
  justify-self:center;
}

.task-flex {
  grid-area: tasks;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.task-container {
  position: relative;
}

.task { 
  display: grid;
  grid-template: min-content repeat(2, minmax(0, max-content)) / auto 30%;
  grid-template-areas: 
  "title   date"
  "desc    desc"
  "save    save";
  align-items: center;
  position: relative;
  background-color: var(--color-beige);
  padding: 0.5rem;
  border-radius: 14px;
}

form.task {
  grid-template-columns: auto 40%;
  gap: 0.5rem;
}

.task > p {
  max-height: 0; 
  visibility: hidden;
}

.collapsible {
  position:absolute;
  bottom: -5px;
  right: -5px;
}

label.collapsible {
  display: block;
  color: var(--color-faded-lavender);
  cursor: pointer;
}

label.collapsible:hover {
  color: var(--color-bright-red);
}

label.collapsible::before {
  content: ' ';
  display: inline-block;

  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 7px solid currentColor;

  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);
}

.collapsible[type='checkbox'] {
  display: none;
}

.collapsible[type='checkbox']:checked + label {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.collapsible[type='checkbox']:checked + label::before {
  transform: rotate(90deg) translateX(-3px);
}

.collapsible[type='checkbox']:checked + label + p{
  max-height: max-content;
  visibility: visible;
  padding-top: 0.5rem;
}

footer {
  grid-area: footer;
  background-color: var(--color-faded-lavender);
}

.modal {
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(6px);
}

form.project {
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(5, min-content);
  grid-template-areas: 
  "title     date"
  "desc      desc"
  "tasks     tasks"
  "add-task  add-task"
  "save      save";
  column-gap: 2rem;
  row-gap: 1rem;
  position: relative;
  width: 100%;
}

.close-modal {
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
}

form.task .close-modal {
  right: -5px;
}

.close-modal img {
  height: 1.5rem;
  width: auto;
}

.close-modal:hover {
  cursor: pointer;
}

form .date-flex{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.floating-content:nth-child(3) {
  grid-area: desc;
}

form .task-flex {
  grid-area: tasks;
}

#project-description {
  height: 20ch;
  padding-top: 1rem;
}

form button.action-button {
  grid-area: add-task;
  justify-self: center;
}

form button[type='submit'] {
  grid-area: save;
  background-color: var(--color-priority-3);
}

.floating-content { 
  position:relative; 
}

.floating-label {
  position:absolute;
  left:15px;
  top:11px;
  /* padding: 0 5px; */
  color: rgba(0,0,0,0.6);
  background: var(--color-faded-lavender);
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

form.task .floating-label {
  background: var(--color-beige);
}


.floating-input, .floating-select {
  display:block;
  width:100%;
  height: calc(2*var(--font-size));
  padding: 0 20px;
  background: none;
  border: 1px solid var(--color-dark-lavender);
  border-radius: 14px;
  &:focus{
    outline:none;
    ~ .floating-label{
      top: -10px;
    }
  }
}

.floating-input:not(:placeholder-shown) ~ .floating-label {
  top:-10px;
}


`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n  padding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\nul {\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\np {\n  text-wrap: pretty;\n}\nh1, h2, h3, h4, h5, h6 {\n  text-wrap: balance;\n}\n\n#root, #__next {\n  isolation: isolate;\n}\n\n:root {\n  --color-dark-lavender: #ac65ca;\n  --color-lavender: #c189d9;\n  --color-faded-lavender: #c596d9;\n  --color-warm-gray: #d5d9d2;\n  --color-bright-red: #f24405;\n  --color-coral: #f27457; \n  --color-beige: #f5f5dc;\n  --color-priority-1: #ff6138;\n  --color-priority-2: #ffff9d;\n  --color-priority-3: #79bd8f;\n  --font-size: 1.2rem;\n  --height-header: 5rem;\n  --height-footer: 2rem;\n  --height-main: calc(calc(100vh - var(--height-header)) - var(--height-footer));\n  font-size: var(--font-size);\n}\n\nh1 {\n  font-size: calc(1.4*var(--font-size));\n  font-weight: 600;\n}\n\nh2 {\n  font-size: calc(1.2*var(--font-size));\n  font-weight: 600;\n}\n\nh3 {\n  font-size: calc(1.1*var(--font-size));\n  font-weight: 500;\n}\n\np, form * {\n  font-size: calc(0.7*var(--font-size));\n}\n\nbody {\n  display: grid;\n  grid-template: var(--height-header) var(--height-main) var(--height-footer) / 12rem 1fr;\n  grid-template-areas: \n    \"header   header\"\n    \"sidebar  main\"\n    \"footer   footer\";\n  justify-content: flex-start;\n  height: 100vh;\n  background-color: var(--color-warm-gray);\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--color-lavender);\n  padding: 1rem;\n}\n\nheader > nav {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  gap: 1rem;\n}\n\nnav > button {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\nnav > button:hover {\n  color: var(--color-beige);\n}\n\nheader > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  height: 100%;\n}\n\n#logo {\n  display: inline;\n  height: calc(3*var(--font-size));\n  width: auto;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  display: flex;\n  flex-direction: column;\n  align-items: center  ;\n  gap: 0.5rem;\n  padding: 1rem 1rem;\n  background-color: var(--color-beige);\n}\n\n.sidebar .project-flex {\n  align-self: flex-start;\n}\n\n.sidebar h3 {\n  padding-top: 1rem;\n}\n\n.sort-flex {\n  align-self:flex-start;\n}\n\n.sort-flex form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10rem;\n  height: 1.2rem;\n  border: none;\n  border-radius: 20px ;\n  background-color: var(--color-coral);\n}\n\n.action-button  img {\n  display: inline;\n  height: 1rem;\n  width: auto;\n}\n\nmain {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 1rem;\n  overflow-y: hidden;\n  padding: 1rem;\n}\n\n.project-container {\n  flex: auto;\n  max-height: 100%;\n  min-height: min-content;\n}\n\n.project-container > div {\n  position: relative;\n  height: 100%;\n  width: auto;\n}\n\n.edit-button {\n  position: absolute;\n  top: 5px;\n  left: 5px; \n  z-index: 1; \n  border: none;\n  background-color: transparent;\n}\n\n.popup {\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n  position: absolute;\n  z-index: 2;\n  top: 5px;\n  left: 5px;\n  width: 10rem;\n  padding: 1rem 0;\n  background-color: var(--color-beige);\n  border-radius: 14px;\n}\n\n.popup ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.popup ul button {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  border: none;\n  background-color: transparent;\n}\n\n.popup ul button:hover {\n  background-color: var(--color-dark-lavender);\n}\n\n.popup li {\n  list-style-type: none;\n  text-align: left;\n  width: 5rem;\n}\n\n.popup ul > li {\n  padding-left: 1rem; \n}\n\n.popup > ul > li:nth-of-type(2) {\n  margin-top: 1rem;\n}\n\n.title-line {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.title-line h2 {\n  flex: auto;\n  text-align: center;\n  max-width: 300px;\n}\n\n.triangle {\n  background-color: var(--color-priority-1);\n  width: 1.5rem;\n  height: 1.5rem;\n  mask-image: url(../assets/images/triangle.svg);\n  mask-size: 1.5rem 1.5rem;\n  mask-repeat: none;\n  text-anchor: middle;\n}\n\n.project {\n  flex: 0;\n  display: grid;\n  grid-template-rows: min-content max-content max-content max-content;\n  grid-template-columns: auto 30%;\n  grid-template-areas: \n  \"title   date\"\n  \"desc    desc\"\n  \"tasks   tasks\"\n  \"add     add\";\n  align-items: center;\n  position: relative;\n  gap: 0.5rem;\n  width: 600px;\n  background-color: var(--color-faded-lavender);\n  padding: 1rem;\n  border-radius: 14px;\n}\n\n.project :nth-child(1),\n.task :nth-child(1) {\n  grid-area: title;\n  justify-self: center;\n}\n\n.project > :nth-child(2),\n.task > :nth-child(2) {\n  grid-area: date;\n  padding-right: 1rem; \n}\n\n.project :nth-child(3),\n.task :nth-child(3) {\n  grid-area: desc;\n}\n\n\n.project > :last-child { \n  grid-area: add;\n  justify-self:center;\n}\n\n.task-flex {\n  grid-area: tasks;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.task-container {\n  position: relative;\n}\n\n.task { \n  display: grid;\n  grid-template: min-content repeat(2, minmax(0, max-content)) / auto 30%;\n  grid-template-areas: \n  \"title   date\"\n  \"desc    desc\"\n  \"save    save\";\n  align-items: center;\n  position: relative;\n  background-color: var(--color-beige);\n  padding: 0.5rem;\n  border-radius: 14px;\n}\n\nform.task {\n  grid-template-columns: auto 40%;\n  gap: 0.5rem;\n}\n\n.task > p {\n  max-height: 0; \n  visibility: hidden;\n}\n\n.collapsible {\n  position:absolute;\n  bottom: -5px;\n  right: -5px;\n}\n\nlabel.collapsible {\n  display: block;\n  color: var(--color-faded-lavender);\n  cursor: pointer;\n}\n\nlabel.collapsible:hover {\n  color: var(--color-bright-red);\n}\n\nlabel.collapsible::before {\n  content: ' ';\n  display: inline-block;\n\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid currentColor;\n\n  vertical-align: middle;\n  margin-right: .7rem;\n  transform: translateY(-2px);\n}\n\n.collapsible[type='checkbox'] {\n  display: none;\n}\n\n.collapsible[type='checkbox']:checked + label {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.collapsible[type='checkbox']:checked + label::before {\n  transform: rotate(90deg) translateX(-3px);\n}\n\n.collapsible[type='checkbox']:checked + label + p{\n  max-height: max-content;\n  visibility: visible;\n  padding-top: 0.5rem;\n}\n\nfooter {\n  grid-area: footer;\n  background-color: var(--color-faded-lavender);\n}\n\n.modal {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0,0,0,0.4);\n  backdrop-filter: blur(6px);\n}\n\nform.project {\n  grid-template-columns: repeat(2, 300px);\n  grid-template-rows: repeat(5, min-content);\n  grid-template-areas: \n  \"title     date\"\n  \"desc      desc\"\n  \"tasks     tasks\"\n  \"add-task  add-task\"\n  \"save      save\";\n  column-gap: 2rem;\n  row-gap: 1rem;\n  position: relative;\n  width: 100%;\n}\n\n.close-modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: transparent;\n  border: none;\n}\n\nform.task .close-modal {\n  right: -5px;\n}\n\n.close-modal img {\n  height: 1.5rem;\n  width: auto;\n}\n\n.close-modal:hover {\n  cursor: pointer;\n}\n\nform .date-flex{\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.floating-content:nth-child(3) {\n  grid-area: desc;\n}\n\nform .task-flex {\n  grid-area: tasks;\n}\n\n#project-description {\n  height: 20ch;\n  padding-top: 1rem;\n}\n\nform button.action-button {\n  grid-area: add-task;\n  justify-self: center;\n}\n\nform button[type='submit'] {\n  grid-area: save;\n  background-color: var(--color-priority-3);\n}\n\n.floating-content { \n  position:relative; \n}\n\n.floating-label {\n  position:absolute;\n  left:15px;\n  top:11px;\n  /* padding: 0 5px; */\n  color: rgba(0,0,0,0.6);\n  background: var(--color-faded-lavender);\n  transition:0.2s ease all; \n  -moz-transition:0.2s ease all; \n  -webkit-transition:0.2s ease all;\n}\n\nform.task .floating-label {\n  background: var(--color-beige);\n}\n\n\n.floating-input, .floating-select {\n  display:block;\n  width:100%;\n  height: calc(2*var(--font-size));\n  padding: 0 20px;\n  background: none;\n  border: 1px solid var(--color-dark-lavender);\n  border-radius: 14px;\n  &:focus{\n    outline:none;\n    ~ .floating-label{\n      top: -10px;\n    }\n  }\n}\n\n.floating-input:not(:placeholder-shown) ~ .floating-label {\n  top:-10px;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/task_elements.js":
/*!*****************************************!*\
  !*** ./src/components/task_elements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementController: () => (/* binding */ elementController),
/* harmony export */   makeProject: () => (/* binding */ makeProject),
/* harmony export */   makeTask: () => (/* binding */ makeTask)
/* harmony export */ });
/* harmony import */ var _task_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_logic */ "./src/components/task_logic.js");




const elementController = (function() {
  let projects = {};
  let newTaskId = 0;

  const addProject = (project) => {
    projects[project.info['project_title']] = project;
  }

  const removeProject = (project) => delete projects[project.info['project_title']];

  const getNewTaskId = (task) => ++newTaskId;

  const sort = (type) => (0,_task_logic__WEBPACK_IMPORTED_MODULE_0__.elementSort)(Object.values(projects), type);

  function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(projects, function(key, value) {
      //discard circular references
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }
      return value;
    }, 2);
    cache = null;

    return str;
  }

  function objectToForm(object) {
    const form = new FormData();
    for (const infoKey in object) {
      form.append(infoKey, object[infoKey]);
    }
    return form;
  }

  return { projects, addProject, removeProject, getNewTaskId, sort, stringify, objectToForm }
})();

function makeProject(projectData) {
  const info = {};
  let tasks = [];

  for (const [key, value] of projectData) 
    info[key] = (key==='project_due_date') 
      ? new Date(projectData.get(key)).toLocaleDateString('en-US')
      : projectData.get(key);  
  
  function addTask (task) { 
    this.tasks.push(task)
    return this;
  };

  function removeTask(task) {
    this.tasks = this.tasks.filter((currentTask) => {
      return currentTask.getTaskId() !== task.getTaskId()
    });
    return this;
  }

  const sort = (type) => (0,_task_logic__WEBPACK_IMPORTED_MODULE_0__.elementSort)(tasks, type);
  
  return { info, addTask, removeTask, tasks, sort };
}

function makeTask(taskData) {
  const info = {};
  let taskId = 0;
  let project = '';

  for (const [key, value] of taskData) {
    info[key] = (key==='task_due_date') 
    ? new Date(taskData.get(key)).toLocaleDateString('en-US')
    : taskData.get(key); 
  }

  const getTaskId = () => taskId;

  const setTaskId = (id) => {
    taskId = id;
    return taskId;
  }

  return { info, getTaskId, setTaskId, project }
}

/***/ }),

/***/ "./src/components/task_logic.js":
/*!**************************************!*\
  !*** ./src/components/task_logic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementSort: () => (/* binding */ elementSort)
/* harmony export */ });


function elementSort(elements, type) {
  const sortBy = type.split('_')[1];
  return elements.sort((a, b) => {
    switch(sortBy) {
      case 'hours':
        return b.info[type] - a.info[type];
      case 'priority':
        return a.info[type] - b.info[type];
      default: 
        return new Date(a.info[type]).getTime() - new Date(b.info[type]).getTime();
    }
  });
}

/***/ }),

/***/ "./src/pages/display_controller.js":
/*!*****************************************!*\
  !*** ./src/pages/display_controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayController: () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _components_task_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/task_elements */ "./src/components/task_elements.js");




const displayController = (function() {
  //associate dom elements with task_elements
  const projectNodes = new WeakMap();
  const taskNodes = new WeakMap();

  const main = document.querySelector('main'),
        addProjectButton = document.querySelector('#add-project'),
        projectSortButtons = document.querySelectorAll(`input[name='project-sort']`),
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
  projectSortButtons.forEach((button) => button.addEventListener('change', elementSort));

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
      const task = (0,_components_task_elements__WEBPACK_IMPORTED_MODULE_0__.makeTask)(new FormData(form));
      //only save task to project if project is saved (outside new project modal)
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

    const taskId = task.setTaskId(_components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.getNewTaskId());
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
    localStorage.setItem('projects', _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.stringify());
  }

  function addProject(e) {
    //!!Need to check if project name is already taken!!
    modal.style.display = 'flex';
    //if called from edit button, fill in form as applicable
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
    const newProject = (0,_components_task_elements__WEBPACK_IMPORTED_MODULE_0__.makeProject)(new FormData(modalForm));
    _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.addProject(newProject);

    //add all tasks to newProject
    for (const node of modalTaskFlex.children) {
      saveTask(taskNodes.get(node), newProject);
      taskNodes.delete(node);
    }

    localStorage.setItem('projects', _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.stringify());
    closeModal(modal);
    modalForm.reset();
    modalTaskFlex.innerHTML = '';
    appendProject(newProject);
  }

  function appendProject(project) {
    const projectNode = projectTemplate.cloneNode(true);
    const projectTitle = project.info['project_title'];
    projectNodes.set(projectNode, project);

    //update content of newly created project node
    projectNode.querySelectorAll('[data-content]').forEach(node => {
      node.innerText = project.info[node.dataset.content];
    });
    projectNode.querySelector(`.triangle`)
      .style.backgroundColor = `var(--color-priority-${project.info['project_priority']})`;

    _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.projects[projectTitle].tasks.forEach((task) => {
      appendTask(task, projectNode.querySelector('.task-flex'));
    })

    //Activate project node
    projectNode.querySelector('button.action-button').addEventListener('click',addTask);
    addEditButton(projectNode);
    projectNode.style.display = 'grid';
    projectNode.removeAttribute('id');
    projectNode.style.display = 'block';
    main.appendChild(projectNode);

    //Append project on sidebar
    const projectCheckbox = document.getElementById('project-checkbox-template').cloneNode(true);
    projectCheckbox.style.display = 'block';
    projectCheckbox.removeAttribute('id');
    const projectLabel = projectCheckbox.querySelector('label');
    const projectInput = projectCheckbox.querySelector('input');
    projectLabel.innerText = projectTitle;
    projectLabel.setAttribute('for', project.info['project_title'].replace(/ /g,"-"));
    projectInput.setAttribute('id', projectTitle.replace(/ /g,"-"));
    projectInput.setAttribute('value', projectTitle);
    projectCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) projectNode.style.display = 'grid';
      else projectNode.style.display = 'none';
    })
    projectFlexSidebar.appendChild(projectCheckbox);

    //Relate project checkbox to project
    projectNode.projectCheckbox = projectCheckbox;
  }

  function addEditButton(node) {
    const popup = node.querySelector('.popup');
    node.querySelector('button.edit-button').addEventListener('click', () => {
      popup.style.display = 'flex';
      popup.querySelector('.close-modal').addEventListener('click', () => closeModal(popup));
      popup.querySelector(`button[name='delete']`).addEventListener('click', () => deleteNode(node));
      popup.querySelectorAll(`button[name='task-sort']`).forEach((button) => button.addEventListener('click', elementSort));
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
    if (node.getAttribute('class') === 'project-container') {
      node.projectCheckbox.remove();
      const project = projectNodes.get(node);
      //Delete all project tasks from project object and WeakMap
      for (const taskNode of node.querySelector('.task-flex').children) {
        project.removeTask(taskNodes.get(taskNode));
        taskNodes.delete(taskNode);
      }
      _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.removeProject(project);
      projectNodes.delete(node);
    } else {
      if (taskNodes.get(node).project)
        taskNodes.get(node).project.removeTask(taskNodes.get(node));
      taskNodes.delete(node);
    }
    node.remove();
    localStorage.setItem('projects', _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.stringify());
  }

  function closeModal(modal) {
    modal.style.display = 'none';
  }

  function elementSort(e) {
    if (e.currentTarget.name === 'project-sort') {
      const elements = _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.sort(e.currentTarget.value);
      main.querySelectorAll('.project-container').forEach((node) => {
        node.projectCheckbox.remove();
        node.remove();
      });
      elements.forEach(appendProject);
    } else {
      const projectNode = e.currentTarget.closest('.project-container');
      const elements = projectNodes.get(projectNode).sort(e.currentTarget.value);
      let taskFlex = projectNode.querySelector('.task-flex')
      taskFlex.innerHTML = '';
      elements.forEach((task) => appendTask(task, taskFlex));
    }
  }

  //update display if projects are stored in local storage
  function recallFromStorage() {
    let projects = JSON.parse(localStorage.getItem('projects'));
    Object.values(projects).forEach((project) => {
      const newProject = (0,_components_task_elements__WEBPACK_IMPORTED_MODULE_0__.makeProject)(_components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.objectToForm(project.info));
      project.tasks.forEach((task) => {
        const newTask = (0,_components_task_elements__WEBPACK_IMPORTED_MODULE_0__.makeTask)(_components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.objectToForm(task.info));
        newProject.addTask(newTask);
      })
      _components_task_elements__WEBPACK_IMPORTED_MODULE_0__.elementController.addProject(newProject);
      appendProject(newProject);
    })
  }

  const domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  }

  return {domReady, recallFromStorage}

})(); 

/***/ }),

/***/ "./src/assets/images/triangle.svg":
/*!****************************************!*\
  !*** ./src/assets/images/triangle.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b4b09d654b7fe11be4d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _pages_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/display_controller */ "./src/pages/display_controller.js");



_pages_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayController.domReady(() => {
  //update dom with previously saved projects
  if (storageAvailable("localStorage")) {
    _pages_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayController.recallFromStorage();
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



})();

/******/ })()
;
//# sourceMappingURL=main.js.map