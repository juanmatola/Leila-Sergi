import AnimatedNavbar from './modules/AnimatedNavbar.js';

function isIndex() {
    return window.location.pathname === '/' ? true : false;
}

/* Main */
let nav = new AnimatedNavbar('myNav','openNav', 'myLogo');