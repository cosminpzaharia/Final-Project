function addItem(event){
    event.preventDefault();
    let text = document.getElementById('toDoInput');
     
}  

let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let nameField = document.getElementById("nameField") 
let formTitle = document.getElementById("formTitle") 


signinBtn.onclick =  function(){
    nameField.style.display = "none";
    formTitle.innerHTML = "Autentifică-te!";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
            }

signupBtn.onclick =  function(){ 
    nameField.style.display = "flex";
    formTitle.innerHTML = "Înregistrează-te!";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
            } 

const reviewButton = document.querySelector(".reviewButton button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const widgetTitle = document.querySelector(".starTitle");
const editBtn = document.querySelector(".edit");


reviewButton.onclick = () => {
    widget.style.display = "none";
    widgetTitle.style.display = "none";
    post.style.display = "block";

    return false;
}
            
editBtn.onclick = () => {
    widget.style.display = "flex";
    widgetTitle.style.display = "flex";
    post.style.display = "none";
}



 