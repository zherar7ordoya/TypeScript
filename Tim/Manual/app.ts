// This code demonstrates the use of a «tuple type» in TypeScript.
// A tuple is a fixed-length array where each element can have a different type.
const coord: [number, string] = [1, "2"];
console.log(coord[0]); // 1
console.log(coord[1]); // 2

// This code demonstrates the use of a «union type» in TypeScript.
let direction: "North" | "South" | "East" | "West";
direction = "North"; // Valid
// direction = "Up"; // Error: Type '"Up"' is not assignable to type
if (direction === "North") {
    console.log("Heading North");
}

enum Size {
    Small = 100,
    Medium,
    Large,
    ExtraLarge
}

var size : Size = Size.ExtraLarge;

if (size === 103) {
    console.log("Size is ExtraLarge");
}

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}