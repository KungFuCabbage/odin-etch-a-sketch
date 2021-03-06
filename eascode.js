// Set grid area size from user's window
const container = document.getElementById('gridArea');
const displayArea = (window.innerHeight/2) - 75;

// Function to generate a single grid-square
function makeSquare (size) {
  const square = document.createElement('div');
  square.className = 'gridSquare';
  square.style.backgroundColor = 'white';
  square.style.padding = `${size}px`;
  square.innerHTML = "&nbsp";
  square.addEventListener('mouseenter', drawn);
  container.appendChild(square);
}

// Function to generate empty square to wrap the grid onto new line
function lineBreaker () {
  const breaker = document.createElement('div');
  breaker.className = 'lineBreaker';
  container.appendChild(breaker);
}

// Request user to set number of cells and create grid 
function createGrid () {
  var input = prompt("Please enter the number of squares per side (max 100)");
  var availableSpace = displayArea - input;
  var squareSize = (availableSpace/input);
  var counterOne = 1;
  var counterTwo = 0;

  if (input >100) {
    var input = prompt("ERROR: The requested number was greater than 100! Please enter the number of squares per side (max 100)");
  }

  for (let i = 1; i <= (input * input + (input - 1)); i++) {
    if (i == input * counterOne + 1 + counterTwo) {
      lineBreaker();
      counterOne ++;
      counterTwo++;
    } else {
      makeSquare(squareSize)
    }
  }
}

// Colour in cells with random RGB value on mouseover
function drawn () {
  if (this.style.backgroundColor == "white") {
    red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
  } else {
    // Increase blackness on sucessive passes 
    red -= (red * 0.1);
    green -= (green * 0.1);
    blue -= (blue * 0.1);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
  }
}

// Reset 'drawn on' grid cells back to zero
function reset () {
  squares = document.querySelectorAll('.gridSquare');
  squares.forEach(square => square.style.backgroundColor = "white");
}

// Refresh page to prompt user for new grid size input
function reload () {
  window.location.reload();
}

createGrid();


