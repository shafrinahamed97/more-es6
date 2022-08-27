const numbers = [12,56,88,44];
const half = numbers.map(n => n/2);
const third = numbers.map(x => x/3);
// console.log(half);
// console.log(third);

const friends = ['Tom Hanks','Tom brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);

const nameLengths = friends.map(friend=>friend.length);
// console.log(nameLengths);

const products = [
    {
        id: 1, name:'laptop', price:45000
       
    },
    {
        id: 1, name:'mobile', price:80500
       
    },
    {
        id: 1, name:'watch', price:45000
       
    },
    {
        id: 1, name:'tablet', price:23000
       
    },
];
// const items = products.map(product=>console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(items);
console.log(prices);