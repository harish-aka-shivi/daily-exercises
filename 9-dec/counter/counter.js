
function counter() {
  let counterValue = 0;
  return function increment() {
    counterValue += 1;
    return counterValue;
  };
}

export {
  counter,
};
