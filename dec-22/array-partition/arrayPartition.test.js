import arrayPartition from './arrayPartition';

describe('Should solve the array partition problem', () => {
  it('should solve the following test cases', () => {
    expect(arrayPartition([0, 1, 2, 3])).toEqual(2);
    expect(arrayPartition([1, 4, 3, 2])).toEqual(4);
  });
})