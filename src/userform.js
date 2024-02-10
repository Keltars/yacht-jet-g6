const regicterForm = document.querySelector('.form-rent-yacht');
regicterForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const username = formElement.elements.username.value;
    const useremail = formElement.elements.useremail.value;
    const usertel = formElement.elements.usertel.value;
    const usercomment = formElement.elements.usercomment.value;

    if (username === "" || useremail === "" || usertel === "" || usercomment === "") {
        return console.log('Please fill out the form');
    }

    console.log(`Name: ${username} , Email: ${useremail} , Phone: ${usertel} , Comment: ${usercomment}`);
    formElement.reset();
}