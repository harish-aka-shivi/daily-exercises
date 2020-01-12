import findDuplicateFileGroup from './findDuplicateFileGroup';

describe('Find duplicate file group', () => {
  it('should return the duplicate files', () => {
    const input1 = ['root/a 1.txt(abcd) 2.txt(efsfgh)', 'root/c 3.txt(abdfcd)', 'root/c/d 4.txt(efggdfh)'];
    const input2 = ['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)', 'root 4.txt(efgh)'];
    expect(findDuplicateFileGroup(input1)).toEqual([]);
    expect(findDuplicateFileGroup(input2)).toEqual([['root/a/1.txt', 'root/c/3.txt'], ['root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt']]);
  });
});
