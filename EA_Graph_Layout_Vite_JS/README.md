# Project Structure

main.js build App

App.vue Main vue component containing all sub-components

------------------------------------------------------------------

scr/modules contain JS Files
scr/modules/graphs.js Stores the graphs
scr/modules/ea.js Contains the main Functions for the Evolutionary Algorithm
Functions:
vectorLength -> computes euclidian distance of two nodes
forceAttractive -> used in simulateForceDirectedStep
forceRepulsive -> used in simulateForceDirectedStep
simulateForceDirectedStep -> qualities for good individual
intersectsLineLine -> checks if two lines are crossing
intersectsLineCircle -> returns distance from node and edge
fitness -> calculates fitness score of phenotype (the smaller bigger the better). Penelization on overlapping edges, overlapping nodes, nodes overlapping edges 
evolutionStep -> mutation, cross-over

-------------------------------------------------------------------

src/components contain Vue files
src/components/Graph.vue Vue component for graph illustration

-------------------------------------------------------------------

TODO:
0) Vue Struktur verbessern
1) Eckpunkte einfügen 
	-> Graphstruktur damit ergänzen
	- wie wird angezeigt das Eckpunkt existiert? -> zu graph als extra Feature, oder als neuer Knoten, der weggelassen werden kann?
	- wie wird angezeigt wie er verbunden wird zu knoten (dass sich kanten nicht unnötig kreuzen)
	- am anfang nur einen Eckpunkt zulassen?
2) Anfangsgraph analysieren
	-> Hubs finden -> eventuell Fitness funktion daran verändern
	-> Graph specific semantics: additional constraints: most important vertexes in the middle
3) gibt es eine bessere Struktur (Phenotyp Darstellung)?
4) Winkelbedingung? (Größter kleinster Winkel)
Resolution Rule? : ähnliche kantenlängen gut, quadratische fläche von Graph gut
Mutation größer?
Ergebniss zwischenspeichern? (dass nur neue Verbindungen in fitness berechnet werden)
Fitness: https://reference.wolfram.com/language/guide/GraphMeasures.html



