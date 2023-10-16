export const useCorrectName = (name) => {
  const separatedArray = name.split("");
  const firstLetterName = separatedArray.splice(0, 1);
  const result = firstLetterName.toString().toUpperCase() + separatedArray.join("");
  return result;
};
