const form = document.querySelector(".subscribe-form");
const input = document.querySelector(".email-input");

function validateInput(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = regex.test(email);
    return result;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    
});