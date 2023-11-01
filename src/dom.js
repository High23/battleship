import './style.css'

export {createPlayerBoard, createAiBoard}

const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

function createPlayerBoard() {
    const gameboard = document.querySelector('.player-gameboard')
    for (let i = 1; i < 11; i++) {
        for (let j = 0; j < 10; j++) {
            const gameboardSquare = document.createElement('div')
            gameboardSquare.classList.add('gameboard-square')
            gameboardSquare.setAttribute('data-square-vertex', `${i}, ${yAxis[j]}`)
            gameboard.appendChild(gameboardSquare)
        }
    }
}

function createAiBoard() {
    const gameboardContainer = document.querySelector('.gameboard-container')
    const aiGameboard = document.createElement('div')
    aiGameboard.classList.add('ai-gameboard')
    for (let i = 1; i < 11; i++) {
        for (let j = 0; j < 10; j++) {
            const gameboardSquare = document.createElement('div')
            gameboardSquare.classList.add('gameboard-square')
            gameboardSquare.setAttribute('data-square-vertex', `${i}, ${yAxis[j]}`)
            aiGameboard.appendChild(gameboardSquare)
        }
    }
    gameboardContainer.appendChild(aiGameboard)
}