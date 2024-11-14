import { BerlinClock } from '../src/BerlinClock.js';

describe('fiveHoursLine', () => {
    it('fiveHoursLine should return "O O O O" when given 0', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveHoursLine(0);
        
        expect(result).toBe("O O O O");
    });

    it('fiveHoursLine should return "O O O O" when given 1', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveHoursLine(1);
        
        expect(result).toBe("O O O O");
    });

    it('fiveHoursLine should return "O O O O" when given 2', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveHoursLine(2);
        
        expect(result).toBe("O O O O");
    });

    it('fiveHoursLine should return "O O O O" when given 3', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveHoursLine(3);
        
        expect(result).toBe("O O O O");
    });

    it('fiveHoursLine should return "O O O O" when given 4', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveHoursLine(4);
        
        expect(result).toBe("O O O O");
    });

    it('fiveHoursLine should return "Y O O O" when given 5', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveHoursLine(5);
        
        expect(result).toBe("Y O O O");
    });
});