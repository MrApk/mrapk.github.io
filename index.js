const date = new Date()
const day = date.getDay();

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    const currentDate = new Date();
    const currentDay = currentDate.toDateString(); // Only the date part (e.g., "Mon Nov 18 2024")
    const storedDate = localStorage.getItem('lastClearedDate');

    // Check if storedDate is not today, clear the localStorage
    if (storedDate !== currentDay) {
        console.log('New day detected, clearing localStorage...');
        localStorage.clear();
        localStorage.setItem('lastClearedDate', currentDay); // Update the stored date
    }

    // Retrieve and apply styles based on localStorage
    for (let i in localStorage) {
        if (i !== 'lastClearedDate') { // Skip the date key
            const value = localStorage.getItem(i);
            const element = document.getElementById(i);

            if (element) { // Check if the element exists
                if (value === 'True') {
                    element.style.textDecoration = "line-through";
                    element.checked = true;
                } else {
                    element.style.textDecoration = "none";
                    element.checked = false;
                }
            }
        }
    }
});

line = (l,c) => {
    if (document.getElementById(c).checked == true) {
        document.getElementById(l).style.textDecoration = "line-through";
        localStorage.setItem(l,'True');
        localStorage.setItem(c,'True');
    }else{
        document.getElementById(l).style.textDecoration = "none";
        localStorage.setItem(l,'False');
        localStorage.setItem(c,'False');
    }
}


start = (text, time,btn1,btn2,line) => {
    document.getElementsByClassName(btn1)[0].hidden = true;
    document.getElementsByClassName(btn2)[0].hidden = false;
    i=setInterval(() => {
        document.getElementsByClassName(text)[0].innerHTML = time;
        if (time <= 0) {
            document.getElementsByClassName(btn1)[0].hidden = true;
            document.getElementsByClassName(btn2)[0].hidden = false;
            localStorage.setItem(line,'True');
            document.getElementById(line).style.textDecoration = "line-through";
            clearInterval(i);
            
        }
        time--;
    }, 1000);
}

stop = (btn1,btn2) => {
    document.getElementsByClassName(btn1)[0].hidden = false;
    document.getElementsByClassName(btn2)[0].hidden = true;
    clearInterval(i);
}
window.onload = () => {
    
    
    if (day == 0) {
    document.getElementsByClassName('day')[0].innerHTML = "Sunday";
    document.getElementsByClassName('containersun')[0].hidden = false;
    document.getElementsByClassName('containermon')[0].hidden = true;
    document.getElementsByClassName('containertue')[0].hidden = true;
    document.getElementsByClassName('containerwed')[0].hidden = true;
    document.getElementsByClassName('containerthur')[0].hidden =true;
    document.getElementsByClassName('containerfri')[0].hidden = true;
    document.getElementsByClassName('containersat')[0].hidden = true;

}  else if (day == 1) {
    document.getElementsByClassName('day')[0].innerHTML = "Monday";
    document.getElementsByClassName('containermon')[0].hidden = false;
    document.getElementsByClassName('containertue')[0].hidden = true;
    document.getElementsByClassName('containerwed')[0].hidden = true;
    document.getElementsByClassName('containerthur')[0].hidden =true;
    document.getElementsByClassName('containerfri')[0].hidden = true;
    document.getElementsByClassName('containersat')[0].hidden = true;
    document.getElementsByClassName('containersun')[0].hidden = true;
}   else if (day == 2) {
    document.getElementsByClassName('day')[0].innerHTML = "Tuesday";
    document.getElementsByClassName('containermon')[0].hidden = true;
    document.getElementsByClassName('containertue')[0].hidden = false;
    document.getElementsByClassName('containerwed')[0].hidden = true;
    document.getElementsByClassName('containerthur')[0].hidden =true;
    document.getElementsByClassName('containerfri')[0].hidden = true;
    document.getElementsByClassName('containersat')[0].hidden = true;
    document.getElementsByClassName('containersun')[0].hidden = true;
}   else if (day == 3) {
    document.getElementsByClassName('day')[0].innerHTML = "Wednesday";
    document.getElementsByClassName('containerwed')[0].hidden = false;
    document.getElementsByClassName('containermon')[0].hidden = true;
    document.getElementsByClassName('containertue')[0].hidden = true;
    document.getElementsByClassName('containerthur')[0].hidden =true;
    document.getElementsByClassName('containerfri')[0].hidden = true;
    document.getElementsByClassName('containersat')[0].hidden = true;
    document.getElementsByClassName('containersun')[0].hidden = true;
}   else if (day == 4) {
    document.getElementsByClassName('day')[0].innerHTML = "Thursday";
    document.getElementsByClassName('containerthur')[0].hidden =true;
    document.getElementsByClassName('containermon')[0].hidden = true;
    document.getElementsByClassName('containertue')[0].hidden = true;
    document.getElementsByClassName('containerwed')[0].hidden = true;
    document.getElementsByClassName('containerfri')[0].hidden = true;
    document.getElementsByClassName('containersat')[0].hidden = true;
    document.getElementsByClassName('containersun')[0].hidden = true;
}   else if (day == 5) {
    document.getElementsByClassName('day')[0].innerHTML = "Friday";
    document.getElementsByClassName('containerfri')[0].hidden = false;
    document.getElementsByClassName('containermon')[0].hidden = true;
    document.getElementsByClassName('containertue')[0].hidden = true;
    document.getElementsByClassName('containerwed')[0].hidden = true;
    document.getElementsByClassName('containerthur')[0].hidden =true;
    document.getElementsByClassName('containersat')[0].hidden = true;
    document.getElementsByClassName('containersun')[0].hidden = true;
}   else if (day == 6) {
    document.getElementsByClassName('day')[0].innerHTML = "Saturday";
    document.getElementsByClassName('containersat')[0].hidden = false;    
    document.getElementsByClassName('containermon')[0].hidden = true;
    document.getElementsByClassName('containertue')[0].hidden = true;
    document.getElementsByClassName('containerwed')[0].hidden = true;
    document.getElementsByClassName('containerthur')[0].hidden =true;
    document.getElementsByClassName('containerfri')[0].hidden = true;
    document.getElementsByClassName('containersun')[0].hidden = true;
}
}