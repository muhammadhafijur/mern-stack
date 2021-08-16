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
    
// Module Summary(Module: 23-9) Starts 
    
    {
      title: "Access for Tags and Implement styles",
      content: `
const variable = document.getElementsByTagName('p');
//It will show all the paragraph tags

variable.style.backgroundColor = 'steelblue';
//sets background color to steelblue

variable.style.color = 'white';
//sets text color to white
      `,
    },
    {
      title: "Select a Specific Element, Set innerText & innerHTML",
      content: `
const variable = document.getElementById('element-id')
//selects a specific element
      
variable.innerText ='Hi There';
//sets inner text
      
variable.innerHTML = \`
<h4>Thank you</h4>
\`
//sets innerHTML
      `,
    },
    {
      title: "Access Elements With Class & NodeList",
      content: `
const variable = document.getElementsByClassName
('class-name');
//access elements with class name

document.querySelectorAll('p');
//access elements with nodeLists
      `,
    },
    {
      title: "Remove an Element",
      content: `
const variable = document.getElementById('parent-element-id');
const death = variable.children[4];
variable.removeChild(death);
//it will remove the 5th child element
      `,
    },
    {
      title: "Create Element",
      content: `
const friend = document.createElement('li');
friend.innerText = "Hi There";
const  friends = document.getElementById('friends');
friends.appendChild(friend);
      `,
    },

    // Module Summary(Module: 23-9) Ends
   
    // Event Bubble(Module: 24-7) Starts

    {
      title: "Event Bubble",
      content: `
<section id = "section-container">
<h4>Event Bubble</h4>
<ul id="list-container">
    <li id="item-1">One</li>
    <li id="item-2">Two</li>
    <li id="item-3">Three</li>
  </ul>
</section>

<script>    

document.getElementById('item-3').addEventListener('click', function(event){
&nbsp; console.log("Item-3 clicked");   
});
document.getElementById('list-container').addEventListener('click', function(){
&nbsp; console.log("List Container clicked");
});
document.getElementById('section-container').addEventListener('click', function(){
&nbsp; console.log("Section Container clicked");
});
</script>  
/*
If we click on any list item it will trigger it's parent and it's parent's parent too.
In this case if we click on 'Three'(id="item-3") it will trigger not only it's parent "list-container" but also "section-container".It will show output like below:
Item-3 clicked
Section Container clicked
List Container clicked
*/ 
      `,
    },
    {
      title: "How to Stop Event Bubble",
      content: `
document.getElementById('item-2').addEventListener('click', function(event){
console.log("Item-2 clicked");
event.stopPropagation();
});
/*
To stop this event bubble we need to use stopPropagation() with a parameter 'event' or 'e'.
It stops it's parent item from getting triggered but it will trigger it's siblings.
Here if we click 'Two' it will show output like below:
Item-1 clicked
Item-2 clicked
Item-3 clicked 
*/
        
        
document.getElementById('item-1').addEventListener('click', function(event){
console.log("Item-1 clicked");
event.stopImmediatePropagation();
});
/*
If we want to trigger only the item itself then we have to use stopImmediatePropagation() with a parameter 'event' or 'e'.
Here if we click 'One' it will show output like below:
Item-1 clicked
*/
`,

// Event Bubble(Module: 24-7) Ends
    },

// Module: 25.3
    {
      title: "Redirect to Another Page Using JS",
      content: `
window.location.href = 'http://www.google.com';
// This will take you to Google
      `,
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
