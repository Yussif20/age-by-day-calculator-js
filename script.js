const submitButton = document.querySelector(".card__separator--button");
const yearInput = document.querySelector(".card__input[data-name='year']");
const monthInput = document.querySelector(".card__input[data-name='month']");
const dayInput = document.querySelector(".card__input[data-name='day']");

const yearResult =document.querySelector(".card__result--year");
const monthResult =document.querySelector(".card__result--month");
const dayResult =document.querySelector(".card__result--day");




const clearFields = ()=>{
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
}

const emptyValidate =(inputElements)=>{
    let notEmpty =false;
    inputElements.forEach((el)=>{
        const parentEl = el.closest(".card__input-container")
        if(!el.value || el.value ==0){
            clearFields();
            parentEl.classList.remove("card__input--invalid")
            parentEl.classList.add("card__input--empty");
            notEmpty =false;
        }else{
            clearFields();
            parentEl.classList.remove("card__input--empty")
            notEmpty = true;
        }
    })
    return notEmpty
}
const dayValidate = (day)=>{
    let isDayValid = false;
    if(day <= 0 || day > 31){
        dayInput.closest(".card__input-container").classList.add("card__input--invalid")
        isDayValid =false
    }else{
        dayInput.closest(".card__input-container").classList.remove("card__input--invalid")
        isDayValid =true;
    }
    return isDayValid;
}
const monthValidate = (month)=>{
    let isMonthValid = false;
    if (month <= 0 || month > 12){
        monthInput.closest(".card__input-container").classList.add("card__input--invalid")
        isMonthValid =false
    }else{
        monthInput.closest(".card__input-container").classList.remove("card__input--invalid")
        isMonthValid =true
    }
    return isMonthValid
}
const yearValidate = (year)=>{
    let isYearValid = false;
    if (year < 1900 || year > new Date().getFullYear()){
        yearInput.closest(".card__input-container").classList.add("card__input--invalid")
        isYearValid =false
    }else{
        yearInput.closest(".card__input-container").classList.remove("card__input--invalid")
        isYearValid =true
    }
    return isYearValid
}

const calcAge = (year,month,day)=>{
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
const onClickHandler = ()=>{
    const inputElements = document.querySelectorAll(".card__input")
    const year = yearInput.value
    const month = monthInput.value
    const day = dayInput.value

    if(emptyValidate(inputElements) && dayValidate(day) && monthValidate(month) && yearValidate(year)){
        calcAge(year,month,day)
    }else{
        clearFields()
        return
    }
}

submitButton.addEventListener("click",onClickHandler)
