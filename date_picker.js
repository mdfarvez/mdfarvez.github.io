// getting date id
const id = document.getElementById('date');

// date function for getting current year
function date(id) {
    const dates = new Date();
    const year = dates.getFullYear();

    // write current year in date id
    id.innerHTML = year;
}

// execute date function
date();