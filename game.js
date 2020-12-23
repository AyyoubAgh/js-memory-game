let card = document.getElementsByClassName("card")
let cards = [...card]

let cardDeck = document.getElementById("card-deck")

let matchedCard = document.getElementsByClassName("match")
let openedCards = []

let btnPlayAgain = document.getElementById("play-again")
document.body.onload = startGame()


function startGame() {
    openedCards = [];
    cards = shuffle(cards)
    for (let i = 0; i < cards.length; i++) {
        cardDeck.innerHTML = "";
        [].forEach.call(cards, (item) => {
            cardDeck.appendChild(item)
        })
        cards[i].classList.remove("show", "open", "match", "disabled")
    }
}


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}

function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if (len === 2) {
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
};

function matched() {
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}

function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("show", "open", "no-event", "unmatched");
        openedCards[1].classList.remove("show", "open", "no-event", "unmatched");
        enable();
        openedCards = [];
    }, 1100);
}

function disable() {
    Array.prototype.filter.call(cards, function(card) {
        card.classList.add('disabled');
    });
}


function enable() {
    Array.prototype.filter.call(cards, function(card) {
        card.classList.remove('disabled');
        for (var i = 0; i < matchedCard.length; i++) {
            matchedCard[i].classList.add("disabled");
        }
    });
}

for (var i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    //card.addEventListener("click", congratulations);
};


btnPlayAgain.click = startGame()