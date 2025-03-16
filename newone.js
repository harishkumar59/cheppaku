

//let name = "hello";
//console.log(name);


//var age = 23;
//console.log(age);

// don't use var for variables 
//only use let 

let newName = "ajay new name ";
const h = "old name";

const mm = "neeew";

console.log(h);
console.log(newName)

console.log(newName)
console.log(newName)
 //DATA TYPES 


 //premitive dadta type 7
 // 1. number 
//  2. string 
//  3. bolean
// 4.  undefined 
// 5. null
//6. bign int


// NON PRIMEITIVE 

// OBJECTS  KEY VALUE  PAIRS 
// ARRAYS 
// 


const student = {
    fullNames: "rahul",
    age : 29,

};
console.log(student);
console.log(typeof student);
console.log(student["fullNames"]);
//console.log(student.age);

student["age"] = student["age"] + 1;
console.log(student.age);
console.log("last commit")

// const variable cannot be changed 
// const object variabe can be modified 


const pen = {
    title : "helo",
    rating : 6,
    offer :787,

};

console.log(pen);
console.log(typeof pen);

//you can add strings with +
console.log("har"+"ish");


const profile ={
    user_name : "shradha khapra",
    is_following : false,
    
};
console.log(profile);

console.log(typeof profile["is_following"]);