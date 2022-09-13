// SOLUTION 3
// isPangram("") -> false
// isPangram("abcdefghijklmnopqrstuvwxyz") -> true
// isPangram("the quick brown fox jumps over the lazy dog") -> true
// isPangram("the_quick_brown_fox_jumps_over_the_lazy_dog") -> true
// isPangram("the 1 quick brown fox jumps over the 2 lazy dogs") -> true
// isPangram("five boxing wizards jump quickly at it") -> false

export const isPangram = (sentence) => {
  const uniqueLetters = new Set();

  for (let letter of sentence.toLowerCase()) {
    if (letter.match(/[a-z]/)) {
      uniqueLetters.add(letter);
    }
  }

  return uniqueLetters.size === 26;
};
