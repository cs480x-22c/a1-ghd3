Assignment 1 - Hello World: GitHub and d3  
===

Summary
---

For Assignment 1 in CS480X I decided to make a a graph using California Covid Hospitalization data using the months March and December of 2021. Utilizing d3 and javascript I was able to plot this data using lines, circles, polygons(pendagon and triangle), and rectangles. I also used different colors for different shapes/lines on the graph. The API for d3 was very nice and intuitive to use for these graphs.

-   **Miles Gregg**

    -   GitHub: https://github.com/MilesGregg

Links
---

- GitHub Pages: https://milesgregg.github.io/a1-ghd3/
- GitHub Repository: https://github.com/MilesGregg/a1-ghd3

Technical Achievement Description
---

For the techical achievement for this assignment I was successfully able to get data from the California Covid-19 Hospital Data Website: https://data.chhs.ca.gov/dataset/covid-19-hospital-data. This allowed me to get certain data from different months to plot using d3. I plotted Covid-19 data in the state of California for  the months of March and December of 2021. Using Node.js http-server I was able to reload the webpage on port: http://127.0.0.1:8080/ whenever the HTML code would change. 

![alt text](https://github.com/MilesGregg/a1-ghd3/blob/master/main.png?raw=true)

Design Achievement Description
---

For the design achievement I was able to make a accurate graph that represents very important data for people to see. I wanted to see the Covid Hospitalizations for the two completely different months of 2021. Designing the graph I made four different shapes for each statisic I am trying to show. The four statistics I'm trying to show are Vax and Unvax Hospitlizations in March 2021 and Vax and Unvax Hospitlizations in December 2021. For the different colors in my graph I was able to use Google Color Picker to choose different colors for different shpaes and lines. 

![alt text](https://github.com/MilesGregg/a1-ghd3/blob/master/color_picker.png?raw=true)

The polygon shapes were very difficult to do since I had to make points around the current point on the graph. I did this with the following code below. Basically it has 5-3 different points around the current point we are trying to plot. The 5-3 varies based of the shape I am trying to plot. It will then draw the polyPoints variable on the svg using the polygon feature in d3js. The only diffence between the triangle and pendagon code is that the array is different on the second line of code. The pendagon is a size of 5 and triangle is a size of 3.

```js
var polyPoints = []
var pendagonSide = [[-10, -10], [10, -10], [15, 5], [0, 20], [-15, 5]]
for (var i = 0; i < vax_hos_march.length; i++) {
    var outputString = "";
    for (var j = 0; j < pendegonSide.length; j++) {
        var x = vax_hos_march[i][0] + (pendegonSide[j][0]*0.025);
        var y = vax_hos_march[i][1] + (pendegonSide[j][1]*0.15);
        outputString += xScaleGraph1(x.toString()) + "," + yScaleGraph1(y.toString()) + " "
    }
    polyPoints.push(outputString);
}

svg.append('g')
    .selectAll("polygon")
    .data(polyPoints)
    .enter()
    .append("polygon")
    .attr("points", function(d) { return d })
    .attr("transform", "translate(100, 100)")
    .style("fill", "#1900ff");
```
