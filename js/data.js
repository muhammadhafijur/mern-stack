const codeData = {
  es6: [
    {
      title: "Arrow Function",
      content: `const sum = (a, b) => a + b
console.log(sum(2, 6)) // prints 8
 `,
    },
    {
      title: "Object Property Assignment",
      content: `const a = 2
 const b = 5
 const obj = { a, b }
 // Before es6:
 // obj = { a: a, b: b }
 console.log(obj)
 // prints = { a: 2, b: 5 }
 `,
    },
    {
      title: "Object Function Assignment",
      content: `const obj = {
 a: 5,
 b() {
 console.log('b')
 }
 }
 obj.b() // prints "b"
 `,
    },
    {
      title: "Default Parameters",
      content: `function print(a = 5) {
  console.log(a)
 }
 print() // prints 5
 print(22) // prints 22
 `,
    },
    {
      title: "Let Scope",
      content: `let a = 3
  if (true) {
 let a = 5
 console.log(a) //prints 5
 }
 obj.b() // prints "b"
 `,
    },
    {
      title: "Object Assign",
      content: `const obj1 = {a: 1}
 const obj2 = {b: 2}
 const obj3 = Object.assign({},
   obj1, obj2)
 console.log(obj3)
 // { a: 1, b: 2 }
 `,
    },
    {
      title: "Object Entries",
      content: `const obj = {
 firstName: 'FirstName'
 lastName: 'LastName'
 age: 24
 country: Bangladesh
 };
 const entries = Object.entries(obj);
 /* returns an array of [key, value]
 pairs of the object passed */
 console.log(entries)
 /* prints
 [
 ['firstName', 'FirstName']
 ['lastName', 'LastName']
 ['age', 24]
 ['country', 'Bangladesh']
 ]; */
 `,
    },
    {
      title: "Const",
      content: `// can be assigned only once
 const a = 55
 a = 44 // throws an error
 `,
    },
    {
      title: "Promises with finally",
      content: `promise
  .then((result) => { ... })
  .catch((error) => { ... })
  .finally(() => { /* logic
  .finally(() => { /* logic
 independent of success/error */ })
 /* The handler is called when the
 promise is fulfilled or rejected. */
 `,
    },
    {
      title: "Multiline string",
      content: `console.log(\`
  This is a
  multiline string
 \`)
 `,
    },
    {
      title: "Template String",
      content: `const name = 'World'
 const message = \`Hello ${name}\`
 console.log(message)
 // prints "Hello World"
 `,
    },
    {
      title: "Exponent Operator",
      content: `const byte = 2 ** 8
 // Same as: Math.pow(2, 8)
 `,
    },
    {
      title: "Spread Operator",
      content: `const a = [ 1, 2 ]
 const b = [ 3, 4 ]
 const c = [ ...a, ...b ]
 console.log(c) // [1, 2, 3, 4]
 `,
    },
    {
      title: "Spread Operator",
      content: `const a = {
  firstName: "FirstName",
  lastName: "LastName1",
 }
 const b = {
  ...a,
  lastName: "LastName2",
  canWork: true,
 }
 console.log(a)
 // {firstName: "FirstName", lastName: "LastName1"}
 console.log(b)
 /* {firstName: "FirstName", lastName: "LastName2",
 canWork: true} */
 /* great for modifying objects without
 side effects/affecting the original */
 `,
    },
    {
      title: "String includes()",
      content: `console.log('apple'.includes('p1'))
 // prints true
 console.log('apple'.includes('tt'))
 // prints false
 `,
    },
    {
      title: "String startsWith()",
      content: `console.log('apple'.startsWith('ap'))
 // prints true
 console.log('apple'.startsWith('bb'))
 // prints false
 `,
    },
    {
      title: "String repeat",
      content: `console.log('ab'.repeat(3))
 // prints "ababab"
 `,
    },
    {
      title: "Destructuring Array",
      content: `let [a, b] = [3, 7]
 console.log(a); // 3
 console.log(b); // 7
 `,
    },
    {
      title: "Destructuring Object",
      content: `let obj = {
  a: 55,
  b: 44
 };
 let { a, b } = obj;
 console.log(a); // 55
 console.log(b); // 44
 `,
    },
    {
      title: "Destructuring Nested Object",
      content: `const Person = {
  name: "Rahim Rahman",
  age: 24,
  sex: "male",
  materialStatus: "single",
  address: {
   country: "Bangladesh",
   city: "Rajshahi",
   thana: "Boalia",
   postal: 6100
   },
  };
const { address : { city, postal }, name } = Person;
console.log(name, city, postal)
// Rahim Rahman Rajshahi 6100
console.log(city) // ReferenceError
 `,
    },
  ],
  vanilla: [
    {
      title: "Variable",
      content: `var paperColor = white;
var roastQuantity = 4;
var isRaining = true;
`,
    },
    {
      title: "Array",
      content: `var items = ['bottle', 'mug', 'paper', 'pen'];
items.length; // -1
items.indexOf('book'); // -1
items.push('envelope');
items.pop('watch');
items.unshift('keyboard');
items.shift();
`,
    },
    {
      title: "If Statement",
      content: `if (3 < 5) {  console.log("Yeah I will be executed!"); } `,
    },
    {
      title: "If...else Statement",
      content: `var age = 21;
if (age > 18) {
 console.log('Now you are Adult');
} else {
 console.log('No you are not aged enough to be an Adult');
}`,
    },

    {
      title: "If...else if Statement",
      content: `var whatDay = 'Sunday';
if (age > 18) {
 console.log('Now you are Adult');
} else {
 console.log('No you are not aged enough to be an Adult');`,
    },
    {
      title: "If...else Statement",
      content: `var age = 21;
if (age > 18) {
 console.log('Now you are Adult');
} else {
 console.log('No you are not aged enough to be an Adult');`,
    },
    {
      title: "If...else Statement",
      content: `var age = 21;
if (age > 18) {
 console.log('Now you are Adult');
} else {
 console.log('No you are not aged enough to be an Adult');
}`,
    },
    {
      title: "Different ways to use addEventListener on a button",
      content: `// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
// anonymous function
greenButton.onclick = function () {   
    document.body.style.backgroundColor = 'green';
}
// handle by using add eventlisenter
const tealButton = document.getElementById('make-teal-button');
tealButton.addEventListener('click', makeTeal);
function makeTeal() {
    document.body.style.backgroundColor = 'teal';
}
// addEventListener
const orangeButton = document.getElementById('make-orange-button');
orangeButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})
// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})
`,
    },
    {
      title: "Event Handlers",
      content: `document.getElementById('id-name').addEventListener('event-name', function(event){
// write your functionality as required
})
Example given below ->
document.getElementById('delete-btn').addEventListener('click', function () {
document.getElementById('secret-info').style.display = 'none';
});
we can use more event like - focus, blur, keydown, keyup, keypress, change etc`,
    },
  ],
  dom: [
    {
      title: "Different ways to use addEventListener on a button",
      content: `// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
// anonymous function
greenButton.onclick = function () {   
document.body.style.backgroundColor = 'green';
}

// handle by using add eventlisenter
const tealButton = document.getElementById('make-teal-button');
tealButton.addEventListener('click', makeTeal);
function makeTeal() {
document.body.style.backgroundColor = 'teal';
}

// addEventListener
const orangeButton = document.getElementById('make-orange-button');
orangeButton.addEventListener('click', function () {
document.body.style.backgroundColor = 'orange';
})

// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
document.body.style.backgroundColor = 'lightblue'
})
`,
    },
    {
      title: "Create a comment box and display comment",
      content: `// 1. add button event handler
document.getElementById('submit-comment').addEventListener('click', function() {
// 2. get user comment
const commentBox = document.getElementById('new-comment')
// const userComment = commentBox.value;

// 3. create comment paragraph
const newComment = document.createElement('p');
newComment.innerText = commentBox.value;

// 4. append the comment
const commentContainer = document.getElementById('comment-container');
commentContainer.appendChild(newComment);
commentContainer.removeAttribute.value;

// 5. clean the comment box
commentBox.value = ''
})`,
    },
    {
      title: "Event delegate and benefit of Event bubble",
      content: `// const items =document.getElementsByClassName('item');
// for(const item of items) {
// item.addEventListener('click', function (event) {
// // document.getElementById('item-container').removeChild(item);
// event.target.parentNode.removeChild(event.target)
// })
// }

document.getElementById('add-item').addEventListener('click', function(){
const li = document.createElement('li');
li.innerText = 'Brand New Item';
li.classList.add('item')
const parent = document.getElementById('item-container');
parent.appendChild(li)

})

document.getElementById('item-container').addEventListener('click', function(event){
event.target.parentNode.removeChild(event.target);
})`,
    },
    {
      title: "Event Handlers",
      content: `document.getElementById('id-name').addEventListener('event-name', function(event){
// write your functionality as required
})
Example given below ->
document.getElementById('delete-btn').addEventListener('click', function () {
document.getElementById('secret-info').style.display = 'none';
});
we can use more event like - focus, blur, keydown, keyup, keypress, change etc`,
    },
  ],
};

export default codeData;
