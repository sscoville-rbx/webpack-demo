import _ from "lodash";
import "./style.css";
import MyAvatar from "./seth-avatar.jpg";
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myAvatar = new Image();
  myAvatar.src = MyAvatar;

  element.appendChild(myAvatar);

  console.log(Data);
  console.log(Notes);
  
  return element;
}

document.body.appendChild(component());
