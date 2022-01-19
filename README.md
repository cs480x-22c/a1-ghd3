Link to gh-pages site: https://timconnors33.github.io/a1-ghd3/

## Description
I created a calm outdoors scene for my project. There is
a tree, a bird nest, clouds, ground, and sky. The clouds
move when the mouse is over them, and the sky changes between
day and night when clicked on. The tree bark, ground, and sky
are all rectangles, the clouds and leaves of the tree are circles,
the bird nest is a polygon, and the bark lines on the tree are
lines. Every object (except for the clouds) has a different
rgb value. I used the code shown in class as a starting point
for my project.

![Daytime Image](Assignment_1_Daytime.png)

![Nighttime Image](Assignment_1_Nighttime.png)

## Technical Achievements
In making my project, I included multiple interactive mouse 
events. I also experimented with using transitions to create
animation. Specifically, I set the duration of each
transition and implemented easing to make the animations more interesting. Additionally, I used a combination of the default colors and custom RBG colors for my shapes. I also had to factor in cloud radius when randomly spawning them and moving them around.

## Design Achievements
I made sure that the clouds would not move out of the scene by
setting bounds for the range in which they can randomly spawn
and move around in. Additionally, I chose easing functions that I
thought fit best. I chose the exponential easing function for
the change in sky color because I thought it mimicked the
intensity of sundown and sunrise. I chose mirrored exponential
easing for the cloud movement because I found that it made moving
the clouds around with the mouse very pleasing.