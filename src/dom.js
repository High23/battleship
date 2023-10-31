import './style.css'

export default function createBoards() {
    const gameboard = document.querySelector('.player-gameboard')
    const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    for (let i = 1; i < 11; i++) {
        for (let j = 0; j < 10; j++) {
            const gameboardSquare = document.createElement('div')
            gameboardSquare.classList.add('gameboard-square')
            gameboardSquare.setAttribute('data-square-vertex', `${i}, ${yAxis[j]}`)
            gameboard.appendChild(gameboardSquare)
        }
    }
    const aiGameboard = document.querySelector('.ai-gameboard')
    for (let i = 1; i < 11; i++) {
        for (let j = 0; j < 10; j++) {
            const gameboardSquare = document.createElement('div')
            gameboardSquare.classList.add('gameboard-square')
            gameboardSquare.setAttribute('data-square-vertex', `${i}, ${yAxis[j]}`)
            aiGameboard.appendChild(gameboardSquare)
        }
    }
}