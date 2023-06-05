/*
    2 -0
    /\
   1 -3
*/

// Edge List : lista de arrays

const graph1 = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
];

// Adjacent List
// Se representan las conexiones por índice
// El primer elemento (0) se conecta con el 2
// El segundo elemento (1) se conecta con los nodos 2 y 3
const graph2 = [
    [2], [2, 3], [0, 1, 3], [ 1, 2]
];

// Adjacent List usando una hash table
const graph3 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
}

// Adjacent matrix  - ideal para gráficos ponderados
const graph4 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 3],
    [0, 1, 1, 0]
];

// Adjacent matrix como un objeto
const graph5 ={
   0: [0, 0, 1, 0],
   1: [0, 0, 1, 1],
   2: [1, 1, 0, 3],
   3: [0, 1, 1, 0]
}
