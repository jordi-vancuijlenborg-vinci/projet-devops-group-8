export class BerlinClock {
  simpleMinutesLine(minutes) {
    minutes = minutes % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[minutes];
  }

  fiveMinutesLine(minutes) {
    minutes = Math.floor(minutes / 5);

    const patterns = ["O O O O O O O O O O O", "Y O O O O O O O O O O", "Y Y O O O O O O O O O", "Y Y Y O O O O O O O O", "Y Y Y Y O O O O O O O", "Y Y Y Y Y O O O O O O","Y Y Y Y Y Y O O O O O","Y Y Y Y Y Y Y O O O O","Y Y Y Y Y Y Y Y O O O","Y Y Y Y Y Y Y Y Y O O","Y Y Y Y Y Y Y Y Y Y O","Y Y Y Y Y Y Y Y Y Y Y"];

    return patterns[minutes];
  }

  oneHourLine(heures) {
    heures = heures % 5;

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[heures];
  }

  fiveHoursLine(heures) {
    heures = Math.floor(heures / 5);

    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    return patterns[heures];
  }

  secondsLine(secondes) {
    secondes = secondes % 2;

    return secondes === 0 ? "O" : "Y";
  }

  berlinClock(time) {
    const [hh, mm, ss] = time.split(":").map(Number);

    if (hh < 0 || hh > 23) {
      throw new Error("Number of hours must be between 0 and 23");
    }

    if (( mm < 0 || mm > 59) || (ss < 0 || ss > 59)) {
      throw new Error("Number of minutes and seconds must be between 0 and 59");
    }

    return [
      this.secondsLine(ss),
      this.fiveHoursLine(hh),
      this.oneHourLine(hh),
      this.fiveMinutesLine(mm),
      this.simpleMinutesLine(mm)
    ];
  }

}

