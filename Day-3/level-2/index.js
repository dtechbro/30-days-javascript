// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    // Enter base: 20
    // Enter height: 10
    // The area of the triangle is 100

    let base = prompt('Enter base:')
    let height = prompt('Enter height:')
    console.log('area :' + 0.5 * base * height)



// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    // Enter side a: 5
    // Enter side b: 4
    // Enter side c: 3
    // The perimeter of the triangle is 12

    let a = prompt('Enter side a:')
    let b = prompt('Enter side b:')
    let c = prompt('Enter side c:')
    let perimeter = Number(a) + Number(b) + Number(c)
    console.log(`Perimeter of the triangle: ${perimeter}`)



// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
    let length = prompt('Length of the rectangle:')
    let width = prompt("Width of the rectangle:")
    let area = Number(length) * Number(width)
    console.log( `Area of the rectangle: ${area}`)

    let band = 2 * (Number(length) + Number(width))
    console.log(`Perimeter of the rectangle: ${band}`)



// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
    let radius = prompt('Radius of the circle:')
    const PI = 3.14

    let cirArea = PI * Number(radius) * Number(radius)
    console.log(`The area of the circle is: ${cirArea}`)

    let circ = 2 * PI * Number(radius)
    console.log(`The circumfrence of the circle is: ${circ}`)




// Calculate the slope, x-intercept and y-intercept of y = 2x -2
    let slope = 2
    let xIntercept = 1
    let yIntercept = -2

    console.log(`The slope is: ${slope}\nThe intercept on x is: ${xIntercept}\nThe intercept on y is: ${yIntercept}`)



// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
    let x1 = 2
    let x2 = 6
    let y1 = 2
    let y2 = 10

    let gradient = (y2 - y1) / (x2 - x1)
    console.log(gradient)




// Compare the slope of above two questions.
console.log(gradient - slope)



// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.


// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    // Enter hours: 40
    let hrs = prompt("Enter hours:")

    // Enter rate per hour: 28
    let rate = prompt('Enter rate per hour:')

    // Your weekly earning is 1120
    console.log(`Your weekly earning is ${Number(hrs) * Number(rate)}`)



// If the length of your name is greater than 7 say, your name is long else say your name is short.
    let name = "Muhammad-Nabeel"
    name.length > 7
        ? console.log("Your name is long")
        : console.log("Your name is short")



// Compare your first name length and your family name length and you should get this output.
    let firstName = 'Muhammad-Nabeel'
    let lastName = 'Olaoye'
    firstName.length > lastName.length
        ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
        : console.log(`Your family name ${lastName} is longer than your first name ${firstName}`)



// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
    let myAge = 19
    let yourAge = 17
    console.log(`I am ${myAge - yourAge} years older than you.`)




// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    // Enter birth year: 1995
    // Enter birth year: 2005
    let drive = prompt('Enter birth year')
    let currentYear = new Date().getFullYear()
    let age = currentYear - drive

    // You are 25. You are old enough to drive
    // You are 15. You will be allowed to drive after 3 years.
    age >= 18
        ? console.log(`You are ${age}. You are old enough to drive`)
        : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`)




// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    // Enter number of years you live: 100
    let yourYears = prompt('Enter number of years you live:')
    let livedSec = (60 * 60 * 24 * 365) * Number(yourYears)

    // You lived 3153600000 seconds.
    console.log(`You lived ${livedSec} seconds`)


// Create a human readable time format using the Date time object
    // YYYY-MM-DD HH:mm
    let yearDate = new Date()
    console.log(`${yearDate.getFullYear()}-${yearDate.getMonth()}-${yearDate.getDate()} ${yearDate.getHours()}:${yearDate.getMinutes()}`)

    // DD-MM-YYYY HH:mm
    console.log(`${yearDate.getDate()}-${yearDate.getMonth()}-${yearDate.getFullYear()} ${yearDate.getHours()}:${yearDate.getMinutes()}`)

    // DD/MM/YYYY HH:mm
    console.log(`${yearDate.getDate()}/${yearDate.getMonth()}/${yearDate.getFullYear()} ${yearDate.getHours()}:${yearDate.getMinutes()}`)