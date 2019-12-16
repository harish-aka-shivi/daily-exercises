import { cubeRoot } from './cubeRoot';

describe('find cube root', () => {
  it('program to find cube root', () => {
    expect(cubeRoot(3)).toEqual(-1);
    expect(cubeRoot(8)).toEqual(2);
    expect(cubeRoot(-8)).toEqual(-2);
    expect(cubeRoot(0)).toEqual(0);
    expect(cubeRoot(1)).toEqual(1);
    expect(() => cubeRoot('ex')).toThrow('Please provide integer as value');
  });
});
