/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = (paths) => {
  const contentMap = new Map();
  paths.forEach((path) => {
    const subpaths = path.split(' ');
    subpaths.slice(1).forEach((sp) => {
      const content = sp.split('(')[1].split(')')[0];
      const absPath = `${subpaths.slice(0, 1)}/${sp.split('(')[0]}`;
      if (contentMap.has(content)) {
        contentMap.get(content).push(absPath);
      } else {
        contentMap.set(content, [absPath]);
      }
    });
  });

  const group = [];
  for (const value of contentMap.values()) {
    if (value.length > 1) {
      group.push(value);
    }
  }

  return group;
};

export default findDuplicate;
