// Function arguments: exercise

const paintingWalls = function (color) {
    console.log("The wall has been painted " + color);
};

paintingWalls("green");
paintingWalls("blue");
// The argument is undefined
paintingWalls();


const wallsPainted = function (direction, color) {
    console.log("The " + direction + " wall has been painted " + color);
}

wallsPainted("north", "orange");
wallsPainted("south-east", "grey");