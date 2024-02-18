const apiKey = "c90fd532-ac02-4468-a1a8-b44380cf2b91";

import BandSiteApi from "./band-site-api.js";


const bandApi = new BandSiteApi(apiKey);




const listEl = document.querySelector("#conversations-list");
async function displayconversations() {

    const conversationsArray = await bandApi.getComments();

    listEl.textContent = "";


    for (let i = 0; i < conversationsArray.length; i++) {

        const dividerEl = document.createElement("div");
        dividerEl.classList.add("conversations__divider");
        listEl.appendChild(dividerEl);


        const itemEl = document.createElement("li");
        itemEl.classList.add("conversations__item");
        listEl.appendChild(itemEl);

        const pictureEl = document.createElement("div");
        pictureEl.classList.add("conversations__picture");
        itemEl.appendChild(pictureEl);

        const div = document.createElement("div");
        div.classList.add("conversations__fulltext");
        itemEl.append(div);

        const div1 = document.createElement("div");
        div1.classList.add("conversations__toptext");
        div.appendChild(div1);

        const nameEl = document.createElement("p");
        nameEl.classList.add("conversations__name");
        nameEl.innerText = conversationsArray[i].name;
        div1.appendChild(nameEl);

        const dateEl = document.createElement("p");
        dateEl.classList.add("conversations__date");
        const date = new Date(conversationsArray[i].timestamp);
        dateEl.innerText = date.toLocaleDateString();
        div1.appendChild(dateEl);

        const conversationEl = document.createElement("p");
        conversationEl.classList.add("conversations__comment");
        conversationEl.innerText = conversationsArray[i].comment;
        div.appendChild(conversationEl);

        const divider1El = document.createElement("div");
        divider1El.classList.add("conversations__divider");
        listEl.appendChild(divider1El);



    }
}
await displayconversations();

const formEl = document.querySelector("#conversations-form");

formEl.addEventListener("submit", async function (event) {
    event.preventDefault();


    const fullName = event.target.conversationname.value;
    const fullComment = event.target.comment.value;


    const newConversation = {
        name: fullName,
        comment: fullComment,
       
    };

    const response = await bandApi.postComments(newConversation);
   



    displayconversations();


    formEl.reset();


});

const response = await bandApi.getShows();

