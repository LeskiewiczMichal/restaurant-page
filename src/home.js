function homePage() {
    const pageContent = document.querySelector('#content');

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'main');

    const pageText = document.createElement('p');
    pageText.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum sit amet eros faucibus accumsan faucibus eu mi. Suspendisse porta, augue id varius finibus, elit nisi cursus arcu, eu egestas erat mi quis est. Curabitur et turpis et ligula molestie mollis. Cras nisl purus, sagittis sed finibus et, aliquam a nulla. Fusce eu elit congue, accumsan lacus quis, accumsan enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam consequat, enim eget viverra ultrices, nulla lacus elementum velit, sed efficitur arcu risus vitae velit. Proin congue, dolor in porttitor suscipit, ante lacus rutrum odio, in interdum lorem magna at ipsum. Etiam malesuada eros venenatis nibh malesuada, id blandit neque pharetra. Nulla facilisi.
    Mauris magna nisi, convallis quis auctor sed, bibendum ut magna. Praesent bibendum augue et dui rhoncus pulvinar. Vivamus laoreet ultricies massa. Etiam commodo velit sit amet elit molestie ornare. Pellentesque suscipit faucibus lorem. Aenean nec nunc a massa tempor ullamcorper. Nullam sagittis nec libero quis egestas. Integer gravida tortor lectus, quis vulputate dolor malesuada sit amet. Nunc ut nulla aliquam, aliquet magna non, vulputate sem. Fusce consectetur quam quis odio vestibulum egestas. Aliquam erat volutpat. Vivamus tincidunt ullamcorper nisi, in bibendum orci ultricies a.`
    mainDiv.appendChild(pageText);

    pageContent.appendChild(mainDiv);
}
    
export default homePage;