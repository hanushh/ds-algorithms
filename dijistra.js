const { PriorityQueue } = require('DataStructures/PriorityQueue.js')

// The graph object
const graph = {
    start: { A: 5, B: 2 },
    A: { C: 4, D: 2 },
    B: { A: 8, D: 7 },
    C: { D: 6, finish: 3 },
    D: { finish: 1 },
    finish: {}
};

const visited = [];


const findLowestWeightedNode = function (weights, processed) {


}

function Dijistra(graph) {


}