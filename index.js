const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isGorgo = confirm("Are you a Gorgo?");

if(isGorgo === true){
    console.log("Welcome to Gorgoland!");
} 
else {
    profileImage.src = "images/Salamander.jpg"; 
    firstNameSpan.innerHTML = "Salamander";
    ageSpan.innerHTML = 16;
    statusSpan.innerHTML = "Salamander";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/Sõjanina.jpg"; 
    firstNameSpan.innerHTML = "Sõjahunt";
    ageSpan.innerHTML = 16;
    statusSpan.innerHTML = "Aarialane";
});