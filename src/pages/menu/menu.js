import './style.css';
import menuImage1 from '../../images/menu-image1.webp';
import menuImage2 from '../../images/menu-image2.webp';
import menuImage3 from '../../images/menu-image3.webp';
import menuImage4 from '../../images/menu-image3.webp';
import menuImage5 from '../../images/menu-image4.webp';
import menuImage6 from '../../images/menu-image6.webp';

const menuItems = [];
function generateMenuItems(){
    menuItems.push({
        title: "Za'ater",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        image: menuImage1,
    });
    menuItems.push({
        title: 'Salata Falahiyeh',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        image: menuImage2,
    });
    menuItems.push({
        title: 'Maqlubeh',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        image: menuImage3,
    });
    menuItems.push({
        title: 'Dawali',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        image: menuImage4,
    });
    menuItems.push({
        title: 'Qidreh',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        image: menuImage5,
    });
    menuItems.push({
        title: 'Mansaf',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        image: menuImage6,
    });

}

const container = document.createElement('div');
container.classList.add('menu-container');
generateMenuItems();
for(let i=0; i<6; i++){
    const menuItem = document.createElement('div');
     const menuItemTitle = document.createElement('h1');
     const menuItemDescription = document.createElement('p');
    const menuItemImage = document.createElement('img');
    
    menuItem.classList.add('menu-item');
    
    menuItemTitle.textContent = menuItems[i].title;
    menuItemDescription.textContent = menuItems[i].description;
    menuItemImage.setAttribute('src', menuItems[i].image);
    menuItemImage.setAttribute('title', "Image By Serious Eats / Mai Kakish");
    
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemTitle);
    menuItem.appendChild(menuItemDescription);
    
    container.appendChild(menuItem);
}

export default container;