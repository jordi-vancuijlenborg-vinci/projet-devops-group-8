export class Main {
  simpleMinutesLine(minutes) {
    minutes = minutes % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[minutes];
  }

  blocDe5Minutes(minutes) {
    minutes = Math.floor(minutes / 5);

    const patterns = ["O O O O O O O O O O O", "Y O O O O O O O O O O", "Y Y O O O O O O O O O", "Y Y Y O O O O O O O O", "Y Y Y Y O O O O O O O", "Y Y Y Y Y O O O O O O","Y Y Y Y Y Y O O O O O","Y Y Y Y Y Y Y O O O O","Y Y Y Y Y Y Y Y O O O","Y Y Y Y Y Y Y Y Y O O","Y Y Y Y Y Y Y Y Y Y O","Y Y Y Y Y Y Y Y Y Y Y"];

    
    return patterns[minutes];
  }

  blocDe1Heure(heures) {
    heures = heures % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[heures];
  }

  blocDe5Heure(heures) {
    heures = Math.floor(heures / 5);

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[heures];
  }

  blocDeSecondes(secondes) {
    if (secondes < 0 || secondes > 59) {
      throw new Error("Le nombre de secondes doit être compris entre 0 et 59");
    }
    secondes = secondes % 2;

    return secondes === 0 ? "O" : "Y";
  }

  berlinClock(time) {
    const [hh, mm, ss] = time.split(":").map(Number);

    if (hh < 0 || hh > 23) {
      throw new Error("Le nombre d'heures doit être compris entre 0 et 23");
    }
    if (mm < 0 || mm > 59) {
      throw new Error("Le nombre de minutes doit être compris entre 0 et 59");
    }

    if (ss == 60) {
      throw new Error("Le nombre de secondes doit être compris entre 0 et 59");
    }

    return [
      this.blocDeSecondes(ss),
      this.blocDe5Heure(hh),
      this.blocDe1Heure(hh),
      this.blocDe5Minutes(mm),
      this.simpleMinutesLine(mm)
    ];
  }

}

