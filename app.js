//source : https://www.d3-graph-gallery.com/graph/interactivity_transition.html

d3.select("#my_rect").transition().duration(2000).attr("width", "400");
// Position of the circles on the X axis
var position = [50, 100, 150, 200, 250, 300, 350];

// Add circles at the top
d3.select("#dataviz_delay")
  .selectAll("mycircles")
  .data(position)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return d;
  })
  .attr("cy", 40)
  .attr("r", 10);

// Animation: put them down one by one:
function triggerTransitionDelay() {
  d3.selectAll("circle")
    .transition()
    .duration(2000)
    .attr("cy", 300)
    .delay(function (i) {
      return i * 10;
    });
}
