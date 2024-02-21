import Card from "./card.js";

(function () {
  var headerParent = document.getElementById("header");
  var boardParent = document.getElementById("board");

  // Button
  var formCreateCard = document.getElementById("form_create_card");

  function changeCoordinatePosition(event) {
    var coordinate_x = headerParent.getElementsByClassName("coordinate_x");
    var coordinate_y = headerParent.getElementsByClassName("coordinate_y");
    coordinate_x[0].innerHTML = event.clientX;
    coordinate_y[0].innerHTML = event.clientY;
  }

  function createCard() {
    var text = formCreateCard.getElementsByTagName("input")[0].value;
    var card = new Card(text);
    boardParent.innerHTML += card.render();
  }

  function updateCard(target) {
    if (target.target.className === "card__content") {
      var text = prompt("Enter new text");
      if (text === null || text === "") return;
      target.target.innerHTML = text;
    }

    if (target.target.className === "card") {
      //   change color to green
      if (target.target.style.backgroundColor === "green") {
        target.target.style.backgroundColor = "white";
        return;
      }
      target.target.style.backgroundColor = "green";
    }

    if (target.target.className === "delete") {
      target.target.parentElement.parentElement.remove();
    }
  }

  document.addEventListener("mousemove", changeCoordinatePosition);

  createCardButton.addEventListener("click", createCard);
  boardParent.addEventListener("click", updateCard);
})();
