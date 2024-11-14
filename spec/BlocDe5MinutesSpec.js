import { Main } from '../src/BerlinClock.js';

describe('BlocDe5Minutes', () => {
    it('BlocDe5Minutes should return "O O O O O O O O O O O" when given O', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(0);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "O O O O O O O O O O O" when given 1', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(1);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "O O O O O O O O O O O" when given 2', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(2);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "O O O O O O O O O O O" when given 3', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(3);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "O O O O O O O O O O O" when given 4', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(4);
        
        expect(result).toBe("O O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "Y O O O O O O O O O O" when given 5', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(5);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "Y O O O O O O O O O O" when given 6', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(6);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "Y O O O O O O O O O O" when given 7', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(7);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "Y O O O O O O O O O O" when given 8', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(8);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "Y O O O O O O O O O O" when given 9', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(9);
        
        expect(result).toBe("Y O O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "Y Y O O O O O O O O O" when given 10', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(10);
        
        expect(result).toBe("Y Y O O O O O O O O O");
    });

    it('BlocDe5Minutes should return "Y Y O O O O O O O O O" when given 11', function () {
        const main = new Main();

        const result = main.blocDe5Minutes(11);
        
        expect(result).toBe("Y Y O O O O O O O O O");
    });
});