const conversationsArray = [
    {
        name: "Victor Pinto",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains. ",
        date: Date.now(),
    },
    {
        name: "Christina Cabrera",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: Date.now(),
    },
    {
        name: "Issac Tadesse",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: Date.now(),
    },
];
 

// <li class="conversation__item">
//       <p class="conversation__detail">Victor Pinto</p>
//       <p class="conversation__detail conversation__detail--special">
//       You're the best!
//       </p>
//       <p class="conversation__detail">Today</p>
//   </li>
//console.log("array",conversationsArray[1].name);

const listEl = document.querySelector("#conversations-list");
function displayconversations(){
    listEl.textContent="";

    for(let i = 0; i < conversationsArray.length;i++){
        

     const itemEl = document.createElement("li");
     itemEl.classList.add("conversations__item");
     listEl.appendChild(itemEl);


    const nameEl = document.createElement("p");
    nameEl.classList.add("conversations__name");
    nameEl.innerText = conversationsArray[i].name;
    itemEl.appendChild(nameEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("conversations__date");
    dateEl.innerText = conversationsArray[i].date;
    itemEl.appendChild(dateEl);
  

    const conversationEl = document.createElement("p");
    conversationEl.classList.add("conversations__comment");
    conversationEl.innerText = conversationsArray[i].comment;
    itemEl.appendChild(conversationEl);
}
 }
 //JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
 displayconversations();

 const formEl = document.querySelector("#conversations-form");

    formEl.addEventListener("submit",function(event){
    event.preventDefault();
  

    console.log(event.target.conversationname.value);
    console.log(event.target.comment.value);

     const fullName = event.target.conversationname.value;
     const fullComment = event.target.comment.value;
  
    
    const newConversation = {
      name: fullName,
     comment : fullComment,
      date: Date.now(),
    };
  
    conversationsArray.unshift(newConversation);
    
    displayconversations();
  
    
    formEl.reset();


});