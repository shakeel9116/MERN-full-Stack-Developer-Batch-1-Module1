// Retriving HTML element from DOM
const form = document.getElementById("form");
const Username = document.getElementById("Username");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const Password2 = document.getElementById("Password2");

// Creat event listner for submit button
form.addEventListener("submit",function(e) {
    //stop page from reloading on submit
    e.preventDefault();
    console.log("Submitted");
});