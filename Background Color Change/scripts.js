const button = document.querySelector('.parent');
const body = document.querySelector('body');
button.addEventListener('click' , (e)=>{
const child = e.target;
body.style.backgroundColor = child.id;
})