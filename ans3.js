
const devs = [

    {
        id       : 1,
        name     : 'Opurbo',
        age      : 25,
        skill    : 'Mearn-stack developer',
        location : 'Mirpur'
         
    },
    {
        id       : 2,
        name     : 'Mehejabin',
        age      : 25,
        skill    : 'Laravel developer',
        location : 'Uttora'
         
    },
    {
        id       : 3,
        name     : 'Afran nisho',
        age      : 22,
        skill    : 'Django developer',
        location : 'Bonani'
         
    },
    {
        id       : 4,
        name     : 'Faiya Farin',
        age      : 26,
        skill    : 'GoLan developer',
        location : 'Dinajpur'
         
    },
    {
        id       : 5,
        name     : 'Fairoj Imroj Trisha',
        age      : 21,
        skill    : 'Wordpress developer',
        location : 'Rajshahi'
         
    },
    {
        id       : 6,
        name     : 'Mosharof korim',
        age      : 28,
        skill    : 'Java developer',
        location : 'Dhaka'
         
    },
];


let developerData = JSON.stringify(devs);
console.log(developerData);
localStorage.setItem('devs', developerData)