const resetPage = () => {
    const pageContent = document.querySelector('#content');

    pageContent.removeChild(pageContent.lastChild);
}

export default resetPage;