import './style.css'
import * as d3 from 'd3'
import { polygonArea, transition } from 'd3';

/**
 * Project Requirements
 * Use 4 kinds of gtaphic primitives (circle, rectangle, lines, polygons)
 * (in different colors)
 * 
 * Include source of start code
 * https://observablehq.com/@harrylove/draw-a-circle-with-d3
 * https://www.d3-graph-gallery.com/graph/shape.html
 * https://stackoverflow.com/questions/39076826/how-to-rotate-any-shape-continuously-in-d3-js/39077449
 */

/**
 * Technical Achivements Draft
 * 
 * Starting learning how to use npm and webpack to run a live server
 * and also handle d3
 * 
 */

/**
 * Design Achnivements Draft
 * 
 * Ability to have svg be full screne even on resize
 */

/**
 * Createing SVG
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Handling Resizing
window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    svg.attr("width", sizes.width)
        .attr("height", sizes.height)

    render()
})

const svg = d3.select("body").append("svg")
    .attr("width", sizes.width)
    .attr("height", sizes.height)

/**
 * Shapes
 */
let roadLine = svg.append("line")
const roadLineLength = 90

const car = {
    width: 100,
    height: 200,
    body: null,
    wheels: []
}

const render = () => {
    svg.selectAll('*').remove()

    // Road
    svg.append("rect")
        .attr("x", sizes.width / 2 - 700 / 2)
        .attr("y", 0)
        .attr("width", 700)
        .attr("height", sizes.height)
        .style("fill", "black")

    // Road Lines


    roadLine = svg.append("line")

    roadLine.attr("x1", sizes.width / 2)
        .attr("y1", -roadLineLength * 2)
        .attr("x2", sizes.width / 2)
        .attr("y2", sizes.height)
        .attr("stroke", "yellow")
        .attr("stroke-width", 20)
        .style("stroke-dasharray", ("90, 90"))



    car.body = svg.append("rect")
    car.body
        .attr("x", sizes.width / 2 - car.width / 2)
        .attr("y", sizes.height - car.height - 30)
        .attr("width", car.width)
        .attr("height", car.height)
        .style("fill", "red")

    car.wheels = [];

    car.wheels.push(svg.append('ellipse')
        .attr('cx', sizes.width / 2 - car.width / 2 - 5)
        .attr('cy', sizes.height - car.height)
        .attr('rx', 3)
        .attr("ry", 25)
        .style("fill", "gray"))

    car.wheels.push(svg.append('ellipse')
        .attr('cx', sizes.width / 2 + car.width / 2 + 5)
        .attr('cy', sizes.height - car.height)
        .attr('rx', 3)
        .attr("ry", 25)
        .style("fill", "gray"))

    car.wheels.push(svg.append('ellipse')
        .attr('cx', sizes.width / 2 - car.width / 2 - 5)
        .attr('cy', sizes.height - car.height + 130)
        .attr('rx', 3)
        .attr("ry", 25)
        .style("fill", "gray"))

    car.wheels.push(svg.append('ellipse')
        .attr('cx', sizes.width / 2 + car.width / 2 + 5)
        .attr('cy', sizes.height - car.height + 130)
        .attr('rx', 3)
        .attr("ry", 25)
        .style("fill", "gray"))
}

render()

const moveRoadLine = () => {
    const speed = 8

    let y1 = +roadLine.attr("y1")
    y1 = y1 + speed

    let y2 = +roadLine.attr("y2")
    y2 = y2 + speed
    if (y1 >= roadLineLength)
    {
        y1 = -roadLineLength;
        y2 = sizes.height
    }

    roadLine.attr("y1", y1)
    roadLine.attr("y2", y2)
}

const spawnCone = () => {
    const randSpot = Math.random() * 700 - 700 / 2

    const cone = svg.append("polygon")
    cone.attr("points", [60, 0,
        20, 100,
        0, 110,
        70, 150,
        140, 110,
        120, 100, 80, 0])
        .style("fill", "#FF7221")
        .attr("transform", "translate(" + (sizes.width / 2 + randSpot) + ", -200)")
        .transition()
        .ease(d3.easeLinear)
        .attr("transform", "translate(" + (sizes.width / 2 + randSpot) + "," + (sizes.height + 100) + ")")
        .duration(2870)
        .on("end", cone.remove)

}

spawnCone()
let time = Date.now();
const animate = () => {
    moveRoadLine()

    if (Date.now() - time >= 5000) {
        time = Date.now();
        spawnCone()

    }
    window.requestAnimationFrame(animate)
}

animate()


window.addEventListener("keydown", (event) => {
    let speed = 7
    let x = +car.body.attr("x")

    if (event.key.toLowerCase() == "a" && x > sizes.width / 2 - 700 / 2 + 20)
        speed *= -1;
    else if (event.key.toLowerCase() == "d" && x < sizes.width / 2 + 700 / 2 - car.width - 20)
        speed *= 1
    else
        return

    car.body.attr("x", x + speed)

    car.wheels.forEach(wheel =>
    {
        let x = +wheel.attr("cx")
        wheel.attr("cx", x + speed)
    });
})