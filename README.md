Assignment 1 - Winter Tree Generator
===
Kaamil Lokhandwala
https://kslokhandwala2022.github.io/a1-ghd3/

Press "Space" to generate a new tree and landscape.

I started this project from scratch, learning d3js through examples online and from lecture. For this project I created a randomized tree and background from multiple "rect", "circle", "line" and "poly" svgs. For the randomized portion of the piece, I generated the data myself by pushing objects onto an array.

For the snow, position and radius of circles were randomized.

For the ground, the start and end points of lines were randomized.

For the mountains I used a polygon and hard-coded the points.

For the tree, I recursively created branches of varying lengths and widths and added variance to the branches curves. 
I tweaked the tree generation until it looked organic and stylistic. It included squareroots for curves and block height variance for style.

Finally, I added a linear gradient with some variance in colors to create a dynamic background.
