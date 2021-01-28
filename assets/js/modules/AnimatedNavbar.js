export default class AnimatedNavbar {
    constructor (navId,buttonId, logoId){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
        this.logo = document.getElementById(logoId);
        this.invert = false;
        this.status = 'closed';
        this.init();
    }
    init () {
        this.button.addEventListener('click', () => {this.action();});
    }
    action (){
        if (this.status == 'closed') {  
            this.open();
            this.changeButtonToClose();
        }else{
            this.close();
            this.changeButtonToOpen();
        }
    }
    open () {
        this.navbar.style.width = '100%';
        this.navbar.style.opacity = '1';
        if(this.logo.classList.contains('invertImageColor')){
            this.logo.classList.remove('invertImageColor');
            this.invert = true;
        }
        this.status = 'open';
    }
    close () {
        this.navbar.style.width = '0%';
        this.navbar.style.opacity = '0';
        if (this.invert === true) {
            this.logo.classList.add('invertImageColor');
        }
        this.status = 'closed';
    }
    changeButtonToOpen () {
        this.button.innerHTML = '<i class="fas fa-bars"></i><span class="pl-3 fadein d-none d-md-inline">Menu</span>';
    }
    changeButtonToClose () {
        this.button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg><span class="pl-3 text-white fadein d-none d-md-inline">Close</span>';
    }

}