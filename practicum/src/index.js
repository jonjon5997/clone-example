import "./pages/index.css";

/* Import the image, select the element, and assign the image to the element's
src. In practice, it's usually easier to `require` static images in the HTML. See index.html for an example.  */
import stepsSrc from "./images/steps.png";
const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;

// Existing code
const numbers = [2, 3, 5];

// Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10
