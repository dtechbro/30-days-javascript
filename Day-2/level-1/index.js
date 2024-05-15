// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = "30 Days Of JavaScript"


// Print the string on the browser console using console.log()
console.log(challenge)


// print the length of the string on the browser console using console.log()
console.log(challenge.length)


// string character to upercase
console.log(challenge.toUpperCase())


// string characters to lowercase
console.log(challenge.toLowerCase())


// cut the first word of the string
console.log(challenge.substring(3))


// slice out Days Of Javascript
console.log(challenge.substring(0, 3))


// check if the string includes the word Script
console.log(challenge.includes('Script'))


// split the string into an array
console.log(challenge.split(''))


// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","))


// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))


// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))


// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('8'))


// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))


// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))


// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = "You cannot end a sentence with because because because is a conjunction"
console.log(because.indexOf('because'))


// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.lastIndexOf('because'))


// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.search('because'))

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(because.trim(" "))


// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))
console.log(because.startsWith('You'))


// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))


// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))


// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let sub = "30 Days of "
console.log(sub.concat("JavaScript"))


// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))