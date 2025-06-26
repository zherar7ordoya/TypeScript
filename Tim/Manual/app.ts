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
const sumResult = (x: number, y: number): number => x + y;
const result = callFunction(sumResult, 5, 10); // 15

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

/////////////////// 01:40:22 | 3.2 - Advanced Function Types ///////////////////

// Rest parameters allow a function to accept an indefinite number of arguments as an array.
function sum(...values: number[]): number
{
    return values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Overloaded functions allow you to define multiple signatures for a function.
function getItemLength(item: string): number;
function getItemLength(items: string[]): string;
function getItemLength(itemOrItems: unknown): unknown
{
    if (typeof itemOrItems === "string")
    {
        return itemOrItems.length;
    }
    else if (Array.isArray(itemOrItems))
    {
        //return itemOrItems.reduce((acc, item) => acc + item.length, 0);
        return "You passed an array of strings";
    }
    return 0; // Default case if neither string nor array
}
console.log(getItemLength("Hello")); // 5
console.log(getItemLength(["Hello", "World"])); // 10

/////////////////////////// 01:48:05 | 3.3 - Interfaces // /////////////////////

interface PersonX
{
    name: string;
    age: number;
    height?: string; // Optional property
    hello: () => string; // Method
}

const person: PersonX = {
    name: "Alice",
    age: 30,
    hello: () => `Hello, my name is ${person.name} and I am ${person.age} years old.`,
};

console.log(person.hello()); // "Hello, my name is Alice and I am 30 years old."

interface Employee extends PersonX
{
    employeeId: number;
}

const worker: Employee =
{
    name: "Bob",
    age: 25,
    employeeId: 12345,
    hello: () => `Hello, my name is ${worker.name}, I am ${worker.age} years old, and my employee ID is ${worker.employeeId}.`,
};

console.log(worker.hello()); // "Hello, my name is Bob, I am 25 years old, and my employee ID is 12345."

interface Manager extends Employee, PersonX
{
    employees: Employee[];
}

const manager: Manager = {
    name: "Charlie",
    age: 40,
    employeeId: 67890,
    employees: [worker],
    hello: () => `Hello, my name is ${manager.name}, I am ${manager.age} years old, and I manage ${manager.employees.length} employees.`,
};

function getPerson(person: PersonX): PersonX
{
    return {
        name: "Tim",
        age: 23,
        hello: () => `Hello, my name is ${person.name} and I am ${person.age} years old.`,
    };
}

// Example of a class implementing an interface
class Person
{
    protected name: string;

    constructor(x: string)
    {
        this.name = x;
        this.greet();
    }

    private greet()
    {
        console.log(`Hello, my name is ${this.name}`);
    }

    getName(): string
    {
        if (this.name.length < 2) return "Name is too short";
        return this.name;
    }

    setName(newName: string): void
    {
        this.name = newName;
    }
}

const p1 = new Person("Alice");


//////////////////// 02:10:30 | 4.2 - Classes & Interfaces //////////////////////

interface Animal
{
    speak(): void;
}

class Dog implements Animal
{
    private name: string;
    private color: string;
    static InstanceCount: number = 0;

    constructor(name: string, color: string)
    {
        this.name = name;
        this.color = color; // Using "this" to refer to the instance property
        Dog.InstanceCount++; // Using the class name to access the static property
    }

    speak(): void
    {
        console.log(`I am ${this.name} and I am ${this.color}.`);
    }

    test(): void
    {
        console.log(`This is a test method for ${this.name}.`);
    }

    static decreaseInstanceCount(): void
    {
        if (this.InstanceCount > 0)
        {
            this.InstanceCount--;
        }
    }
}

const dog: Animal = new Dog("Buddy", "brown");
dog.speak(); // "I am Buddy and I am brown."
//dog.test(); // "This is a test method for Buddy."

class Cat implements Animal
{
    speak(): void
    {
        console.log("Meow!");
    }
}

const cat = new Cat();
const animal: Animal = cat;
animal.speak(); // "Meow!"

const animals: Animal[] = [dog, cat];
animals.forEach(animal => animal.speak()); // "I am Buddy and I am brown." "Meow!"

function makeAnimalSpeak(animal: Animal): void
{
    animal.speak();
}
makeAnimalSpeak(dog); // "I am Buddy and I am brown."
makeAnimalSpeak(cat); // "Meow!"

///////////////// 02:21:15 | 4.3 - Static Attributes & Methods /////////////////

const dog1 = new Dog("Rex", "black");
const dog2 = new Dog("Max", "white");
console.log(`Total Dog instances: ${Dog.InstanceCount}`); // 3 (Rex, Max, Buddy)
Dog.decreaseInstanceCount();
console.log(`Total Dog instances after decrease: ${Dog.InstanceCount}`); // 2 (Rex, Max)

////////////////////////// 02:25:37 | 4.4 - Generics ////////////////////////////

class DataStore<T>
{
    private items: T[] = [];

    addItem(item: T): void
    {
        this.items.push(item);
    }

    getItem(index: number): T 
    {
        return this.items[index];
    }

    removeItem(index: number): void
    {
        this.items.splice(index, 1);
    }

    getAllItems(): T[]
    {
        return this.items;
    }
}

/* ***********************  */


function getValue<K, V>(key: K, value1: V, value2: V): V
{
    if (key)
    {
        return value1;
    }
    return value2;
}

const n1: number = 10;
const n2: number = 20;
console.log(getValue(true, n1, n2)); // 10

//////////////////////// 02:32:26 | 5.1 - Type Aliases /////////////////////////

// Custom type for non object based types
function compareCoordinates1
    (
        coord1: [number, number],
        coord2: [number, number]

    ): [number, number]
{
    return [coord1[0] - coord2[0], coord1[1] - coord2[1]];
}

type Coordinate = [number, number];

function compareCoordinates2
    (
        coord1: Coordinate,
        coord2: Coordinate
    ): Coordinate
{
    return [coord1[0] - coord2[0], coord1[1] - coord2[1]];
}

//////////////// 02:36:48 | 5.2 - Union & Intersection Types ////////////////////

interface BussinessPartner
{
    name: string;
}

interface ContactDetails
{
    email: string;
    phone: string;
}

// Intersection type combines multiple types into one.
type BusinnessContact = BussinessPartner & ContactDetails;

const contact: BusinnessContact = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
};

// Union type allows a variable to be one of several types.
interface Individual
{
    name: string;
    birthdate: Date;
}

interface Organization
{
    companyName: string;
    companyPhone: string;
}

type ContactType = Individual | Organization;
type CompConcat = Individual & Organization;

function addContact(contact: ContactType): void
{
    if ("birthdate" in contact)
    {
        console.log(`Adding individual contact: ${contact.name}, born on ${contact.birthdate}`);
    }
    else
    {
        console.log(`Adding organization contact: ${contact.companyName}, phone: ${contact.companyPhone}`);
    }
}

// Type guard to check if contact is an organization

function getName(contact: ContactType): string
{
    if ("birthdate" in contact)
    {
        return contact.name;
    }
    else
    {
        //return `Contact is an organization: ${contact.companyName}`;
        return isOrganization(contact)
            ? contact.companyName
            : "Unknown Organization";
    }
}

function isOrganization(contact: ContactType): contact is Organization
{
    return (contact as Organization).companyName !== undefined;
}

//////////////////////// 02:49:13 | 5.4 - Discriminated Unions ////////////////

// Tag Type (performing type narrowing): discriminated union
interface Warning
{
    type: "warning";
    msg: string;
}

interface Info
{
    type: "info";
    text: string;
}

interface Success
{
    type: "success";
    message: string;
}

type Log = Warning | Info | Success;


function logMessage(log: Log): void
{
    switch (log.type)
    {
        case "warning":
            console.log(`Warning: ${log.msg}`);
            break;
        case "info":
            console.log(`Info: ${log.text}`);
            break;
        case "success":
            console.log(`Success: ${log.message}`);
            break;
        default:
            const _exhaustiveCheck: never = log; // Ensures all cases are handled
            throw new Error(`Unhandled log type: ${_exhaustiveCheck}`);
    }
}


//////////////////////// 02:53:42 | 5.5 - Utility Types ////////////////////////

interface Todo
{
    id: number;
    completed: boolean;

    title: string;
    description: string;
}

type PartialTodo = Partial<Todo>;

/*** Partial makes all properties optional, allowing you to update only specific fields. ***/
const updateTodo = (todo: Partial<Todo>) =>
{
    todo.title = todo.title || "Default Title"; // Optional chaining
};

/*** Readonly: makes all properties read-only. ***/
const onlyReadTodo: Readonly<Todo> = {
    title: "Read Only Todo",
    description: "This todo cannot be modified",
    id: 1,
    completed: false
};
// onlyReadTodo.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property

/*** Record: creates an object type with specific keys and values. ***/
interface PageInfo
{
    title: string;
}

const pages: Record<string, PageInfo> = 
{
    home: { title: "Home Page" },
    about: { title: "About Page" },
    contact: { title: "Contact Page" }
};

const pageNumbers: Record<number, PageInfo> = 
{
    0: { title: "Home Page" },
    1: { title: "About Page" },
    2: { title: "Contact Page" }
};

/*** Pick: creates a type by picking specific properties from another type. ***/
type TodoPreview = Pick<Todo, "title" | "completed">;

const todoPreview: TodoPreview = 
{
    title: "Learn TypeScript",
    completed: false
};

/*** Omit: creates a type by omitting specific properties from another type. ***/
type TodoWithoutId = Omit<Todo, "id">;
const todoWithoutId: TodoWithoutId =
{
    title: "Learn TypeScript",
    description: "Understand utility types",
    completed: false
};

