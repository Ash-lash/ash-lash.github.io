document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});


document.querySelector('header').addEventListener('click', function () {
    changeBackgroundColor();
});


let previousScrollPosition = window.scrollY;

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.scrollY;

   
    if (currentScrollPosition > previousScrollPosition) {
        
        changeBackgroundColor();
    } else {
        
        changeBackgroundColor();
    }

    previousScrollPosition = currentScrollPosition;
});


function changeBackgroundColor() {
    const body = document.body;
    const newColor = getRandomColor();
    body.style.transition = 'background-color 0.5s ease-in-out';
    body.style.backgroundColor = newColor;
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


console.log('simply waste');
