const contactPage = () => {
    const pageContent = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contactDiv')
    const contactText = document.createElement('p');
    contactText.innerText = 'If you want to contact us to ask a question or make a reservation please call:';
    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = 'XXX XXX XXX';
    contactDiv.appendChild(contactText);
    contactDiv.appendChild(phoneNumber);

    pageContent.appendChild(contactDiv);
}

export default contactPage;