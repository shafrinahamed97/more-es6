const users = [
    {id:1, name:'Shakib', job:'Engineer'}
]

console.log(users[0].name);

const data = {
    count: 6000,
    data:[
        {
            id:1, name:'shafrin', job:'Network Engineer'
        },
        {
            id:2, name:'Ahamed', job:'Software Engineer'
        },
        
    ]
}

const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id:5001,
    name:"Thomas alba edison",
    address:
    {
        street:{
            first:'35/A kocukhet lane',
            second:'third floor',
           third:'right side'

        },
        postoffice: 'cantonmnet',
        city:'Dhaka'
    }
}

const userFloor = user.address?.stree?.second;
console.log(userFloor);