"use strict";
var vis = d3
    .select("body")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 667),
  scaleX = d3.scale.linear().domain([-30, 30]).range([0, 600]),
  scaleY = d3.scale.linear().domain([0, 50]).range([500, 0]),
  poly = [
    { x: 0.0, y: 25.0 },
    { x: 8.5, y: 23.4 },
    { x: 13.0, y: 21.0 },
    { x: 19.0, y: 15.5 },
  ];

vis
  .selectAll("polygon")
  .data([poly])
  .enter()
  .append("polygon")
  .attr("points", function (d) {
    return d
      .map(function (d) {
        return [scaleX(d.x), scaleY(d.y)].join(",");
      })
      .join(" ");
  })
  .attr("fill", "blue")
  .attr("stroke", "green")
  .attr("stroke-width", 2);

// source :http://jsfiddle.net/4xXQT/
