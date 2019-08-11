// Your code goes here

const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        alert("Thank you!!!");
    });
});

const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', (event) => {
    logo.style.display = "none";
});

let docBody = document.querySelector("body")
docBody.addEventListener("keydown", (event) => {
    docBody.style.backgroundColor = "beige";
})

docBody.addEventListener("keyup", (event) => {
    docBody.style.backgroundColor = "white";
})

docBody.addEventListener("wheel", (event) => {
    docBody.style.backgroundColor = "lightblue";
    event.stopPropagation();
})

window.addEventListener("resize", (event) => {
    alert("Hey, I see you resized me!")
})


//adding form to allow additional event handlers

const homeContainer = document.querySelector('.home');

const docForm = document.createElement('form');
docForm.id = 'form'

const formName = document.createElement('input');
formName.setAttribute('type', 'text');
docForm.appendChild(formName);

const formEmail = document.createElement('input');
formEmail.setAttribute('type', 'text');

docForm.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "pink"
    console.log("Focus.")
}, true)

docForm.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = ""
    console.log("Blur.")
}, true)

docForm.appendChild(formEmail);
homeContainer.appendChild(docForm);


const destHeader = document.querySelectorAll('.destination h4');
destHeader.forEach(heading => {
    heading.addEventListener('dblclick', (event) => {
        heading.style.fontSize = '4.0rem';
    })
})


