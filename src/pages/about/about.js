import './style.css';

const container = document.createElement('div');
const headline = document.createElement('h1');
const description = document.createElement('p');

headline.textContent = 'Lorem Ipsum';
description.textContent = 'Lorem Ipsum';
container.classList.add('page-about');
container.appendChild(headline);
container.appendChild(description);

export default container;