bear.addEventListener("click", function () {
  document.body.classList.add("blackBearButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("elkButton");
  document.getElementById("animal").src = "Images/bear.webp";
});

sheep.addEventListener("click", function () {
  document.body.classList.add("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("elkButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/sheep.webp";
});

wolf.addEventListener("click", function () {
  document.body.classList.add("wolfButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("elkButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/wolf.webp";
});

moose.addEventListener("click", function () {
  document.body.classList.add("mooseButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("elkButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/moose.webp";
});

elk.addEventListener("click", function () {
  document.body.classList.add("elkButton");
  document.body.classList.remove("bigHornSheepButton");
  document.body.classList.remove("mooseButton");
  document.body.classList.remove("wolfButton");
  document.body.classList.remove("blackBearButton");
  document.getElementById("animal").src = "Images/elk.webp";
});
