/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const mapList1 = {};
  let minSum = Infinity;
  let minCommonInterest = '';

  list1.forEach((restaurant, index) => {
    mapList1[restaurant] = `${index}`;
  });

  list2.forEach((restaurant, index) => {
    const commonInterest = mapList1[restaurant];
    if (commonInterest) {
      if (commonInterest + index < minSum) {
        minSum = commonInterest + index;
        minCommonInterest = restaurant;
      }
    }
  });

  return [minCommonInterest];
};

export default findRestaurant;
