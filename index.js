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
]

//Array of names

const names = [
     "barry" ,
     "lena" ,
     "adam" ,
     "kim" ,
     "alex" ,
    "bert" ,
]

//Array of occupations

const jobs = [
 "consultant" ,
 "accountant" ,
 "CEO" ,
 "botanist" ,
 "clerk" ,
 "finance" ,
]

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
    const root = document.querySelector("#root");

    const h1 = document.createElement("h1");
    h1.textContent = "Available Freelancers Forum";
    root.append(h1);

    const p = document.createElement("p");
    p.textContent = "The average starting price is$66";
    root.append(p);

    const h2 = document.createElement("h2");
    h2.textContent = "Freelancers Available";
    root.append(h2);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const header_row = document.createElement("tr");

    ["Name", "Occupation", "Price"].forEach((headers) => {
        const th = document.createElement("th");
        th.textContent = headers;
        header_row.append(th);
    });

    thead.append(header_row);
    table.append(thead);

    const tbody = document.createElement("tbody");

    freelance.forEach((freelance) => {
        const elementRow = document.createElement("tr");

        for (const key in freelance) {
            const th = document.createElement("th");
            th.textContent = freelance[key];
            elementRow.append(th);
        }

        tbody.append(elementRow);
    });

    table.append(tbody);
    root.append(table);
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



function addInterval() {
    const root = document.querySelector("#root")

    const table = document.querySelector("table");
    
    const thead = document.createElement("thead");
    const header_row = document.createElement("tr");

    table.append(thead);
    thead.append(header_row);

    const tbody = document.createElement("tbody");

    freelance.forEach((freelance) => {
        const elementRow = document.createElement("tr");

        for (const key in freelance) {
            const th = document.createElement("th");
            th.textContent = freelance[key];
            elementRow.append(th);
        }

        tbody.append(elementRow);

    });

    table.replaceChildren(tbody);
    root.append(table);

    //const average = genAvgStrtPrice();
    const para = document.querySelector("p");
    para.textContent = `The average price of each hirable freelancer is ${genAvgStrtPrice()}`;
}



function genAvgStrtPrice() {
    const totalAmt = freelance.reduce((start, curr) => start + curr.start_price * 1, 0);
    return (totalAmt / freelance.length).toFixed(2);
}



function genFL() {
    const N = Math.floor(Math.random() * names.length);
    const O = Math.floor(Math.random() * jobs.length);
    const P = Math.floor(Math.random() * 700);
    const genNewFL = { name: names[N], job: jobs[O], start_price: P };
    console.log(genNewFL);
    return genNewFL;
}



function applyNewFL() {
    const genNewFL = genFL();
    freelance.push(genNewFL);
    addInterval();

};

setInterval(applyNewFL, 1000);

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

//setInternal calling the function that adds a new freelancer every second aka 1000 miliseconds

//Call init function
init();
applyNewFL();
genAvgStrtPrice();
