//parameters
const levelSize = 512;
const spriteSize = 16;
const pixelSize = 4;

let offsetX = 0; //mario's distance from left boundary
let offsetY = 0; //mario's distance from ground
let dir = 1; //left is -1, right is 1

let running = false; //running flag
let jumping = false; //jumping flag
let jumpingCounter = 0; //used to calculate jump trajectory
let jumpingUnderBlocks = false; //determine which jumping trajectory to follow

let stars = 0;
let coins = 0;
let starVisible = true;
let coinsVisible = [true, true, true];

//colors
const marioRed = "#D70000";
const marioGreen = "#6F6700";
const marioYellow = "#F7AA00";
const background = "#5C95FC";
const block = "#C84C0C";
const coin = "#FDC006";

//mario sprites
const idleMario = "0000011111000000000011111111100000002223323000000002323332333000000232233323330000022333322220000000033333330000000022122200000000022212212220000022221111222200003321311312330000333111111333000033111001113300000011100111000000022200002220000022220000222200".split("");
const runningMario1 = "0000011111000000000011111111100000002223323000000002323332333000000232233323330000022333322220000000033333330000000000221120000000000222212330000003322222233300003331222223300000022111111100000002111111110000002211001110000000200002220000000000000022200000".split("");
const runningMario2 = "0000000000000000000001111100000000001111111110000000222332300000000232333233300000023223332333000002233332222000000003333333000000002221220000000002222112200000000222113110000000022221111000000002223311100000000012331100000000000111222000000000022220000000".split("");
const runningMario3 = "0000011111000000000011111111100000002223323000000002323332333000000232233323330000022333322220000000033333330000002222122210000033222211222123333330221111112233330011131113002000011111111112200011111111111220022111000011122002220000000000000022200000000000".split("");
const jumpingingMario = "0000000000000333000000111110033300000111111111330000022233230222000023233323322200002322333233320000223333222220000000333333320000222221222120000222222212221002332222221111100233301121131131220302111111111122002221111111112202221111110000000200111100000000".split("");

const update = (marioData) => {
    d3.select("svg").html("");
    drawLevel();
    drawMario(marioData);
};

const drawLevel = () => {
    //draw blocks
    const blockData = [{ "x1": 64, "y1": 296, "x2": 256, "y2": 296 }, { "x1": 320, "y1": 408, "x2": 512, "y2": 408 }];
    d3.select("svg")
        .selectAll("line")
        .data(blockData)
        .enter().append("line")
        .attr("x1", d => d.x1)
        .attr("y1", d => d.y1)
        .attr("x2", d => d.x2)
        .attr("y2", d => d.y2)
        .attr("stroke", block)
        .attr("stroke-width", 16);

    //draw coins
    const coinX = [352, 416, 480];
    const coinY = 480;
    d3.select("svg")
        .selectAll("circle")
        .data(coinX)
        .enter().append("circle")
        .attr("r", (d, i) => coinsVisible[i] ? 16 : 0)
        .attr("cx", d => d)
        .attr("cy", coinY)
        .attr("fill", coin);

    //draw star
    if (starVisible) {
        let starCenterX = 160; //x-coord of star center
        let starCenterY = 96; //y-coord of star center
        let starPointsX = [0, -9, -30, -15, -19, 0, 19, 15, 30, 10]; //offsets for x-coords
        let starPointsY = [-32, -13, -10, 5, 26, 16, 26, 5, -10, -13]; //offstes for y-coords
        let starPointsString = "";
        for (let i = 0; i < 10; i++) {
            starPointsString += `${starCenterX + starPointsX[i]},${starCenterY + starPointsY[i]},`;
        }
        starPointsString = starPointsString.slice(0, -1);
        d3.select("svg")
            .append("polygon")
            .attr("points", starPointsString)
            .attr("fill", coin);
    }

    //draw status
    d3.select("svg")
        .append("text")
        .attr("x", 380)
        .attr("y", 16)
        .attr("fill", "white")
        .text(`Stars: ${stars}, Coins: ${coins}`);
};

const drawMario = (data) => {
    d3.select("svg")
        .selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("x", (d, i) => {
            if (dir == 1) //draw sprite normally
                return offsetX + pixelSize * (i - spriteSize * Math.floor(i / spriteSize));
            else //flip sprite on vertical axis
                return offsetX + pixelSize * (spriteSize - (i - spriteSize * Math.floor(i / spriteSize)));
        })
        .attr("y", (d, i) => levelSize - offsetY - (pixelSize * spriteSize) + pixelSize * Math.floor(i / spriteSize))
        .attr("width", pixelSize)
        .attr("height", pixelSize)
        .attr("fill", d => {
            switch (Number(d)) {
                case 1: return marioRed;
                case 2: return marioGreen;
                case 3: return marioYellow;
                default: return background;
            }
        });
};

const run = () => {
    let counter = 0;
    let interval = d3.interval(() => {
        counter++;

        //handle running
        if (running && offsetX < 448 && offsetX > 0)
            offsetX += dir * 8;
        else if (running && offsetX == 0 && dir == 1)
            offsetX += 8;
        else if (running && offsetX == 448 && dir == -1)
            offsetX -= 8;

        //handle jumping
        if (jumping) {
            let jumpingOffset = calculateJumpingOffset(jumpingCounter);
            offsetY += jumpingOffset;
            jumpingCounter++;
            if (jumpingOffset == 0) {
                jumping = false;
                jumpingCounter = 0;
            }

            //make mario land on blocks
            if ((offsetX > 256 && offsetY == 112) || (offsetX > 64 && offsetX < 248 && offsetY == 224)) {
                jumping = false;
                jumpingCounter = 0;
            }
        }

        //handle falling off blocks
        if (offsetX == 0 && offsetY == 224)
            offsetY = 0;
        else if (offsetX > 240 && offsetX < 264 && offsetY == 224 && !jumping)
            offsetY = 0;
        else if (offsetX > 264 && offsetY == 224 && !jumping)
            offsetY = 112;
        else if (offsetX < 264 && offsetY == 112 && !jumping)
            offsetY = 0;

        //handle grabbing stars and coins
        if (offsetX >= 80 && offsetX <= 168 && offsetY > 344) {
            if (starVisible)
                stars++;
            starVisible = false;
        }
        if (offsetX >= 280 && offsetY == 0) {
            if (coinsVisible[0])
                coins++;
            coinsVisible[0] = false;
        }
        if (offsetX >= 344 && offsetY == 0) {
            if (coinsVisible[1])
                coins++;
            coinsVisible[1] = false;
        }
        if (offsetX >= 408 && offsetY == 0) {
            if (coinsVisible[2])
                coins++;
            coinsVisible[2] = false;
        }

        //update screen
        if (jumping)
            update(jumpingingMario);
        else if (!running)
            update(idleMario);
        else {
            switch (counter % 4) {
                case 0:
                    update(runningMario2);
                    break;
                case 1:
                    update(runningMario1);
                    break;
                case 2:
                    update(runningMario2);
                    break;
                case 3:
                    update(runningMario3);
                    break;
            }
        }
    }, 100);
};

const calculateJumpingOffset = (jumpingCounter) => {
    if (jumpingCounter == 0) {
        jumpingUnderBlocks = (offsetX > 256 && offsetY < 64);
    }

    const jumpingPathUnderBlocks = [32, -32, 0];
    const jumpingPath = [64, 32, 16, 8, 4, -4, -8, -16, -32, -64, 0];
    if (jumpingUnderBlocks) {
        return jumpingPathUnderBlocks[jumpingCounter];
    }
    return jumpingPath[jumpingCounter];
}

const setupEventHandlers = () => {
    d3.select("body")
        .on("keydown", e => {
            if (e.key === "ArrowLeft") {
                dir = -1;
                running = true;
            }
            if (e.key === "ArrowRight") {
                dir = 1;
                running = true;
            }
            if (e.key === " ")
                jumping = true;
        });

    d3.select("body")
        .on("keyup", e => {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight")
                running = false;
        });
}

setupEventHandlers();
run();