
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
const todayElm = document.querySelector("#today")
const startShiftElm = document.querySelector("#startShift")
const todayShiftElm = document.querySelector("#todayShift")
const clockElm = document.querySelector("#clock")
const redSpanElm = document.querySelector('#red')
const startShiftInput = document.querySelector("#startShiftChanger")



function shiftString(dayNumber) {
    return shiftMap[dayNumber] || "شیفت نامعتبر";
}
// Calculate the number of days between two Persian dates
function shiftDayCalculator(date1, date2) {
    // Normalize time
    date1 = date1.clone().hours(0).minutes(0).seconds(0).milliseconds(0);
    date2 = date2.clone().hours(0).minutes(0).seconds(0).milliseconds(0);

    const diffDays = Math.abs(date1.diff(date2, 'days')) + 1;
    return (diffDays % 12) || 12;
}
function whatTimeIsIt() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
function showInformation(startShift) {
    // current date:
    const today = new persianDate().startOf('day');
    const shiftDay = shiftDayCalculator(startShift, today);

    console.log("شیفت امروز:", shiftString(shiftDay));
    console.log("تاریخ شروع شیفت:", startShift.format("YYYY/MM/DD"));
    console.log("تاریخ امروز:", today.format("YYYY/MM/DD"));
    todayElm.textContent = `تاریخ امروز : "${today.format("YYYY/MM/DD")}"`;
    startShiftElm.textContent = `تاریخ شروع شیفت : "${startShift.format("YYYY/MM/DD")}"`
    redSpanElm.textContent = `"${shiftString(shiftDay)}"`;
    clockElm.textContent = whatTimeIsIt();
    setInterval(() => { clockElm.textContent = whatTimeIsIt(); }, 1000)
}
function initPersianDatepicker(options) {
    jalaliDatepicker.startWatch(options);
}
function handleStartShiftDayChange(event) {
    if (event.target.value !== "") {
        let date = event.target.value.split('/').map(value => parseInt(value));
        const startShift = new persianDate([date[0], date[1], date[2]]).startOf('day');
        showInformation(startShift);
    } else {
        const startShift = new persianDate([1404, 1, 27]).startOf('day');
        showInformation(startShift);
    }
}
function initialPage() {
    // Define the first shift date
    const startShift = new persianDate([1404, 1, 27]).startOf('day');
    showInformation(startShift);
    // initial datepicker for changing start shift date
    initPersianDatepicker({ autoReadOnlyInput: true, topSpace: 10 });
    startShiftInput.addEventListener('change', handleStartShiftDayChange);
}

initialPage();
