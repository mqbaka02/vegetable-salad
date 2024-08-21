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

/**
 * fancy stuff
 */
const MOVEMENT_SCALE= 30;//in pixels

var target= document.querySelector('.hero-images');
var main_im= target.querySelector('.hero');
var secondray_ims= [];
secondray_ims.push(target.querySelector('#anana'));
secondray_ims.push(target.querySelector('#ananas'));
secondray_ims.push(target.querySelector('#kotomila'));

// console.log(target);
// console.log(main_im);
// console.log(secondray_ims);

var win_size= {
    height: target.clientHeight,
    width: target.clientWidth,
    x: target.getBoundingClientRect().left,
    y: target.getBoundingClientRect().top
};

var imgs_pos=[
    {//anana
        x: 4.7,
        y: 57.3
    },
    {//annas
        x: 75,
        y: 48
    },
    {//kotomila
        x: 47.92,
        y: 83.18
    },
    {//hero
        x: 0,
        y: -35
    }
];

const trackmouse= (event) => {
	const mouse_pos= { x: event.clientX, y: event.clientY };
	const mouse_rel_pos= {
        x: ((mouse_pos.x - win_size.x) - win_size/2) / win_size.width,
        y: ((mouse_pos.y - win_size.y) - win_size/2) / win_size.height
    };
    
	// console.log(win_size);
	// console.log(mouse_rel_pos);
    // secondray_ims.forEach((im, key)=> {
    //     im.style.setProperty('left', (imgs_pos[key].x + mouse_rel_pos.x * MOVEMENT_SCALE) + '%');
    //     im.style.setProperty('top', (imgs_pos[key].y + mouse_rel_pos.y * MOVEMENT_SCALE) + '%');
    // });
    secondray_ims.forEach((im, key)=> {
        im.style.setProperty('left', ( mouse_rel_pos.x + '%'));
        im.style.setProperty('top', ( mouse_rel_pos.y + '%'));
    });
};

target.addEventListener('mousemove', trackmouse);
