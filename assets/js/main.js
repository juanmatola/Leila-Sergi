import AnimatedNavbar from './modules/AnimatedNavbar.js';
import AutoVideo from './modules/AutoVideo.js';

function isIndex() {
    return window.location.pathname === '/' ? true : false;
}

/* Main */
let nav = new AnimatedNavbar('myNav','openNav', 'myLogo');

if (isIndex()) {
    let homeVideo = new AutoVideo('homeVideo').loopOn();
}