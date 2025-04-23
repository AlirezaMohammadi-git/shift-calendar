// Shift mapping
const shiftMap = {
    1: "صبح اول",
    2: "صبح دوم",
    3: "صبح آخر",
    4: "ظهر اول",
    5: "ظهر دوم",
    6: "ظهر آخر",
    7: "شب یک",
    8: "شب دو",
    9: "شب آخر",
    10: "استراحت اول",
    11: "استراحت دوم",
    12: "استراحت آخر",
};

function shiftString(dayNumber) {
    return shiftMap[dayNumber] || "شیفت نامعتبر";
}

// Calculate the number of days between two Persian dates
function daysBetween(date1, date2) {
    // Normalize time
    date1 = date1.clone().hours(0).minutes(0).seconds(0).milliseconds(0);
    date2 = date2.clone().hours(0).minutes(0).seconds(0).milliseconds(0);

    const diffDays = Math.abs(date1.diff(date2, 'days')) + 1;
    return (diffDays % 12) || 12;
}

// Define the first shift date
const firstDate = new persianDate([1404, 1, 27]).startOf('day');
const today = new persianDate().startOf('day');

const shiftDay = daysBetween(firstDate, today);
console.log("شیفت امروز:", shiftString(shiftDay));

// Optional: Log formatted date details
console.log("تاریخ شروع شیفت:", firstDate.format("YYYY/MM/DD"));
console.log("تاریخ امروز:", today.format("YYYY/MM/DD"));
