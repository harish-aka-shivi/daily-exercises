
// TODO: Probably use DP
function ackermann({ m, n }) {
  if (n === 0 && m > 0) {
    return ackermann({ m: m - 1, n: 1 });
  }
  if (m > 0 && n > 0) {
    return ackermann({ m: m - 1, n: ackermann({ m, n: n - 1 }) });
  }
  return n + 1;
}

export {
  ackermann,
};
