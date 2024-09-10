import './style.css';
import heroImage from '../../images/falafel-pablo-merchan-montes.jpg';

const container = document.createElement('div');
const welcomeMessage = document.createElement('div');
const welcomeImage = document.createElement('img');
const headline = document.createElement('h1');
const description = document.createElement('p');

headline.textContent = 'Lorem Ipsum';
description.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
welcomeImage.setAttribute('src', heroImage);
welcomeImage.setAttribute('title', "Image By Pablo Merchan Montes / Unsplash");

container.classList.add('page-hero');
welcomeMessage.classList.add('welcome-message');
welcomeImage.classList.add('welcome-image');

welcomeMessage.appendChild(headline);
welcomeMessage.appendChild(description);

container.appendChild(welcomeMessage);
container.appendChild(welcomeImage);

export default container;