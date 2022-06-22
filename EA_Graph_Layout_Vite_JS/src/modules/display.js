export class Display {
    constructor(graph, fullGraph) {
        this.graph = graph;
        this.fullGraph = fullGraph;
        this.timelineData = [];
        this.optionTimeline = {
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
                data: this.timelineData
            }]
        };
        this.option = {
            animation: false,
            series: [{
                type: 'graph',
                layout: 'none',
                nodes: this.fullGraph.nodes,
                edges: this.fullGraph.edges,
                categories: this.graph.categories,
                symbol: "circle",
                
            }]
        };
    }

    updateChartTimeline(fitnessList) {
        if (this.timelineData.length === 0 || this.timelineData[this.timelineData.length - 1][1] > Math.abs(fitnessList[0])) {
            this.timelineData.push([this.timelineData.length, Math.abs(fitnessList[0])]);
            this.optionTimeline.series[0].data = this.timelineData;
        }
        return this.optionTimeline
    }
    
    updateInfo(fitnessList, currentEvolutionStep) {
        return "Run # " + currentEvolutionStep + "<br />" + "Best fitness: " + " (" + fitnessList.toString().replaceAll(',', ', ') + ")";
    }

    displayGraph(solutions) {
        var newgraph =  JSON.parse(JSON.stringify(this.fullGraph));
        for (var i = 0; i < newgraph.nodes.length; i++) {
            newgraph.nodes[i].x = solutions[i * 2];
            newgraph.nodes[i].y = solutions[i * 2 + 1];
        }
        //remove old edges if edgenode exists
        for (var j = 0; j < this.graph.edges.length; j++) {
            if (solutions[(this.graph.nodes.length * 2) + (j * 2)] != null) {
                newgraph.edges[j].source = newgraph.edges[j].target;
            }
        }
        this.option.series[0].nodes = newgraph.nodes;
        this.option.series[0].edges = newgraph.edges;
        return this.option;
    }
}