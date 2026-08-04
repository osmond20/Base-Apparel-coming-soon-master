const form = document.querySelector(".subscribe-form");
const input = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");

function validateInput(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = regex.test(email);
    return result;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = input.value.trim();

    if(email === ""){
        input.classList.add("error");
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
        errorMessage.classList.add("show");
        return;
    }
    
    if(!validateInput(email)){
        input.classList.add("error");
        errorMessage.textContent = "Please provide a valid email";
        errorMessage.classList.add("show");
        return;
    }

    input.classList.remove("error");
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");
});