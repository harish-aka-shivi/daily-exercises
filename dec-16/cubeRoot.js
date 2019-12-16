const cubeRoot = (num) => {
  if (!Number.isInteger(num)) {
    throw Error('Please provide integer as value');
  }

  const absoluteNumber = Math.abs(num);
  const sign = Math.sign(num);

  const start = 1;
  const end = absoluteNumber;

  if (absoluteNumber === 0) {
    return absoluteNumber;
  }

  if (absoluteNumber === 1) {
    return sign * 1;
  }

  const binarySearch = (lowerBound, upperBound) => {
    if (lowerBound >= upperBound) {
      return -1;
    }

    const mid = Math.floor((upperBound + lowerBound) / 2);
    const cubeOfMid = mid * mid * mid;

    if (mid === upperBound || mid === lowerBound) {
      return -1;
    }

    if (cubeOfMid === absoluteNumber) {
      return mid;
    } if (cubeOfMid > absoluteNumber) {
      return binarySearch(lowerBound, mid);
    }
    return binarySearch(mid, upperBound);
  };

  return binarySearch === -1 ? -1 : sign * binarySearch(start, end);
};

export {
  cubeRoot,
};
