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
    let location = getLocation(guessInput.value);
    aboutShips.fire(location);
    guessInput.value = '';
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

let aboutShips = {
    numShips: 3,
    ships: [{locations: ['00', '01', '02'], hits: ['', '', '']},
            {locations: ['30', '31', '32'], hits: ['', '', '']},
            {locations: ['50', '51', '52'], hits: ['', '', '']}],
    fire: function(location) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            for (let i = 0; i < ship.locations.length; i++) {
                if (ship.locations[i] === location) {
                    ship.hits[i] = 'hit';
                    display.displayMessage('HIT!');
                    display.displayHit(location);
                    return true;
                } else {
                    display.displayMessage('You miss');
                    display.displayMiss(location);
                    return false;
                }
            }
        }
    },
    isSunk: function(ship) {
        for (let i = 0; i < ship.locations.length; i++) {
            if (ship.hits[i] !== 'hit') {
                return false;
            }
        }
        return true;
    }
};

