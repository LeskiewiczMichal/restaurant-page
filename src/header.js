const header = function() {
    const pageContent = document.querySelector('#content');

    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', 'header');

    const headerText = document.createElement('h5');
    headerText.innerText = 'This is restaurant\'s home page';
    headerDiv.appendChild(headerText);

    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    homeButton.innerText = 'Home';
    headerDiv.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.innerText = 'Menu';
    headerDiv.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.setAttribute('id', 'contact');
    contactButton.innerText = 'Contact';
    headerDiv.appendChild(contactButton);
    
    pageContent.appendChild(headerDiv);
};

export default header;