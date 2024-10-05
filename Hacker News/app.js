import RouterHandler from "./router.js";


window.onhashchange = () => {
    setActiveLink();
}

function setActiveLink(){
    const links = document.querySelectorAll('.header-link');
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        const currPath = window.location.hash;
        if(currPath === linkPath){
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

}

class App{
    constructor(){
        new RouterHandler();
    }
}

new App();