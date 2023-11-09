import Gameboard from './gameboard';
import Ship from './ship';

describe('test horizontal placements of ships', () => {
    const gameboard = new Gameboard();
    beforeEach(() => {
        gameboard.createShipsPlacement([1, 'A'], 'carrier', 'horizontal');
    });

    test('checks if ship placement is properly horizontal on gameboard', () => {
        expect(gameboard.ship.carrier).toEqual([
            new Ship(5),
            [
                [1, 'A'],
                [2, 'A'],
                [3, 'A'],
                [4, 'A'],
                [5, 'A'],
            ],
        ]);
    });

    test('createShipsPlacement should return false if the creation of a new ship horizontally overlaps another ship', () => {
        expect(
            gameboard.createShipsPlacement(
                [1, 'A'],
                'battleship',
                'horizontal',
            ),
        ).toBeFalsy();
    });

    test('determine if an attack has hit or missed a ship', () => {
        gameboard.receiveAttack([1, 'A']);
        gameboard.receiveAttack([6, 'A']);
        expect(gameboard.ship.carrier[0].numOfTimesHit).toBe(1);
        expect(gameboard.missedShots.length).toBe(1);
        expect(gameboard.missedShots[0]).toEqual([6, 'A']);
    });
});

describe('test vertical placements of ships', () => {
    const gameboard = new Gameboard();
    beforeEach(() => {
        gameboard.createShipsPlacement([1, 'A'], 'carrier');
    });

    test('checks if ship placement is properly vertical on gameboard', () => {
        expect(gameboard.ship.carrier).toEqual([
            new Ship(5),
            [
                [1, 'A'],
                [1, 'B'],
                [1, 'C'],
                [1, 'D'],
                [1, 'E'],
            ],
        ]);
    });

    test('createShipsPlacement should return false if the creation of a new ship vertically overlaps another ship', () => {
        expect(
            gameboard.createShipsPlacement([1, 'A'], 'battleship'),
        ).toBeFalsy();
    });

    test('determine if an attack has hit or missed a ship', () => {
        gameboard.receiveAttack([1, 'A']);
        gameboard.receiveAttack([6, 'A']);
        gameboard.receiveAttack([6, 'A']);
        expect(gameboard.ship.carrier[0].numOfTimesHit).toBe(1);
        expect(gameboard.missedShots.length).toBe(1);
        expect(gameboard.missedShots[0]).toEqual([6, 'A']);
    });
});

describe('gameboard will not report all ships have sunk', () => {
    const gameboard = new Gameboard();
    beforeEach(() => {
        gameboard.createShipsPlacement([1, 'A'], 'carrier');
        gameboard.receiveAttack([1, 'A']);
        gameboard.receiveAttack([1, 'B']);
        gameboard.receiveAttack([1, 'C']);
        gameboard.receiveAttack([1, 'D']);

        gameboard.createShipsPlacement([2, 'A'], 'battleship');
        gameboard.receiveAttack([2, 'A']);
        gameboard.receiveAttack([2, 'B']);
        gameboard.receiveAttack([2, 'C']);
    });

    test('', () => {
        expect(gameboard.checkIfAllShipsSunk()).toBeFalsy();
    });
});

describe('gameboard will report all ships have sunk', () => {
    const gameboard = new Gameboard();
    beforeEach(() => {
        gameboard.createShipsPlacement([1, 'A'], 'carrier');
        gameboard.receiveAttack([1, 'A']);
        gameboard.receiveAttack([1, 'B']);
        gameboard.receiveAttack([1, 'C']);
        gameboard.receiveAttack([1, 'D']);
        gameboard.receiveAttack([1, 'E']);

        gameboard.createShipsPlacement([2, 'A'], 'battleship');
        gameboard.receiveAttack([2, 'A']);
        gameboard.receiveAttack([2, 'B']);
        gameboard.receiveAttack([2, 'C']);
        gameboard.receiveAttack([2, 'D']);
    });

    test('', () => {
        expect(gameboard.checkIfAllShipsSunk()).toBeTruthy();
    });
});
