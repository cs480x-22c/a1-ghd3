# Description

My intention with this project was to create a simple, static world map in D3 that would track the various countries I've lived in. When hovering over a highlighted country, the project would display the country name, as well as the period in which I lived in the country. Points on the map would identify the location within each country that I lived, and lines (or more specifically, arcs) between each city/point would indicate the city I lived in next.

The first few features ended up being implemented rather easily. D3 renders a world map, applying a map projection, and displays each of the 6 countries I've lived in (Russia, Ireland, USA, Germany, Belgium, and Malaysia) in a different color. Hovering over one such country adds a rectangular border around the landmass outline, and changes HTML text to display the name and the period of time during which I lived in said country. 

Unfortunately, at this point I ran into some issues using D3's translation code. Specifically, the map is rendered using a stereographic projection. Thus, if geocoordinates are to be plotted on the map, a stereographic projection must be applied so that the coordinates appear in the correct location. For reasons that still aren't clear to me, none of the latitude/longitude pairs I submitted rendered on the correct location on the map. After spending several hours debugging and trying to fix the plotting code, I decided that the overall point of the assignment didn't specifically involve geography, and thus that dumping more hours into a non-requirement likely wasn't worthwhile. I had bit off more than I could chew. Instead, to demonstrate proficiency in plotting D3 circles and lines, random coordinates were chosen, plotted as points, and connected with lines, all of varying colors.

* Circles rendered: 3 circles rendered in bottom middle of page of varying colors
* Rectangles rendered: Hovering over a country I've lived in outlines said country in a rectangle, and the rectangle is differently colored than all other elements in the map
* Lines rendered: 3 lines connecting circles in bottom middle of page, in varying colors as well
* Polygons rendered: Each country on the world map is an independent polygon, with coordinates drawn from a GeoJSON

# GitHub Pages Link

xxxx

# Technical Achievements

* Interactivity: Hovering over a country I've lived in (and only a country I've lived in) will outline the country in a rectangle and update the page with information about my residency there
* Advanced D3 Usage: World map rendered from GeoJSON successfully using D3

# Design Achievements

* Layout: Map and accompanying elements centered horizontally on webpage for easier viewing; countries and political borders render correctly, projection is applied to ensure that all relevant countries are reasonably sized and fit in map
* Colors: Countries I've lived in use bright, standout colors that help indicate interactivity to the user
* Helper Text: If a user has not hovered over any country I've lived in yet, they are given instructions on the bottom left of the page; these instructions change to the desired information when a country I've lived in is hovered over

# Code Inspiration

* https://www.d3indepth.com/geographic/
* https://www.d3-graph-gallery.com/graph/choropleth_basic.html