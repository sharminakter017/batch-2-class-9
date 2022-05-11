
    const Manager =  [
        {
           id       : 1,
           name     : "Sharmin Sultana",
           age      : 21,
           skill    : "Asia Bank Assistant",
           location : "Dhaka"
        },
        {
            id       : 2,
            name     : "Soikot",
            age      : 23,
            skill    : "Asia Bank Officer",
            location : "Uttora"
         },
         {
            id       : 3,
            name     : "Mou",
            age      : 19,
            skill    : "Asia Bank Manager",
            location : "Bonani"
         },
         {
            id       : 4,
            name     : "Sajid Sorkar",
            age      : 25,
            skill    : "Bank Super-Baijer",
            location : "Dinajpur"
         },
         {
            id       : 5,
            name     : "Ayman rohman",
            age      : 22,
            skill    : "Asia Bank Assistant",
            location : "Uttora"
         }
    ];


    let emplyee = JSON.stringify(Manager);
    console.log(emplyee);



    let ob  = `[{"id":1,"name":"Sharmin Sultana","age":21,"skill":"Asia Bank Assistant","location":"Dhaka"},{"id":2,"name":"Soikot","age":23,"skill":"Asia Bank Officer","location":"Uttora"},{"id":3,"name":"Mou","age":19,"skill":"Asia Bank Manager","location":"Bonani"},{"id":4,"name":"Sajid Sorkar","age":25,"skill":"Bank Super-Baijer","location":"Dinajpur"},{"id":5,"name":"Ayman rohman","age":22,"skill":"Asia Bank Assistant","location":"Uttora"}]`;


    let entree = JSON.parse(ob);
    console.log(entree);

    // localstrage =============================================
    let calldata = JSON.parse(localStorage.getItem('familyphone'))
    console.log(calldata)
