import { Main } from '../src/BerlinClock.js';

describe('BerlinClock', () => {

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

    it('BlocDe1Heure should return "Y Y Y O" when given 3', function () {
        const main = new Main();

        const result = main.blocDe1Heure(3);
        
        expect(result).toBe("Y Y Y O");
    });

    it('BlocDe1Heure should return "Y Y Y Y" when given 4', function () {
        const main = new Main();

        const result = main.blocDe1Heure(4);
        
        expect(result).toBe("Y Y Y Y");
    });

    it('BlocDe1Heure should return "Y Y Y Y" when given 5', function () {
        const main = new Main();

        const result = main.blocDe1Heure(5);
        
        expect(result).toBe("O O O O");
    });

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

    it('berlinClock should return "O\nO O O O\nO O O O\nO O O O O\nO O O O" when given "00:00:00"', function () {
        const main = new Main();
        
        const result = main.berlinClock("00:00:00");
        
        expect(result).toEqual([
            "O",                     
            "O O O O",               
            "O O O O",               
            "O O O O O O O O O O O", 
            "O O O O"                
        ]);
    });

    it('berlinClock should return "Y\nO O O O\nO O O O\nO O O O O\nO O O O" when given "00:00:01"', function () {
        const main = new Main();
        
        const result = main.berlinClock("00:00:01");
        
        expect(result).toEqual([
            "Y",                     
            "O O O O",               
            "O O O O",               
            "O O O O O O O O O O O", 
            "O O O O"                
        ]);
    });

    it('berlinClock should return "O\nO O O O\nO O O O\nO O O O O\nY O O O" when given "00:01:00"', function () {
        const main = new Main();
        
        const result = main.berlinClock("00:01:00");
        
        expect(result).toEqual([
            "O",                     
            "O O O O",               
            "O O O O",               
            "O O O O O O O O O O O", 
            "Y O O O"                
        ]);
    });
    it('berlinClock should return "O\nO O O O\nY O O O\nO O O O O\nO O O O" when given "01:00:00"', function () {
        const main = new Main();
        
        const result = main.berlinClock("01:00:00");
        
        expect(result).toEqual([
            "O",                     
            "O O O O",               
            "Y O O O",               
            "O O O O O O O O O O O", 
            "O O O O"                
        ]);
    });

    it('berlinClock should return "Y\nY Y Y O\nY Y Y Y\nY Y Y Y Y Y Y Y O O O \nY Y O O" when given "19:43:02"', function () {
        const main = new Main();
        
        const result = main.berlinClock("19:43:02");
        
        expect(result).toEqual([
            "O",                     
            "Y Y Y O",               
            "Y Y Y Y",               
            "Y Y Y Y Y Y Y Y O O O", 
            "Y Y Y O"                
        ]);
    });

    it('berlinClock should return "Y\nY Y Y Y\nO O O O\nO O O O O O O O O O O\nY Y O O" when given "20:02:01"', function () {
        const main = new Main();
        
        const result = main.berlinClock("20:02:01");
        
        expect(result).toEqual([
            "Y",                     
            "Y Y Y Y",               
            "O O O O",               
            "O O O O O O O O O O O", 
            "Y Y O O"                
        ]);
    });

    it('berlinClock should return "Y\nY Y Y Y\nY Y Y O\nY Y Y Y Y Y Y Y Y Y Y\nY Y Y Y" when given "23:59:59"', function () {
        const main = new Main();
        
        const result = main.berlinClock("23:59:59");
        
        expect(result).toEqual([
            "Y",                     
            "Y Y Y Y",               
            "Y Y Y O",               
            "Y Y Y Y Y Y Y Y Y Y Y", 
            "Y Y Y Y"                
        ]);
    });

    it('berlinClock should throw an error when given "24:00:00"', () => {
        const main = new Main();

        expect(() => main.berlinClock("24:00:00")).toThrow();
    });

    it('berlinClock should throw an error when given "-24:00:00"', () => {
        const main = new Main();

        expect(() => main.berlinClock("-24:00:00")).toThrow();
    });

    it('berlinClock should throw an error when given "00:60:00"', () => {
        const main = new Main();

        expect(() => main.berlinClock("00:60:00")).toThrow();
    });

    
    it('berlinClock should throw an error when given "00:-60:00"', () => {
        const main = new Main();

        expect(() => main.berlinClock("00:-60:00")).toThrow();
    });

    it('berlinClock should throw an error when given "00:00:60"', () => {
        const main = new Main();

        expect(() => main.berlinClock("00:00:60")).toThrow();
    });

    it('berlinClock should throw an error when given "00:00:-60"', () => {
        const main = new Main();

        expect(() => main.berlinClock("00:00:-60")).toThrow();
    });

    it('berlinClock should throw an error when given "02:99:66"', () => {
        const main = new Main();

        expect(() => main.berlinClock("25:04:66")).toThrow();
    });
});

