import Ship from './ship';

export default class Gameboard {
    constructor() {
        this.xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.ship = {};
        this.missedShots = [];
        this.hits = [];
    }

    receiveAttack(attackCoords) {
        if (
            !this.xAxis.includes(attackCoords[0]) &&
            !this.yAxis.includes(attackCoords[1])
        )
            throw new Error(
                'The attack coordinates are not within the gameboard',
            );
        if (this.missedShots.length > 0) {
            for (let i = 0; i < this.missedShots.length; i++) {
                if (
                    this.missedShots[i][0] === attackCoords[0] &&
                    this.missedShots[i][1] === attackCoords[1]
                ) {
                    return 'already missed';
                }
            }
        }
        if (this.hits.length > 0) {
            for (let i = 0; i < this.hits.length; i++) {
                if (
                    this.hits[i][0] === attackCoords[0] &&
                    this.hits[i][1] === attackCoords[1]
                ) {
                    return 'already hit';
                }
            }
        }
        const shipObjKeys = Object.keys(this.ship);
        for (let i = 0; i < shipObjKeys.length; i++) {
            const shipType = shipObjKeys[i];
            const shipPlacement = this.ship[[shipType]][1];
            for (let j = 0; j < shipPlacement.length; j++) {
                if (
                    shipPlacement[j][0] === attackCoords[0] &&
                    shipPlacement[j][1] === attackCoords[1]
                ) {
                    if (this.ship[[shipType]][0].sunk) return 'sunk';
                    this.ship[[shipType]][0].hit();
                    this.ship[[shipType]][0].isSunk();
                    this.hits.push(attackCoords);
                    return true;
                }
            }
        }
        this.missedShots.push(attackCoords);
    }

    createShipsPlacement(coords, shipType, direction = 'vertical') {
        let shipObj;
        if (shipType === 'carrier') {
            shipObj = new Ship(5);
        } else if (shipType === 'battleship') {
            shipObj = new Ship(4);
        } else if (shipType === 'destroyer') {
            shipObj = new Ship(3);
        } else if (shipType === 'submarine') {
            shipObj = new Ship(3);
        } else if (shipType === 'patrolBoat') {
            shipObj = new Ship(2);
        } else {
            throw new Error('Ship type is not valid');
        }
        const boardPlacement = [coords];
        for (let i = 1; i < shipObj.length; i++) {
            if (direction === 'vertical') {
                boardPlacement.push([
                    coords[0],
                    String.fromCharCode(coords[1].toString().charCodeAt(0) + i),
                ]);
            } else {
                boardPlacement.push([coords[0] + i, coords[1]]);
            }
        }
        for (let i = 0; i < boardPlacement.length; i++) {
            if (
                this.checkIfShipPlacementOverlapsAnyOtherShip(
                    boardPlacement[i],
                ) === true
            )
                return false;
        }
        if (this.checkIfShipPlacementInGameBoard(boardPlacement)) {
            this.ship[[shipType]] = [shipObj, boardPlacement];
        } else {
            return 'invalid';
        }
    }

    checkIfShipPlacementInGameBoard(boardPlacement) {
        for (let i = 0; i < boardPlacement.length; i++) {
            if (
                !this.xAxis.includes(boardPlacement[i][0]) ||
                !this.yAxis.includes(boardPlacement[i][1])
            ) {
                return false;
            }
        }
        return true;
    }

    checkIfShipPlacementOverlapsAnyOtherShip(placementVertex) {
        const shipKeys = Object.keys(this.ship);
        if (shipKeys.length === 0) {
            return false;
        }
        for (let i = 0; i < shipKeys.length; i++) {
            const shipPlacement = this.ship[[shipKeys[i]]][1];
            for (let j = 0; j < shipPlacement.length; j++) {
                if (
                    placementVertex[0] === shipPlacement[j][0] &&
                    placementVertex[1] === shipPlacement[j][1]
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    checkIfAllShipsSunk() {
        const keys = Object.keys(this.ship);
        for (let i = 0; i < keys.length; i++) {
            const shipType = keys[i];
            const shipSunk = this.ship[[shipType]][0].sunk;
            if (shipSunk === false) {
                return false;
            }
        }
        return true;
    }
}
