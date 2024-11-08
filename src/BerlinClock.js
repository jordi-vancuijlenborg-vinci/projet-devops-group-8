export class Main {
  simpleMinutesLine(minutes) {
    minutes = minutes % 5;
    const patterns = ["O O O O", "Y O O O", "Y Y O O", "Y Y Y O", "Y Y Y Y"];

    for (let i = 0; i < patterns.length; i++) {
      if (i == minutes) {
        return patterns[i];
      }
    }
  }
}
