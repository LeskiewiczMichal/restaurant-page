import './style.css';
import homePage from './home.js';
import initialLoad from './initialLoad.js';
import menu from './menu.js';
import resetPage from './resetPage.js';
import contactPage from './contactPage';

import header from './header.js';

initialLoad()

//  Cache DOM
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

const homeFunction = () => {
    resetPage();
    homePage();
}

const menuFunction = () => {
    resetPage();
    menu();
}

const contactFunction = () => {
    resetPage();
    contactPage();
}

// Bind Events
homeButton.addEventListener('click', homeFunction);
menuButton.addEventListener('click', menuFunction);
contactButton.addEventListener('click', contactFunction);
// initialLoad()

