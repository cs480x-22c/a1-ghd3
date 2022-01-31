Assignment 1 - Hello World: GitHub and d3  
===

This is a project using d3.js to generate a cat graphic and a little mouse that moves back and forth on the screen. To do this, I first created the awake cat design using a variety of different primitive svg shapes, such as: lines, polygons, circles, ellipses, and rectangles, in different colors. To make the cat's eyes half-closed, I used the following code snippet: https://stackoverflow.com/questions/17511614/half-filled-circle-with-d3-js to fill a circle in two different colors. I also added a button below the cat that is labeled 'bedtime!' to tell the cat that it is time for bed. Clicking this button generates a graphic of the cat sleeping. You click the button again (labeled 'wake!' this time) to wake the cat up again. I also made a tiny mouse using the basic shapes and used d3 to animate him moving back and forth on the page.

Here is a picture of the page when the cat is awake:
![Awake Cat](https://github.com/mcaten/a1-ghd3/blob/master/Awake.JPG?raw=true)

And here is a picture of the page when the cat is asleep:
![Asleep Cat](https://github.com/mcaten/a1-ghd3/blob/master/Sleep.JPG?raw=true)

Submission Details
---
Link: https://mcaten.github.io/a1-ghd3/

Design Achievements
---
For the design achievements, I designed the color of the cat using a html color-picker instead of using simple built-in colors. In addition, I designed three separate complex graphics from scratch using d3. I also implemented a button on the page that changes the svg on the screen and also changes text based on the state of the cat (asleep or awake). Per the assignment requirements, I used basic svg shapes such as lines, polygons, circles, and rectangles to create the cat and mouse as seen on the screen. Also to save time with coordinates of shapes, I used transforms to translate shapes from the awake cat (that I created first) into a different location on the screen for the sleeping cat, since many of the shapes are the exact same. Finally, I used d3 gradients to make the eyes on the cat appear half-closed when the cat is awake. I used the gradient to half-fill the circles (code inspiration: https://stackoverflow.com/questions/17511614/half-filled-circle-with-d3-js)

Technical Achievements
---
For the technical achievements, I animated the mouse on the screen. I used d3 to animate the mouse by creating a mouseRun() function that uses transitions to move the coordinates of the mouse back and forth. This function uses .ease(d3.easeCubic) to smooth the animation and give the mouse a frantic running effect. It also uses the animation duration to make the mouse take 2 seconds to run from one side of the screen to another. I also added a listener for the event starting to make the animation loop infinitely (code from: https://stackoverflow.com/questions/23232929/looping-transition-in-d3). In addition, I used two functions to draw the cat being asleep and awake, and clears the svg on the screen to draw the cat each time each of these functions are called (code from: https://stackoverflow.com/questions/22452112/nvd3-clear-svg-before-loading-new-chart). To also accomplish this with the press of a button, I used a variable that keeps track of the state of the cat (asleep or awake) so the cat can go back and forth between being asleep and being awake. 
 
Sources
---
https://www.tutorialspoint.com/d3js/d3js_introduction_to_svg.htm (basic shapes tutorial)\
https://www.tutorialspoint.com/d3js/d3js_svg_transformation.htm (transformations tutorial)\
https://www.tutorialspoint.com/d3js/d3js_transition.htm (transitions tutorial)\
https://www.tutorialspoint.com/d3js/d3js_animation.htm (animations tutorial)\
https://stackoverflow.com/questions/17511614/half-filled-circle-with-d3-js (gradient)\
https://stackoverflow.com/questions/23232929/looping-transition-in-d3 (looping animation)\
https://stackoverflow.com/questions/22452112/nvd3-clear-svg-before-loading-new-chart (clear svg)


