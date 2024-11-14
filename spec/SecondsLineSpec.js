import { BerlinClock } from '../src/BerlinClock.js';

describe('secondsLine', () => {
    it('secondsLine should return "O" when given 0', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.secondsLine(0);
        
        expect(result).toBe("O");
    });

    it('secondsLine should return "Y" when given 1', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.secondsLine(1);
        
        expect(result).toBe("Y");
    });

    it('secondsLine should return "O" when given 2', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.secondsLine(2);
        
        expect(result).toBe("O");
    });

    it('secondsLine should return "Y" when given 3', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.secondsLine(3);
        
        expect(result).toBe("Y");
    });
});