const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const container = document.getElementById("container");

let content = "";

for (let i = 0; i < 500; i++) {
  content += "<div class='square'></div>";
}

container.innerHTML = content;
const squareEl = document.querySelectorAll(".square");

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const addColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
};

for (let i = 0; i < squareEl.length; i++) {
  squareEl[i].addEventListener("mouseenter", function () {
    addColor(squareEl[i]);
  });

  squareEl[i].addEventListener("mouseleave", function () {
    removeColor(squareEl[i]);
  });
}
