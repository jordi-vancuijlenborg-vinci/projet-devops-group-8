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

    it('BocDe5Minutes should return "Y O O O O O O O O O O" when given 1', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(1);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('BocDe5Minutes should return "Y Y O O O O O O O O O" when given 2', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(2);
        
        expect(result).toBe("Y Y O O O O O O O O O");
    });

    it('BocDe5Minutes should return "Y Y Y O O O O O O O O" when given 3', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(3);
        
        expect(result).toBe("Y Y Y O O O O O O O O");
    });

    it('BocDe5Minutes should return "Y Y Y Y O O O O O O O" when given 4', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(4);
        
        expect(result).toBe("Y Y Y Y O O O O O O O");
    });

    it('BocDe5Minutes should return "Y Y Y Y Y O O O O O O" when given 5', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(5);
        
        expect(result).toBe("Y Y Y Y Y O O O O O O");
    });

    it('BocDe5Minutes should return "Y Y Y Y Y Y O O O O O" when given 6', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(6);
        
        expect(result).toBe("Y Y Y Y Y Y O O O O O");
    });

    it('BocDe5Minutes should return "Y Y Y Y Y Y Y O O O O" when given 7', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(7);
        
        expect(result).toBe("Y Y Y Y Y Y Y O O O O");
    });

    it('BocDe5Minutes should return "Y Y Y Y Y Y Y Y O O O" when given 8', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(8);
        
        expect(result).toBe("Y Y Y Y Y Y Y Y O O O");
    });

    it('BocDe5Minutes should return "Y Y Y Y Y Y Y Y Y O O" when given 9', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(9);
        
        expect(result).toBe("Y Y Y Y Y Y Y Y Y O O");
    });

    it('BocDe5Minutes should return "Y Y Y Y Y Y Y Y Y Y O" when given 10', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(10);
        
        expect(result).toBe("Y Y Y Y Y Y Y Y Y Y O");
    });

    it('BocDe5Minutes should return "Y Y Y Y Y Y Y Y Y Y Y" when given 11', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(11);
        
        expect(result).toBe("Y Y Y Y Y Y Y Y Y Y Y");
    });

    it('BlocDe1Heure should return "O O O O" when given 0', function () {
        const main = new Main();

        const result = main.blocDe1Heure(0);
        
        expect(result).toBe("O O O O");
    });

    it('BlocDe1Heure should return "Y O O O" when given 1', function () {
        const main = new Main();

        const result = main.blocDe1Heure(1);
        
        expect(result).toBe("Y O O O");
    });

    it('BlocDe1Heure should return "Y Y O O" when given 2', function () {
        const main = new Main();

        const result = main.blocDe1Heure(2);
        
        expect(result).toBe("Y Y O O");
    });
});

