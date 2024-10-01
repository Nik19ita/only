const getRotationCount = (activeDot: number, numberPage: number) => {
  if (Math.abs(activeDot - numberPage) > 3) {
    return 6 - Math.abs(activeDot - numberPage);
  } else {
    return Math.abs(activeDot - numberPage);
  }
};

export default getRotationCount;
