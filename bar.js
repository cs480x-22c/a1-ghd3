const w = 200;
const h = 200;
const padding = 1;
const dataset = [5, 10, 1, 20, 1000];
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter() // with create them in they do not exist
  .append("rect")
  .attr("x", function (d, i) {
    return i * (w / dataset.length);
  })
  .attr("y", function (d) {
    return h - d * 4;
  })
  .attr("width", w / dataset.length - padding)
  .attr("height", function (d) {
    return d * 4;
  });
