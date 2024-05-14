const list = document.querySelector('ul');
const links = document.querySelectorAll('.hidden-link');

window.addEventListener('scroll', () =>{
    if(list.getBoundingClientRect().top <= 16){
        list.classList.add('expand');
        links.forEach( link => link.classList.add('expand') );
    } else {
        list.classList.remove('expand');
        links.forEach( link => link.classList.remove('expand') );
    }
})