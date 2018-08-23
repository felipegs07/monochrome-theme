console.log('Hello my friend ;)');
//variables
const rightSide = document.querySelector('.right');
const portfolio = document.querySelector('#portfolio');
const btnPortfolio = document.querySelector('#btn-portfolio');
const blog = document.querySelector('#posts');
const btnBlog = document.querySelector('#btn-blog');
const btnCloseModal = document.querySelector('.close-btn');


//functions
function btnClose(){
    btnPortfolio.style.display = 'none';
}

function showModal(modalID){
    modalID.style.display = 'block';
}

function closeModal(){
    blog.style.display = 'none';
}

//event listeners
rightSide.addEventListener('mouseenter', () => {
    rightSide.classList.add('hover-right');
    rightSide.classList.remove('hover-off');
});

rightSide.addEventListener('mouseleave', () => {
    rightSide.classList.remove('hover-right');
    rightSide.classList.add('hover-off');
});

btnPortfolio.addEventListener('click', () => {
    portfolio.classList.add('portfolio-left-fadein');
    btnClose();
});

btnBlog.addEventListener('click', () => {
    showModal(blog);
}, false);

btnCloseModal.addEventListener('click', () => {
    closeModal();
});

window.addEventListener('click', (e) => {
    if(e.target == blog){
        closeModal();
    }
});