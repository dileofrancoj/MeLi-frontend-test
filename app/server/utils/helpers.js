export const formatAsCurrency = (number) => {
  const pattern = /(\d)(?=(\d{3})+(?!\d))/g;

  if (number % 1 === 0) return number.toString().replace(pattern, "$1.");

  return number.toFixed(2).replace(".", ",").replace(pattern, "$1.");
};
