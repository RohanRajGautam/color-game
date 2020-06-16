var numSquare = 6;
var color = randomColorGenerator(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var headingColor = document.querySelector("h1");
var resetColor = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquare = 3;
  color = randomColorGenerator(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < square.length; i++) {
    if (color[i]) {
      square[i].style.backgroundColor = color[i];
    } else {
      square[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquare = 6;
  color = randomColorGenerator(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color[i];
    square[i].style.display = "block";
  }
});

resetColor.addEventListener("click", function () {
  //generate random color
  color = randomColorGenerator(numSquare);

  //pick a random color
  pickedColor = pickColor();

  //blank space in middle
  displayMessage.textContent = "";

  //change colorDisplay to pickedCOlor
  colorDisplay.textContent = pickedColor;

  //display the color in sqaure
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color[i];
  }
  headingColor.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
  //initial color
  square[i].style.backgroundColor = color[i];

  //add event listener to the square
  square[i].addEventListener("click", function () {
    //pick color of the selected square
    var clickedColor = this.style.backgroundColor;

    //compare it with the picked color
    if (clickedColor === pickedColor) {
      displayMessage.textContent = "Correct!!!";
      changeColor(pickedColor);
      headingColor.style.backgroundColor = pickedColor;
      resetColor.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      displayMessage.textContent = "Try again";
    }
  });
}

function changeColor(color) {
  //loop through all color
  for (var i = 0; i < square.length; i++) {
    //change color to default
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}

function randomColorGenerator(num) {
  //create an array
  var arr = [];
  //loop through an array
  for (var i = 0; i < num; i++) {
    //push randomCOlor function
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //pick 'red' from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick 'green' from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick 'blue' from 0-255
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
