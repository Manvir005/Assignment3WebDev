
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");


submitButton.addEventListener("click", (event) => {
    event.preventDefault(); 


    const thankYouMessage = document.createElement("p"); 
    thankYouMessage.textContent = "Thank you for your message"; 
    thankYouMessage.style.fontSize = "24px"; 
    thankYouMessage.style.textAlign = "center"; 

    contactPage.innerHTML = ""; 
    contactPage.appendChild(thankYouMessage); 
});

