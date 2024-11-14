import { BerlinClock } from '../src/BerlinClock.js';

describe('fiveMinutesLine', () => {
    it('fiveMinutesLine should return "O O O O O O O O O O O" when given O', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(0);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "O O O O O O O O O O O" when given 1', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(1);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "O O O O O O O O O O O" when given 2', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(2);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "O O O O O O O O O O O" when given 3', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(3);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "O O O O O O O O O O O" when given 4', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(4);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "Y O O O O O O O O O O" when given 5', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(5);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "Y O O O O O O O O O O" when given 6', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(6);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "Y O O O O O O O O O O" when given 7', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(7);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "Y O O O O O O O O O O" when given 8', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(8);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "Y O O O O O O O O O O" when given 9', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(9);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('fiveMinutesLine should return "Y Y O O O O O O O O O" when given 10', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(10);
        
        expect(result).toBe("Y Y O O O O O O O O O");
    });

    it('fiveMinutesLine should return "Y Y O O O O O O O O O" when given 11', function () {
        const berlinClock = new BerlinClock();

        const result = berlinClock.fiveMinutesLine(11);
        
        expect(result).toBe("Y Y O O O O O O O O O");
    });
});