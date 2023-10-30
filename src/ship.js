export default class Ship {
    constructor(length = null) {
        this.length = length;
        this.numOfTimesHit = 0;
        this.sunk = false;
    }
    
    hit() {
        this.numOfTimesHit++;
    }

    isSunk() {
        if (this.numOfTimesHit >= this.length) this.sunk = true;
    }
}