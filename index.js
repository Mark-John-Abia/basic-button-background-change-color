// Array of colors to choose from
const colors = ["#FF5733", "#33FF57", "#5733FF", "#33AFFF", "#FF33AF"];

// Get a random color from the array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to change the background color
function changeBackgroundColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
}

// Attach click event listener to the button
const changeColorBtn = document.getElementById("changeColorBtn");
changeColorBtn.addEventListener("click", changeBackgroundColor);
