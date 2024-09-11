import home from "./pages/home/home.js";
import menu from "./pages/menu/menu.js";
import about from "./pages/about/about.js";

const pageLoad = () => {
    const container = document.querySelector('#content');
    const navBar = document.querySelector('nav');
    container.appendChild(home);
    toggleActive();
    navBar.addEventListener('click', (button)=>{
        const target = button.target;
        switch(target.textContent.toLowerCase()){
            case 'home':
                container.innerHTML = '';
                container.appendChild(home);
                break;
            case 'menu':
                container.innerHTML = '';
                container.appendChild(menu);
                break;
            case 'about':
                container.innerHTML = '';
                container.appendChild(about);
                break;
        }
    });
};
const toggleActive = () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            navButtons.forEach((button) => {
                button.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
};
export default pageLoad;