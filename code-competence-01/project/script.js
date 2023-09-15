document.getElementById("submitButton").addEventListener("click", () => {
    const firstNameInput = document.getElementById("firstName").value;
    const lastNameInput = document.getElementById("lastName").value;
    const emailInput = document.getElementById("email").value;
    const messageInput = document.getElementById("message").value;

    const alertMessage = `Your name : ${firstNameInput} ${lastNameInput}\nEmail : ${emailInput}\nMessage : ${messageInput}`;

    alert(alertMessage);
})