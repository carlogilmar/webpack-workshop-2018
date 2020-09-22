// This is the entrypoint for the exported module nav
import nav from "./nav";
import {top, bottom} from "./footer";
import makeButton from "./button"
import {red, blue, makeColorStyle} from './button-styles'

console.log(nav());
console.log(top);
console.log(bottom);
console.log(makeButton("My first button!!"));
console.log(makeColorStyle("#FFFFFF"));
