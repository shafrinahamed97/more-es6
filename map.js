const numbers = [2,8,4,6,3];



function getDoubles(numbers)
{
    const output = [];
    for(const number of numbers)
    {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output
}

function doubleItold(number)
{
   return number * 2;
}

const doubleIt = num => num*2;
const makeDoubleDirect = numbers.map(num => num*3);

console.log(makeDoubleDirect);

/*
   1. get an array
   2. for every elements of the of the array do something
   3. store the result in an array
   4. return the result array
*/
// const result = getDoubles(numbers);
// console.log(result);
// console.log(makeDouble);

