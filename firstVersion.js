

// shift obj : 
function shiftString(dayNumber) {
    let result;
    switch (dayNumber) {
        case 1: result = "صبح اول"; break;
        case 2: result = "صبح دوم"; break;
        case 3: result = "صبح آخر"; break;
        case 4: result = "ظهر اول"; break;
        case 5: result = "ظهر دوم"; break;
        case 6: result = "ظهر آخر"; break;
        case 7: result = "شب یک"; break;
        case 8: result = "شب دو"; break;
        case 9: result = "شب آخر"; break;
        case 10: result = "استراحت اول"; break;
        case 11: result = "استراحت دوم"; break;
        case 12: result = "استراحت آخر"; break;
    }
    return result;
}

// calculating days between two persian date:

function daysBetween(date1, date2) {

    let result;
    // changing numbers to en:
    date1.toLocale('en');
    date2.toLocale('en');



    // start each day from same time
    date1.hours(0).minutes(0).seconds(0);
    date2.hours(0).minutes(0).seconds(0);

    // case one : both dates has same year
    const year1 = +(date1.format("YYYY")) || 0;
    const year2 = +(date2.format("YYYY")) || 0;
    const day1 = date1.format("DDD")
    const day2 = date2.format("DDD")
    if (year1 === year2) {
        console.log(day1, day2)
        result = ((Math.abs(day1 - day2) + 1) % 12)
    } else {
        if (year2 > year1) {
            const offset = (year2 - year1) * 365;
            result = ((((offset - day1) + 1) + day2) % 12)
        } else {
            const offset = (year2 - year1) * 365;
            result = ((((offset - day2) + 1) + day1) % 12)
        }
    }

    return result;

}


// first morning shift : 
const firstDate = new persianDate([1404, 1, 27, 0, 0, 0, 0])
const today = new persianDate().hours(0).minutes(0).seconds(0);

const db = daysBetween(firstDate, today);
console.log(shiftString(db));
// changing numbers to en:
firstDate.toLocale('en');
today.toLocale('en');

// first moorning shift:
const moorningDay = firstDate.format("DD")
const moorningMonth = firstDate.format("MM")
const moorningYear = firstDate.format("YYYY")

// today
const todayDay = today.format("DD")
const todayMonth = today.format("MM")
const todayYear = today.format("YYYY")
console.log(todayDay, todayMonth, todayYear)
console.log(moorningDay, moorningMonth, moorningYear)