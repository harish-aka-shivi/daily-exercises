/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(startVertex, endVertex) {
    if (!this.adjacencyList[startVertex]) {
      this.adjacencyList[startVertex] = [];
    }
    if (this.adjacencyList[startVertex].indexOf(endVertex) === -1) {
      this.adjacencyList[startVertex].push(endVertex);
    }
  }

  length() {
    return Object.keys(this.adjacencyList).length;
  }
}

const dfs = (graph, visited, vertice, stack) => {
  const children = graph.adjacencyList[vertice];
  visited[vertice] = true;
  if (children) {
    children.forEach((item) => {
      if (!visited[item]) {
        dfs(graph, visited, item, stack);
      }
    });
  }
  if (stack.indexOf(vertice) === -1) {
    stack.push(vertice);
  }
};

const topologicalSort = (graph) => {
  const stack = [];
  const visitedMap = {};

  const nodes = Object.keys(graph.adjacencyList);
  nodes.forEach((node) => {
    dfs(graph, visitedMap, node, stack);
  });
  return stack;
};

const alienAlphabets = (words) => {
  const graph = new Graph();
  for (let i = 0; i < words.length - 1; i++) {
    const firstWord = words[i];
    const secondWord = words[i + 1];

    for (let j = 0; j < Math.min(firstWord.length, secondWord.length); j++) {
      if (firstWord[j] !== secondWord[j]) {
        graph.addNode(firstWord[j], secondWord[j]);
        break;
      }
    }
  }
  const stack = topologicalSort(graph);
  return stack.reverse();
};


export default alienAlphabets;
