import { mountDOM } from "./components/mountdom.js";

const root = document.querySelector("#root");

const myel = document.createElement("h1");
myel.innerHTML = "hello from non react component!";

mountDOM(myel, root);
