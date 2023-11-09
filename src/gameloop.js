import { createAiBoard, addAiBoardListeners, markMissedShot, markHit, removeAiBoardListeners, announceWinner, displayGameEvents } from "./dom";
import { Ai, Player } from "./player";

export { initShip, startGame, playerAttack, resetGameStuff }

let player = new Player()
let aiPlayer = new Ai()

function initShip(coords, shipType, direction) {
    let returnValue = player.gameboard.createShipsPlacement(coords, shipType, direction)
    if (returnValue === false) {
        return false
    } else if (returnValue === 'invalid') {
        return 'invalid'
    }
}

async function initAiShips() {
    let shipTypes = [ 'patrolBoat', 'submarine', 'destroyer', 'battleship', 'carrier' ]
    let i = 4;
    while (true) {
        if (i < 0) {
            break;
        }
        let aiPlacement = aiPlayer.gameboard.createShipsPlacement(aiPlayer.coordinatePick(), shipTypes[i], aiPlayer.directionPick())
        if (aiPlacement === 'invalid' || aiPlacement === false) {
            continue;
        }
        i -= 1
    }
}

async function startGame() {
    createAiBoard()
    await initAiShips()
    addAiBoardListeners()
}

function playerAttack(attackCoords) {
    let attackStatus = aiPlayer.gameboard.receiveAttack(attackCoords)
    if (attackStatus === 'already hit' || attackStatus === 'already missed') {
        return
    }
    let turn = 'Player'
    let missedShots = aiPlayer.gameboard.missedShots
    let sunk = aiPlayer.gameboard.checkIfAllShipsSunk()
    if (attackStatus === true) {
        markHit(attackCoords, turn)
        displayGameEvents("You have hit one of the ai's ship's")
    } else if (attackStatus === 'sunk') {
        displayGameEvents("You have sunk one of the ai's ship's")
        return
    } else {
        markMissedShot(missedShots[missedShots.length - 1], turn)
        displayGameEvents('You missed an attack')
    }
    if (sunk) {
        announceWinner(turn)
        removeAiBoardListeners()
        return
    }
    aiAttack()
}

function aiAttack() {
    let aiCoordsPick = aiPlayer.coordinatePick()
    let attackStatus = player.gameboard.receiveAttack(aiCoordsPick)
    while (true) {
        if (attackStatus === 'already hit' || attackStatus === 'already missed') {
            aiCoordsPick = aiPlayer.coordinatePick()
            attackStatus = player.gameboard.receiveAttack(aiCoordsPick)
        } else {
            break;
        }
    }
    let turn = 'Ai'
    let missedShots = player.gameboard.missedShots
    let sunk = aiPlayer.gameboard.checkIfAllShipsSunk()
    if (attackStatus === true) {
        markHit(aiCoordsPick, turn)
        displayGameEvents("The ai has hit one of your ship's")
    } else if (attackStatus === 'sunk') {
        displayGameEvents("The ai has sunk one of your ship's")
        return
    } else {
        markMissedShot(missedShots[missedShots.length - 1], turn)
        displayGameEvents('The ai has missed an attack')
    }
    if (sunk) {
        announceWinner(turn)
        removeAiBoardListeners()
    }
}

function resetGameStuff() {
    player = new Player()
    aiPlayer = new Ai()
}