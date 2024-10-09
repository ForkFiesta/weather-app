import "./style.css";
import { showPosition } from "./get-location.js";
const feather = require("feather-icons");
feather.replace();

const coordinateArray = showPosition();
console.log(coordinateArray);
