import Card from "./card.js";

(function() {
    var headerParent = document.getElementById('header');
    var boardParent = document.getElementById('board');

    // Button 
    var createCardButton = document.getElementById('createCardButton');

    function changeCoordinatePosition(event) {
        var coordinate_x = headerParent.getElementsByClassName('coordinate_x');
        var coordinate_y = headerParent.getElementsByClassName('coordinate_y');
        coordinate_x[0].innerHTML = event.clientX;
        coordinate_y[0].innerHTML = event.clientY;
    }
    
    function createCard() {
        var card = new Card('Hello World');
        boardParent.innerHTML += card.render();
    }

    document.addEventListener('mousemove', changeCoordinatePosition);
    createCardButton.addEventListener('click', createCard);
})();