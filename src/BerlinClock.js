export class Main {
  simpleMinutesLine(minutes) {
    minutes = minutes % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[minutes];
  }

  blocDe5Minutes(minutes) {
    if (minutes===1){
      return "Y O O O O O O O O O O"
    }
    if (minutes===2){
      return "Y Y O O O O O O O O O"
    }
    if (minutes===3){
      return "Y Y Y O O O O O O O O"
    }
    if (minutes===4){
      return "Y Y Y Y O O O O O O O"
    }
    if (minutes===5){
      return "Y Y Y Y Y O O O O O O"
    }
    if (minutes===6){
      return "Y Y Y Y Y Y O O O O O"
    }
    if (minutes===7){
      return "Y Y Y Y Y Y Y O O O O"
    }
    return "O O O O O O O O O O O";
  }
}
