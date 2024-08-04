const submitButton = document.querySelector(".card__separator--button");

const yearInput = document.querySelector(".card__input[data-name='year']");
const monthInput = document.querySelector(".card__input[data-name='month']");
const dayInput = document.querySelector(".card__input[data-name='day']");

const yearResult =document.querySelector(".card__result--year");
const monthResult =document.querySelector(".card__result--month");
const dayResult =document.querySelector(".card__result--day");

const calcAge = ()=>{
    const year = yearInput.value
    const month = monthInput.value
    const day = dayInput.value

    const birthDate = new Date(year,month-1,day);
    const today = new Date();

    const birthDay = birthDate.getDate();
    const currentDay = today.getDate();
    const birthMonth =birthDate.getMonth();
    const currentMonth =today.getMonth();
    const birthYear = birthDate.getFullYear();
    const currentYear = today.getFullYear();

    let yearDiff = currentYear - birthYear;
    let monthDiff = currentMonth - birthMonth;
    let dayDiff = currentDay - birthDay;

    if (dayDiff < 0){
        monthDiff--;
        dayDiff = 30 + dayDiff
    }
    if(monthDiff < 0){
        yearDiff --;
        monthDiff = 12 + monthDiff
    }
    yearResult.textContent = yearDiff;
    monthResult.textContent = monthDiff;
    dayResult.textContent = dayDiff;

}
submitButton.addEventListener("click",calcAge)