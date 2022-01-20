console.log(d3); // test if d3 is loaded
var isGlitz = false
// Add an SVG
var vis = d3.select("svg")
// Add Rectangles
vis.append('rect').attr('x', 20).attr('y', 20).attr("height", 80).attr("width", 160).attr("fill", "red");
//rotate rectangle
vis.select('rect').on('click', function(evt, d) {
      console.log(evt);
	  if (isGlitz == true){
		var rect_x = vis.select("rect").attr('x')
		var rect_y = vis.select("rect").attr('y')
		vis.select("rect")
			.transition()
			.duration(2500)
			.attr('transform' , 'rotate(-180, '+rect_x+',' +rect_y +') ')
			.transition()
			.duration(2500)
			.attr('transform' , 'rotate(0, '+rect_x+',' +rect_y +') ')
	  }
  })
// Add Circles
vis.append('circle').attr('cx', 200).attr('cy', 200).attr('r', 100).attr("fill", "green")
//Change Background Color
vis.select('circle').on('click', function(evt, d) {
      console.log(evt);
	  if (isGlitz == true){
		d3.select("body").style("background-color", "magenta");
	  }
  })
// Add Lines
vis.append('line').attr('x1', 100).attr('y1', 400).attr('x2', 200).attr("y2", 400).attr("stroke", "blue")
vis.select('line').on('click', function(evt, d) {
      console.log(evt);
	  if (isGlitz == true) {
		vis.select('line').attr('stroke', 'orange').attr('stroke-width', 10)
	  }
  })
// Add Polygons
vis.append('polygon').attr('points', "100,500 100,700 300,700 400,600 300,500").attr('fill', 'yellow').attr("stroke", "brown")
vis.select('polygon').on('click', function(evt, d) {
      console.log(evt);
	  if (isGlitz == true) {
		vis.select('polygon').attr('points', "100,500 300,500 200,400")
	  }
  })

//change marquee to p
d3.select('p').on('click', function(evt, d) {
    console.log(evt);
    d3.select("p").html("<marquee>Welcome to a 90s website!</marquee>");
	isGlitz = true
  })
 


 