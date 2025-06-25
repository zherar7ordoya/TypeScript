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

console.log("Basic Function Types");

function add(x: number, y: number): number | string
{
    if (x == 0)
    {
        return "Invalid number";
    }
    return x + y;
}

const res1 = add(5, 10);        // 15
console.log(`res1: ${res1}`);   // 15
const res2 = add(0, 10);        // "Invalid number"
console.log(`res2: ${res2}`);   // "Invalid number"

function makeName1(firstName: string, lastName: string, middleName?: string): string
{
    if (middleName)
    {
        return `${firstName} ${middleName} ${lastName}`;
    }
    return `${firstName} ${lastName}`;
}

const fullName1 = makeName1("John", "Doe", "M.");   // "John M. Doe"
console.log(`fullName1: ${fullName1}`);             // "John M. Doe"
const fullName2 = makeName1("Jane", "Doe");         // "Jane  Doe"
console.log(`fullName2: ${fullName2}`);             // "Jane  Doe"

function makeName2(firstName: string, lastName: string, middleName: string = "J."): string
{
    return `${firstName} ${middleName} ${lastName}`;
}
const fullName3 = makeName2("John", "Doe", "M.");   // "John M. Doe"
console.log(`fullName3: ${fullName3}`);             // "John M. Doe"
const fullName4 = makeName2("Homer", "Simpson");    // "Jane M. Doe"
console.log(`fullName4: ${fullName4}`);             // "Jane M. Doe"

function callFunc
    (
        func: (f: string, l: string, m?: string) => string,
        param1: string,
        param2: string
    )
{
    return func(param1, param2);
}
callFunc(makeName1, "John", "Doe"); // "John Doe"

function callFunction(fn: (x: number, y: number) => number, a: number, b: number): number
{
    return fn(a, b);
}
const sum = (x: number, y: number): number => x + y;
const result = callFunction(sum, 5, 10); // 15

/* ************************************************************************** */

function multiply(x: number, y: number): number
{
    return x * y;
}

function divide(x: number, y: number): number
{
    return x / y;
}

// Función que aplica un conjunto de funciones binarias (de dos argumentos) a un conjunto de pares de valores,
// devolviendo un arreglo con los resultados. Esta es la parte más representativa del enfoque funcional:
function applyFunc(
    funcs: ((a: number, b: number) => number)[],    // Un array de funciones que toman dos números y devuelven un número
    values: [number, number][]                      // Un array de pares de números (tuplas de dos elementos)
): number[]
{
    const results: number[] = [];                   // Aquí se irán guardando los resultados

    for (let i = 0; i < funcs.length; i++)          // Se itera sobre las funciones
    {
        const args = values[i];                     // Se toma el par de valores correspondiente
        const result = funcs[i](args[0], args[1]);  // Se invoca la función con ese par
        results.push(result);                       // Se guarda el resultado
    }

    return results;                                 // Se devuelve el array de resultados
}

console.log(applyFunc(
    [multiply, divide],
    [
        [10, 8], // 80
        [6, 4]   // 1.5
    ]
)); // [80, 1.5]

////////////////////// 01:40:22 | 3.2 - Advanced Function Types //////////////////////