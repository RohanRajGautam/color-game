var color = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
];

var square = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const displayMessage = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
  //initial color
  square[i].style.backgroundColor = color[i];

  //add event listener to the square
  square[i].addEventListener("click", function () {
    //pick color of the selected square
    const clickedColor = this.style.backgroundColor;

    //compare it with the picked color
    if (clickedColor === pickedColor) {
      displayMessage.textContent = "Correct";
      changeColor(pickedColor);
    } else {
      this.style.backgroundColor = "#242424";
      displayMessage.textContent = "Wrong";
    }
  });
}

function changeColor(color) {
  //loop through all color
  for (let i = 0; i < square.length; i++) {
    //change color to default
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * color.length);
  return color[random];
}
