import { Main } from '../src/BerlinClock.js';

describe('BerlinClock', () => {

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

        expect(() => main.berlinClock("02:99:66")).toThrow();
    });
});

