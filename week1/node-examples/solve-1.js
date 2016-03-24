var rect = require("./rectangle-1");


function solveRect(l, b) {
  console.log("Solving the rectangle with l = " + l + " and b = " + b);
  if (l < 0 || b < 0) {
    console.log("Dimensions should be more than zero");
  } else {
    console.log("The area is: " + rect.area(l, b));
    console.log("The perimeter is: " + rect.perimeter(l, b));
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);
