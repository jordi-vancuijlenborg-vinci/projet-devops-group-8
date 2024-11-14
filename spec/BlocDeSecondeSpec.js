import { Main } from '../src/BerlinClock.js';

describe('BlocDeSeconde', () => {
    it('BlocDeSecondes should return "O" when given 0', function () {
        const main = new Main();

        const result = main.blocDeSecondes(0);
        
        expect(result).toBe("O");
    });

    it('BlocDeSecondes should return "Y" when given 1', function () {
        const main = new Main();

        const result = main.blocDeSecondes(1);
        
        expect(result).toBe("Y");
    });

    it('BlocDeSecondes should return "O" when given 2', function () {
        const main = new Main();

        const result = main.blocDeSecondes(2);
        
        expect(result).toBe("O");
    });

    it('BlocDeSecondes should return "Y" when given 3', function () {
        const main = new Main();

        const result = main.blocDeSecondes(3);
        
        expect(result).toBe("Y");
    });
});