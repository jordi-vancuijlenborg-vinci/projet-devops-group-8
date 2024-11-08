import { Main } from '../src/BerlinClock.js';

describe('BerlinClock', () => {

    it('SimpleMinutesLine should return "O O O O" when given 0', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(0);
        
        expect(result).toBe("O O O O");
    });
});

