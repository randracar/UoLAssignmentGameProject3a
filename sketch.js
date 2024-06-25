/*

The Game Project

Week 3

Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function plummet() {
    if (gameChar_y < floorPos_y) {
        gameChar_y += 2;
    } else {
        gameChar_y = floorPos_y;
    }
}

function setup() {
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;

    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
}

function draw() {
    ///////////DRAWING CODE//////////

    background(100, 155, 255); //fill the sky blue

    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

    // the game character
    drawGameChar();

    ///////////INTERACTION CODE//////////
    // Put conditional statements to move the game character below here
    if (isLeft) {
        gameChar_x -= 2;
    }

    if (isRight) {
        gameChar_x += 2;
    }

    if (isFalling && !isPlummeting) {
        gameChar_y -= 150;
        isPlummeting = true;
    }
    
    if(isPlummeting){
        if (gameChar_y < floorPos_y) {
            plummet();
        } else  {
            gameChar_y = floorPos_y;
            isPlummeting = false;
        }
    }
    
}

function drawGameChar() {
    if (isLeft && isFalling) {
        drawJumpingLeft();
    } else if (isRight && isFalling) {
        drawJumpingRight();
    } else if (isLeft && isPlummeting) {
        drawPlummetingLeft();
    } else if (isRight && isPlummeting) {
        drawPlummetingRight();
    } else if (isFalling) {
        drawJumpingForward();
    } else if (isPlummeting) {
        drawPlummeting();
    } else if (isLeft) {
        drawWalkingLeft();
    } else if (isRight) {
        drawWalkingRight();
    } else {
        drawStandingFront();
    }
}


function drawJumpingLeft() {
    // Head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 50, 20, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 7, gameChar_y - 38, 15, 30);
    // Arm
    fill(233, 150, 122);
    rect(gameChar_x - 3, gameChar_y - 50, 7, 20);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x - 7, gameChar_y - 10, 15, 14);
}

function drawJumpingRight() {
    // Head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 50, 20, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 7, gameChar_y - 38, 15, 30);
    // Arm
    fill(233, 150, 122);
    rect(gameChar_x - 3, gameChar_y - 50, 7, 20);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x - 7, gameChar_y - 10, 15, 14);
}

function drawPlummeting() {
    // Head
    fill(233, 150, 122);
    ellipse(gameChar_x, gameChar_y - 60, 25, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 13, gameChar_y - 50, 25, 30);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x + 2, gameChar_y - 20, 10, 17);
    rect(gameChar_x - 12, gameChar_y - 20, 10, 17);
    // Arms 
    fill(233, 150, 122);
    rect(gameChar_x - 22, gameChar_y - 60, 10, 20);
    rect(gameChar_x + 12, gameChar_y - 60, 10, 20);
}

function drawPlummetingLeft()   {
    // Head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 50, 20, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 7, gameChar_y - 38, 15, 30);
    // Arm
    fill(233, 150, 122);
    rect(gameChar_x - 3, gameChar_y - 50, 7, 20);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x - 7, gameChar_y - 10, 15, 14);
}

function drawPlummetingRight(){
    // Head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 50, 20, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 7, gameChar_y - 38, 15, 30);
    // Arm
    fill(233, 150, 122);
    rect(gameChar_x - 3, gameChar_y - 50, 7, 20);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x - 7, gameChar_y - 10, 15, 14);
}

function drawJumpingForward() {
    // Head
    fill(233, 150, 122);
    ellipse(gameChar_x, gameChar_y - 60, 25, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 13, gameChar_y - 50, 25, 30);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x + 2, gameChar_y - 20, 10, 17);
    rect(gameChar_x - 12, gameChar_y - 20, 10, 17);
    // Arms 
    fill(233, 150, 122);
    rect(gameChar_x - 22, gameChar_y - 60, 10, 20);
    rect(gameChar_x + 12, gameChar_y - 60, 10, 20);
}

function drawWalkingLeft() {
    // Head
    fill(233, 150, 122);
    ellipse(gameChar_x, gameChar_y - 50, 20, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 7, gameChar_y - 38, 15, 30);
    // Arm
    fill(233, 150, 122);
    rect(gameChar_x - 3, gameChar_y - 35, 7, 20);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x - 7, gameChar_y - 10, 15, 14);
}

function drawWalkingRight() {
    // Head
    fill(233, 150, 122);
    ellipse(gameChar_x, gameChar_y - 50, 20, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 7, gameChar_y - 38, 15, 30);
    // Arm
    fill(233, 150, 122);
    rect(gameChar_x - 3, gameChar_y - 35, 7, 20);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x - 7, gameChar_y - 10, 15, 14);
}

function drawStandingFront() {
    // Head
    fill(233, 150, 122);
    ellipse(gameChar_x, gameChar_y - 50, 25, 25);
    // Body
    fill(0, 100, 0);
    rect(gameChar_x - 12, gameChar_y - 40, 25, 30);
    // Legs
    fill(0, 0, 139);
    rect(gameChar_x + 2, gameChar_y - 15, 10, 17);
    rect(gameChar_x - 12, gameChar_y - 15, 10, 17);
    // Arms 
    fill(233, 150, 122);
    rect(gameChar_x - 22, gameChar_y - 40, 10, 20);
    rect(gameChar_x + 12, gameChar_y - 40, 10, 20);
}

function keyPressed() {
    // if statements to control the animation of the character when keys are pressed.
    console.log("keyPressed: " + key);
    console.log("keyPressed: " + keyCode);

    if (keyCode == 65) {
        isLeft = true;
    }

    if (keyCode == 68) {
        isRight = true;
    }

    if (keyCode == 87) {
        isFalling = true;
    }
}

function keyReleased() {
    // if statements to control the animation of the character when keys are released.
    console.log("keyReleased: " + key);
    console.log("keyReleased: " + keyCode);

    if (keyCode == 65) {
        isLeft = false;
    }

    if (keyCode == 68) {
        isRight = false;
    }

    if (keyCode == 87) {
        isFalling = false;
    }
}