Project Miaou
===
![image](https://user-images.githubusercontent.com/38742066/150176864-55addc2a-0d68-4094-9d88-a1914e3cc474.png)

Description
---
Project Miaou (a1-ghd3) is an interactive page in which you play with a cat in d3.js. 

When you move the mouse, the eyes of the cat will follow the mouse within the svg environment, as the mouse cursor has been replaced by a laser pointer. When you click, colored text that says “miaou” will appear at your cursor’s location, shown below.

![image](https://user-images.githubusercontent.com/38742066/150177143-49f76c16-e4e5-4339-98eb-72b59ea384cb.png)

The page contains several shapes. Lines and triangles make up the ears and eyebrows, arcs make up the eyelids and mouth, circles make up the eyeballs, and the nose is made with a curve. Various colors can be seen.

The page can be found at: https://trashrat3000.github.io/

Works Cited
---
Code stolen from:
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

https://www.d3-graph-gallery.com/graph/shape.html

https://stackoverflow.com/questions/16770763/mouse-position-in-d3

https://stackoverflow.com/questions/13563471/random-colors-for-circles-in-d3-js-graph/13563700

http://www.rw-designer.com/cursor-detail/55125

Technical Achievement Description
---
This is my first time doing anything like this, so I’ll admit that it’s not the most technically sound. 

However, I am proud of myself for the for loop at the bottom to ensure that what I want to stay on top stays on top of the svg and the way that it interacts with the mousemove event to create a “top layer” for text, a “mid layer” for the cat drawing, and a “bottom layer” for the cat’s eyes. 

I’m sure there are better ways to do this, but I’m glad I was able to find a solution using my limited javascript knowledge.

Design Achievement Description
---
In terms of the design of this, I tried to make it visually appealing. When you first start looking at it, it’s centered, symmetrical, and mostly black and white, but when you start to move your mouse, the eyes move with it. 

You’ll probably then notice that your cursor is just a red dot, and upon clicking find that you’ve now unleashed a brightly colored string that rapidly changes color as you move your mouse, as a way to draw you in. There is very important data that needs to be conveyed here.

To Do
---
In the future, one place that I’d like to improve on my future projects is the way it’s framed. I hope to be able to replace most numbers with ratios relative to the size of the screen. 

With this project, I thought it was totally fine when it took up half the screen, but when I made Chrome fullscreen I realized the user would have to scroll up and down the page, and that’s no good. I tried playing with borders, but on smaller screens, it made it much smaller than I would have hoped. Next time I’ll try my best to have a solution for this so it’s viewable on all sizes of screens. 

Another goal I have in the future is to remember DRY: Don’t Repeat Yourself. As it stands, this code is extremely repetitive. I now know that I shouldn’t copy-paste as much, since it’s so much easier and more concise to write a function for the things I plan to do over and over again. Furthermore, this would likely reduce the lagging that is produced by letting the script run for more than a minute. 

I’d also like to learn how to use d3.selectall(‘circle’).remove(), because another reason the code gets very slow is because of the weird “layer” solution I proposed, explained in the Technical Achievement Description.

Finally, I hope to learn what constitutes an effective README.md. I tried to keep the description as clean and concise as possible, while going into detail on my thought processes in these lower sections, but I’m not certain as to the length or detail required for these documents.
