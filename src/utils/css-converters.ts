export const pxToRem = (px: number = 0, ratio: number = 16): string => {
  return `${px / ratio}rem`;
};
