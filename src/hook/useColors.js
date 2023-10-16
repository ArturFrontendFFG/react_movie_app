
export const useColor = () => {
  const colors = [
    "rgb(1,210,119)",
    "rgb(234,20,140)",
    "rgb(128,91,231)",
    "rgb(1,198,172)",
    "rgb(1,210,119)",
    "rgb(212,2,66)",
    "rgb(210,144,1)",
  ];
  const i = Math.round(Math.random() * colors.length - 1);
  return colors[i]
};
