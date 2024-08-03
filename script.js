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

    const hasCompleteYear = currentDay >= birthDay && currentMonth >= birthMonth;
    const hasCompleteMonth = currentDay >= birthDay;
    const dayDifference = currentDay - birthDay;

    const ageYears = currentYear-( hasCompleteYear? birthYear: birthYear +1 );
    //still bug with months calculate
    const ageMonths = currentMonth - (hasCompleteMonth ? birthMonth : birthMonth);
    const ageDays = (dayDifference >= 0)? dayDifference : 30 + dayDifference;

    yearResult.textContent = ageYears;
    monthResult.textContent = ageMonths;
    dayResult.textContent = ageDays;



    // const monthDiff = currentMonth - birthMonth;
    // const dayDiff = currentDay - birthDay;
    // if(dayDiff>= 0 && monthDiff >= 0){
    //     const ageMonths = monthDiff;
    //     const ageDays = dayDiff
    //     return ageMonths,ageDays;

    // }else if(dayDiff <0 && monthDiff >= 0 ){
    //     const ageMonths = monthDiff-1;
    //     const ageDays = 30 + dayDiff
    // }
    
    // monthResult.textContent = ageMonths 
    // dayResult.textContent = ageDays;
    // const ageMonths = monthDiff >= 0  ? monthDiff : 12 - birthMonth + currentMonth; 
    // const ageDays = dayDiff >= 0 ? dayDiff : 30 - birthDay + currentDay;
    // dayResult.textContent = ageDays;

}
submitButton.addEventListener("click",calcAge)