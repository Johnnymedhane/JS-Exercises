



// Adding items to cart 

let CarQuantity = 0;

function myfunction1() {
 
  console.log(CarQuantity);
  document.getElementById('span1').innerHTML = CarQuantity;
 
  
}


function myfunction2() {
  CarQuantity++;
   document.getElementById('span2').innerHTML = CarQuantity;
   console.log(`car quantity2: ${CarQuantity}`);
 }
 function myfunction3() {
  CarQuantity+=2
   document.getElementById('span3').innerHTML = CarQuantity;
   console.log(`car quantity3: ${CarQuantity}`);
   
 }
 function myfunction4() {
  CarQuantity+=3
   document.getElementById('span4').innerHTML = CarQuantity;
   console.log(`car quantity4: ${CarQuantity}`);
 }
 function myfunction5() {
  CarQuantity = 0;
   console.log(`cart reset: ${CarQuantity}`);
   console.log(`car quantity5: ${CarQuantity}`);
 }

//  console.log(`${5 == "five"}: OK`) ;

//  let a = 1;
//  let d =a + 2;
//  let b = 7 * a;
//  console.log(b);
//  let s = 7 * a; console.log(s);



// events


 let btn = document.querySelector('#btn');

btn.addEventListener('click', function(e) {
    console.log(e.type);
    e.preventDefault();
});

let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});




// objects

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,
  
       // by key "age" store value 30
};

// alert( user.name ); // John
// alert( user.age ); // 3

user.isAdmin = 23;
user["likes birds"] = null;
console.log(user.name);
console.log(user["likes birds"])

// delete
delete user["likes birds"];
console.log(user["likes birds"])



let key = "likes birds";

user[key] = true;
// alert( user[key] );


let user2 = {
  name: "John",
  age: 30
};

let key2 = "name";

// access by variable
//  alert( user[key2] ); // John (if enter "name")
console.log(key2);

// COMPUTED properties:
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

// alert( bag.apple ); // 5 if fruit="apple"
console.log(bag[fruit]);


// EXERCISE
let exerUser = {};

exerUser.name = "Jone";
exerUser.surname = "Smith";
exerUser.name = "Pete";
console.log(exerUser.name);
delete exerUser.name;


let schedule = {};
function isEmpty(obj) {
  for (let kry in obj){
  return false;
  }
  return true;
}


// alert(isEmpty(schedule));

schedule["8:30"] = "get up";
// alert(isEmpty(schedule));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

function sumSalaries(add) {
  for(let key in add){
    sum += add[key];
  }
  return sum;
}
console.log(sumSalaries(salaries));


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {

  for (let key in obj) {
    if( typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
  
}
multiplyNumeric(menu);
console.log(menu.width);



  const obj  = {
    name: "johnny",
  age: 32,

  sayHay: function() {
    console.log(`hey my name is ${obj.name} i'm  ${obj.age} old.`);
  },
  
  };
  

console.log(obj.sayHay());

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj
}

const name = createPerson("johnny");
const intro = createPerson("dani");


/*function createPerson(name) {
  
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
 
}

const name = new createPerson("johnny");
const intro = new createPerson("dani");
*/


// TASK



const cat = {

  name: "Bertie",
  breed: "Cymric",
  color: "white",
  // greeting: function () {}
  greeting() {
    console.log('Meow!');
  },
};

cat.greeting();
cat.color = "black";
let catName = cat["name"];

const band = {
  name: "The migos",
  nationality: "USA",
  genre: "hip hop",
  members: 3,
  formed: "2010",
  split: false,
  albums: [albm1 = {
    name: "bad and bitch",
    date: "2015",
  }, album2 = {
    name: "3 way",
    date: "2016",
  },
  album3 = {
    name: "culture",
    date: "2023",
  }
]
};

let bandInfo = `${band.name} is a group from ${band.nationality} that plays ${band.genre} \n
. They have been active from ${band.formed} \n to ${band.split === false ? "present" : band.split} \ntheir first album 
 "${band.albums[0].name} was relesed in ${band.albums[0].date}.`;
  

// MAP
const arr =  [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]


const vegeArray = ["onion", "tomato", "salad", "cavage", "cucamber", "paper"];
const filterArry = vegeArray.filter((fil) => fil === "tomato" || fil === "onion" || fil === "cucamber");


const arr2 =  [1, 2, 4, 6, 8, 20, 6, 9, 34, 3];

function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
console.log(sumOfTripledEvens(arr2));

// short way to do this function useing array methods "map filter reduce"!

const filterArray = arr2.filter((item) => item % 2 === 0 );
const mapArray = filterArray.map((item) => item * 3);
const reduceArray = mapArray.reduce((total, currentValue) => total + currentValue)

//  or
function sumValue(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
};
sumValue(arr2);


// Array methods
// Add/remove items
let list = ["I", "go", "home"];
delete list[1];
list.splice(1, 0, "go");
list.splice(2, 1);
list.splice(0, 2,"lets", "stay");
let removed = list.splice(0, 2);
list.splice(0, 0, "we", "need", "to", "go");
// removed = list.slice();
// removed.splice(0, 2);

// slice

 const sliceList = list.slice(1, 3);

//  concat



const list1 = ["lets", "try", "it"];
const list2 = [ 5, 45, 3];

const all = [2, 32, 4].concat(list2).concat(list1);

// concat with object

/*const list1 = ["lets", "try", "it"];
const list2 = [ 5, 45, 3];

const all = [2, 32, 4].concat(list2).concat(list1);

// concat with object

let arrList = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arrList.concat(arrayLike) ); // 1,2,[object Object]*/
// to fix it

let arrList = [1, 2];

let arrayLike = {
  
  0: "something",
1: "43",
length:2,
   
};
const concatList = arrList.concat(Array.from(arrayLike));
