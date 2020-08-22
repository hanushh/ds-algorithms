export function Graph() { }

Graph.prototype.AdjList = new Map();
Graph.prototype.addNode = function (v) {
  this.AdjList.set(v, []);
}

Graph.prototype.addUniDirectionalEdge = function (v, w) {
  // get the list for vertex v and put the 
  // vertex w denoting edge between v and w 
  this.AdjList.get(v).push(w);

  this.AdjList.get(w).push(v);


}
Graph.prototype.addDirectedEdge = function () {
  this.AdjList.get(v).push(w);

}