function add(x: number, y: number): number
{
    return x + y;
}

function sub(x: number, y: number): number
{
    return x - y;
}

function test()
{
    return "This is a default export function";
}

export { add, sub };
export default test;