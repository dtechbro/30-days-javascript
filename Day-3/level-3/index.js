// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    // YYY-MM-DD HH:mm eg. 20120-01-02 07:05
    let newTime = new Date()

    let year = newTime.getFullYear()
    let month = newTime.getMonth() +1
    let day = newTime.getDay()
    let hour = newTime.getHours()
    let minutes = newTime.getMinutes(padStart(2, '0'))

    console.log(`${year}-${month}-${day} ${hour}:${minutes}`)