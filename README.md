<h1>Assignment 1 - Hello World: GitHub and d3</h1>
<h3> Mattheus Faria </h3>
<h3> Links </h3>
Github Page: https://mfaria27.github.io/a1-ghd3/index.html

<h3> Overview </h3>

With this first data visualization assignment, I went in next-to completely blind when it came to Javascript and web development with GitHub pages. As such, I thought I'd keep it relatively simple by having different shapes do different things.

<img src="https://github.com/MFaria27/a1-ghd3/blob/master/media/PageOpen.png" style="width:550px;height:600px;"> 

This page features 4 shapes, each showcases some basic javascript/d3 library features. The page itself is set to make an svg of the window's initial height by that same height so that each square is of equal size.

<h3> Shapes </h3>
<ul>
  <li>Circle
    <ul>
      <li>The circle object is clickable, transitioning from multiple colors during a short time</li>
    </ul>
  </li>
  <li>Rectangle
    <ul>
      <li>While doing the rectangles, I was hoping to make it so that, when clicked, the rectangle would split into four smaller rectangles, which you could do infinitely. Unfortunately, time constaints.</li>
      <li>Instead, I opted for a series of rectangular borders, each decreasing in equal size and increasing hue, going from black to white. </li>
      <li>I didn't use any interactables, but I hope to come back to this in order to do the spliting idea</li>
    </ul>
  </li>
  <li>Line
    <ul>
      <li>I couldn't think of anything interesting to do with lines, so I used two to split the svg into four parts</li>
      <li>I did experiment with multiple svgs in each square, but debugging was a nightmare, so I stuck with lines in an open svg</li>
    </ul>
  </li>
  <li>Polygon
    <ul>
      <li>Octagon</li>
        <ul>
          <li>For the octagon polygon, I gave it a mouse-on interactable.</li>
          <li>Hovering over the octagon reveals a stop sign, which incorporates a text from the d3 library. Hovering away makes it a black octagon again.</li>
        </ul>
      <li>X/gear</li>
        <ul>
          <li>The gear is made up of a polygon forming an X shape and a small circle object in the middle.</li>
          <li>The gray part of the gear is interactable; clicking on it will cause the gear to spin 45 degrees</li>
          <li>I'd like to eventually go back and figure out how to make it so that the gear does not cross the border as it spins</li>
        </ul>
    </ul>
  </li>
</ul>
<h3>The Objects in their Interacted States</h3>
<img src="https://github.com/MFaria27/a1-ghd3/blob/master/media/activePage.png" style="width:550px;height:550px;">
<h3>Colors</h3>
Each object has color, either static or transforming
<ul>
  <li>The circle transitions between 4 different colors before returning to its black state</li>
  <li>The rectangles have static colors, each with an hsl value of (0, 100%, <increment of 20% to 100%>)</li>
  <li>The octagon goes from a static black to a red color when hovered over</li>
  <li>The gear is a static gray</li>
</ul>
<h3>Technical Achievements</h3>
<ul>
  <li>Animations with D3</li>
  <ul><li>Animating transitions and color changes was actually very challenging. Especially with animating the 45 degree gear turn while also keeping the scaling correct, as rotating around the center of the object had to be done while also being dynamic. It also took a while to understand how duration() and delay() worked for the circle's color changing property</li></ul>
  <li>Interactables</li>
  <ul><li>Figuring out how to properly work with the .on("click",..) or .on("mouseover",..) with proper functions to do visual changes was the most difficult part of my learning experience. I had a lot of issues with on click events only happening once and figuring out pairing mouseover and mouse out events.</li></ul>
  <li>Pretty much learning Javascript and a bit more of GitHub from Scratch</li>
</ul>
<h3>Design Achievements</h3>
<ul>
  <li>Dynamic Page Sizes</li>
  <ul><li>The sizes of every object scale with the initial size of the height of the page (as most desktops are horizontal). Refreshing the page after changing the dimensions of the browser should scale the sizes. I'd like to eventually learn how to make this a real-time change.</li></ul>
  <li>CSS Coloring with more specific color coding such as HSL instead of using basic keywords like 'red' or 'black'</li>
  <li>Dynamic font size changing was a bit of a design pain to implement, as there isn't a diirect way to change font size (at least in pixels) with window size</li>
</ul>

<h3> Quick Afterword </h3>
This is the first major time that I've used GitHub this much. A good way to see that is the sheer amount of commits I've made to this one main branch. I realized a good 20 minutes ago from when I'm writing this that I could have made another branch and checked for visual updates there before uplaoding to the main branch. You live and learn.
