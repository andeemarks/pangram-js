// SOLUTION 6
// isPangram("") -> false
// isPangram("abcdefghijklmnopqrstuvwxyz") -> true
// isPangram("the quick brown fox jumps over the lazy dog") -> true
// isPangram("the_quick_brown_fox_jumps_over_the_lazy_dog") -> true
// isPangram("the 1 quick brown fox jumps over the 2 lazy dogs") -> true
// isPangram("five boxing wizards jump quickly at it") -> false

const alphabet = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => new RegExp(`${letter}+`, "i"));

export const isPangram = (str) => alphabet.every((letter) => letter.test(str));
