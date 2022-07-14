let display = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayMiss: function (location) {
        let ship = document.getElementById(location);
        ship.setAttribute('class', 'miss');
    },
    displayHit: function (location) {
        let ship = document.getElementById(location);
        ship.setAttribute('class', 'hit');
    }
};

let guessInput = document.getElementById('guessInput');
let fireButton = document.getElementById('fireButton');
fireButton.addEventListener('click', (e) => {
    e.preventDefault();
    getLocation(guessInput.value);
});

function getLocation (input) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let letter = input.charAt(0);
    let column = input.charAt(1);
    let row = alphabet.indexOf(letter);
    if (isNaN(column) || isNaN(row)) {
        display.displayMessage('You need to write a valid location');
    } else {
        let location = String(row + column);
        return location;
    }
}