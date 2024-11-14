import { Main } from '../src/BerlinClock.js';

describe('BlocDe5Heure', () => {
    it('BlocDe5Heure should return "O O O O" when given 0', function () {
        const main = new Main();

        const result = main.blocDe5Heure(0);
        
        expect(result).toBe("O O O O");
    });

    it('BlocDe5Heure should return "O O O O" when given 1', function () {
        const main = new Main();

        const result = main.blocDe5Heure(1);
        
        expect(result).toBe("O O O O");
    });

    it('BlocDe5Heure should return "O O O O" when given 2', function () {
        const main = new Main();

        const result = main.blocDe5Heure(2);
        
        expect(result).toBe("O O O O");
    });

    it('BlocDe5Heure should return "O O O O" when given 3', function () {
        const main = new Main();

        const result = main.blocDe5Heure(3);
        
        expect(result).toBe("O O O O");
    });

    it('BlocDe5Heure should return "O O O O" when given 4', function () {
        const main = new Main();

        const result = main.blocDe5Heure(4);
        
        expect(result).toBe("O O O O");
    });

    it('BlocDe5Heure should return "Y O O O" when given 5', function () {
        const main = new Main();

        const result = main.blocDe5Heure(5);
        
        expect(result).toBe("Y O O O");
    });
});