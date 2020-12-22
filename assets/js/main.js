class AnimatedNavbar {
    constructor (navId,buttonId){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
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
        this.status = 'open';
    }
    close () {
        this.navbar.style.width = '0%';
        this.navbar.style.opacity = '0';
        this.status = 'closed';
    }
    changeButtonToOpen () {
        this.button.innerHTML = '<i class="fas fa-bars"></i><span class="pl-3 fadein d-none d-md-inline">Menu</span>';
    }
    changeButtonToClose () {
        this.button.innerHTML = '<i class="fas fa-times text-white"></i><span class="pl-3 text-white fadein d-none d-md-inline">Close</span>';
    }

}

let nav = new AnimatedNavbar('myNav','openNav');
