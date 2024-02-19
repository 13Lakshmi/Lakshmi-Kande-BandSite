const apiKey = "c90fd532-ac02-4468-a1a8-b44380cf2b91";

import BandSiteApi from "./band-site-api.js";


const bandApi = new BandSiteApi(apiKey);

const response = await bandApi.getShows();
console.log(response);
const showsArray = response.data;
console.log(showsArray);

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
        headEl.innerText = "date";
        itemEl.appendChild(headEl);

        const head1El = document.createElement("p");
        head1El.classList.add("shows__subtitle");
        head1El.innerText = "place";
        itemEl.appendChild(head1El);

        const head2El = document.createElement("p");
        head2El.classList.add("shows__subtitle");
        head2El.innerText = "location";
        itemEl.appendChild(head2El);


        const dateEl = document.createElement("p");
        dateEl.classList.add("shows__detail");
        const timestamp = new Date(showsArray[i].date);
        dateEl.innerText = timestamp.toLocaleDateString();
        headEl.appendChild(dateEl);

        const venueEl = document.createElement("p");
        venueEl.classList.add("shows__detail");
        venueEl.innerText = showsArray[i].place;
        head1El.appendChild(venueEl);



        const locationEl = document.createElement("p");
        locationEl.classList.add("shows__detail");
        locationEl.innerText = showsArray[i].location;
        head2El.appendChild(locationEl);

        const buttonEl = document.createElement("button");
        buttonEl.classList.add("shows__button", "shows__button--divider");
        buttonEl.innerText = "BUY TICKETS";
        itemEl.appendChild(buttonEl);

        const dividerEl = document.createElement("div");
        dividerEl.classList.add("shows__divider");
        listEl.appendChild(dividerEl);


    }

}


 displayShows();

