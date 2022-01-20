Assignment 1 - Hello World: GitHub and d3
===

For this assignment I created a simple Mario game using d3. I animated Mario in response to user inputs. The user can use the space bar and arrow keys to make mario run and jump to collect coins and a star. I incorporated four types of graphic primitives into the game. Mario is made up of rectangular pixels, the coins are circles, the star is a polygon, and the platforms are lines.

I used the code examples from class and the d3 documentation as references. In addition I made use of the following sources:
<br>[Running Mario Sprites](https://www.pinterest.com/pin/8570919913407366) and [Jumping Mario Sprite](https://www.pngitem.com/middle/owxixh_super-mario-jumping-mario-bros-8-bits-png/) (referenced these when drawing Mario)
<br>[HTML Color Codes](https://html-color-codes.info/colors-from-image/) (for identifying colors codes)
<br>[Polar to Cartesian coordinates Calculator](https://keisan.casio.com/exec/system/1223527679) (assisted with drawing the star)

Link to gh-pages site: https://vrmelican.github.io/a1-ghd3/index.html

Technical Achievements
---
Adding interaction and animation was a challenge. I began by animating Mario in response to user input. For this task I utilized d3's interval method, which repeatedly executes a block of code with a fixed time delay in between. Every 100 milliseconds I updated the position and state of Mario based on whether he's idle, jumping, or running. I experimented with different time delays but ultimately settled on 100ms because it looked the best. 

After this piece was working I added the platforms, star, and coins. This was the hardest part because I had to make sure that Mario behaved appropriately depending on his location. For example, Mario should not be able to go through platforms and should fall off platforms when he walks off the edge of one. Since the game was very small I was able to hardcode checks for these cases that would update state and position accordingly.

Design Achievements
---
I used an HTML color picker on images of 8 bit Mario games to determine which colors to use in my game. I referenced images of Mario so that my version matched those in the original game. In addition, I spent time adjusting the sizing and positioning of elements to make the game look better. For example, centering the star over the platform, evenly spacing the coins on the ground, and adjusting the thickness of the platforms.

Below is a screenshot of the starting screen for the game:

![](/screenshot.PNG)
