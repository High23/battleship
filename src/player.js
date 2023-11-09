import Gameboard from './gameboard';

export { Player, Ai };

class Player {
    constructor() {
        this.gameboard = new Gameboard();
    }
}

class Ai extends Player {
    constructor() {
        super();
        this.direction = ['vertical', 'horizontal'];
    }

    coordinatePick() {
        return [
            this.gameboard.xAxis[Math.floor(Math.random() * 10)],
            this.gameboard.yAxis[Math.floor(Math.random() * 10)],
        ];
    }

    directionPick() {
        return this.direction[Math.floor(Math.random() * 2)];
    }
}
