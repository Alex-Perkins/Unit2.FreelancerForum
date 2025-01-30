/**
 * 
 * Starting freelancer array with at least 2 objects(freelancers)
 * Array: [{name: 'sam', occupation: 'progammer', starting_price: 50}]
 * 
*/

const freelance = [
    { name: "josh", job: "carpenter", start_price: "50" },
    { name: "allen", job: "programmer", start_price: "550" },
    { name: "avery", job: "fishsitter", start_price: "100" },
    { name: "sarah", job: "tutor", start_price: "250" },
]

const addFreelance = [
    { name: "will", job: "carpenter", start_price: "230" },
    { name: "rebekka", job: "programmer", start_price: "340" },
    { name: "ivory", job: "fishsitter", start_price: "200" },
    { name: "aiden", job: "plumber", start_price: "700" },
]

//Array of names

//Array of occupations

//Append array

/**
 * 
 * Create init function
 * 
 *      1. select freelance_container from DOM (DONE)
 *      2. create DOM elements (DONE)
 *          - table
 *          - thead
 *              - tr (header row)
 *          - tbody
 *      3. add text to the header row where the text matches the object key of a freelancer (DONE)
 *      4. append header row to the thead (DONE)
 *      5. append the thead and tbody to the table (DONE)
 *      6. append the table to the freelancer container (DONE)
 *      7. call the function created below to render the freelancer array
 *      8. call the function created below to render the average price
 * 
 */

function init() {

    const myTable = document.querySelector("#mytable");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const header_row = document.createElement("tr");
    const tbody = document.createElement("tbody");

    for (let key in freelance[0]) {
        const th = document.createElement("th");
        th.textContent = key;

        header_row.append(th);
    }

    thead.append(header_row);
    table.append(thead);
    table.append(tbody);

    myTable.append(table);

    flArray();

}

/**
 * 
 * Create function to render the freelancer array to the DOM
 * 
 *      1. select tbody from DOM (DONE)
 *      2. map over freelancer array (DONE)
 *          - 2-1. create elements
 *              - tr
 *              - td (name)
 *              - td (occupation)
 *              - td (starting price)
 *          - 2-2 return tr
 *      3. replace children of tbody with the elements created in the map (DONE)
 * 
 */

function flArray() {

    const flTable = document.querySelector("tbody");

    const flElements = freelance.map((elem) => {
        const tableRow = document.createElement("tr");

        const fl_name = document.createElement("td");
        fl_name.textContent = elem.name;

        const fl_job = document.createElement("td");
        fl_job.textContent = elem.job;

        const fl_price = document.createElement("td");
        fl_price = document.textContent = elem.start_price;

        tableRow.append(fl_name);
        tableRow.append(fl_job);
        tableRow.append(fl_price);

        return tableRow;

    });

    flTable.replaceChildren(...flElements);

}

/**
 * 
 * Create function to get the average freelancer price
 *      1. get average_price span and p tag from DOM
 *      2. call sum function with the freelancer array
 *      3. call avgFLprice function passing the calculated sum and the freelander array
 *      4. update textContent of the span
 *          - if textContent doesnt work use innerHTML
 *      5. replace children of the p tag with the updated span
 * 
 */

function totalPrice(items) {
    //TotalPrice
    const priceAll = freelance.reduce((amount, items) => amount + items.start_price, 0);
    return priceAll;
}

/**
 * 
 * @param {Number} totalPrice 
 * @param {Array} arr 
 * @returns Number
 */

function avgPrice(totalPrice, arr) {
    return totalPrice / arr.length;
}

/**
 *
 * Create a function to add a new freelancer to the freelancer array
 *      1. create variable for the new freelancer object
 *      2. set the name value of our new freelancer to a random name selected from our names array
 *      3. set the occupation value of our new freelancer to a random occupation selected from our occupations array
 *      4. generate random price for new freelancer
 *
 * new_freelancer --> {name: 'Alex', occupation: 'writer', price: 75 }
 *
 *      5. add(push) new freelancer to the freelancers array
 *      6. call the function we made to render the freelancer array
 *      7. call the function created below to render the average price
 *
 */

const flRandom = () => {
    const flNew = addFreelance[Math.floor(Math.random() * addFreelance.random)];

    freelance.push(flNew);


}

    //setInternal calling the function that adds a new freelancer every second aka 1000 miliseconds

    //Call init function
    init();
