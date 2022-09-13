export const isPangram1 = (sentence) => {
  let lettersOnly = sentence.toLowerCase().replace(/[^a-z]/g, "");

  return new Set(lettersOnly).size === 26;
};
