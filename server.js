console.log("Server file is running!!!");

// first function declare
// function add(a,b)
// {
//     return a+b;
// }

// second type of the function declare
// var add=function(a,b)
// {
//     return a+b;
// }


// third type of the function declare

//var add=(a,b)=>{return a+b}; // arrow function

//var add=(a,b)=> a+b;// short hand function

// let result=add(25,7);
// console.log(result);

(function()
{
    console.log('Yogesh gavade');
})();



// function callback()
// {
//     console.log("Yogesh Gavade is the TKIET BOSS");
// }

// const add=function(a,b,callback)
// {
//     var result=a+b;
//     console.log(result);
//     callback();
// }

// add(25,65,callback);


// const add=function(a,b,prince)
// {
//     var result=a+b;
//     console.log(result);
//     prince();
// }

// add(2,3, function(){
//     console.log("Yogesh Start the Server!!!!");
// });


// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("geeting.txt",'Hi'+user.username+'!',()=>
// {
//     console.log("file is created!!!");
// });

// console.log(os);
// console.log(fs);

// files is imported from the notes.js
const notes=require('./notes.js');

var age=notes.age;
console.log(age);
 