class SupportRequest {
    constructor(name, email, character, message, consent) {
        this.name = name;
        this.email = email;
        this.character = character;
        this.message = message;
        this.consent = consent;
    }

    printToConsole() {
        let characterText = this.character;
        if (characterText === "") {
            characterText = "Не указан";
        }

        let consentText = "Нет";
        if (this.consent) {
            consentText = "Да";
        }

        console.log("========== Новое обращение ==========");
        console.log("Имя:        " + this.name);
        console.log("Email:      " + this.email);
        console.log("Персонаж:   " + characterText);
        console.log("Сообщение:  " + this.message);
        console.log("Согласие:   " + consentText);
        console.log("=====================================");
    }
}

const form = document.getElementById("support-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const characterValue = document.getElementById("character").value.trim();
    const messageValue = document.getElementById("message").value.trim();
    const consentValue = document.getElementById("consent").checked;

    const request = new SupportRequest(
        nameValue,
        emailValue,
        characterValue,
        messageValue,
        consentValue
    );

    request.printToConsole();

    statusText.textContent = "Данные отправлены! Проверьте консоль браузера (F12).";
    form.reset();
});