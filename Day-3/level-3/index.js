// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    // YYY-MM-DD HH:mm eg. 20120-01-02 07:05
    let newTime = new Date()

    let year = newTime.getFullYear()
    let month = String(newTime.getMonth() +1).padStart(2, '0')
    let date = String(newTime.getDate()).padStart(2, '0')
    let hour = String(newTime.getHours()).padStart(2, '0')
    let minutes = String(newTime.getMinutes()).padStart(2, '0')

    console.log(`${year}-${month}-${date} ${hour}:${minutes}`)







    // let newTime = new Date();

    // let year = newTime.getFullYear()
    // let month = String(newTime.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, add 1 and pad with leading zero
    // let date = String(newTime.getDate()).padStart(2, '0'); // getDate() returns the day of the month
    // let hour = String(newTime.getHours()).padStart(2, '0'); // getHours() returns the hour (0-23)
    // let minutes = String(newTime.getMinutes()).padStart(2, '0'); // getMinutes() returns the minutes (0-59)

    // console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
