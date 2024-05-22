// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Muhammad-Nabeel"
let lastName = "Olaoye"
let country = 'Nigeria'
let city = "Lagos"
let age = 19
let isMarried = false
let year = 2024

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))



// Check if type of '10' is equal to 10
console.log(typeof '10' == 10)



// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

// Boolean value is either true or false.
    // Write three JavaScript statement which provide truthy value.
        console.log(19 >= 12)
        console.log(9 > 2)
        console.log(5 == 5)
    // Write three JavaScript statement which provide falsy value.
        console.log(9 < 2)
        console.log(3 == 9)
        console.log(4 < 4)



// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    // 4 > 3
    console.log(4 > 3)

    // 4 >= 3
    console.log(4 >= 3)

    // 4 < 3
    console.log(4 < 3)

    // 4 <= 3
    console.log(4 <= 3)

    // 4 == 4
    console.log(4 == 4)

    // 4 === 4
    console.log(4 === 4)

    // 4 != 4
    console.log(4 != 4)

    // 4 !== 4
    console.log(4 !== 4)

    // 4 != '4'
    console.log(4 != '4')

    // 4 == '4'
    console.log(4 == '4')

    // 4 === '4'
    console.log(4 === '4')

    // Find the length of python and jargon and make a falsy comparison statement.
    let txt1 = 'python'
    let txt2 = 'jargon'
    console.log(txt1.length != txt2.length)


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    // 4 > 3 && 10 < 12
    console.log(4 > 3 && 10 < 12)

    // 4 > 3 && 10 > 12
    console.log(4 > 3 && 10 > 12)

    // 4 > 3 || 10 < 12
    console.log(4 > 3 || 10 < 12)

    // 4 > 3 || 10 > 12
    console.log(4 > 3 || 10 > 12)

    // !(4 > 3)
    console.log(!(4 > 3))

    // !(4 < 3)
    console.log(!(4 < 3))

    // !(false)
    console.log(!(false))

    // !(4 > 3 && 10 < 12)
    console.log(!(4 > 3 && 10 < 12))

    // !(4 > 3 && 10 > 12)
    console.log(!(4 > 3 && 10 > 12))

    // !(4 === '4')
    console.log(!(4 === '4'))

    // There is no 'on' in both dragon and python
    console.log('python'.includes('on') && 'jargon'.includes('on'))



// Use the Date object to do the following activities
const today = new Date()

    // What is the year today?
    console.log(today.getFullYear())

    // What is the month today as a number?
    console.log(today.getMonth() + 1)

    // What is the date today?
    console.log(today.getDate())

    // What is the day today as a number?
    console.log(today.getDay())

    // What is the hours now?
    console.log(today.getHours())

    // What is the minutes now?
    console.log(today.getMinutes())

    // Find out the numbers of seconds elapsed from January 1, 1970 to now.
    console.log(Math.floor(today.getTime() / 1000))