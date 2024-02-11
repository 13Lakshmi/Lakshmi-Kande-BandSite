// <li class="shows__item">
//       <p class="shows__detail">Victor Pinto</p>
//       <p class="shows__detail conversation__detail--special">
//       You're the best!
//       </p>
//       <p class="shows__detail">Today</p>
//   </li>

const showsArray = [
    {
        DATE: "Mon Sept 09 2024",
        VENUE: "Ronald Lane",
        LOCATION: "San Francisco, CA",

    },
    {
        DATE: "Tue Sept 17 2024",
        VENUE: "Pier 3 East",
        LOCATION: "San Francisco, CA",

    },
    {
        DATE: "Sat Oct 12 2024",
        VENUE: "View Lounge",
        LOCATION: "San Francisco, CA",

    },
    {
        DATE: "Sat Nov 16 2024",
        VENUE: "Hyatt Agency",
        LOCATION: "San Francisco, CA",

    },
    {
        DATE: "Fri Nov 29 2024",
        VENUE: "Moscow Center",
        LOCATION: "San Francisco, CA",

    },
    {
        DATE: "Wed Dec 18 2024",
        VENUE: "Press Club",
        LOCATION: "San Francisco, CA",

    },
];
console.table(showsArray);


const section = document.querySelector("#shows");
const div1 = document.createElement("div");
div1.classList.add("shows__left");
section.appendChild(div1);

const titleEl = document.createElement("h2");
titleEl.classList.add("shows__title");
titleEl.innerText = "Shows";
div1.appendChild(titleEl);

const div2 = document.createElement("div");
div2.classList.add("shows__right");
section.appendChild(div2);


const listEl = document.querySelector("#shows-list");

div2.appendChild(listEl);

function displayShows() {

    const subtitle = document.createElement("li");
    subtitle.classList.add("shows__subtitle-format");
    listEl.appendChild(subtitle);

    const headEl = document.createElement("p");
    headEl.classList.add("shows__subtitle-outside");
    headEl.innerText = "DATE";
    subtitle.appendChild(headEl);

    const head1El = document.createElement("p");
    head1El.classList.add("shows__subtitle-outside");
    head1El.innerText = "VENUE";
    subtitle.appendChild(head1El);

    const head2El = document.createElement("p");
    head2El.classList.add("shows__subtitle-outside");
    head2El.innerText = "LOCATION";
    subtitle.appendChild(head2El);

    for (let i = 0; i < showsArray.length; i++) {

        const itemEl = document.createElement("li");
        itemEl.classList.add("shows__item");
        listEl.appendChild(itemEl);


        const headEl = document.createElement("p");
        headEl.classList.add("shows__subtitle");
        headEl.innerText = "DATE";
        itemEl.appendChild(headEl);

        const head1El = document.createElement("p");
        head1El.classList.add("shows__subtitle");
        head1El.innerText = "VENUE";
        itemEl.appendChild(head1El);

        const head2El = document.createElement("p");
        head2El.classList.add("shows__subtitle");
        head2El.innerText = "LOCATION";
        itemEl.appendChild(head2El);


        const dateEl = document.createElement("p");
        dateEl.classList.add("shows__detail");
        dateEl.innerText = showsArray[i].DATE;
        headEl.appendChild(dateEl);

        const venueEl = document.createElement("p");
        venueEl.classList.add("shows__detail");
        venueEl.innerText = showsArray[i].VENUE;
        head1El.appendChild(venueEl);



        const locationEl = document.createElement("p");
        locationEl.classList.add("shows__detail");
        locationEl.innerText = showsArray[i].LOCATION;
        head2El.appendChild(locationEl);

        const buttonEl = document.createElement("button");
        buttonEl.classList.add("shows__button","shows__button--divider");
        buttonEl.innerText = "BUY TICKETS";
        itemEl.appendChild(buttonEl);

        const dividerEl = document.createElement("div");
        dividerEl.classList.add("shows__divider");
        listEl.appendChild(dividerEl);


    }

}

displayShows();