import accountDataset from './dataset.json';

// function accountDataset(...args) {
//   return args;
// }

const parseIntDecimal = num => parseInt(num, 10);


function hundredThousandairs() {
  const { bankBalances } = accountDataset;
  return bankBalances.filter(bankBalance => parseIntDecimal(bankBalance.amount) > 100000);
  // console.log(jsonData);
}

function datasetWithRoundedDollar() {
  const { bankBalances } = accountDataset;
  return bankBalances.map(
    item => ({ ...item, rounded: Math.round(parseFloat(item.amount)) }
    ),
  );
}

function sumOfBankBalances() {
  const { bankBalances } = accountDataset;
  return Math
    .round(bankBalances.reduce((acc, item) => acc + parseFloat(item.amount), 0) * 100) / 100;
}

function sumOfInterests() {
  // console.log(jsonData);
  const { bankBalances } = accountDataset;
  const totalPrincipal = bankBalances
    .filter(bankAccount => bankAccount.state === 'WI'
    || bankAccount.state === 'IL'
    || bankAccount.state === 'WY'
    || bankAccount.state === 'OH'
    || bankAccount.state === 'GE'
    || bankAccount.state === 'DE').reduce((accumulator, bankBalance) => {
      const amount = parseFloat(bankBalance.amount);
      const interest = Math.round(((amount * 18.9) / 100) * 100) / 100;
      return accumulator + interest;
    }, 0);
  // const totalInterest = (totalPrincipal * 18.9) / 100;
  return totalPrincipal;
}

function higherStateSums() {
  console.log('not implemented');
}

export {
  // accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
