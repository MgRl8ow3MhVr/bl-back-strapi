export const generateRandomString = (
  minLength: number = 5,
  maxLength: number = 10
): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

export const generateNumber = (min: number = 0, max: number = 1000): number => {
  return min + Math.round(Math.random() * (max - min));
};
