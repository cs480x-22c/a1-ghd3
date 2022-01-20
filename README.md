Assignment 1 - Hello World: GitHub and d3  
Jacob Bissonette
Index Link: https://github.com/jbiss4/a1-ghd3/blob/master/index.html 

Fair Warning -- when I was working on this, I took a long time to realize that I forgot the t in "height" when making the SVG, so my height was capped at 150 instead of 1000 and had to Google more questions than I should've because some pictures weren't appearing so that may explain some of the sources I needed for the homework.
- Circles and Rectangles 
    -- https://www.d3-graph-gallery.com/graph/custom_color.html used this to learn some neat color changes to the rectangles.
- Lines  
    -- https://www.tutorialspoint.com/d3js/d3js_introduction_to_svg.htm#:~:text=To%20create%20SVG%20using%20D3,SVG%20image%20as%20given%20below.&text=Step%202%20%E2%88%92%20Select%20the%20SVG,using%20the%20append()%20method. this was used to help me make lines in d3
- Polygons  
    -- https://github.com/d3/d3-polygon/tree/v3.0.1
    -- https://stackoverflow.com/questions/13204562/proper-format-for-drawing-polygon-data-in-d3 
- Different colors  
    -- same as circles and rectangles link

** Anything else that may not have a source included, I used class notes/lectures and/or the d3 API in github as references. **

Technical Achievement Desription 
    -- So a basic thing I tried to get used to functions was creating the circles. I created a range of numbers - knowing that I would use the value of their squares - and capped my range at an even 30. I then used that data to create X and Y coords of the circles, with the radius being the respective non-squared number. 
    -- I also wanted to set up the rectangles for a color gradient along the bottom of the SVG. So, I created an array of the X Coords knowing the proper spacing to fit ten of them based on the Width I was using for each. All ten rectangles line up on the bottom of the SVG with equal dimensions and no spacing between them. 
Design Achievement Description 
    -- I found a source (linked above) to try and incorporate a color gradient using a function so I didn't have to type out each color in an array and just call the array. I was able to learn how to use the d3 custom colors and the different options to use for sequential color changing. So with this I wanted to make my rectangles have a nice gradient since they were all connected in a row at the bottom of the SVG. 

