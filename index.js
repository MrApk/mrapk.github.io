const date = new Date()
const day = date.getDay();

function showOnly(className) {
    const all = [
        "containersun",
        "containermon",
        "containertue",
        "containerwed",
        "containerthur",
        "containerfri",
        "containersat"
    ];

    all.forEach(c => {
        document.getElementsByClassName(c)[0].hidden = (c !== className);
    });
}

function line(l,c){
    if (document.getElementById(c).checked == true) {
        document.getElementById(l).style.textDecoration = "line-through";
        localStorage.setItem(l,'True');
        localStorage.setItem(c,'True');
        let value = localStorage.getItem("count");

        if (!value) {
            // Create only once
            localStorage.setItem("count", 1);
            console.log("Created: 1");
        } else {
            // Optional increase
            value = parseInt(value) + 1;
            localStorage.setItem("count", value);
            console.log("Updated:", value);
        }
    }else{
            document.getElementById(l).style.textDecoration = "none";
            localStorage.setItem(l,'False');
            localStorage.setItem(c,'False');
            let value = localStorage.getItem("count");

            if (!value) {
                // Create only once
                localStorage.setItem("count", 1);
                console.log("Created: 1");
            } else {
                // Optional increase
                value = parseInt(value) - 1;
                localStorage.setItem("count", value);
                console.log("Updated:", value);
            }
        }
}

start = (text,time,btn1,btn2,line,) => {
    document.getElementsByClassName(btn1)[0].hidden = true;
    document.getElementsByClassName(btn2)[0].hidden = false;
    i=setInterval(() => {
        document.getElementsByClassName(text)[0].innerHTML = time;
        if (time <= 0) {
            document.getElementsByClassName(btn1)[0].hidden = true;
            document.getElementsByClassName(btn2)[0].hidden = false;
            document.getElementsByClassName(btn1)[0].disabled = true;
            document.getElementsByClassName(btn2)[0].disabled = true;
            localStorage.setItem(line,'True');
            localStorage.setItem(text,'True');
            localStorage.setItem(btn1,'True');
            localStorage.setItem(btn2,'True');
            let value = localStorage.getItem("count");

            if (!value) {
                // Create only once
                localStorage.setItem("count", 1);
                console.log("Created: 1");
            } else {
                // Optional increase
                value = parseInt(value) + 1;
                localStorage.setItem("count", value);
                console.log("Updated:", value);
            }
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
            const element2 = document.getElementsByClassName(i)[0];
            
            
            if (element) { 
            if (value === "True") {
                element.style.textDecoration = "line-through";
                element.checked = true;
            } else {
                element.style.textDecoration = "none";
                element.checked = false;
            }
        }
            if (element2){
                if (i.slice(-4) === "time" && value === "True") {
                        element2.innerHTML = 0;
                } else if (i.match(/btn/) && value === "True"){
                        element2.disabled = true;
                } else {
                        console.log("Element not found:");
                    }
            }
        }
    }
});
window.onload = () => {
    switch (day) {
    case 0:
        document.getElementsByClassName('day')[0].innerHTML = "Sunday";
        showOnly("containersun");
        break;

    case 1:
        document.getElementsByClassName('day')[0].innerHTML = "Monday";
        showOnly("containermon");
        break;

    case 2:
        document.getElementsByClassName('day')[0].innerHTML = "Tuesday";
        showOnly("containertue");
        break;

    case 3:
        document.getElementsByClassName('day')[0].innerHTML = "Wednesday";
        showOnly("containerwed");
        break;

    case 4:
        document.getElementsByClassName('day')[0].innerHTML = "Thursday";
        showOnly("containerthur");
        break;

    case 5:
        document.getElementsByClassName('day')[0].innerHTML = "Friday";
        showOnly("containerfri");
        break;

    case 6:
        document.getElementsByClassName('day')[0].innerHTML = "Saturday";
        showOnly("containersat");
        break;
}
}
