import { initShip, startGame, playerAttack } from './gameloop';
import './style.css'

export {createPlayerBoard, createAiBoard, addAiBoardListeners}

const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

let shipTypes = [ 'patrolBoat', 'submarine', 'destroyer', 'battleship', 'carrier' ]
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
    addPlayerBoardListeners()
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

function addPlayerBoardListeners() {
    const gameboardSquares = document.querySelectorAll('.gameboard-square')
    gameboardSquares.forEach((square) => {
        square.addEventListener('mouseover', mouseHover)
        square.addEventListener('mouseout', removeSquareHighlights)
        square.addEventListener('click', mouseClick)
    });
}

let hovered = [];
let placement = []

function mouseHover() {
    this.classList.add('ship-placement')
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
    for (let j = 0; j < shipLength - 1; j++) {
        if (shipDirection === 'horizontal' && gameboardSquareElementSibling) {
            siblingCoords = gameboardSquareElementSibling.dataset.squareVertex.split("")
            if (siblingCoords[siblingCoords.length - 1] === coords[coords.length - 1]) {
                hovered.push(gameboardSquareElementSibling)
                gameboardSquareElementSibling.classList.add('ship-placement')
                gameboardSquareElementSibling = gameboardSquareElementSibling.nextSibling
            }
        } else if (shipDirection === 'vertical') {
            let verticalSiblingIndex = i + (10 * (j + 1))
            if (verticalSiblingIndex < 100) {
                hovered.push(gameboardSquares[verticalSiblingIndex])
                gameboardSquares[verticalSiblingIndex].classList.add('ship-placement')
            }
        }
    }
}

function removeSquareHighlights() {
    hovered.forEach(element => {
        element.classList.remove('ship-placement')
    })
    hovered = []
}

let ship = shipTypes.length - 1
const displayShipName = document.querySelector('.ship-type')
let shipName = shipTypes[ship].split('')
shipName[0] = shipName[0].toUpperCase()
shipName = shipName.join('')
displayShipName.innerHTML = shipName

function mouseClick() {
    let coords = this.dataset.squareVertex.split("")
    coords[0] = Number(coords[0])
    if (initShip(coords, shipTypes[ship], shipDirection) === false) {
        alert("You can not have ships overlapping one another!")
        return
    }
    ship -= 1
    if (shipTypes[ship] !== 'submarine') 
        shipLength -= 1
    if (shipTypes[ship] !== undefined) {
        shipName = shipTypes[ship].split('')
        shipName[0] = shipName[0].toUpperCase()
        shipName = shipName.join('')
        if (shipName === 'PatrolBoat')
            displayShipName.innerHTML = 'Patrol Boat'
        else
            displayShipName.innerHTML = shipName
    }
    placement.push(hovered)
    if (shipLength < 2) {
        removePlayerBoardListeners()
        startGame()
    }
}

function removePlayerBoardListeners() {
    const gameboardSquares = document.querySelectorAll('.gameboard-square')
    gameboardSquares.forEach((square) => {
        square.removeEventListener('mouseover', mouseHover)
        square.removeEventListener('mouseout', removeSquareHighlights)
        square.removeEventListener('click', mouseClick)
    });
    removeSquareHighlights()
}

function addAiBoardListeners() {
    const gameboardSquares = document.querySelectorAll('.ai-gameboard-square')
    gameboardSquares.forEach((square) => {
        square.addEventListener('click', parseElementAttackCoord)
    });
}

function parseElementAttackCoord() {
    let coords = this.dataset.squareVertex.split("")
    coords[0] = Number(coords[0])
    playerAttack(coords)
}