export class Main {
  simpleMinutesLine(minutes) {
    minutes = minutes % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[minutes];
  }

  blocDe5Minutes(minutes) {
    minutes = minutes % 12;

    const patterns = ["O O O O O O O O O O O", "Y O O O O O O O O O O", "Y Y O O O O O O O O O", "Y Y Y O O O O O O O O", "Y Y Y Y O O O O O O O", "Y Y Y Y Y O O O O O O","Y Y Y Y Y Y O O O O O","Y Y Y Y Y Y Y O O O O","Y Y Y Y Y Y Y Y O O O","Y Y Y Y Y Y Y Y Y O O","Y Y Y Y Y Y Y Y Y Y O","Y Y Y Y Y Y Y Y Y Y Y"];

    
    return patterns[minutes];
  }

  blocDe1Heure(heures) {
    heures = heures % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[heures];
  }

  blocDe5Heure(heures) {
    heures = heures % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[heures];
  }

  blocDeSecondes(secondes) {
    if(secondes === 1) {
      return "Y";
    }

    return "0";
  }
}
