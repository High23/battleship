import Ship from "./ship";

test('number of hits goes up when hit', () => {
    const carrier = new Ship(5);
    carrier.hit();
    expect(carrier.numOfTimesHit).toBe(1);
});

test('sunk status is true when the ship is hit enough times', () => {
    const carrier = new Ship(5);
    for (let i = 0; i < carrier.length; i++) {
        carrier.hit();
        carrier.isSunk();
    }
    expect(carrier.sunk).toBeTruthy();
});