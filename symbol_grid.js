console.log("hi UwU");

/* Most of the code in this script is derived from this code:
	//	<script>
	//		var fruits = ['apple', 'mango', 'banana', 'orange'];
	//		d3.select('ul')
	//			.selectAll('li')
	//			.data(fruits)
	//			.enter()
	//			.append('li')
	//			.text(function(d) { return d; });
	//	</script>
from https://www.freecodecamp.org/news/learn-d3-js-in-5-minutes-c5ec29fb0725/. */

console.log(d3);

//============= PART 1: Shapes =============

/** Randomly chooses one of the 11 colors in the Progress Flag. */
function getRandomColor() {
	let ind = Math.floor(Math.random() * 11);
	switch (ind) {
		case 0:
			return "#7cc0ea";
		case 1:
			return "#f498c0";
		case 2:
			return "white";
		case 3:
			return "black";
		case 4:
			return "#603917";
		case 5:
			return "#ee3124";
		case 6:
			return "#f57f29";
		case 7:
			return "#fff000";
		case 8:
			return "#58b947";
		case 9:
			return "#0054a6";
		case 10:
			return "#9f248f";
		default:
			// if you ever get this color, it's a bug
			return "hotpink";
	}
}

/* "Data" used to generate the shapes. 
Actually a list of index numbers within each block.
*/
let numbers = [];
for (let i = 0; i < 121; ++i) {
	numbers.push(i);
}

// Generate circles
d3.select('svg').select('g').selectAll('circle').data(numbers).enter().append('circle')
	.style("stroke", "black").attr("r","5").attr("cx",function(d) {
		return 15 + (d % 11) * 15;
	}).attr("cy",function(d) {
		return 15 + (Math.floor(d / 11)) * 15;
	}).style("fill", function(d) { return getRandomColor(); });

// Generate squares
d3.select('svg').select('g').selectAll('rect').data(numbers).enter().append('rect')
	.style("stroke", "black").attr("height","10").attr("width","10").attr("x",function(d) {
		return 190 + (d % 11) * 15;
	}).attr("y",function(d) {
		return 10 + (Math.floor(d / 11)) * 15;
	}).style("fill", function(d) { return getRandomColor(); });

/** Generates the points attribute for a csv polygon
  * that takes the form of an upward pointing isosceles 
  * triangle, given the coordinates of the top left corner 
  * of the bounding box.
  */
function drawTriangle(cornerx, cornery) {
	let point_tip = "" + (cornerx + 5) + "," + cornery;
	let point_left = "" + cornerx + "," + (cornery + 10);
	let point_right = "" + (cornerx + 10) + "," + (cornery + 10);
	
	return point_tip + " " + point_left + " " + point_right;
}

// Generate triangles
d3.select('svg').selectAll('polygon').data(numbers).enter().append('polygon')
	.style("stroke", "black").attr("points",function(d) {
		let cornerx = 10 + (d % 11) * 15;
		let cornery = 190 + (Math.floor(d / 11)) * 15;
		return drawTriangle(cornerx, cornery);
	}).style("fill", function(d) { return getRandomColor(); });

/** Generates the points attribute for a csv polygon
  * that takes the form of a cross, given the coordinates
  * of the top left corner of the bounding box.
  */
function drawCross(cornerx, cornery) {
	let point_tl = "" + (cornerx + 3) + "," + cornery;
	let point_tr = "" + (cornerx + 7) + "," + cornery;
	let point_ne = "" + (cornerx + 7) + "," + (cornery + 3);
	let point_rt = "" + (cornerx + 10) + "," + (cornery + 3);
	let point_rb = "" + (cornerx + 10) + "," + (cornery + 7);
	let point_se = "" + (cornerx + 7) + "," + (cornery + 7);
	let point_br = "" + (cornerx + 7) + "," + (cornery + 10);
	let point_bl = "" + (cornerx + 3) + "," + (cornery + 10);
	let point_sw = "" + (cornerx + 3) + "," + (cornery + 7);
	let point_lb = "" + cornerx + "," + (cornery + 7);
	let point_lt = "" + cornerx + "," + (cornery + 3);
	let point_nw = "" + (cornerx + 3) + "," + (cornery + 3);
		
	return point_tl + " " + point_tr + " " + point_ne + " " + point_rt + " " + point_rb + " " + point_se + " " + point_br + " " + point_bl + " " + point_sw + " " + point_lb + " " + point_lt + " " + point_nw + " ";
}

// Generate crosses
d3.select('svg').select('g').selectAll('polygon').data(numbers).enter().append('polygon')
	.style("stroke", "black").attr("points",function(d) {
		let cornerx = 190 + (d % 11) * 15;
		let cornery = 190 + (Math.floor(d / 11)) * 15;
		return drawCross(cornerx, cornery);
	}).style("fill", function(d) { return getRandomColor(); });

//============= PART 1: Lines =============

// Value used to randomize which lines do and don't appear.
const link_start = Math.floor(Math.random() % 1155);

// "Data" used to generate the linker lines. Actually a list of index numbers.
let link_numbers = [];
for (let i = link_start; i < link_start + 220; ++i) {
	link_numbers.push(i);
}

/** xor two 0 or 1 values. If the inputs are not 0 or 1,
  * will xor the remainders when divided by 2.
  */
function xor(i,j) {
	return (i + j) % 2;
}

/** Deterministically choose a boolean based on the input number. 
  * Pattern repeats every 1155 values.
  */
function pseudorandomBool(seed) {
	let third = seed % 3;
	let fifth = seed % 5;
	let seventh = seed % 7;
	let eleventh = seed % 11;
	
	return xor(xor(third, fifth), xor(seventh, eleventh));
}

// Connect circles
d3.select('svg').select('g').selectAll('line').data(link_numbers).enter().append('line').style("stroke", "black").attr("x1", function(d) {
	let link_index = d - link_start;
	
	if (link_index >= 110) {
		// Vertical link
		return 15 + (link_index % 11) * 15;
	} else {
		// Horizontal link
		return 20 + (link_index % 10) * 15;
}}).attr("x2", function(d) {
	let enabled = pseudorandomBool(d);
	let link_index = d - link_start;
	
	if (link_index >= 110) {
		// Vertical link
		return 15 + (link_index % 11) * 15;
	} else if (enabled != 0) {
		// Horizontal link
		return 25 + (link_index % 10) * 15;
	} else {
		// Match x1
		return 20 + (link_index % 10) * 15;
}}).attr("y1", function(d) {
	let link_index = d - link_start;
	
	if (link_index >= 110) {
		// Vertical link
		return 20 + (Math.floor(link_index/11) - 10) * 15;
	} else {
		// Horizontal link
		return 15 + (Math.floor(link_index/10)) * 15;
}}).attr("y2", function(d) {
	let enabled = pseudorandomBool(d);
	let link_index = d - link_start;
	
	if (link_index >= 110) {
		if (enabled != 0) {
			// Vertical link
			return 25 + (Math.floor(link_index/11) - 10) * 15;
		} else {
			// Match y1
			return 20 + (Math.floor(link_index/11) - 10) * 15;
		}
	} else {
		// Horizontal link
		return 15 + (Math.floor(link_index/10)) * 15;
}})
