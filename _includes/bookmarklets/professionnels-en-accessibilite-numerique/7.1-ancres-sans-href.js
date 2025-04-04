(function getAnchorsWithoutHref() {
    const anchorsWithoutHref = document.querySelectorAll('a:not([href])');
    
    if (anchorsWithoutHref.length === 0) {
        alert('Il n\'y a pas d\'ancre sans attribut href sur la page.');
        return;
    }

    let message = 'Il y a ' + anchorsWithoutHref.length + ' ancres sans attribut href sur la page';

    if (anchorsWithoutHref.length === 1) {
        message = message.replace('ancres', 'ancre');
    }

    alert(message + '.\nVoir la console pour plus de détails.');
    console.log(message + ' :');

    anchorsWithoutHref.forEach(element => console.log(element));
})();
