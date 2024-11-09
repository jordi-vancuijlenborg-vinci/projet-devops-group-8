export class Main {
  simpleMinutesLine(minutes) {
    minutes = minutes % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[minutes];
  }

  blocDe5Minutes(minutes) {
    minutes = minutes % 12;

    const patterns = ["O O O O O O O O O O O", "Y O O O O O O O O O O", "Y Y O O O O O O O O O", "Y Y Y O O O O O O O O", "Y Y Y Y O O O O O O O", "Y Y Y Y Y O O O O O O","Y Y Y Y Y Y O O O O O","Y Y Y Y Y Y Y O O O O","Y Y Y Y Y Y Y Y O O O","Y Y Y Y Y Y Y Y Y O O","Y Y Y Y Y Y Y Y Y Y O","Y Y Y Y Y Y Y Y Y Y Y"];

    if (minutes===1){
      return patterns[1];
    }
    
    if (minutes===2){
      return patterns[2];
    }
    if (minutes===3){
      return patterns[3];
    }
    if (minutes===4){
      return patterns[4];
    }
    if (minutes===5){
      return patterns[5];
    }
    if (minutes===6){
      return patterns[6];
    }
    if (minutes===7){
      return patterns[7];
    }
    if (minutes===8){
      return patterns[8];
    }
    if (minutes===9){
      return patterns[9];
    }
    if (minutes===10){
      return patterns[10];
    }
    if (minutes===11){
      return patterns[11];
    }
    return patterns[0];
  }
}
