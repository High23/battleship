import './style.css'

export {createPlayerBoard, createAiBoard}

const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

let shipType = 'carrier'
let shipLength = 5;
let shipDirection = 'vertical';
const rotateBTN = document.querySelector('.rotate');
rotateBTN.addEventListener('click', () => {
    if (shipDirection === 'horizontal') {
        shipDirection = 'vertical';
    } else {
        shipDirection = 'horizontal';
    }
})

function createPlayerBoard() {
    const gameboard = document.querySelector('.player-gameboard');
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 11; j++) {
            const gameboardSquare = document.createElement('div');
            gameboardSquare.classList.add('gameboard-square');
            gameboardSquare.setAttribute('data-square-vertex', `${j}${yAxis[i]}`)
            gameboard.appendChild(gameboardSquare);
        }
    }
    addListeners()
}

function createAiBoard() {
    const gameboardContainer = document.querySelector('.gameboard-container')
    const aiGameboard = document.createElement('div')
    aiGameboard.classList.add('ai-gameboard')
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 11; j++) {
            const gameboardSquare = document.createElement('div')
            gameboardSquare.classList.add('ai-gameboard-square')
            gameboardSquare.setAttribute('data-square-vertex', `${j} ${yAxis[i]}`)
            aiGameboard.appendChild(gameboardSquare)
        }
    }
    gameboardContainer.appendChild(aiGameboard)
}

function addListeners() {
    const gameboardSquares = document.querySelectorAll('.gameboard-square')
    gameboardSquares.forEach((square) => {
        square.addEventListener('mouseover', mouseHover)
        square.addEventListener('mouseout', mouseOffHover)
        square.addEventListener('click', mouseClick)
    });
}

let hovered = [];
let placement = []

function mouseHover() {
    hovered.push(this)
    let coords = this.dataset.squareVertex.split("")
    const gameboardSquares = document.querySelectorAll('.gameboard-square')
    let i = 0
    if (shipDirection === 'vertical') {
        while (i < gameboardSquares.length) {
            if (gameboardSquares[i] === this) {
                break;
            }
            i++
        }
    }
    let gameboardSquareElementSibling = this.nextSibling
    let siblingCoords;
    for (let j = 1; j < shipLength; j++) {
        if (shipDirection === 'horizontal' && gameboardSquareElementSibling) {
            siblingCoords = gameboardSquareElementSibling.dataset.squareVertex.split("")
            if (siblingCoords[siblingCoords.length - 1] === coords[coords.length - 1]) {
                hovered.push(gameboardSquareElementSibling)
                gameboardSquareElementSibling.classList.add('ship-placement')
                gameboardSquareElementSibling = gameboardSquareElementSibling.nextSibling
            }
        } else if (shipDirection === 'vertical') {
            let verticalSiblingIndex = i + (10 * j)
            if (verticalSiblingIndex < 100) {
                hovered.push(gameboardSquares[verticalSiblingIndex])
                gameboardSquares[verticalSiblingIndex].classList.add('ship-placement')
            }
        }
    }
    placement = hovered
}

function mouseOffHover() {
    hovered.forEach(element => {
        element.classList.remove('ship-placement')
    })
    hovered = []
    placement = []
}

function mouseClick() {
    console.log(this)
}
