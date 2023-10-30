import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        this.ship = {}
        this.missedShots = []
    }

    createShipsPlacement(coords, shipType, direction = 'vertical') {
        let shipObj;
        if (shipType === 'carrier') {
            shipObj = new Ship(5)
        } else if (shipType === 'battleship') {
            shipObj = new Ship(4)
        } else if (shipType === 'destroyer') {
            shipObj = new Ship(3)
        } else if (shipType === 'submarine') {
            shipObj = new Ship(3)
        } else if (shipType === 'patrolBoat') {
            shipObj = new Ship(2)
        } else {
            throw new Error('Ship type is not valid')
        }
        const boardPlacement = [coords]
        for (let i = 1; i < shipObj.length; i ++) {
            if (this.checkIfShipPlacementOverlapsAnyOtherShip(boardPlacement[i - 1]) === true) return;
            if (direction === 'vertical') {
                boardPlacement.push([coords[0], this.yAxis[this.yAxis.indexOf(coords[1]) + i]])
            } else {
                boardPlacement.push([this.xAxis[this.xAxis.indexOf(coords[0])] + i, coords[1]])
            }
        }
        if (this.checkIfShipPlacementInGameBoard(boardPlacement)) {
            this.ship[[shipType]] = [shipObj, boardPlacement]
        }
    }

    checkIfShipPlacementInGameBoard(boardPlacement) {
        const queue = [boardPlacement[0]]
        let i = 0;
        while (queue >= 0) {
            if (!this.xAxis.includes(queue[0][0]) || !this.yAxis.includes(queue[0][1])) {
                return false;
            }
            i++
            queue.shift()
            queue.push(boardPlacement[i])
        }
        return true;
    }

    checkIfShipPlacementOverlapsAnyOtherShip(placementVertex) {
        const shipKeys = Object.keys(this.ship)
        if (shipKeys.length === 0) {
            return false
        }
        for (let i = 0; i < shipKeys.length; i++) {
            const shipPlacement = this.ship[[shipKeys[i]]][1]
            for (let j = 0; j < shipPlacement.length; j++) {
                if (placementVertex[0] === shipPlacement[j][0] && placementVertex[1] === shipPlacement[j][1]) {
                    return true;
                }
            }
        }
        return false;
    }

}
