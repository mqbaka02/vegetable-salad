var header= document.querySelector('.header-of-header');
var toggle_btn= document.querySelector('.cross');

const toggleMenu= (event) => {
    if (header.attributes.hasOwnProperty('nomenu')){
        header.removeAttribute('nomenu');
    } else {
        header.setAttribute('nomenu', '');
    }
};

toggle_btn.addEventListener('click', toggleMenu);