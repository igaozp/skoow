let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)

let numbers = [1, 2, 3]
console.log(nums == numbers)

let userOne = {
    name: 'Asabeneh', role: 'teaching', country: 'Finland'
}
let userTwo = {
    name: 'Asabeneh', role: 'teaching', country: 'Finland'
}
console.log(userOne == userTwo)

let anotherNums = [1, 2, 3]
let anotherNumbers = anotherNums
console.log(anotherNumbers == anotherNums)

let age = 35
const gravity = 9.81
let mass = 72
const PI = 3.14

const boilingPoint = 100
const bodyTemp = 37
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

console.log(Math.PI)
console.log(Math.round(PI))
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))
console.log(Math.random())
console.log(Math.floor(Math.random() * 11))
console.log(Math.abs(-10))
console.log(Math.sqrt(100))
console.log(Math.sqrt(2))
console.log(Math.pow(3, 2))
console.log(Math.E)
console.log(Math.log(2))
console.log(Math.log(10))
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))

let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying, 'Seeing is Believing' is not correct in 2020."
let quoteWithBackTick = "The saying, 'Seeing is Believing' is not correct in 2020."
let fullName = firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country
console.log(fullName)
console.log(personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${2} and ${b} is ${a + b}`)
console.log(`${a} is greater than ${b}: ${a > b}`)

console.log(firstName.length)
console.log(firstName[0])
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.substr(0, 4))
console.log(firstName.substring(0, 4))
let string = '30 Days Of JavaScript'
console.log(string.split(' '))
string = '  30 Days Of JavaScript  '
console.log(string.trim())
console.log(string.includes('Days'))
console.log(string.includes('days'))
console.log(string.replace('JavaScript', 'Python'))
console.log(string.charAt(0))
console.log(string.charCodeAt(0))
console.log(string.indexOf('D'))
console.log(string.lastIndexOf('a'))
console.log(string.concat(firstName, lastName))
console.log(string.startsWith('30'))
console.log(string.endsWith('t'))
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))
console.log(string.search(/javascript/gi))
string = 'love'
let patternOne = /love/
let patternTwo = /love/gi
console.log(string.match(patternOne))
console.log(string.match(patternTwo))

console.log(typeof 'Asabeneh')
console.log(typeof 10)
console.log(typeof 3.14)
console.log(typeof true)
console.log(typeof false)
console.log(typeof NaN)
console.log(typeof undefined)
console.log(typeof null)

let num = '10'
console.log(parseInt(num))
console.log(Number(num))
console.log(+num)

num = '9.81'
console.log(parseFloat(num))
console.log(Number(num))
console.log(+num)
console.log(parseInt(num))