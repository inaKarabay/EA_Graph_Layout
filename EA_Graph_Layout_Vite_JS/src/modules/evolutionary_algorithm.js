export class Evolutionary_algorithm {
    constructor(graph, nodeIdIndexMap, fullGraph, fullNodeIdIndexMap, mutation_rate, crossover_rate, reproduction_rate, chromosomes, populationSize = 20, elitismRate = 0.5) {
        this.graph = graph;
        this.nodeIdIndexMap = nodeIdIndexMap;
        this.fullGraph = fullGraph;
        this.fullNodeIdIndexMap = fullNodeIdIndexMap;
        this.mutation_rate = mutation_rate;
        this.crossover_rate = crossover_rate;
        this.reproduction_rate = reproduction_rate; 
        this.chromosomes = chromosomes;
        this.populationSize = populationSize;
        this.elitismRate = elitismRate;
        //they re save to be in the next generation
        this.elitismSize = this.populationSize *this. elitismRate;

        //size of nodes
        this.nodeRadius = 10
        //max graph width
        this.width = 400;


        //how many chromosomes
        this.allNodes = this.fullGraph.nodes.length;
        this.nodes_amount = this.graph.nodes.length;
        this.edges_amount = this.graph.edges.length;
        this.genomeSize = this.allNodes * 2;
        this.chromosomesIndex = this.chromosomesIndex();
        this.mostMutations = Math.floor(this.nodes_amount);
        this.crossoverAmount = Math.floor(this.edges_amount/2);
        this.max_crossover = Math.floor(this.edges_amount/2);
        this.reproductionAmount = 0.5;
        this.parents = Math.floor(this.populationSize * this.reproductionAmount);

        this.nodes_Edges = this.nodesOutgoingEdges();
        this.histogram = this.buildHistogram(this.nodes_Edges);
        this.hub_Nodes = this.hub(this.histogram);
    }


    /**
     * Checks if two edges intersect
     * https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
     */
    intersectsLineLine(a, b, c, d, p, q, r, s) {
        var det, gamma, lambda;
        det = (c - a) * (s - q) - (r - p) * (d - b);
        //vectors are linear dependent / parallel -> no intersection
        if (det === 0) {
        return false;
    }
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
  
  /**
   * checks is edge and node intersect
   */
  intersectsLineCircle(sx, sy, tx, ty, cx, cy, cr) {
    var dist;
    const v1x = tx - sx;
    const v1y = ty - sy;
    const v2x = cx - sx;
    const v2y = cy - sy;
    // get the unit distance along the line of the closest point to
    // circle center
    const u = (v2x * v1x + v2y * v1y) / (v1y * v1y + v1x * v1x);
    // if the point is on the line segment get the distance squared
    // from that point to the circle center
    if (u >= 0 && u <= 1){
      dist  = (sx + v1x * u - cx) ** 2 + (sy + v1y * u - cy) ** 2;
    } else {
      // if closest point not on the line segment
      // use the unit distance to determine which end is closest
      // and get dist square to circle
      dist = u < 0 ? (sx - cx) ** 2 + (sy - cy) ** 2 : (tx - cx) ** 2 + (ty - cy) ** 2;
    }
    return dist < cr * cr;
  }
  
  edgeRedundant(edge, solution) {
    var redundant = false;
    if (edge <= this.edges_amount) {
      if (solution[(this.nodes_amount *2) + (edge * 2)] != null) {
        redundant = true;
      }
    }
    return redundant;
  }
  
  /**
   * 
   * @param {*} solution graph proposal
   * @returns fitness score for given graph
   */
   fitness(solution) {
    var score = 0;
    // Penalize overlapping nodes
    for (var i = 0; i < solution.length; i += 2) {
      var x = solution[i];
      var y = solution[i + 1];
      if (this.nodeExists(x,y)) {
        var symbolSize1 = this.fullGraph.nodes[i / 2].symbolSize / 2;
        for (var j = 0; j < solution.length; j += 2) {
          if (i !== j) {
            var x2 = solution[j];
            var y2 = solution[j + 1];
            if (this.nodeExists(x2,y2)) {
              var symbolSize2 = this.fullGraph.nodes[j / 2].symbolSize / 2;
              var distance = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2);
              if (distance < symbolSize1 + symbolSize2) {
                score -= 1;
              }
          }
          }
        }
      }
    }
    for (var i = 0; i < this.fullGraph.edges.length; i++) {
      /**
       * when edge does not exist one node is null 
       * when edgenode exists (=edgeRedundant) -> remove original edge 
       */
      var s1 = this.fullNodeIdIndexMap[this.fullGraph.edges[i].source] * 2;
      var t1 = this.fullNodeIdIndexMap[this.fullGraph.edges[i].target] * 2; 
      if(solution[s1] != null && solution[t1] != null && !this.edgeRedundant(i, solution)) {
        // Penalize nodes intersecting edges
        for (var j = 0; j < (this.fullGraph.nodes.length*2); j += 2) {
          if(solution[j] != null ) {
            if (j == s1 || j == t1) {
              continue;
            }
            var symbolSize1 = this.fullGraph.nodes[j / 2].symbolSize / 2;
            if (this.intersectsLineCircle(solution[s1], solution[s1 + 1], solution[t1], solution[t1 + 1], solution[j], solution[j + 1], symbolSize1)) {
              score -= 100;
            }
          }
        }
        // Penalize crossing edges
        for (var j = 0; j < this.fullGraph.edges.length; j++) {
          if (i !== j) {
            var s2 = this.fullNodeIdIndexMap[this.fullGraph.edges[j].source] * 2;
            var t2 = this.fullNodeIdIndexMap[this.fullGraph.edges[j].target] * 2; 
            if (solution[s2] != null && solution[t2] != null && !this.edgeRedundant(j, solution)) {
              if (this.intersectsLineLine(
                solution[s1], solution[s1 + 1],
                solution[t1], solution[t1 + 1],
                solution[s2], solution[s2 + 1],
                solution[t2], solution[t2 + 1],
              )) {
                score -= 1;
            }
            }
            
          }
        }
      } else if (this.edgeRedundant(i, solution)) {
        //penalize edge_nodes
        score -= 0;
      }
    }
    /*
    // Penalize larger graph size
    var minX = solution[0];
    var maxX = solution[0];
    var minY = solution[1];
    var maxY = solution[1];
    for (var i = 2; i < solution.length; i += 2) {
      minX = Math.min(minX, solution[i]);
      maxX = Math.max(maxX, solution[i]);
      minY = Math.min(minY, solution[i + 1]);
      maxY = Math.max(maxY, solution[i + 1]);
    }
    score -= (maxX - minX) / 600;
    score -= (maxY - minY) / 600;
    */
    return score;
  }
  
  midpoint(x1, y1, x2, y2) {
    var midx = (x1 + x2) / 2 ;
    var midy = (y1 +y2) / 2 ;
    return [midx, midy];
  }
  
  /**
   * 
   * find corresponding nodes for edgenode
   */
  neighbor_nodes(node) {
    var corresponding_Edge = this.fullGraph.edges[node];
    var node1 = this.nodeIdIndexMap[corresponding_Edge.source];
    var node2 = this.nodeIdIndexMap[corresponding_Edge.target];
    return [this.graph.nodes[node1].x, this.graph.nodes[node1].y,this.graph.nodes[node2].x,this.graph.nodes[node2].y];
  }
  
  
  mating(solutions) {
    //use (reproductionAmount) of parents to create offspring
    for (var i = 0; i < this.parents; i++) {
      var parent1 = Math.floor(Math.random() * this.populationSize);
      var parent2 = Math.floor(Math.random() * this.populationSize);
      while (parent1 === parent2) {
        parent2 = Math.floor(Math.random() * this.populationSize);
      }
      var child = this.recombination(solutions[parent1][0], solutions[parent2][0]);
      child = this.crossover(child, solutions[parent1][0], solutions[parent2][0]);
      
      child = this.mutation(child);
      //console.log([child, this.fitness(child)]);
      solutions.push([child, this.fitness(child)]);
    }
    return solutions
  }
  
  recombination(parent1, parent2) {
    var child = [];
    //for every chromosome choose which parent to use
    for (var i = 0; i < (this.chromosomes -1); i++) {    
      if (Math.random() < 0.5) {
        child = child.concat(parent1.slice(this.chromosomesIndex[i], this.chromosomesIndex[i+1] - 1));
      } else {
        child = child.concat(parent2.slice(this.chromosomesIndex[i], this.chromosomesIndex[i+1] - 1));
      }
    }
    //last chromosome 
    if (Math.random() < 0.5) {
      child = child.concat(parent1.slice(this.chromosomesIndex[this.chromosomes -1]-1));
    } else {
      child = child.concat(parent2.slice(this.chromosomesIndex[this.chromosomes -1]-1));
    }
    return child;
  }
  
  crossover(child, parent1, parent2) {
    var c = Math.floor(Math.random() * this.max_crossover);
    for (var i = 0; i < c; i++) {
      var position = Math.floor(Math.random() * this.genomeSize);
      var length = Math.floor(Math.random() * (this.genomeSize / this.chromosomes))
      if (position + length >= child.length) {
        length = child.length - position -1;
      }
      if (Math.random() < 0.5) {
        //replace part of child with part of parent1 
        child = child.slice(0, position).concat(parent1.slice(position, position + length)).concat(child.slice(position + length));
        //child.splice(position, length, ...parent1.slice(position, position + length));
      } else {
        child = child.slice(0, position).concat(parent2.slice(position, position + length)).concat(child.slice(position + length));
        //child.splice(position, length, ...parent2.slice(position, position + length));
      }
    }
    return child;
  }
  
  mutation(child) {
    var mutationAmount =  Math.floor(Math.random() * this.mostMutations)
    for (var j = 0; j < mutationAmount; j++) {
      //mutation of one coordinate of one node
      var mutationIndex = Math.floor(Math.random() * (this.graph.nodes.length * 2));
      var offset = Math.random() * 100.0 - 50.0;
      child[mutationIndex] += offset;
    }
  
    var mutationEdgeNodes =  Math.floor(Math.random() * this.mostMutations)
    for (var i = 0; i < mutationEdgeNodes; i++) {
      var mutationIndex = Math.floor(Math.random() * this.edges_amount);
      var mutationNode = (2* this.nodes_amount) + (2*mutationIndex);
      if (child[mutationNode] == null) {
        if (Math.random() < 0.6) {
          child[mutationNode] = Math.random() * this.width;
          child[mutationNode + 1] = Math.random() * this.width;
        } else {
          var n = this.neighbor_nodes(mutationIndex);
          var mid = this.midpoint(n[0], n[1], n[2], n[3]);
          var offset1 = Math.random() * 100.0 - 50.0;
          var offset2 = Math.random() * 100.0 - 50.0;
          child[mutationNode] = mid[0] + offset1;
          child[mutationNode + 1] = mid[1] + offset2;
        }
      } else  {
        //either remove  or improve
        if (Math.random() < 0.7) {
          var offset1 = Math.random() * 100.0 - 50.0;
          var offset2 = Math.random() * 100.0 - 50.0;
          child[mutationNode] += offset1;
          child[mutationNode + 1] += offset2;
        } else {
          child[mutationNode] = null;
          child[mutationNode + 1] = null;
        }
      }
    }
    return child;
  }
  

  
  selection(solutions) {
    // Sort by fitness
    solutions.sort(function(a, b) {
      return (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0);
    });
    var nextGeneration = solutions.slice(0, this.elitismSize);
    var selectionPool = solutions.slice(this.elitismSize);
    //choses the best solutions + rest randomly
    // TODO: proper tournament or roulette selection
    while (nextGeneration.length < this.populationSize) {
        var index = Math.floor(Math.random() * selectionPool.length);
      nextGeneration.push(selectionPool[index]);
      selectionPool.splice(index, 1);
    }
    return nextGeneration;
  }
  
  nodeExists(node1, node2) {
    if(node1 !== null && node2 !== null) {
      return true
    } else {
      return false
    }
  
  }
  
  nodesOutgoingEdges() {
    var nodes_Edges = new Array(this.nodes_amount).fill(0);  
    for (var i = 0; i < this.edges_amount; i++) {
      nodes_Edges[this.nodeIdIndexMap[this.graph.edges[i].source]] += 1;
      nodes_Edges[this.nodeIdIndexMap[this.graph.edges[i].target]] += 1;
    }
    return nodes_Edges;
  }
  
  buildHistogram(nodes_Edges) {
    var histogram = new Array(this.nodes_amount).fill(0); 
    for (var j = 0; j < nodes_Edges.length; j++) {
      histogram[nodes_Edges[j]] += 1;
    }
    return histogram;
  }
  
  hub(nodes_Edges) {
    var sum = 0;
    for(var i in nodes_Edges) {
        sum += nodes_Edges[i];
    }
    var mean = sum / nodes_Edges.length;
    return mean
  }
  
  chromosomesIndex() {
    // split genomeSize into chromosomes_amount even pieces
    //get index of split points
    var chromosomesSplitPoints = new Array(this.chromosomes).fill(0);
    for (var i = 0; i < this.chromosomes; i++) {
      chromosomesSplitPoints[i] = Math.floor(this.genomeSize / this.chromosomes) * (i);
    }
    return chromosomesSplitPoints;
  }

  
  evolutionStep(solutions) {
    var new_solutions = this.mating(solutions);
    var next_generation = this.selection(new_solutions);
    return next_generation;
  }
    
        
}