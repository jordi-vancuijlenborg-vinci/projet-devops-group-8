export class Main {
    simpleMinutesLine(minutes){
        minutes = minutes % 5;
        const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];
        if(minutes == 1){
            return patterns[1];
        } else if(minutes == 2){
            return patterns[2];
        } else if(minutes == 3){
            return patterns[3];
        } else if(minutes == 4){
            return  patterns[4];
        }
        return patterns[0];
    }
}