import carbonaraPic from './carbonara.jpg';
import frenchFiresPic from './frenchFries.jpg';
import pennePic from './penne.jpg';

const menu = () => {
    const pageContent = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menudiv');

    const carbonaraDiv = document.createElement('div');
    carbonaraDiv.setAttribute('id', 'carbonara');
    const carbonaraPicture = new Image();
    carbonaraPicture.src = carbonaraPic;
    carbonaraDiv.appendChild(carbonaraPicture);
    const carbonaraText = document.createElement('p');
    carbonaraText.innerText = 'Spaghetti Carbonara';
    carbonaraDiv.appendChild(carbonaraText);
    menuDiv.appendChild(carbonaraDiv);

    const frenchFriesDiv = document.createElement('div');
    frenchFriesDiv.setAttribute('id', 'frenchFries');
    const frenchFriesPicture = new Image();
    frenchFriesPicture.src = frenchFiresPic;
    frenchFriesDiv.appendChild(frenchFriesPicture);
    const frenchFriesText = document.createElement('p');
    frenchFriesText.innerText = 'French Fries';
    frenchFriesDiv.appendChild(frenchFriesText);
    menuDiv.appendChild(frenchFriesDiv);

    const penneDiv = document.createElement('div');
    penneDiv.setAttribute('id', 'penne');
    const pennePicture = new Image();
    pennePicture.src = pennePic;
    penneDiv.appendChild(pennePicture);
    const penneText = document.createElement('p');
    penneText.innerText = 'Penne';
    penneDiv.appendChild(penneText);
    menuDiv.appendChild(penneDiv);
    

    pageContent.appendChild(menuDiv);
}

export default menu;