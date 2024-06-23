// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    // Sort the array and find the min and max age
    ages.sort()
    console.log(ages)
    let minAge = ages[0]
    let maxAge = ages[ages.length - 1]
    console.log("Min Age: ", minAge)
    console.log("Max Age: ", maxAge)


    // Find the median age(one middle item or two middle items divided by two)
    let medianAges;
    if (ages.length % 2 === 0) {
        let midIndex = ages.length / 2
        medianAges = (ages[midIndex - 1] + ages[midIndex]) / 2
    } else {
        medianAges = ages[Math.floor(ages.length / 2)]
    }
    console.log("Median Age: ", medianAges)


    // Find the average age(all items divided by number of items)
    let sum = 0
    for (let i = 0; i < ages.length
    // Find the range of the ages(max minus min)
    // Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array



// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.