// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
    let month = prompt('Enter a month:').toUpperCase()
    
    if (month == 'Sptemeber' || month == 'April' || month == 'June' || month == 'November') {
        console.log(`${month} has 30 days`)
    } else if (month == 'February') {
        console.log(`${month} has 28 days`)
    } else {
        console.log(`${month} has 30 days`)
    }





// Write a program which tells the number of days in a month, now consider leap year.
    let theMonth = prompt('Enter the current month: ').toUpperCase()

    if (month == 'september' || month == 'April' || month == 'june' || month == 'november') {
        console.log(`${theMonth} has 30 days`)
    } else if (month == 'february') {
        console.log(`${theMonth} has 29 days`)
    } else {
        console.log(`${theMonth} has 31 days`)
    }