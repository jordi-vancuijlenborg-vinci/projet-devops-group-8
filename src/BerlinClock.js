export class Main {
    simpleMinutesLine(minutes){
        minutes = minutes % 5;

        if(minutes == 1){
            return "Y O O O";
        } else if(minutes == 2){
            return "Y Y O O";
        } else if(minutes == 3){
            return "Y Y Y O";
        } else if(minutes == 4){
            return "Y Y Y Y";
        }
        return "O O O O";
    }
}