//variables
const rightSide = document.querySelector('.right');
const portfolio = document.querySelector('.portfolio');
const btnPortfolio = document.querySelector('#btn-portfolio');

//event listeners
rightSide.addEventListener('mouseenter', () =>{
    rightSide.classList.add('hover-right');
    rightSide.classList.remove('hover-off');
});

rightSide.addEventListener('mouseleave', () =>{
    rightSide.classList.remove('hover-right');
    rightSide.classList.add('hover-off');
});

btnPortfolio.addEventListener('click', () => {
    portfolio.classList.add('portfolio-fadein');
    btnClose();
});


//functions
function btnClose(){
    btnPortfolio.style.display = 'none';
}
