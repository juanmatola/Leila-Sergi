import AnimatedNavbar from './modules/AnimatedNavbar.js';

let nav = new AnimatedNavbar('myNav','openNav', 'myLogo');

let navButton = document.getElementById('openNav');
let floatWorkButton = document.getElementById('floatWorkButton');

navButton.addEventListener('click',()=>{
    if(nav.status === 'open'){
        floatWorkButton.style.opacity = '0';
    }else{
        floatWorkButton.style.opacity = '1';
    }
});