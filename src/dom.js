import { initShip, startGame, playerAttack, resetGameStuff } from './gameloop';
import './style.css'

export {createPlayerBoard, createAiBoard, addAiBoardListeners, markMissedShot, markHit, removeAiBoardListeners, announceWinner, displayGameEvents}

const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

let shipTypes = [ 'patrolBoat', 'submarine', 'destroyer', 'battleship', 'carrier' ]
let shipLength = 5;
let shipDirection = 'vertical';
let rotateBTN = document.querySelector('.rotate');
rotateBTN.addEventListener('click', () => {
    if (shipDirection === 'horizontal') {
        shipDirection = 'vertical';
    } else {
        shipDirection = 'horizontal';
    }
})

function createPlayerBoard() {
    const gameboardContainer = document.querySelector('.gameboard-container')
    const gameboard = document.createElement('div')
    gameboard.classList.add('player-gameboard')
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 11; j++) {
            const gameboardSquare = document.createElement('div');
            gameboardSquare.classList.add('gameboard-square');
            gameboardSquare.setAttribute('data-square-vertex', `${j}${yAxis[i]}`)
            gameboard.appendChild(gameboardSquare);
        }
    }
    gameboardContainer.appendChild(gameboard)
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
            gameboardSquare.setAttribute('data-square-vertex', `${j}${yAxis[i]}`)
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
let placement = [];

function mouseHover() {
    this.classList.add('hover-placement')
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
                if (gameboardSquareElementSibling.classList[1] !== 'ship-placement') gameboardSquareElementSibling.classList.add('hover-placement')
                gameboardSquareElementSibling = gameboardSquareElementSibling.nextSibling
            }
        } else if (shipDirection === 'vertical') {
            let verticalSiblingIndex = i + (10 * (j + 1))
            if (verticalSiblingIndex < 100 && gameboardSquares[verticalSiblingIndex].classList[1] !== 'ship-placement') {
                hovered.push(gameboardSquares[verticalSiblingIndex])
                gameboardSquares[verticalSiblingIndex].classList.add('hover-placement')
            }
        }
    }
}

function removeSquareHighlights() {
    hovered.forEach(element => {
        element.classList.remove('hover-placement')
    })
    hovered = []
}

let ship = shipTypes.length - 1
let displayShipName = document.querySelector('.ship-type')
let shipName = shipTypes[ship].split('')
shipName[0] = shipName[0].toUpperCase()
shipName = shipName.join('')
displayShipName.innerHTML = shipName

function mouseClick() {
    let coords = this.dataset.squareVertex.split("")
    if (coords.length > 2) {
        coords[0] = coords[0] + coords.splice(1, 1)[0]
    }
    coords[0] = Number(coords[0])
    let shipPlacement = initShip(coords, shipTypes[ship], shipDirection)
    if (shipPlacement === false) {
        alert("You can not have ships overlapping one another!")
        return
    } else if (shipPlacement === 'invalid') {
        alert("You can not place the ship here")
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
    showPlayerShips(placement[placement.length - 1])
    if (shipLength < 2) {
        removePlayerBoardListeners()
        adjustDisplay()
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
    const aiGameboardSquares = document.querySelectorAll('.ai-gameboard-square')
    aiGameboardSquares.forEach((aiSquare) => {
        aiSquare.addEventListener('click', parseElementAttackCoord)
        aiSquare.addEventListener('mouseover', addAiSquareColorOnHover)
        aiSquare.addEventListener('mouseout', removeAiSquareColorOffHover)
    });
}

function removeAiBoardListeners() {
    const aiGameboardSquares = document.querySelectorAll('.ai-gameboard-square')
    aiGameboardSquares.forEach((aiSquare) => {
        aiSquare.removeEventListener('click', parseElementAttackCoord)
        aiSquare.removeEventListener('mouseover', addAiSquareColorOnHover)
        aiSquare.removeEventListener('mouseout', removeAiSquareColorOffHover)
    });
}

function parseElementAttackCoord() {
    let coords = this.dataset.squareVertex.split("")
    if (coords.length > 2) {
        coords[0] = coords[0] + coords.splice(1, 1)[0]
    }
    coords[0] = Number(coords[0])
    playerAttack(coords)
}

function markMissedShot(missedShot, turn) {
    let gameboardSquares;
    if (turn === 'Player') {
        gameboardSquares = document.querySelectorAll('.ai-gameboard-square')
    } else {
        gameboardSquares = document.querySelectorAll('.gameboard-square')
    }
    for (let i = 0; i < gameboardSquares.length; i++) {
        let squareCoord = gameboardSquares[i].dataset.squareVertex.split("")
        if (squareCoord.length > 2) {
            squareCoord[0] = squareCoord[0] + squareCoord.splice(1, 1)[0]
        }
        squareCoord[0] = Number(squareCoord[0])
        if (squareCoord[0] === missedShot[0] && squareCoord[1] === missedShot[1]) {
            gameboardSquares[i].classList.add('missed')
            gameboardSquares[i].classList.remove('hover-color')
        }
    }
}

function markHit(attackCoords, turn) {
    let gameboardSquares;
    if (turn === 'Player') {
        gameboardSquares = document.querySelectorAll('.ai-gameboard-square')
    } else {
        gameboardSquares = document.querySelectorAll('.gameboard-square')
    }
    for (let i = 0; i < gameboardSquares.length; i++) {
        let squareCoord = gameboardSquares[i].dataset.squareVertex.split("")
        if (squareCoord.length > 2) {
            squareCoord[0] = squareCoord[0] + squareCoord.splice(1, 1)[0]
        }
        squareCoord[0] = Number(squareCoord[0])
        if (squareCoord[0] === attackCoords[0] && squareCoord[1] === attackCoords[1]) {
            gameboardSquares[i].classList.add('hit')
            gameboardSquares[i].classList.remove('hover-color')
        }
    }
}

function addAiSquareColorOnHover() {
    if (this.classList[1] === 'missed' || this.classList[1] === 'hit') {
        return
    }
    this.classList.add('hover-color')
}

function removeAiSquareColorOffHover() {
    if (this.classList[1] === 'missed' || this.classList[1] === 'hit') {
        return
    }
    this.classList.remove('hover-color')
}

function showPlayerShips(shipPlacement) {
    removeSquareHighlights()
    shipPlacement.forEach((element) => {
        element.removeEventListener('mouseover', mouseHover)
        element.removeEventListener('mouseout', removeSquareHighlights)
        element.classList.add('ship-placement')
    })
}

function announceWinner(winnerName) {
    const display = document.querySelector('.display')
    display.innerHTML = `The ${winnerName} is the winner!`
}

function displayGameEvents(message) {
    const display = document.querySelector('.display')
    display.innerHTML = message
}

function adjustDisplay() {
    displayShipName.innerHTML = ''
    rotateBTN.remove()
    const display = document.querySelector('.display')
    display.innerHTML = 'Attack'
    displayShipName.remove()
    const buttonAndDisplay = document.querySelector('.btn-and-display')
    const resetBTN = document.createElement('button')
    resetBTN.type = 'reset'
    resetBTN.classList.add('reset')
    resetBTN.innerHTML = 'Reset Game'
    buttonAndDisplay.appendChild(resetBTN)
    resetBTN.addEventListener('click', () => {
        deleteBoards()
        createPlayerBoard()
        resetGameStuff()
        resetBTN.remove()
        resetDomStuff()
    });
}

function deleteBoards() {
    const gameboard = document.querySelector('.player-gameboard');
    gameboard.remove()
    const aiGameboard = document.querySelector('.ai-gameboard');
    aiGameboard.remove()
}

function resetDomStuff() {
    const buttonAndDisplay = document.querySelector('.btn-and-display')
    const display = document.querySelector('.display')
    display.innerHTML = 'Place your ships'
    shipLength = 5;
    shipDirection = 'vertical';
    rotateBTN = document.createElement('button')
    rotateBTN.classList.add('rotate')
    rotateBTN.type = 'button'
    rotateBTN.innerHTML = 'Rotate Ship'
    buttonAndDisplay.appendChild(rotateBTN)
    rotateBTN.addEventListener('click', () => {
        if (shipDirection === 'horizontal') {
            shipDirection = 'vertical';
        } else {
            shipDirection = 'horizontal';
        }
    })
    placement = [];
    ship = shipTypes.length - 1
    shipName = shipTypes[ship].split('')
    shipName[0] = shipName[0].toUpperCase()
    shipName = shipName.join('')
    displayShipName = document.createElement('span')
    displayShipName.classList.add('ship-type')
    displayShipName.innerHTML = shipName
    buttonAndDisplay.appendChild(displayShipName)
}