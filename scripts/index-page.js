const conversationsArray = [
    {
        name: "Victor Pinto",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains. ",
        date: "11/02/2023",
    },
    {
        name: "Christina Cabrera",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "10/28/2023",
    },
    {
        name: "Issac Tadesse",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "10/20/2023",
    },
];




const listEl = document.querySelector("#conversations-list");
function displayconversations() {
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
        dateEl.innerText = conversationsArray[i].date;
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
displayconversations();

const formEl = document.querySelector("#conversations-form");

formEl.addEventListener("submit", function (event) {
    event.preventDefault();


    console.log(event.target.conversationname.value);
    console.log(event.target.comment.value);

    const fullName = event.target.conversationname.value;
    const fullComment = event.target.comment.value;


    const newConversation = {
        name: fullName,
        comment: fullComment,
        date: Date.now(),
    };

    conversationsArray.unshift(newConversation);

    displayconversations();


    formEl.reset();


});