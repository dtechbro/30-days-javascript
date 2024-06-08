const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
  
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// Declare an empty array;
let emptyArray = Array()
let secondEmptyArray = []



// Declare an array with more than 5 number of elements
const fiveElement = ['Ade', 'Olu', 'Akin', 'Bella', 'Avi', 'Ricky']
// Find the length of your array
console.log(fiveElement.length)
// Get the first item, the middle item and the last item of the array
console.log(fiveElement[0])
console.log(fiveElement[2])
console.log(fiveElement[fiveElement.length - 1])




// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [2, 'Mine', 65.9, true, 'Ade', 'Kabby', 5]
console.log(mixedDataTypes.length)





// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length - 1])

// Print out each company
console.log(itCompanies.join(' '))

// Change each company name to uppercase one by one and print them out
console.log(itCompanies.join(' ').toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(', ')} are big IT compaines`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let certainCompany = itCompanies.indexOf('Google')
certainCompany != -1
    ? console.log(`Google exist`)
    : console.log('Company is not found')

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, 4))

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 3))
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies