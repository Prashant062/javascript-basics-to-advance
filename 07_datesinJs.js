// Dates

let myDate = new Date()
// console.log(myDate.toString());            //  Tue Aug 20 2024 23:28:20 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());       //  Tue Aug 20 2024
// console.log(myDate.toLocaleString());     //   8/20/2024, 11:29:39 PM
// console.log(typeof myDate);               // object

// let myCreatedDate = new Date(2024, 0, 23)
// console.log(myCreatedDate);               // 2023-01-22T18:30:00.000Z
 
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)      // 1/23/2024, 5:03:00 AM
// let myCreatedDate = new Date("2024-01-14")          // 1/14/2023, 5:30:00 AM
// let myCreatedDate = new Date("01-14-2024")         // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// let myCreatedDate = new Date("01-14-2024")   
// console.log(myCreatedDate.getTime());  

// console.log(Math.floor(Date.now()/1000));     // in seconds   1724214268

let newDate = new Date()
// console.log(newDate);                     //2024-08-21T04:25:26.007Z
// console.log(newDate.getMonth() + 1);     // 8
// console.log(newDate.getDay());           // 3
 
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})

