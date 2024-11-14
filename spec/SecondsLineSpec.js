import { Main } from '../src/BerlinClock.js';

describe('secondsLine', () => {
    it('secondsLines should return "O" when given 0', function () {
        const main = new Main();

        const result = main.secondsLines(0);
        
        expect(result).toBe("O");
    });

    it('secondsLines should return "Y" when given 1', function () {
        const main = new Main();

        const result = main.secondsLines(1);
        
        expect(result).toBe("Y");
    });

    it('secondsLines should return "O" when given 2', function () {
        const main = new Main();

        const result = main.secondsLines(2);
        
        expect(result).toBe("O");
    });

    it('secondsLines should return "Y" when given 3', function () {
        const main = new Main();

        const result = main.secondsLines(3);
        
        expect(result).toBe("Y");
    });
});