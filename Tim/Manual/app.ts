// This code demonstrates the use of a «tuple type» in TypeScript.
// A tuple is a fixed-length array where each element can have a different type.
const coord: [number, string] = [1, "2"];
console.log(coord[0]); // 1
console.log(coord[1]); // 2

// This code demonstrates the use of a «union type» in TypeScript.
let direction: "North" | "South" | "East" | "West";
direction = "North"; // Valid => Error: direction = "Up" => Type '"Up"' is not assignable to type
if (direction === "North")
{
    console.log("Heading North");
}

// This code demonstrates the use of a «literal type» in TypeScript.
enum Size
{
    Small = 100,
    Medium,
    Large,
    ExtraLarge
}
var size: Size = Size.ExtraLarge;
if (size === 103)
{
    console.log("Size is ExtraLarge");
}

// This code demonstrates the use of a «type guard» in TypeScript.
let x: unknown = 1;
const y = (x as number) + 1; // Cast x to number
if (typeof x === "number")
{
    console.log(x + 1); // 2
}
else if (typeof x === "string")
{
    console.log(x.toUpperCase()); // Error: Object is of type 'unknown'
}

// This code demonstrates the use of a «type assertion» in TypeScript.
function processFeedback1(input: any): void
{
    console.log(`Processing feedback: ${input}`);
}
processFeedback1("Great job!");  // Valid
processFeedback1(42);            // Valid
processFeedback1(new Blob());    // Valid

// This code demonstrates the use of a «type assertion» in TypeScript.
function processFeedback2(input: any): void
{
    if (typeof input === "string")
    {
        console.log(`Processing string feedback: ${input}`);
    }
    else if (typeof input === "number")
    {
        console.log(`Processing number feedback: ${input}`);
    }
    else if (input instanceof Blob)
    {
        console.log("Processing blob feedback");
    }
    else
    {
        console.log("Unknown feedback type");
    }
}
processFeedback2("Great job!");  // Valid
processFeedback2(42);            // Valid
processFeedback2(new Blob());    // Valid
processFeedback2({});            // Valid, but will print "Unknown feedback type"


///////////// 01:17:55 | 2.5 - Optional Chaining and Bang Operator /////////////

const arr1 = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const el1 = arr1.pop()?.name;

const arr2 = [[{ name: "Alice" }]];

const el2 = arr2.pop()?.pop()?.name;
console.log(`el2: ${el2}`); // Alice

const arr3 = [[{ name: "Alice" }]];

const el3 = arr3.pop()!.pop()!.name;
console.log(`el3: ${el3}`); // Alice


///////////////////// 01:24:45 | 3.1 - Basic Function Types /////////////////////

