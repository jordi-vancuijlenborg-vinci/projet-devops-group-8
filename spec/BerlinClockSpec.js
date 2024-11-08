import { Main } from '../src/BerlinClock.js';

describe('BerlinClock', () => {

    it('SimpleMinutesLine should return "O O O O" when given 0', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(0);
        
        expect(result).toBe("O O O O");
    });

    it('SimpleMinutesLine should return "Y O O O" when given 1', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(1);
        
        expect(result).toBe("Y O O O");
    });

    it('SimpleMinutesLine should return "Y Y O O" when given 2', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(2);
        
        expect(result).toBe("Y Y O O");
    });

    it('SimpleMinutesLine should return "Y Y Y O" when given 3', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(3);
        
        expect(result).toBe("Y Y Y O");
    });

    it('SimpleMinutesLine should return "Y Y Y Y" when given 4', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(4);
        
        expect(result).toBe("Y Y Y Y");
    });

    it('SimpleMinutesLine should return "O O O O" when given 5', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(5);
        
        expect(result).toBe("O O O O");
    });

    it('SimpleMinutesLine should return "Y O O O" when given 6', function () {
        const main = new Main();

        const result = main.simpleMinutesLine(6);
        
        expect(result).toBe("Y O O O");
    });

    it('BocDe5Minutes should return "O O O O O O O O O O O" when given O', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(0);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

});

