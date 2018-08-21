const rightSide = document.querySelector('.right');


rightSide.addEventListener('mouseenter', () =>{
    rightSide.classList.add('hover-right');
    rightSide.classList.remove('hover-off');
});

rightSide.addEventListener('mouseleave', () =>{
    rightSide.classList.remove('hover-right');
    rightSide.classList.add('hover-off');
});