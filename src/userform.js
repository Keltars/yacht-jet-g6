const elements = {
    form : document.querySelector('.form-rent-yacht'),
}
form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const formElement = event.target;
    const name = formElement.username.value;
    const email = formElement.useremail.value;
    const phone = formElement.usertel.value;


    if (login === "" || email === "" || phone === "") {
        return console.log('Please fill out the form');
    }

    console.log(`Login: ${name.value} , Email: ${email.value} , Phone: ${phone.value}`);
    form.reset();
}
