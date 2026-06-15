// // const Promiser = new Promise((resolve,reject)=>{
// //    const Thirugural =  fetch("https://thirukkural.docs.apiary.io/#introduction/allowed-https-requests")
// //    const data = Thirugural.JSON()
// //    const inputany = Number(prompt("Enter Your Number"))
// //    if(inputany === 0){
// //       console.log("Enter Any Number Please")
// //    }
// //    else if(data > 1){
// //     console.log(data)
// //     inputany.textContent = data.value;
// //    }
// //    else{
// //     console.log("Something want wroung please check in your number")
// //    }

// // })

// // const Thirukural = ()=>{
// //     return new Promise((resolve,reject)=>{
// //         fetch(`https://thirukkural.docs.apiary.io/#introduction/allowed-https-requests/${user_id}`)
// //         .then(response => response.json())
// //         .then(data => resolve(data))
// //         .catch(error => reject(error))
// //     })
// // }
// // let user_id = 1;
// // Thirukural(user_id).then(data => {
// //     console.log("User id value")
// //     console.log(data)
// // })
// // .catch(error => {
// //     console.log("Enter the valied number")
// // })
// async function getKural(kuralId) {

//     try {

//         const response = await fetch(
//             `https://api-thirukkural.vercel.app/api?num=${kuralId}`
//         );

//         const data = await response.json();

//         console.log("Kural Information:");
//         console.log(data);

//     } catch (error) {

//         console.log("Error:", error);

//     }

// }
// let inputNumber = 1;

// getKural(inputNumber);
// the code call destructuring
// let lister = [1,2,3,4,5,6]
// let lister1 = [7,8,9,10,11]
// let total = [lister,...lister1]
// console.log(total)
// console.log(typeof(total))

// Array free build concepts
// let listers = [1,2,3,4,5];
// // push
// // listers.push(6,7,8,9,10)
// // pop
// listers.pop(5)
// console.log(listers)

// // splice
// let lister = [1,2,3,4,5]
// //slice
// // let lister1 = lister.slice(1,4)
// console.log(lister.indexOf(4));

// indoxOf why using
// let lister = ["Apple","Banana","Orange"]
// console.log(lister.indexOf("Orange"))

// let listers = [1,2,3,4,5,6]
// console.log(listers.indexOf(5))

// let lister12 = [2,3,5,7,9,6,9]
// lister12.sort()
// console.log(lister12)

// how to fetch the data
// async function apicall(){
//     let response = await fetch("https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json");
//     let data = await response.json();
//     console.log(data)
// }

// Large number
// let lister = [1,2,3,4,5];
// let li = lister[0];
// for(i = 0 ; i < lister.length ; i++){
//     if(lister[i] > li){
//         li = lister[i]
//     }
// }
// console.log(`Big Number: ${li}`)

// small number
// let lister = [1,2,3,4];
// let data = lister[0];
// for(i = 0; i < lister.length ; i++){
//     if(lister[i] < data){
//         data = lister[i]
//     }
// }
// console.log(data)

// async function syntax
// async function hello(){
//     return "Hii Selvam"

// }
// hello().then((data)=>{
//     console.log(data);
// });

// let User = [
//     { name : "Selvam" ,age : 22, location : "Chennai"}
// ]
// console.log() 

//find the largest number in array
// let lister = [1,2,3,4,5];
// let big = lister[0]
// for(i = 0; i<lister.length;i++){
//     if(lister[i] > big){
//         big = lister[i]
//     }
// }
// console.log(`The Big Number :${big}`)

// how many time same nuber stored in array list inside
// let lister = [1,,2,2,3,3,3,4,4,4,4,5,5,5,5,5]
// for(i = 0; i<lister.length ; i++){
//     for(j = 0; j<lister.length ; i++){
//         if(lister[i] == lister[j]){
//             console.log("Same value reapt again :",lister[i])
//         }
//     }
// }

//consoling array strings
// let lister = ["Apple","Banana","Orange","Grape"]
// console.log(lister)
// console.error(lister)
// console.error("Your run successfully")
// console.group(lister)
// console.log(typeof(lister))
// console.log(lister[0],lister[1])
// console.log(lister.pop("Orange"))
// console.log(lister.push("Goyya"))

// Array how to you use in real world project inside
// First i did learn i did create one array that array inside how to i filter the data that code i write now
// let Users = [
//     {name : "Selvam" , id : 1 , active : true},
//     {name : "Chandru" , id : 2 , active : false}
// ]
// let Useractivities = Users.filter(user => user.active)
// console.log(Useractivities)

// Find the prodect
// const User = [
//     {name : "Selvam" , id : 1 , Mobile : "Motorola edge 50 fusion"},
//     {name : "Chandru" , id : 2 , Mobile : "Oppo"},
// ]
// const Getting = User.find(go => go.id == 2)
// const getting = User.find(p=> p.id == 1)
// console.log(Getting)
// console.log(getting)

// Mapping
// const Users = [
//     "Selvam", "Chandru"
// ]
// const Useractivities = Users.map(user=>user.toUpperCase())
// console.log(Useractivities)

// Reduce
// const Prices = [100,200,300]
// const salary = [100,200,400]
// const total = Prices.reduce((sum,price)=> sum + price,0)
// const month = salary.reduce((sum,sala)=> sum + sala,0)
// const thefinalprofit = total + month
// console.log(total)
// console.log(month)
// console.log(`The Month Profit: ${thefinalprofit}`)

// Take 10 task in array side i finish the task
// Task 1 Remove Duplicate
// let a = [1,2,2,3,4,4]
// let final = [...new Set(a)]
// console.log(final)
// Task 2 
// let even = [1,2,3,4,5,6,7,8,9,10]
// let result = even.filter(sum=>sum % 2 == 0)
// console.log(result)

// Take 3
// let Student_mark = [85,88,89,87,97];
// let total = Student_mark.reduce((sum,mark)=>sum + mark)
// console.log(`Total Mark: ${total}`)

// Task4
// const shopping = [
//     {name : "Shirt" , price : 500 , qty : 2},
//     {name : "Shoes" , price : 1000 , qty :1}
// ]
// // let shirttotal = shopping.filter(shirt => shirt.price1 *2)
// // let shoestotal = shopping.reduce((sum,pricer)=> sum + pricer)
// // let result = shirttotal + shoestotal
// // console.log(result)
// let result = shopping.reduce((sum,item)=>{
//     return sum+(item.price * item.qty)
// },0)
// console.log(result)


// Discount format
// const cart = [
//   {
//     name: "Shirt",
//     price: 500,
//     qty: 2,
//     discount: 10
//   },
//   {
//     name: "Shoes",
//     price: 1000,
//     qty: 1,
//     discount: 5
//   }
// ];

// let totalQuantity = 0;

// const subtotal = cart.reduce((sum, item) => {

//   const itemTotal = item.price * item.qty;

//   const discountAmount = itemTotal * (item.discount / 100);

//   const finalPrice = itemTotal - discountAmount;

//   totalQuantity += item.qty;

//   return sum + finalPrice;

// }, 0);

// const tax = subtotal * 0.18;

// const finalAmount = subtotal + tax;

// console.log("Subtotal:", subtotal);
// console.log("Tax:", tax);
// console.log("Total Quantity:", totalQuantity);
// console.log("Final Amount:", finalAmount);


// Find 18+ using filter method
// let age = [12,14,15,17,18,20,22,24,25,28]
// let adultage = age.filter((adult)=> adult>=18)
// console.log(adultage)

//find method

// let Product = [
//   {name : "Lenovo" ,id : 1, price : 45000},
//   {name : "Asus Vivobook" , id :2 , price :60000 }
// ]
// let select = Product.find((brand)=>brand.price >=50000)
// console.log(select)

// Real word api like work
// let products = [
//   { name: "Phone", price: 20000 },
//   { name: "Laptop", price: 50000 }
// ];
// let product = products.filter((result)=>{
//   console.log(result)
// })

// Mapping syntax and code
// let number = [2,3,4,5]
// let result = number.map(res => res + 2)
// console.log(result)

// const user_detailse = ()=>{
//     const User = [1,2,3,4,5]
//     const result = User.filter((res)=>res <=3)
//     const result1 = User.filter((red)=>red%2==0)
//     console.log(result)
//     console.log(result1)
// }
// user_detailse()

// Find the one user data
// let User_found = [
//     {name : "Selvam" , id : 1 , age : 22 , location : "Javulikuppa" , role : "Intern" , Company : "Wisright Technology"},
//     {name : "Chandru" , id : 2 , age : 21 , location : "Sankarapuram" , role : "Full stack developer" , company : "Wisright Technology"}

// ]
// let result = User_found.filter((res)=>res.age ==21)
// console.log(result)
// console.log("Sended Successfully")

// Sort method
// let a = [1,2,4,5,6,8,9,8,7]
// let b = a.sort()
// console.log(b)
// let number = [1,2,3,4,5]
// let result = number.find((res,item)=>item <=4)
// console.log(result)


// let mama = 32600
// let me = 20200
// let total = mama + me
// console.log(`Total${total+500-55900}`)
// Spread operator
// let number = [1,2,3,4,5]
// let number1 = [6,7,8,9,10]
// let read = [...number,...number1]
// console.log(read)
// console.log(number,number1)
// // spread operator with object
// let user = {
//     name : "Selvam",
//     age : 22,
//     location:"Chennai"
// }
// let users = {
//     ...user,
//     parent_location : "Tholudur"
// }
// console.log(users)


// Day - 29
// Java script Objects concept
// let Student = {
//     name : "Selvam",
//     child_name : "Chandru",
//     age : 23,
//     location : "Sankarapuram",
//     Department : "MCA",
//     Role : "Python Full Stack Developer"
// }
// // Looping Format code
// for(let [key,value] of Object.entries(Student)){
//     console.log(key,value)
// }
// Keys only
// console.log(Object.keys(Student))
// console.log(Object.values(Student))
// console.log(Object.entries(Student))
// // console.log(typeof(Student))
// // console.log(Student.Role)
// console.log(Student["Department"])

// Method function inside object
// let Users = {
//     name : "Roshith",
//     greet : function(){
//         console.log("Hello Roshith")
//     }
// }
// Users.greet()

// Use This keyword
// let Person = {
//     name : "Selvam Sakthivel",
//     greet (){
//         console.log(this.name)
//     }
// }
// Person.greet()

// Chainning concept in Object
// let Student = {
//     name : "Dhiyash",
//     marks : {
//         tamil : 89,
//         english : 78,
//         maths : 90,
//         science : 85,
//     },
//     greet(){
//        console.log(`Hii ${this.name}`)
//     }
// }
// Student.greet();
// console.log(Object.keys(Student))
// console.log(Object.values(Student))
// console.log(Object.entries(Student))
// console.log(Student.marks?.tamil)
// console.log(Student.marks?.social_science)

// Day-29 task 3
// Create object

// const student = {
//   name: "Arun",
//   age: 20
// };

// console.log(student);

// // Adding properties
// student.city = "Chennai";
// student["course"] = "JavaScript";

// console.log("After Adding:", student);

// // Modifying properties
// student.age = 21;
// student["course"] = "React JS";

// console.log("After Modifying:", student);

// // Deleting properties
// delete student.city;

// console.log("After Deleting:", student);

// // Checking property existence

// // Method 1: in operator
// console.log("name" in student); // true
// console.log("city" in student); // false

// // Method 2: hasOwnProperty()
// console.log(student.hasOwnProperty("age")); // true
// console.log(student.hasOwnProperty("city")); // false

// // Method 3: checking undefined
// console.log(student.course !== undefined); // true
// console.log(student.city !== undefined); // false

// Strat with Day-30 ES6 Concept
// First Destructuring
// const Lister = [1,2,3,4,5]
// const Lister1 = [6,7,8,9,10]
// Lister1.pop(10)
// const final = [...Lister,...Lister1]
// console.log(final)

// Literal
// const Mrp_price = 99;
// const final = 95;
// console.log(`The MRP Price : ${Mrp_price} but the final price : ${final}`) 

// Destructuring
// const Person = {
//     name : "Selvam S",
//     age : 22,
//     location : "Sankarapuram",
//     department : "MCA",
// }
// const persons = (name,age,location)=>{
//   console.log(`Name : ${Person.name} and Age : ${Person.age} living location : ${Person.location}`)
// }
// persons(Person)
// below the code call for the destructuring simple syntax and logic of code
// let Dude = {
//     namer : "Selvam",
//     age : 22,
//     location : "Chennai"
// }
// let  {namer,age,location} = Dude
// console.log(namer)
// console.log(age)
// console.log(location)

// // string side how to work
// let Fav = ["Apple","Banana","Orage"]
// let [first,second,three] = Fav
// console.log(first)

// const Promiser = ()=>{
//     new Promise((resolve,reject)=>{
//         let ticket = true
//         if(ticket){
//             resolve("Your Ticket Booked Successfully")
//         }
//         else{
//             reject("Your Ticket Not Booked Yet Please try to another way")
//         }
//     })
//     Promiser.then(response((response)=>{
//         console.log(response)
//     }))
//     .catch(error((error)=>{
//         console.log(error)
//     }))
// }

// const goo = {
//     name : "Selvam",
//     mark : {
//         age : 22,
//         location : "Chennai"
//     }
// }
// console.log(goo?.mark?.age)

// Day-30 Asycronous functions
// Callback function
// const Codeup = (my_tell)=>{
//     console.log(`Propose : ${my_tell}`)
// }
// const Accept = (callback)=>{
//     const telling = "I am desided live will love with Codings and programing learning";
//     callback(telling)
// }
// Accept(Codeup)

// async function basic concept
// const Timer = ()=>{
//     setTimeout(()=>{
//         console.log("I love Code")
//     },2000)
// }
// Timer()

// const Promiser = new Promise((resolve,reject)=>{
//     const Hold = true;
//     setTimeout(()=>{
//         if(Hold){
//             resolve("Success")
//         }
//         else{
//             reject("Failer")
//         }
//     },2000)
// })

// Promise.then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// const Promiser = new Promise((resolve, reject) => {
//     const Hold = true;

//     setTimeout(() => {
//         if (Hold) {
//             resolve("Success");
//         } else {
//             reject("Failure");
//         }
//     }, 2000);
// });

// Promiser.then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// });

// Set time Interval
// setInterval(()=>{
//     const now = new Date();
//     console.log(now.toLocaleString())
// },1000)

// let dots = "";
// setInterval(()=>{
//     dots += ".";
//     console.log("Loading" + dots)
// },1000)

// let dots = "";
// let interval = setInterval(()=>{
//     if(dots.length <= 5){
//         dots += ".";
//         console.log("Loading" + dots)
//     }
//     else{
//          clearInterval(interval)
//         console.log("Completed")
//     }
// },1000)


// let dots = "";

// const intervalId = setInterval(() => {

//     if (dots.length < 5) {

//         dots += ".";

//         console.log("Loading" + dots);

//     } else {

//         clearInterval(intervalId);

//         console.log("Completed");

//     }

// }, 1000);

// Promise with settimeout and setinterval

// const Promiser = new Promise((resolve,reject)=>{
//     const besiness = true;
//     const Loader = setInterval(()=>{
//         console.log("Find Your After Proccesing")
//     },1000)
//     setTimeout(()=>{
//         if(besiness){
//             resolve("Besiness Is Going Good")
//         }
//         else{
//             reject("Besiness Is Going Good But Your Consistency Missing Sometime")
//         }
//     },30000)
// })
// Promiser.then((response)=>{
//     clearInterval(Loader);
//     console.log(response)
// })
// .catch((error)=>{
//     clearInterval(Loader);
//     console.log(error)
// })


// const besiness = true;

// const Loader = setInterval(() => {
//     console.log("Find Your After Processing...");
// }, 1000);

// const Promiser = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         if (besiness) {
//             resolve("Besiness Is Going Good");
//         } else {
//             reject("Besiness Is Going Good But Your Consistency Missing Sometime");
//         }

//     }, 5000);

// });

// Promiser
// .then((response) => {

//     clearInterval(Loader);

//     console.log(response);

// })
// .catch((error) => {

//     clearInterval(Loader);

//     console.log(error);

// });


// 
// async function getData(){
//     return "Hello";
// }
// getData().then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Async function with if-else condition statement using now
// async function getData(){
//    let my_budget = 2500;
//    let actual_budget = 4500;
//    if(my_budget < actual_budget){
//     console.log("The actual price should be 2500, but you are charging 4500, which is too expensive.")
//    }
//    else{
//     console.log("Something want wroung")
//    }
// }
// getData().then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// async function with callback and promise

// const Promiser = ()=>{
//     return new Promise((resolve)=>{
//        setTimeout(()=>{
//         console.log("Hello Guys")
//        },2000)
//     })
// }
// async function getData(){
//     const result = await  Promiser()
//     console.log(result)
// }
// getData()

// My Own Logic with Promise Inside
// const Promiser = ()=>{
//     return new Promise((resolve,reject)=>{
//         const Items = true;
//          const Interval = setInterval(()=>{
//         console.log("Searching In your Item")
//     },1000)
//         setTimeout(()=>{
//             clearInterval(Interval);
//             if(Items){
//                 resolve("Your Order Item Is Available")
//             }
//             else{
//                 reject("Your Items Is UnAvailble")
//             }
//         },2000)
//     })
// }
// Promiser().then((response)=>{
    
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// async functin with Promise
// async function Promiser(){
//     return new Promise((resolve,reject)=>{
//         let sk_group_of_company = true;
//         let dots = "";
//         let Interval = setInterval(()=>{
//             if(dots.length < 5){
//                 dots += ".";
//                 console.log(`Finding Items ${dots}`)
//             }
//         },1000)
//         setTimeout(()=>{
//             clearInterval(Interval)
//             if(sk_group_of_company){
//                  resolve("Your Searching Item Available Currently")
//             }
//             else{
                
//                  reject("Not Yet Currently")
//             }
//         },4000)
//  })
// }
// Promiser().then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Normel Promise
// const Promiser = new Promise((resolve,reject)=>{
//     let Ticket = true;
//     if(Ticket){
//         resolve("Your Ticket is Availble")
//     }
//     else{
//         reject("Not Available")
//     }
// })
// Promiser.then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Revise callback
// function getData(name){
//     console.log(`The Developer Name : ${name}`)
// }
// function setData(callback){
//     let user = "Selvam";
//     callback(user)
// }
// setData(getData)

// const Promiser = ()=>{
//     return new Promise((resolve,reject)=>{
//         let eat = true;
//         let dots = "";
//         let Interval = setInterval(()=>{
//             if(dots.length < 5){
//                 dots += ".";
//                 console.log(`Typing ${dots}`)
//             }
//         },1000)
//         setTimeout(()=>{
//             clearInterval(Interval)
//             if(eat){
//                 resolve("I have eated")
//             }
//             else{
//                 reject("No..I will Eat Now")
//             }
//         },4500)
//     })
// }
// Promiser().then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Callback
// function getData(name,age,location){
//     console.log(`The Developer Name : ${name}`)
//     console.log(`The Developer Age : ${age}`)
//     console.log(`The Developer Location : ${location}`)
// }

// // Callback Function
// function setData(callback){
//     let name = "Selvam Sakthivel";
//     let age = 22;
//     let location = "Sankarapuram"
//     callback(name,age,location)
// }
// setData(getData)

// callback with for 
// function getdata(lets){
//     for(i = 0; i <= lets ;i++){
//         console.log(i)
//     }
// }
// function setData(callback){
//     let lets1 = 10;
//     callback(lets1)
// }
// setData(getdata)

// DAY - 32 Promise concept
// Promise all
// let p1 = Promise.resolve("Login Success")
// let p2 = Promise.resolve("API Called")
// let p3 = Promise.resolve("Data Stored")

// Promise.all([p1,p2,p3])
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Promise.race
// const Promiser = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{console.log("API Called")},2000)
//     })
// }
// const Promiser1 = ()=>{
//     return  new Promise((resolve)=>{
//         setTimeout(()=>{console.log("Data Base sebd the data")},3400)
//     })
// }
// Promise.race([Promiser,Promiser1])

// .then((response)=>{
//     console.log(response)
// })

//Promise.race
// const p1 = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("API Called")
//         },2000)
//     })
// }
// const p2 = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("DataBase send")
//         },3000)
//     })
// }
// Promise.race([p1(),p2()])
// .then((response)=>{
//     console.log(response)
// })


// The real time Product user name and password
// const userData = (username,password)=>{
//     console.log("Data Status finding")
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(username === "Admin" && password === "1234"){
//                 resolve("Login Successfully...")
//             }
//             else{
//                 reject("Something Want Wroung")
//             }
//         },2000)
//      })
// }
// // using Primise
// userData("Admin","1234")
// .then((response0=>{
//     console.log(response0)
// }))
// .catch((error)=>{
//     console.log(error)
// })

// My Logical thinking Based One Task
// salary based one task
// Developer Story  
// const Promiser = ()=>{
//     return new Promise((resolve,reject)=>{
//         const Interval = setInterval(()=>{
//             console.log("Find The First Mark")
//         },2000)
//         setTimeout(()=>{
//             clearInterval(Interval)
//             let Mark = 65;
//             let Students_list = ["Selvam","Roshith","Dhiyash"]
//             for(i=0;i<Students_list.length;i++){
//              if(Mark < 95){
//                 resolve(`First Mark : ${Students_list.indexOf(0)}`)
//             }
//             else if(Mark > 78){
//                 resolve("2 Mark")
//             }
//             else if(Mark > 54){
//                 resolve("3 Mark")
//             }
//             else if(35 < Mark){
//                 resolve("Fail")
//             }
//             else{
//                 reject("Fail")
//             }
//             }
//         },4000)
//     })
// }
// Promiser().then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// 

// Object 
// let Student = [
// {
//     name : "Selvam",
//     mark : 85
// },
// {
//     name : "Roshith",
//     mark : 99
// },
// {
//     name : "Santhosh",
//     mark : 89
// }
// ]
// for(let i = 0 ; i < Student.length ; i++){
//     console.log(`Name : ${Student[i].name}`)
//     console.log(`Mark : ${Student[i].mark}`)
// }
// Set the proper code

// Corect Code
// let Student_list = ["Selvam", "Roshith", "Dhiyash"];
// let Marks = [95, 88, 76];

// for (let i = 0; i < Student_list.length; i++) {

//     if (Marks[i] >= 90) {
//         console.log(`${Student_list[i]} got First Mark`);
//     }

//     else if (Marks[i] >= 80) {
//         console.log(`${Student_list[i]} got Second Mark`);
//     }

//     else {
//         console.log(`${Student_list[i]} got Third Mark`);
//     }

// }

// Normal Async function with await
// async function getData(){
//     let name = "Selvam"
//     let fullname = await name
//     console.log(`Developer Full Name : ${fullname}`)
// }
// getData()

// let Lister = [34,56,87,84,78]
// let find = Lister[0]
// for(let i = 0 ; i < Lister.length ; i++){
//     if(Lister[i] < find){
//         find = Lister[i]
//     }
// }
// console.log(`Smallest Number : ${find}`)

// Promise with API
// const Promiser = new Promise(()=>{
//     const Interval = setInterval(()=>{
//         console.log("Calling API...")
//     },2000)
//     setTimeout(()=>{
//         clearInterval(Interval)
//         let application = fetch('https://jsonplaceholder.typicode.com/users')
//     },4000)
// })
// Promiser.then((application)=>application.json())
// .then((data)=>{
//     console.log(data)
// })
// .catch(error => console.log(error))

// Promise with API
// const Promiser = ()=>{
//     return new Promise((resolve,reject)=>{
//         let rain = true;
//         if(rain){
//             resolve("You Take the Umberlla")
//         }
//         else{
//             reject("You Enjoy the sunset today...")
//         }
//         let application = fetch('https://jsonplaceholder.typicode.com/users')
//     })
// }
// Promiser().then(response => response.json())
// .then((data)=>{
//     console.log(data)
// })
// .catch(error => console.log(error))

// const Promiser = () => {

//     return new Promise((resolve, reject) => {

//         let rain = true;

//         if(rain){

//             fetch('https://jsonplaceholder.typicode.com/users')

//             .then(response => response.json())

//             .then(data => {
//                 resolve(data);
//             })

//             .catch(error => {
//                 reject(error);
//             });

//         }
//         else{

//             reject("You Enjoy the sunset today...");

//         }

//     });

// }

// Promiser()

// .then((data) => {

//     console.log("User Data:");

//     console.log(data);

// })

// .catch((error) => {

//     console.log(error);

// });

// MY PROMISE
// const Promiser = ()=>{
//     return new Promise((resolve,reject)=>{
//         let rain = true;
//         if(rain){
//             fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then((data)=>{
//                 resolve(data)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//         }
//         else{
//             reject("Something went wroung")
//         }
//     })
// }
// Promiser().then((data)=>{
//     console.log("User data")
//     console.log(data)
// })
// .catch(error => {
//     console.log(error)
// })

// Find the number
// let number = [12,123,24,35,45,65]
// let number1 = [45,56,89,78,76,23,45]
// let find = number.concat(number1)
// let final = Math.min(...find)
// console.log(`The Smallest Number : ${final}`)


//today i have to learn async function and try,catch how to work that concept i have to lear

// let number  = 78;
// let number1 = 79;

// try{
//     console.log(number)
//     throw("200 ok")
// }
// catch{
//     console.error("Typing error")
// }
// finally{
//     console.log("The result Executed")
// }

// let promiser = ()=>{
//     return new Promise((resolve,reject)=>{
//         let message = true;
//         try{
//             if(message){
//                 resolve("I am Available today you will call Anytime")
//             }
//         }
//         catch{
//             else{
//                 reject("I'M not availble today sorry")
                
//             }
//         }
//     })
// }

// let Promiser = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({user : "Selvam" , age : 22})
//         },2000)
//     })
// }

// async function Promisers(){
//     try{
//         let user = Promiser()
//         console.log(user)
//     }
//     catch(error){
//         console.error(`Error : ${error.message}`)
//     }
// }
// Promisers()

// assssending and desending order how to convert 
// let number = [1,2,3,4,5]
// number.sort((a,b)=>a-b)
// console.log(`Asending order : ${number}`)
// number.sort((a,b)=>b-a)
// console.log(`Desending Order : ${number}`)


// let Numbers = [1,2,3,4,5,6,7,8,9,10]
// let Numbers1 = [11,12,13,14,15,16,17,18,19,20]
// let compain = [...Numbers,...Numbers1]
// if(compain < 10){
//     console.log(`Single Digit Customers : ${compain}`)
// }
// else if(compain > 10){
//     console.log(`Touple Digit Order Customer : ${compain}`)
// }
// else{
//     console.log("Something want Wroung")
// }

// filter 
// let Numbers = [1,2,3,4,5,6,7,8,9,10]
// let Numbers1 = [11,12,13,14,15,16,17,18,19,20]
// let compain = [...Numbers,...Numbers1]

// let single =  [];
// let douple = [];

// for(let num of compain){
//     if(num < 10){
//         single.push(num)
//     }
//     else if(num > 10){
//         douple.push(num)
//     }
// }
// console.log(`Single Digit Customers : ${compain}`)
// console.log(`Touple Digit Order Customer : ${compain}`)

// Async function with try catch api fetch concept code
// async function Application(){
//     try{
//          let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//           let data = await response.json()
//           console.log(data)
// }


// catch(error){
//     console.log(error)
// }
//     }
// Application()

// How to sort string letters
// let Letters = ["r","h","e","a","b","c","d","v"]
// Letters.sort()
// console.log(Letters)

// create a function 
// let listers = [1,2,3,4,5]
// console.log(listers.length)
// console.log(listers.concat(2))
// console.log(listers.indexOf(1))

// API & Promises concept code
// GET Method
// async function Getdata(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     try{
//         if(response.ok){
//             throw new Error("Requist Failer");
            
//         }
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// Getdata()

// arrow function with get method
// const Getdata = async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     try{
//         if(!response.ok){
//             throw new Error("Requist Failer")
//         }
//          const data = await response.json();
//          console.log(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// Getdata()
// Get Mthod Code
// const Getting = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/12")
//   try{
//     if(!response.ok){
//       throw new Error("Something want Wroung")
//     }
//     const data = await response.json()
//     console.log(data)
//   }
//   catch(error){
//     console.log(error)
//   }
// }
// Getting()
// Get Method
// const Getter = async()=>{
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//   try{
//     if(!response.ok){
//       throw new Error("Requst Failer")
//     }
//     const data = await response.json()
//     console.log(data)
//   }
//   catch(error){
//     console.log(error)
//   }
// }
// Getter()

// Get Method Again One time 
// const Getters = async()=>{
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/5")
//   try{
//     if(!response.ok){
//       throw new Error("Something want wroung")
//     }
//     const data = await response.json()
//     console.log(data)
//   }
//   catch(error){
//     console.log(error)
//   }
// }
// Getters()
// Post Method with aync function

// const Postdata = async ()=>{
//     const users = {
//        id : 1,
//        name : "Selvam",
//        age : 23,
//        Department : "MCA"
//     }
// //     // Post method syntax
//     const response = await fetch("https://jsonplaceholder.typicode.com/users",
//         {
//             method : "POST",
//             headers: {
//         "Content-Type": "application/json"
//       },
//             body : JSON.stringify(users)
//         }
//     );
//     const data = await response.json();
//     console.log(data)
// }
// Postdata()

// Post Method Merge OLD API I inside
// const Posting = async()=>{
//   const users = {
//     id : 12,
//     name : "Selvam Sakthivel",
//     age : 22 , 
//     location : "Kallakurichi",
//     Department : "MCA"
//   }
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/12",
//     {
//       method : "POST",
//       header : {
//         "Content-Type" : "Application/json"
//       },
//       body : JSON.stringify(users)
//     }
//   );
//   const data = await response.json()
//   console.log(data)
// }
// Posting()

// The correct POST Method Code
// const Posting = async () => {
//   const users = {
//     id: 12,
//     name: "Selvam Sakthivel",
//     age: 22,
//     location: "Kallakurichi",
//     Department: "MCA"
//   };

//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(users)
//     }
//   );

//   const data = await response.json();
//   console.log(data);
// };

// Posting();
// async function createUser() {
//   const user = {
//     name: "selvam",
//     email: "selvam@example.com",
//     location : "Chennai",
//     department : "MCA"
//   };

//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users",
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(user)
//     }
//   );

//   const data = await response.json();
//   console.log(data);
// }

// createUser();

// // Delete Method
// async function Deletedata(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users",
//        {
//         method : "DELETE"
//        }
//     );
//     console.log("Deleted : ", response.ok)
// }
// Deletedata()

// async function deleteUser() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1",
//     {
//       method: "DELETE"
//     }
//   );

//   console.log("Deleted:", response.ok);
// }

// deleteUser();

// HTTP Method and API

// Both Are Merge and how to i see my detailse
const mergeUsers = async () =>{
     const users = {
    name: "selvam",
    email: "selvam@example.com",
    location : "Chennai",
    department : "MCA"
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/users",
    {
      method : "POST",
      headers : {
        "Content-Type" : "Application/json"
      },
      body : JSON.stringify(users)
    }
  );
  const data = response.json()
  console.log(data)
}
mergeUsers()
