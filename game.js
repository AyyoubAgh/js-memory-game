function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let card = document.getElementsByClassName("game-grid-item")
let cards = [...card]