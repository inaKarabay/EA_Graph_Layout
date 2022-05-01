//import * as echarts from 'echarts';
import { graph1, graph2 } from '../modules/graphs';

export var graph = graph1; 
export var infoDiv = document.getElementById('info');
export var chart = echarts.init(document.getElementById('canvas'));
export var chartTimeline = echarts.init(document.getElementById('canvasTimeline'));

//size of nodes
var nodeRadius = 10


var nodeIdIndexMap = {};
for (var i = 0; i < graph.nodes.length; i++) {
	nodeIdIndexMap[graph.nodes[i].id || graph.nodes[i].name] = i;
}

var width = 600;
var height = 600;
for (var i = 0; i < graph.nodes.length; i++) {
  graph.nodes[i].x = Math.random() * width;
  graph.nodes[i].y = Math.random() * height;
  if (graph.nodes[i].symbolSize === undefined) {
  	graph.nodes[i].symbolSize = nodeRadius;
  }
}

var COOLING_RATE = 0.25;
var CRITERION = 15;
var C = 0.4;
var area = Math.min(width * width, height * height);
var k = C * Math.sqrt(area / graph.nodes.length);
var t = width * 0.1;
var equilibriumReached = false;
var iteration = 0;

function vectorLength(x, y) {
	return Math.sqrt(x * x + y * y);
}

function forceAttractive(d, k) {
  return (d * d) / k;
}

function forceRepulsive(d, k) {
  return (k * k) / d;
}

function simulateForceDirectedStep() {
  for (var i = 0; i < graph.nodes.length; i++) {
    var v = graph.nodes[i];
    v.displacementX = 0;
    v.displacementY = 0;
    // Light attraction to center of canvas
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
    displacementX *= (1.0 / length) * Math.min(length, t);
    displacementY *= (1.0 / length) * Math.min(length, t);
    v.x += displacementX;
    v.y += displacementY;
  }
  t = Math.max(t * (1 - COOLING_RATE), 1);
  return equilibriumReached;
}

while (!equilibriumReached && iteration < 1000) {
	equilibriumReached = simulateForceDirectedStep();
	iteration++;
}

var option = {
	animation: false,
  series: [{
    type: 'graph',
    layout: 'none',
    nodes: graph.nodes,
    edges: graph.edges,
    categories: graph.categories,
    symbol: "circle",
  }]
};
chart.setOption(option);
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

function intersectsLineLine(a, b, c, d, p, q, r, s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  }
  lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
  gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
  return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
}

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

function fitness(solution) {
  var score = 0;
  // Penalize overlapping nodes
  for (var i = 0; i < solution.length; i += 2) {
    var x = solution[i];
    var y = solution[i + 1];
    var symbolSize1 = graph.nodes[i / 2].symbolSize / 2;
    for (var j = 0; j < solution.length; j += 2) {
      if (i !== j) {
        var x2 = solution[j];
        var y2 = solution[j + 1];
        var symbolSize2 = graph.nodes[j / 2].symbolSize / 2;
        var distance = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2);
        if (distance < symbolSize1 + symbolSize2) {
          score -= 1;
        }
      }
    }
  }
  for (var i = 0; i < graph.edges.length; i++) {
    var s1 = nodeIdIndexMap[graph.edges[i].source] * 2;
    var t1 = nodeIdIndexMap[graph.edges[i].target] * 2;
    // Penalize nodes intersecting edges
  	for (var j = 0; j < solution.length; j += 2) {
    	if (j == s1 || j == t1) {
      	continue;
      }
      var symbolSize1 = graph.nodes[j / 2].symbolSize / 2;
    	if (intersectsLineCircle(solution[s1], solution[s1 + 1], solution[t1], solution[t1 + 1], solution[j], solution[j + 1], symbolSize1)) {
      	score -= 100;
      }
    }
    // Penalize crossing edges
    for (var j = 0; j < graph.edges.length; j++) {
      if (i !== j) {
        var s2 = nodeIdIndexMap[graph.edges[j].source] * 2;
        var t2 = nodeIdIndexMap[graph.edges[j].target] * 2;
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

var evolutionSteps = 100000;
var currentEvolutionStep = 0;
var solutionSize = graph.nodes.length * 2;
var populationSize = 20;
var elitismSize = 5;
var solutions = [];
for (var k = 0; k < populationSize; k++) {
  var solution = [];
  for (var i = 0; i < graph.nodes.length; i++) {
  	if (k === 0) {
      solution.push(graph.nodes[i].x);
      solution.push(graph.nodes[i].y);
    } else {
      solution.push(Math.random() * width);
      solution.push(Math.random() * height);
    }
  }
  solutions.push([solution, fitness(solution)]);
}

function evolutionStep() {
  for (var i = 0; i < populationSize; i++) {
    if (Math.random() < 1.5) {
      var mutationIndex = Math.floor(Math.random() * solutionSize);
      var newSolution = [...solutions[i][0]];
      var offset = Math.random() * 100.0 - 50.0;
      newSolution[mutationIndex] += offset;
      solutions.push([newSolution, fitness(newSolution)]);
    }
  }
  // Random node swap
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
  var solutionCountSoFar = solutions.length;
  // Random crossing-over
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
  var fitnessList = solutions.map((x) => x[1]);
  fitnessList.sort(function(a, b) {
  	return b - a;
	});
  infoDiv.innerHTML = currentEvolutionStep + ", Best fitness: " + " (" + fitnessList.toString().replaceAll(',', ', ') + ")";
  for (var i = 0; i < graph.nodes.length; i++) {
    graph.nodes[i].x = solutions[0][0][i * 2];
    graph.nodes[i].y = solutions[0][0][i * 2 + 1];
  }
  currentEvolutionStep++;
  option.series[0].data = graph.nodes;
  chart.setOption(option);
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

evolutionStep();






