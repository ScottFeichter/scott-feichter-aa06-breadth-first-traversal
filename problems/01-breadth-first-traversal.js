/*
Write a function called printBreadthFirst that will traverse the given graph
breadth-first, printing each node when visited exactly once, on a newline.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

function printBreadthFirst(start) {

  // CREATE A QUE AND ENQUEUE STARTING NODE
  const queue = [start];

  // CREATE A SET TO STORE VISITED NODES
  const visited = new Set();

  // CREATE A LOOP
  while (queue.length) {

    // GRAB THE NODE
    let currentNode = queue.shift();

    // CHECK IF CURRENT NODE ALREADY VISITED
    if (!visited.has(currentNode)) {

      // DO SOMETHING WITH THE NODE
      console.log(currentNode);

      // ADD TO VISITED
      visited.add(currentNode);
    }

    // GRAB THE NEIGHBORS
    let neighbors = adjList[currentNode];

    // ADD UNVISITED NEIGHBORS TO THE QUEUE
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  4, 3, 5, 6, 2, 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printBreadthFirst;
