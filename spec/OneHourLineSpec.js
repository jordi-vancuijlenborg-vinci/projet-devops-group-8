import { Main } from '../src/BerlinClock.js';

describe('oneHourLine', () => {
    it('oneHourLine should return "O O O O" when given 0', function () {
        const main = new Main();

        const result = main.oneHourLine(0);
        
        expect(result).toBe("O O O O");
    });

    it('oneHourLine should return "Y O O O" when given 1', function () {
        const main = new Main();

        const result = main.oneHourLine(1);
        
        expect(result).toBe("Y O O O");
    });

    it('oneHourLine should return "Y Y O O" when given 2', function () {
        const main = new Main();

        const result = main.oneHourLine(2);
        
        expect(result).toBe("Y Y O O");
    });

    it('oneHourLine should return "Y Y Y O" when given 3', function () {
        const main = new Main();

        const result = main.oneHourLine(3);
        
        expect(result).toBe("Y Y Y O");
    });

    it('oneHourLine should return "Y Y Y Y" when given 4', function () {
        const main = new Main();

        const result = main.oneHourLine(4);
        
        expect(result).toBe("Y Y Y Y");
    });

    it('oneHourLine should return "Y Y Y Y" when given 5', function () {
        const main = new Main();

        const result = main.oneHourLine(5);
        
        expect(result).toBe("O O O O");
    });
});