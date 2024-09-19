const pepople = ["Beck, Glenn", "Becker, Carl", "Beckett, Samuel", 
"Beddoes, Mick", 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachew', 
'Belloc, Hilaire', 'Bellow, Saul', 'Benchely, Robert', 'Beneson, Peter', 
'Ben-Gurion, David',
"Benjamin, Walter", 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 
'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving',
 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin',
'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 
'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 
'Blair, Robert', 'Blair, Tony', "Blake, William"];

const inventor = [
{ first: "Albert", last: "Einstein", year: 1879, passrd: 1955},
{first: "Isaac", last: "Newton",  year: 1645, passrd: 1727},
{first: "Galileo", last: "Galiled",  year: 1564, passrd: 1642},
{first: "Marie", last: "Curie",  year: 1867, passrd: 1954},
{first: "Johannes", last: "Kepler",  year: 1571, passrd: 1630},
{first: "Micolaus", last: "Copernicus",  year: 1473, passrd: 1543},
{first: "Max", last: "Plancki",  year: 1858, passrd: 1946}
];


// 1. filter the list of inventors for those who were born in the 1500's.

 const filterInventor = inventor.filter(item => item.year >= 1571 && item.year <=1600);

// 2. give us an array of the inventory first snd last names.
const FullnameInventory = inventor.map(fullname => fullname.first  + " " + fullname.last);



// 3. sort the inventors by birthdate, oldest to youngest


const sortInventorsByAge = inventor.sort((a, b) => a.year - b.year);

// console.table(sortInventorsByAge);








const sorted = inventor.sort((a, b) => a.year - b.year ? 1 : -1 ); 
// console.table(sorted);
// or const sorted = inventor.sort((a, b) => a.year > b.year ? 1 : -1); 

//  4. how many years did all the inventors live.

const inventorsYears = inventor.reduce((years, inve, index) => years + (inve.passrd - inve.year), 0 );


console.log(inventorsYears);


for(let i =inventor.length; i > 0 ; i--) {
    // console.log(i);
}

// 5. sort inventors by years lived

const livedYear = inventor.sort(function (a, b) {
   return a.year - a.passrd > b.year - b.passrd ? 1 : -1;
    
});
console.table(livedYear);

// 6. creat a list of boulevards in paris that contain "de" anywhere in the name.

/*const category = document.querySelector(".NYniz");

const catLinks =  Array.from(category.querySelectorAll('a'));

const de =  catLinks
.map(link => link.textContent)
.filter(name => name.includes("de"));*/



// 7. sort the people alphabetically by last name.

  for (let i = 0; i < pepople.length; i++) {
    for (let j = 0; j < pepople.length -1; j++) {
        const a = pepople[j].split(',')[1];
        const b = pepople[j + 1].split(',')[1];
    if (a.localeCompare(b) < 0) {
       [pepople[j], pepople[j + 1]] = [pepople[j + 1], pepople[j]];
    }

    }
  }
console.log(pepople)
  
// or

//  const sortPeople = pepople.sort((a, b) => {
//   const [aLast, aFirst] = a.split(', ');
//    const [bLast, bFirst] = b.split(', ');
//   return aLast > bLast ? -1 : 1;

//   });
//   console.log(sortPeople);

// sum up the instance of each these.
const data = ['car', 'car',  'truck', "truck", 'bike', 'walk', 'car', 'van', 'bike',
    'walk', 'car', 'van', 'car', 'truck'

 ];

const sum = data.reduce(function(object, val)  {
    if (!object[val]) {
        object[val] = 0; 
        
    }
    object[val] ++;
   return object;
  
}, {});

console.log(sum);


const dataPeople = [
    {name: 'Wes', year: 1988}, 
    {name: 'Kait', year: 1986}, 
    {name: 'Iiv', year: 1970}, 
    {name: 'Lux', year: 2015}, 

];


const comment = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen in my fav food ever', id: 123523},
    {text: 'Nice, Nice Nice!', id: 542328}

];


// some and every checks
// check if there is at least one person 19?
const checkAge = dataPeople.some(item => (new Date())
.getFullYear() - item.year >= 19);

// check if every body is 19.
const isAdult = dataPeople.every(item => new Date()
.getFullYear() - item.year === 19 );





// find the comment with the id of 823423.
const findComment = comment.find(item => item.id === 823423);
const findIdComment = comment.findIndex(comment => comment.id === 823423);

// const deleteComment = Array.from(comment).splice(findIdComment, 1);

// or
const deleteComment = [ ...comment.slice(0, findIdComment),
    ...comment.slice(findIdComment + 1)
]



let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(",");


console.log(arr); // Bilbo, Gandalf
const joined = arr.join(';');
console.log(joined);
console.log(joined[0]);

// object exercises
/*Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.*/

function camelize(str) {
   
  
   return str.split('-')
   .map((item, index) => index == 0 ? item
   : item[0].toUpperCase() + item.slice(1) )
   
   .join('');

}
console.log(camelize("helow-world-all-over"));

/*    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.  */
/*function filterRange(arr, a, b) {
    let result = [];
    for(let i = 0;  i < arr.length; i++) {
       
       if(arr[i] >= a && arr[i] <= b) {
        result.push(arr[i]);
       }

    }
    return result;
};*/
function filterRange(arr, a, b){
    return arr.filter((item) => item >= a && item <= b);
}
let arryl = [ 1, 3, 8, 5];
console.log(filterRange(arryl, 1, 4));


// literale 

const person = {
    name: ["Dani, Gabay"],
    age: 32,
    status: "single",
    state: "Las Vegas",
   

    intro() { 
        
        console.log(`${this.name[0]} is from ${this.state} and he is ${this.status} man. `);

    },

    
};

let fortry = person.name ;
const name= "Dani, Gabay".split(',');


// constructors

/*function personD(name) {
    const obj = {}
   obj.name=  name;
    obj.age =  32;
   obj. status = "single";
    obj.state = "Las Vegas";

    obj.intro = function () { console.log(`${this.name} is from ${this.state} 
        and he is ${this.status} man. `);

    };
    return obj

};*/
//  shortway
function personD(name, age) {
    
   this.name=  name;
    this.age =  age;
   this. status = "single";
    this.state = "Las Vegas";

    this.intro = function () { console.log(`${this.name} is from ${this.state} 
        and he is ${this.status} man. `);

    };
    

};

let Dani =  new personD("Dani, Meda", 32);
let selam =  new personD("Johnny", 28);

// if we have mutiple objects with the same key properties(name, age, gender)
// we can use the function  above it is easy and short way!


/* Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.*/

/*let list = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    let result = arr.filter((item, index) => item >= a && item <= b);
    return result;

};

filterRangeInPlace(list, 1, 4);*/

// or


function filterRangeInPlace(arr, a, b) {
  
/*   for(let key = 0; key < arr.length; key++) {
    // let val = arr[key];
 if (val < a || val > b) {
    arr.splice(key, 1);
    key--;
    
} 
   }*/
  arr.forEach((item, index) => {
    if(item < a || item > b) {
        arr.splice(index, 1);
        index--;
    }
  });


};
let list = [5, 3, 8, 1];
filterRangeInPlace(list, 1, 4);


let reveArr = [5, 2, 1, -10, 8];

/*reveArr.sort( function(a ,b) {
  return  a > b ?  1 : -1 ;
});*/




//  reveArr.reverse();
// or 
reveArr.sort( (a ,b) => b - a);
//  i'm supper exciting so proud of me!!!


/* We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.*/

let arrString = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  
 let sort =  arr.slice().sort();

 return sort;
};


 
let sortedArry = copySorted(arrString);



/*  ou have an array of user objects, each one has user.name. Write the code that converts it into an array of names.*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((val, index) => val.name);


/* You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName 
is generated from name and surname. */

let john2 = { name: "Johny", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let fullName = users2.map((val, index) => val.name + "  " + val.surname);

let secUserArry = [

 { fullName: fullName[0], id: 1 }, 
{ fullName: fullName[1], id: 2 },
{ fullName: fullName[2], id: 3 }

]
//  here is more simple
let userMapped = users2.map( item => ({
    fullname: `${item.name}  ${item.surname}`,
    id: item.id,


}));



/*Write the function sortByAge(users) that gets an array of objects with
 the age property and sorts them by age*/


 function sortByAge(users) {

    users.sort((a , b) => a.age - b.age );
    
 
 }

 let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr3 = [ pete, john, mary ];

sortByAge(arr3);



/* write the function
 shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.*/

/*let shuffleaArr = [1, 2, 3, 5, 6];

function shuffle(arr) {

    for (let i = arr.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] =  [arr[j], arr[i]];
    }

    
};

shuffle(shuffleaArr);*/

function shuffle(arr) {

  return arr.sort(() => Math.random() -0.5);

   
};

let shuffleaArr = [1, 2, 3, 5, 6];

console.log(shuffle(shuffleaArr));

/*   Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N. */



function getAverageAge(users) {
    return users.reduce((total, val, index) => total + val.age  ,0) / users.length;
    
}
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 29 };

let aveAar = [ john1, pete1, mary1 ];
console.log(getAverageAge(aveAar));



/* Let arr be an array.

Create a function unique(arr) that should return an array with unique items 
of arr. */

function unique(arr) {
    let result = []

    for ( let uni of arr) {
        if(!result.includes(uni)){
            result.push(uni);
        }
    }
    return result
 };
 let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
 unique(strings);

// or 
/*function unique(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index);
};

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  unique(strings);*/