import { graph1, graph2, graphCircle, graphShort, graphFullyConnected, graphHalfConnected } from '../modules/graphs';

export var graph = graphHalfConnected;
export var infoDiv = document.getElementById('info');
export var chart = echarts.init(document.getElementById('canvas'));
export var chartTimeline = echarts.init(document.getElementById('canvasTimeline'));

var nodes_amount = graph.nodes.length;
var edges_amount = graph.edges.length;
//size of nodes
var nodeRadius = 10
//max graph width
var width = 400;
//max graph height
var height =400;

var COOLING_RATE = 0.25;
//if change to be made is smaller than this criterion it stops
var CRITERION = 15;
var C = 0.4;
//area of graph
//TODO why not width*height?
var area = Math.min(width * width, height * height);
//approximate area a node can use???
var k = C * Math.sqrt(area / graph.nodes.length);
var t = width * 0.1;
var equilibriumReached = false;
var iteration = 0;

var evolutionSteps = 10000;
var currentEvolutionStep = 0;
var solutionSize = graph.nodes.length * 2;
var solutionCountSoFar = 0;
var populationSize = 20;
var elitismSize = 5;
var solutions = [];

var timelineData = [];
var optionTimeline = {
	animation: false,
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'log',
    min: 0.1
  },
  series: [{
    type: 'line',
    showSymbol: false,
    data: timelineData
  }]
};
chartTimeline.setOption(optionTimeline);

/**
 * nodeIdIndexMap: Gives each node a name and index
 */ 
function indexMap(graph) {
  var nodeIdIndexMap = {}
  for (var i = 0; i < graph.nodes.length; i++) {
    nodeIdIndexMap[graph.nodes[i].id || graph.nodes[i].name] = i;
  }
  return nodeIdIndexMap
}

/**
 * 
 * @param {*} graph 
 * x = x coordinate
 * y = y coordinate
 * randomly assigns coordinates
 * @returns 
 */
function nodeCoordinates(graph) {
  for (var i = 0; i < graph.nodes.length; i++) {
    graph.nodes[i].x = Math.random() * width;
    graph.nodes[i].y = Math.random() * height;
    //graph.nodes[i].category = 0;
    if (graph.nodes[i].symbolSize === undefined) {
      graph.nodes[i].symbolSize = nodeRadius;
    }
  }
  return graph
}

/**
 * 
 * @param {*} x node coordinate
 * @param {*} y node coordinate
 * @returns vector length
 */
function vectorLength(x, y) {
	return Math.sqrt(x * x + y * y);
}

//use in simulateForceDirectedStep
function nodeDistance(node1, node2) {
  var deltaPosX = node1.x - node2.x;
  var deltaPosY = node1.y - node2.y;
  var distance = vectorLength(deltaPosX, deltaPosY);
  return distance
}

/**
 * 
 * @param {*} d distance to force
 * @param {*} k factor of attraction
 * @returns force
 */
function forceAttractive(d, k) {
  return (d * d) / k;
}

/**
 * 
 * @param {*} d distance to repulsive object
 * @param {*} k factor of repulsion
 * @returns 
 */
function forceRepulsive(d, k) {
  return (k * k) / d;
}

function simulateForceDirectedStep() {
  for (var i = 0; i < graph.nodes.length; i++) {
    var v = graph.nodes[i];
    v.displacementX = 0;
    v.displacementY = 0;
    // Light attraction to center of canvas

    //distance from x/y to the center of the canvas 
    var centerOffsetX = (width * 0.5) - v.x;
    var centerOffsetY = (height * 0.5) - v.y;
    var distanceFromCenter = vectorLength(centerOffsetX, centerOffsetY);

    var centerAttraction = forceAttractive(distanceFromCenter, k);
    v.displacementX += centerOffsetX * (1.0 / distanceFromCenter) * centerAttraction * 0.25;
    v.displacementY += centerOffsetY * (1.0 / distanceFromCenter) * centerAttraction * 0.25;
    // Repulsion from other nodes
    for (var j = 0; j < graph.nodes.length; j++) {
      var u = graph.nodes[j];
      if (i === j) {
        continue;
      }
      //distance from the two nodes
      var deltaPosX = v.x - u.x;
      var deltaPosY = v.y - u.y;
      var length = vectorLength(deltaPosX, deltaPosY);
      var repulsiveForce = forceRepulsive(length, k);
      deltaPosX *= (1.0 / length) * repulsiveForce;
      deltaPosY *= (1.0 / length) * repulsiveForce;
      v.displacementX += deltaPosX;
      v.displacementY += deltaPosY;
    }
  }
  // Attraction between connected nodes
  for (var i = 0; i < graph.edges.length; i++) {
    var e = graph.edges[i];
    var vi = nodeIdIndexMap[e.source];
    var ui = nodeIdIndexMap[e.target];
    if (vi === ui) {
      continue;
    }
    //v and u are connected nodes
    var v = graph.nodes[vi];
    var u = graph.nodes[ui];
    var deltaPosX = v.x - u.x;
    var deltaPosY = v.y - u.y;
    var length = vectorLength(deltaPosX, deltaPosY);
    var attractiveForce = forceAttractive(length, k);
    deltaPosX *= (1.0 / length) * attractiveForce;
    deltaPosY *= (1.0 / length) * attractiveForce;
    v.displacementX -= deltaPosX;
    v.displacementY -= deltaPosY;
    u.displacementX += deltaPosX;
    u.displacementY += deltaPosY;
  }
  var equilibriumReached = true;
  for (var i = 0; i < graph.nodes.length; i++) {
    var v = graph.nodes[i];
    var displacementX = v.displacementX;
    var displacementY = v.displacementY;
    var length = vectorLength(displacementX, displacementY);
    if (length > CRITERION) {
      equilibriumReached = false;
    }
    //change at most as big as t
    displacementX *= (1.0 / length) * Math.min(length, t);
    displacementY *= (1.0 / length) * Math.min(length, t);
    //set the change
    v.x += displacementX;
    v.y += displacementY;
  }
  //TODO is t ever changed??
  t = Math.max(t * (1 - COOLING_RATE), 1);
  return equilibriumReached;
}


function reachEquilibrium() {
  while (!equilibriumReached && iteration < 1000) {
    equilibriumReached = simulateForceDirectedStep();
    iteration++;
  }
}

/**
 * Checks if two edges intersect
 * https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
 */
function intersectsLineLine(a, b, c, d, p, q, r, s) {
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
function intersectsLineCircle(sx, sy, tx, ty, cx, cy, cr) {
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

function edgeRedundant(edge, solution) {
  var redundant = false;
  if (edge <= edges_amount) {
    if (solution[(nodes_amount *2) + (edge * 2)] != null) {
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
 function fitness(solution) {
  var score = 0;
  // Penalize overlapping nodes
  for (var i = 0; i < solution.length; i += 2) {
    var x = solution[i];
    var y = solution[i + 1];
    if (nodeExists(x,y)) {
      var symbolSize1 = fullGraph.nodes[i / 2].symbolSize / 2;
      for (var j = 0; j < solution.length; j += 2) {
        if (i !== j) {
          var x2 = solution[j];
          var y2 = solution[j + 1];
          if (nodeExists(x2,y2)) {
            var symbolSize2 = fullGraph.nodes[j / 2].symbolSize / 2;
            var distance = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2);
            if (distance < symbolSize1 + symbolSize2) {
              score -= 1;
            }
        }
        }
      }
    }
  }
  for (var i = 0; i < fullGraph.edges.length; i++) {
    /**
     * when edge does not exist one node is null 
     * when edgenode exists (=edgeRedundant) -> remove original edge 
     */
    var s1 = fullNodeIdIndexMap[fullGraph.edges[i].source] * 2;
    var t1 = fullNodeIdIndexMap[fullGraph.edges[i].target] * 2; 
    if(solution[s1] != null && solution[t1] != null && !edgeRedundant(i, solution)) {
      // Penalize nodes intersecting edges
      for (var j = 0; j < (fullGraph.nodes.length*2); j += 2) {
        if(solution[j] != null ) {
          if (j == s1 || j == t1) {
            continue;
          }
          var symbolSize1 = fullGraph.nodes[j / 2].symbolSize / 2;
          if (intersectsLineCircle(solution[s1], solution[s1 + 1], solution[t1], solution[t1 + 1], solution[j], solution[j + 1], symbolSize1)) {
            score -= 100;
          }
        }
      }
      // Penalize crossing edges
      for (var j = 0; j < fullGraph.edges.length; j++) {
        if (i !== j) {
          var s2 = fullNodeIdIndexMap[fullGraph.edges[j].source] * 2;
          var t2 = fullNodeIdIndexMap[fullGraph.edges[j].target] * 2; 
          if (solution[s2] != null && solution[t2] != null && !edgeRedundant(j, solution)) {
            if (intersectsLineLine(
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


/**
 * 
 * @returns new graph solutions + their fitness for whole population
 */
function solutionsUpdate() {
  //normal nodes
  for (var k = 0; k < populationSize; k++) {
    var solution = [];
    for (var i = 0; i < graph.nodes.length; i++) {
      //initial graph stays
      if (k === 0) {
        solution.push(graph.nodes[i].x);
        solution.push(graph.nodes[i].y);
      } else {
        solution.push(Math.random() * width);
        solution.push(Math.random() * height);
      }
    }
    //edge nodes
    for (var e = 0; e < edges_amount; e++) {
      //x coordinate
      solution.push(null);
      //y coordinate
      solution.push(null);
    }
    solutions.push([solution, fitness(solution)]);
  }
  return solutions
}

function mutation() {
  for (var i = 0; i < populationSize; i++) {
    //TODO isnt Math.random() always <1 ?
    if (Math.random() < 1.5) {
      //mutation of one coordinate of one node
      var mutationIndex = Math.floor(Math.random() * solutionSize);
      var newSolution = [...solutions[i][0]];
      var offset = Math.random() * 100.0 - 50.0;
      newSolution[mutationIndex] += offset;
      solutions.push([newSolution, fitness(newSolution)]);
    }
  }
}

function midpoint(x1, y1, x2, y2) {
  var midx = (x1 + x2) / 2 ;
  var midy = (y1 +y2) / 2 ;
  return [midx, midy];
}

/**
 * 
 * find corresponding nodes for edgenode
 */
function neighbor_nodes(node) {
  var corresponding_Edge = fullGraph.edges[node];
  var node1 = nodeIdIndexMap[corresponding_Edge.source];
  var node2 = nodeIdIndexMap[corresponding_Edge.target];
  return [graph.nodes[node1].x, graph.nodes[node1].y,graph.nodes[node2].x,graph.nodes[node2].y];
}


function mutationEdgeNodes() {
  for (var i = 0; i < populationSize; i++) {
    var mutationIndex = Math.floor(Math.random() * edges_amount);
    var newSolution = [...solutions[i][0]];
    var mutationNode = (2* nodes_amount) + (2*mutationIndex);
    if (newSolution[mutationNode] == null) {
      var n = neighbor_nodes(mutationIndex);
      var mid = midpoint(n[0], n[1], n[2], n[3]);
      var offset1 = Math.random() * 100.0 - 50.0;
      var offset2 = Math.random() * 100.0 - 50.0;
      newSolution[mutationNode] = mid[0] + offset1;
      newSolution[mutationNode + 1] = mid[1] + offset2;
    } else  {
      //either remove  or improve
      if (Math.random() < 0.7) {
        var offset1 = Math.random() * 100.0 - 50.0;
        var offset2 = Math.random() * 100.0 - 50.0;
        newSolution[mutationNode] += offset1;
        newSolution[mutationNode + 1] += offset2;
      } else {
        newSolution[mutationNode] = null;
        newSolution[mutationNode + 1] = null;
      }
    }
    solutions.push([newSolution, fitness(newSolution)]);
    
  }
}

function buildFullGraph() {
  var fullgraph = JSON.parse(JSON.stringify(graph));
  //every edge that exists gets an edgenode + 2 new edges
  for (var i = 0; i < edges_amount; i++) {
    var node = {};
    node.name = graph.edges[i].source.concat(graph.edges[i].target); 
    node.symbolSize = nodeRadius;
    node.x = null;
    node.y = null;
    node.symbol = "diamond";
    //node.color = '#d5ceeb';
    //node.category = 1;
    fullgraph.nodes.push(node);
    var edge = {};
    edge.source = graph.edges[i].source;
    edge.target = fullgraph.nodes[nodes_amount + i].name;
    fullgraph.edges.push(edge);
    edge = {};
    edge.source = fullgraph.nodes[nodes_amount + i].name;
    edge.target = graph.edges[i].target;
    fullgraph.edges.push(edge);
    //var category = {categories: [{name: "A"}, {name: "B"}]};
    //fullgraph.push(category);
  }
  return fullgraph;
}


function nodeSwap() {
  var nodeSwapSolution = Math.floor(Math.random() * solutions.length);
  var nodeSwapPosition1 = Math.floor(Math.random() * graph.nodes.length) * 2;
  var nodeSwapPosition2 = Math.floor(Math.random() * graph.nodes.length) * 2;
  var newSolution = [...solutions[nodeSwapSolution][0]];
  var tempX = newSolution[nodeSwapPosition1];
  var tempY = newSolution[nodeSwapPosition1 + 1];
  newSolution[nodeSwapPosition1] = newSolution[nodeSwapPosition2];
  newSolution[nodeSwapPosition1 + 1] = newSolution[nodeSwapPosition2 + 1];
  newSolution[nodeSwapPosition2] = tempX;
  newSolution[nodeSwapPosition2 + 1] = tempY;
  solutions.push([newSolution, fitness(newSolution)]);
  solutionCountSoFar = solutions.length;
}

function crossover() {
  for (var k = 0; k < 10; k++) {
    var crossoverIndex1 = Math.floor(Math.random() * solutionCountSoFar);
    var crossoverIndex2 = Math.floor(Math.random() * solutionCountSoFar);
    while (crossoverIndex2 === crossoverIndex1) {
    	crossoverIndex2 = Math.floor(Math.random() * solutionCountSoFar);
    }
    var crossoverPosition = Math.floor(Math.random() * solutionSize);
    solutions.push(solutions[crossoverIndex1].slice(0, crossoverPosition).concat(solutions[crossoverIndex2].slice(crossoverPosition)));
  }
  for (var k = 0; k < 10; k++) {
    var crossoverIndex1 = Math.floor(Math.random() * solutionCountSoFar);
    var crossoverIndex2 = Math.floor(Math.random() * solutionCountSoFar);
    while (crossoverIndex2 === crossoverIndex1) {
    	crossoverIndex2 = Math.floor(Math.random() * solutionCountSoFar);
    }
    var crossoverPosition1 = Math.floor(Math.random() * solutionSize);
    var crossoverPosition2 = Math.floor(Math.random() * solutionSize);
    crossoverPosition1 = Math.min(crossoverPosition1, crossoverPosition2);
    crossoverPosition2 = Math.max(crossoverPosition1, crossoverPosition2);
    solutions.push(solutions[crossoverIndex1].slice(0, crossoverPosition1).concat(
    	solutions[crossoverIndex2].slice(crossoverPosition1, crossoverPosition2).concat(
    		solutions[crossoverIndex1].slice(crossoverPosition2)
      	)
      )
    );
  }
  // Best crossing-over
  solutions.sort(function(a, b) {
    return (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0);
  });
  var crossoverIndex1 = 0;
  var crossoverIndex2 = Math.floor(Math.random() * solutionCountSoFar);
  while (crossoverIndex2 === 0) {
    crossoverIndex2 = Math.floor(Math.random() * solutionCountSoFar);
  }
  var crossoverPosition = Math.floor(Math.random() * solutionSize);
  solutions.push(solutions[crossoverIndex1].slice(0, crossoverPosition).concat(solutions[crossoverIndex2].slice(crossoverPosition)));
  
}

function updateChartTimeline(fitnessList) {
  if (timelineData.length === 0 || timelineData[timelineData.length - 1][1] > Math.abs(fitnessList[0])) {
    timelineData.push([timelineData.length, Math.abs(fitnessList[0])]);
    optionTimeline.series[0].data = timelineData;
  }
	chartTimeline.setOption(optionTimeline);
  if (currentEvolutionStep < evolutionSteps) {
    setTimeout(evolutionStep, 1);
  } else {
    //chart.setOption(option);
  }
}

function updateInfo(fitnessList) {
  infoDiv.innerHTML = "Run # " + currentEvolutionStep + "<br />" + "Best fitness: " + " (" + fitnessList.toString().replaceAll(',', ', ') + ")";
}

function getNextGeneration() {
  // Sort by fitness
  solutions.sort(function(a, b) {
    return (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0);
  });
  var nextGeneration = solutions.slice(0, elitismSize);
  var selectionPool = solutions.slice(elitismSize);
  // TODO: proper tournament or roulette selection
  while (nextGeneration.length < populationSize) {
  	var index = Math.floor(Math.random() * selectionPool.length);
    nextGeneration.push(selectionPool[index]);
    selectionPool.splice(index, 1);
  }
  solutions = nextGeneration;
}

function nodeExists(node1, node2) {
  if(node1 !== null && node2 !== null) {
    return true
  } else {
    return false
  }

}
//TODOTODO
function displayGraph() {
  var newgraph =  JSON.parse(JSON.stringify(fullGraph));
  for (var i = 0; i < newgraph.nodes.length; i++) {
    newgraph.nodes[i].x = solutions[0][0][i * 2];
    newgraph.nodes[i].y = solutions[0][0][i * 2 + 1];
  }
  //TODO remove old edges if edgenode exists
  for (var j = 0; j < edges_amount; j++) {
    if (solutions[0][0][(nodes_amount * 2) + (j * 2)] != null) {
      newgraph.edges[j].source = newgraph.edges[j].target;
    }
  }
  option.series[0].nodes = newgraph.nodes,
  option.series[0].edges = newgraph.edges,
  chart.setOption(option);
}


function evolutionStep() {
   
  mutation();
  mutationEdgeNodes();
  //Random node swap
  //not for edge nodes
  nodeSwap();
  // Random crossing-over
  crossover();
  getNextGeneration();
  
  var fitnessList = solutions.map((x) => x[1]);
  fitnessList.sort(function(a, b) {
  	return b - a;
	});
  updateInfo(fitnessList);
  //update best graph
  //build graph
  displayGraph();
  currentEvolutionStep++;
  updateChartTimeline(fitnessList);
}


var nodeIdIndexMap = indexMap(graph);
graph = nodeCoordinates(graph);
// graph with all extra edge-nodes + Edges
var fullGraph = buildFullGraph();
var option = {
	animation: false,
  series: [{
    type: 'graph',
    layout: 'none',
    nodes: fullGraph.nodes,
    edges: fullGraph.edges,
    categories: graph.categories,
    symbol: "circle",
  }]
};
chart.setOption(option);
var fullNodeIdIndexMap = indexMap(fullGraph);
export var printt = "graph";
export var print2 = "";
reachEquilibrium()
//initial solutions
solutions = solutionsUpdate()
evolutionStep();
