// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
    let grade = prompt("What's your score:")
    if (grade >= 80 && grade <= 100) {
        console.log("You had an A in the cousre")
    } else if (grade >= 70 && grade <= 89) {
         console.log('You had a B in the course')  
    } else if (grade >= 60 && grade <= 69) {
        console.log('You had a C in the course')
    } else if (grade >= 50 && grade <= 59) {
        console.log('You had a D in the course')
    } else if (grade >= 0 && grade <= 49) {
        console.log('You had a F in the course')
    }



// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer




// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let weekDay = prompt("What is the day today:")
if (weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']) {
    console.log(`${weekDay} is a working day`)
} else {
    console.log(`${weekDay} is a weekend`)
}