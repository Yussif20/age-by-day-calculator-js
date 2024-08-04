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

const dataValidate = (year,month, day)=>{
    let isDataValid = false;
    const inputContainer = document.querySelectorAll(".card__input-container")
    if(year == new Date().getFullYear() &&( month == new Date().getMonth()+1 && day > new Date().getDate()) || ( month > new Date().getMonth()+1)){
        inputContainer.forEach((el)=>{
            el.classList.add("card__input--invalid")
        })
        isDataValid = false
    }else{
        inputContainer.forEach((el)=>{
            el.classList.remove("card__input--invalid")
        })
      isDataValid =true
    } 
    return isDataValid
}

const dayValidate = (day)=>{
    let isDayValid = false;
    const parentEl = dayInput.closest(".card__input-container");
    if(day < 0 || day > 31){
        parentEl.classList.remove("card__input--empty")
        parentEl.classList.add("card__input--invalid")
        isDayValid =false
    }else if(day ==0){
        parentEl.classList.remove("card__input--invalid")
        parentEl.classList.add("card__input--empty")
        isDayValid = false
    }else{
        parentEl.classList.remove("card__input--invalid")
        parentEl.classList.remove("card__input--empty")
        isDayValid =true;
    }
    return isDayValid;
}

const monthValidate = (month)=>{
    const parentEl =  monthInput.closest(".card__input-container");
    let isMonthValid = false;
    if (month < 0 || month > 12){
        parentEl.classList.remove("card__input--empty")
        parentEl.classList.add("card__input--invalid")
        isMonthValid =false
    }else if(month ==0){
        parentEl.classList.remove("card__input--invalid")
        parentEl.classList.add("card__input--empty")
        isDayValid = false
    }else{
        parentEl.classList.remove("card__input--invalid")
        parentEl.classList.remove("card__input--empty")
        isMonthValid =true
    }
    return isMonthValid
}

const yearValidate = (year)=>{
    const parentEl = yearInput.closest(".card__input-container");
    let isYearValid = false;
    if (year < 1900 || year > new Date().getFullYear()){
        parentEl.classList.remove("card__input--empty")
        parentEl.classList.add("card__input--invalid")
        isYearValid =false
    }else if(year == 0){
        parentEl.classList.remove("card__input--invalid")
        parentEl.classList.add("card__input--empty")
        isYearValid = false
    }else{
        parentEl.classList.remove("card__input--invalid")
        parentEl.classList.remove("card__input--empty")
        isYearValid =true
    }
    return isYearValid
}


const onClickHandler = ()=>{
    const year = yearInput.value
    const month = monthInput.value
    const day = dayInput.value

    dayValidate(day)
    monthValidate(month)
    yearValidate(year)

    if( dayValidate(day) && monthValidate(month) && yearValidate(year) && dataValidate(year,month,day)){
        calcAge(year,month,day)
    }else{
        clearFields()
    }
}

submitButton.addEventListener("click",onClickHandler)
