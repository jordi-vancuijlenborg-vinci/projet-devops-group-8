export class Main {
    simpleMinutesLine(minutes){
        if(minutes == 1){
            return "Y O O O";
        } else if(minutes == 2){
            return "Y Y O O";
        } else if(minutes == 3){
            return "Y Y Y O";
        }
        return "O O O O";
    }
}