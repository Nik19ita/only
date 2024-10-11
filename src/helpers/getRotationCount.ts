const getRotationCount = (prevDot: number, activeDot: number) => {
  if (Math.abs(prevDot - activeDot) > 3) {
    return 6 - Math.abs(prevDot - activeDot);
  } else {
    return Math.abs(prevDot - activeDot);
  }
};

export default getRotationCount;
