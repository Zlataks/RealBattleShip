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
    display.displayMessage(guessInput.value);
});
