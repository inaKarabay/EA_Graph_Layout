import { graph1, graph2, graphCircle, graphShort, graphFullyConnected, graphHalfConnected } from '../modules/graphs';
import { Preprocessing } from '../modules/preprocessing';
import { Evolutionary_algorithm } from '../modules/evolutionary_algorithm';
import { Display } from './display';
export var graph = graphCircle;

export var infoDiv = document.getElementById('info');
export var chart = echarts.init(document.getElementById('canvas'));
export var chartTimeline = echarts.init(document.getElementById('canvasTimeline'));

var preprocessing = new Preprocessing(graph, 0.25, 15, 0.4, 400, 400, 10, 20)
var nodeIdIndexMap = preprocessing.nodeIdIndexMap;
var graph = preprocessing.new_graph;
preprocessing.reachEquilibrium();
var solutions = preprocessing.solutionsUpdate();
// graph with all extra edge-nodes + Edges
var fullGraph = preprocessing.fullGraph;
var fullNodeIdIndexMap = preprocessing.fullNodeIdIndexMap;

export var printt = "";
export var print2 = "";

var display = new Display(graph, fullGraph);
chartTimeline.setOption(display.optionTimeline);
chart.setOption(display.option);

var evolution = new Evolutionary_algorithm(graph, nodeIdIndexMap, fullGraph, fullNodeIdIndexMap, 0.5, 0.5, 0.5, 2, 20, 0.5);
var evolutionSteps = 200;

function step(i) {
  console.log(i);
  //console.log(solutions);
  solutions = evolution.evolutionStep(solutions);;
  //console.log(solutions); 
  var fitnessList = solutions.map((x) => x[1]);
  fitnessList.sort(function(a, b) {
      return b - a;
    });
  chartTimeline.setOption(display.updateChartTimeline(fitnessList));
  infoDiv.innerHTML = display.updateInfo(fitnessList, i);
  chart.setOption(display.displayGraph(solutions[0][0]));
  setTimeout(step, 1);
}

for (var i = 0; i < evolutionSteps; i++) {
  step(i);
}



