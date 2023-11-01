import Gameboard from "./gameboard";

export {Player, Ai}

class Player {
    constructor(bool = false) {
        this.turn = bool
        this.gameboard = new Gameboard()
    }
}

class Ai extends Player {
    coordinatePick() {
        return [this.gameboard.xAxis[Math.floor(Math.random() * 10)],  this.gameboard.yAxis[Math.floor(Math.random() * 10)]]
    }
}