Assignment 1 - Hello World: GitHub and d3  
===

For my Assignment 1, I decided to create a picture. This picture contains a car on the road at a stop sign. The sun is out, and there are clouds in the sky. Some source code that I used was compiled from different websites including [Create SVG elements](https://www.tutorialsteacher.com/d3js/create-svg-elements-in-d3js#:~:text=var%20svg%20%3D%20d3.select%20%28%22body%22%29.append%20%28%22svg%22%29.attr%20%28%22width%22%2C%20width%29.attr,svg%2C%20so%20that%20we%20can%20use%20it%20later.) which I used for creating text inside of a polygon, [How to Draw a Line in d3](https://webdva.github.io/how-to-draw-a-line-in-d3js/) for drawing lines, and Professor's code from class. The link to my "gh-pages" branch is "https://vlm-wpi.github.io/a1-ghd3/" and the page should look like this: ![image1](https://github.com/vlm-wpi/a1-ghd3/blob/85c506050245651d0efb39b444f296784314fc33/assignment1.png)

Design Achievement Description
---

In this project, I was able to create a picture using lines, polygons, circles, and rectangles. When I first started playing around with d3, I tried to make a polygon and the first shape that popped into my head was an octagon, and the color I chose was red. Once I created this shape, I realized that it looked like a stop sign, and started to design the rest of my picture around that. I then had a circle in the upper right hand corner of the page, and decided to make it the sun, containing thick orange lines coming off of the sun as rays. I decided to make the clouds blue since I created lines around the border of the picture to be blue, and the background is white. I designed another polygon (trapezoid) to act as a car, and added circles to the bottom of the car. This car is green, since I wanted to use another color that I hadn't yet. Finally I was able to design a road using a black rectangle and adding thick yellow lines on top of it to act as the lines on a road. This was my first time using d3 and at the beginning of the assignment my goal was just to be able to print the different types of shapes on an svg. Once I realized I could do this, I decided to make these shapes into objects that could be made into a picure. These objects that I designed were objects most people are familiar with, so that this image would be easily understood.

Technical Achievement Desription
---

Once I was able to print different shapes and colors on an svg, I focused on the technicalily of this assignment. For my picture, all of the objects need to be in precise spots on the svg, so that the image makes sense. For example, I made sure to place the rectangle for the road at the edge of the pole for the stop sign, and the yellow marks needed to be in the middle of that rectangle. The rays for the sun were difficult to make, especially since   I did not have grid lines to go off of when defining the coordinates of these lines. Something that I was also able to do is use straightforward shapes look more complex. For example, the blue clouds in the sky are multiple circles on top of each other to make the image look like it is one cloud-like shape. This assignment was a lot of trial and error in figuring out where I wanted to place each item so that the image I had in my mind would show up on the page. I also decided to add text into my drawing and figured out how to append the text to the shape I wanted it to go on. By doing this, I did not have to figure out if the shape or text would be drawn on top of the other, I just had to add the text to the octagon and the text would automatically appear visibally within the shape.


