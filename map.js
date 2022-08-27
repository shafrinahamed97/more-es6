const numbers = [2,8,4,6,3];



function getDoubles(numbers)
{
    const output = [];
    for(const number of numbers)
    {
        const doubled = number*2;
        output.push(doubled);
    }
    return output
}
const result = getDoubles(numbers);
console.log(result)

