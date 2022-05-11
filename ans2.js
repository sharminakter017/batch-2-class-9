 
 const familyphone = [


    {
        id           : 1,
        name         : 'Sharmin',
        location     : 'Mirpur',
        age          : 20,
        Phone_number : '01790169442'
    },
    {
        id           : 2,
        name         : 'Sanjida',
        location     : 'Dhaka',
        age          : 22,
        Phone_number : '01850169446'
    },
    {
        id           : 3,
        name         : 'Trisha',
        location     : 'Noakhali',
        age          : 23,
        Phone_number : '01990169479'
    },
    {
        id           : 4,
        name         : 'Pushpa',
        location     : 'Lokkhipur',
        age          : 19,
        Phone_number : '01590169456'
    },
    {
        id           : 5,
        name         : 'Saimun',
        location     : 'Randunimura',
        age          : 20,
        Phone_number : '01990169429'
    },


 ];

 let phone = JSON.stringify(familyphone);

 console.log(phone);
 localStorage.setItem('familyphone',  phone)