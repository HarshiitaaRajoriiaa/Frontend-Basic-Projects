const buttons = document.querySelectorAll('.button img'); // all images inside buttons selected
const body = document.querySelector('body'); // body selected

buttons.forEach((button) => {
    button.addEventListener('click', (b) => {
        const clickedImage = b.target; // return the element here img
        console.log(clickedImage.parentElement)
        const color = clickedImage.getAttribute('data-color'); // get the color from data-color attribute

        // Set the body's background color
        body.style.backgroundColor = color;
    });
});

window.addEventListener('click', (event) => {  //Adds a click event listener to the entire window.
    if (!event.target.closest('.button')) { // Checks if the click event did not occur inside any element within the class button.
        body.style.backgroundColor = 'darkgrey';
    }
});
