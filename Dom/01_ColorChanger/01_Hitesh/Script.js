const buttons = document.querySelectorAll('.button'); //all buttons selected
const body = document.querySelector('body') //body selected

buttons.forEach( (button)=>{
    button.addEventListener('click' , (b)=>{
        const clickedButton = b.target
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        
        // Set the body's background color
        body.style.backgroundColor = color;
    })
});
window.addEventListener('click',(event)=>{
    if(!event.target.classList.contains('button')){
        body.style.backgroundColor = 'darkgrey'
    }
});
