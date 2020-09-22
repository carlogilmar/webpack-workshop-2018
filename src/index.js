// This is the entrypoint for the exported module nav
import nav from "./nav";
import {footer} from "./footer";
import makeButton from "./button"
import {red, blue, makeColorStyle} from './button-styles'
import "./footer.css";

const button = makeButton("I'm a Button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
