//creating variables of arrays
let e;
let commentArr=[];
let contactsArr=[];
let likedArr=[];
let savedArr=[];
let item=[];

//linking variables with HTML
savedList = document.getElementById("saved");
likedList = document.getElementById("liked");
email = document.getElementById("email");

//Checking for or creating sessions storage ready to setItems
function onLoad() {
    if(sessionStorage.getItem("hasRun") === null) {
        sessionStorage.setItem("liked", JSON.stringify(likedArr));
        sessionStorage.setItem("saved", JSON.stringify(savedArr));
        sessionStorage.setItem("comments", JSON.stringify(savedArr));
        sessionStorage.setItem("contacts", JSON.stringify(contactsArr));
        sessionStorage.setItem("hasRun", true);  
    }
}
function saved(str){
    // console.log(str.innerHTML)
    savedArr = JSON.parse(sessionStorage.getItem("saved"));
    // console.log(savedArr);
    savedArr.push(str.innerHTML);
    sessionStorage.setItem("saved", JSON.stringify(savedArr));
    alert(`You have ${savedArr.length} saved items`)
}

function liked(str, str2){
    // console.log(str.innerHTML)
    likedArr = JSON.parse(sessionStorage.getItem("liked"));
    // console.log(likedArr);
    likedArr.push(str.innerHTML);
    if (str2 != null){
        likedArr.push(str2.innerHTML);
        console.log(str2.innerHTML);
    }
    sessionStorage.setItem("liked", JSON.stringify(likedArr));
    alert(`You have ${likedArr.length} items liked`);

}

//function to populate the saved items page with all saved and liked items
function populate(){
    //saved items being populated
    savedArr = JSON.parse(sessionStorage.getItem("saved"));
    console.log(savedArr);
    for (i = 0; i < savedArr.length; i++){
        savedItem = document.createElement("li")
        span = document.createElement("span");
        span.innerHTML = savedArr[i];
        savedList.appendChild(savedItem);
        savedItem.appendChild(span);  
    }
    //liked items being populated along with comment section and button
    likedArr = JSON.parse(sessionStorage.getItem("liked"));
    for (i = 0; i < likedArr.length; i++){
        likedItem = document.createElement("li");
        span = document.createElement("span");
        span.innerHTML = likedArr[i];
        div = document.createElement("div");
        form = document.createElement("form");
        input = document.createElement("input");
        button = document.createElement("button");
        button.addEventListener("click", function(e){          
            let comment = e.target.previousElementSibling.value;
            e.target.previousElementSibling.value = "";
            console.log(comment); 
            // no instructions for what to do with these so saved in session storage and printed to console
            commentArr = JSON.parse(sessionStorage.getItem("comments"));
            commentArr.push(comment);
            sessionStorage.setItem("comments", JSON.stringify(commentArr));
        })
        button.type = "button";
        button.innerHTML = "submit"
        input.placeholder = "leave your comment here";
        span.appendChild(div);
        div.appendChild(form);
        form.appendChild(input);
        form.appendChild(button)
        likedList.appendChild(likedItem);
        likedItem.appendChild(span); 
    }
}
//function to accept email addressed, only populates into session Storage and the console
function emails(email, contactb){
    console.log(email.value);
    console.log(contactb.value);
    contactsArr = JSON.parse(sessionStorage.getItem("contacts"));
    contactsArr.push(email.value);
    contactsArr.push(contactb.value);
    // email.innerHTML = ""; couldn't work out how to remove this
    sessionStorage.setItem("contacts", JSON.stringify(contactsArr));
}

