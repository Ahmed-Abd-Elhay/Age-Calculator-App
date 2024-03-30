let inputDate = document.querySelector(".input-date");

let buttonCalc = document.querySelector(".container .calculator button");


// Stop The input Date To Choose The Date From The Future
inputDate.max = new Date().toISOString().split("T")[0];

buttonCalc.onclick = function () {
    if (inputDate.value == "") {

    } else {
        // Birht Day Date 
        let birthDay = new Date(inputDate.value);

        let dayBirth = birthDay.getDate();
        let monthBirth = birthDay.getMonth() + 1;
        let yearBirth = birthDay.getFullYear();

        // Date Of Now
        let dayNow = new Date().getDate();
        let monthNow = new Date().getMonth() + 1;
        let yearNow = new Date().getFullYear();

        let yourYear, yourMonth, yourDay;


        // Get Number Of YOur Year
        yourYear = yearNow - yearBirth;


        // Get Number Of YOur Month
        if (monthNow >= monthBirth) {
            yourMonth = monthNow - monthBirth;
        } else {
            yourYear--;
            yourMonth = 12 + monthNow - monthBirth;
        }

        // Get Number Of YOur Days
        if (dayNow >= dayBirth) {
            yourDay = dayNow - dayBirth;
        } else {
            yourDay = dayOfMonth(yearBirth, monthBirth) + dayNow - dayBirth;
        }

        // Month Less Than 0
        if (yourMonth < 0) {
            yourMonth = 11;
            yourYear--;
        }


        // Set Years In the Document
        let years = document.querySelector(".result .the-date .years");
        years.innerHTML = yourYear;

        // Set Month In the Document
        let months = document.querySelector(".result .the-date .month");
        months.innerHTML = yourMonth;

        // Set Days In the Document
        let days = document.querySelector(".result .the-date .day");
        days.innerHTML = yourDay;
    }
};


// Get The Currecte Day Function 
function dayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
};


