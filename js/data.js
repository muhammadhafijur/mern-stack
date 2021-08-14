const codeData = {
  es6: [
    {
      title: "Arrow Function",
      content: `
const sum = (a, b) => a + b
console.log(sum(2, 6)) // prints 8    
`,
    },
    {
      title: "Object Property Assignment",
      content: `
const a = 2
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
      content: `
const obj = {
  a: 5,
  b() {
    console.log('b')
  }
  }
obj.b() // prints "b"
      `,
    },
  ],
};

export default codeData;
