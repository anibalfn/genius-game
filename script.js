let order = [];
let clickedOrder = [];
let score = 0;

// Declara variáveis vazias para receberem os inputs das funções;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
pontuation = document.querySelector('.score');

// Aqui os elementos HTML são armazenados em consts;

let addRandomOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Function cria randomização na ordem das cores;

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');

    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    }, number - 1);
}

// Function cria efeito flash

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Score: ${score}
        You win! Next level beginning`);
        nextLevel();
    }
}

// Verifica a ordem clicada, caso esteja errada retorna game over, caso esteja correta, itera o score e passa para o próximo nível

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    }else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Códigos das cores: 0 = verde, 1 = vermelho, 2 = amarelo, 3 = azul;

let nextLevel = () => {
    score++;
    addRandomOrder();
}

let gameOver = () => {
    alert(`Score: ${score - 1}
    You lose!
    Click in Ok to begin a new game`)
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Welcome again!`)
    score = 0;

    nextLevel();

}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// green.addEventListener('click', click[0]);
// red.addEventListener('click', click[1]);
// yellow.addEventListener('click', click[2]);
// blue.addEventListener('click', click[3]);

playGame();