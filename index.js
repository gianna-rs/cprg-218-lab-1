bear.addEventListener("click", function () {
  document.body.classList.add("blackBearButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("elkButton");
  document.getElementById("animal").src = "Images/bear.webp";
  document.getElementById("animal").alt = "A bear walking away in the woods";
});

sheep.addEventListener("click", function () {
  document.body.classList.add("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("elkButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/sheep.webp";
  document.getElementById("animal").alt =
    "Two big horn sheep on the side of a mountain";
});

wolf.addEventListener("click", function () {
  document.body.classList.add("wolfButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("elkButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/wolf.webp";
  document.getElementById("animal").alt = "A closeup of a wolf in the woods";
});

moose.addEventListener("click", function () {
  document.body.classList.add("mooseButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("elkButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/moose.webp";
  document.getElementById("animal").alt = "A closeup of a moose in the trees";
});

elk.addEventListener("click", function () {
  document.body.classList.add("elkButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/elk.webp";
  document.getElementById("animal").alt = "An elk standing in the forest";
});
