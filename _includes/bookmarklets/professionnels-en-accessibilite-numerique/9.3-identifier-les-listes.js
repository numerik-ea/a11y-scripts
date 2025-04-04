(function getLists() {
    const lists = document.body.querySelectorAll('ul, ol');
    const numberOfLists = lists.length;

    if (numberOfLists === 0) {
        alert('Pas de listes sur la page.');
        return;
    }

    let message = numberOfLists + ' listes sur la page';

    if (numberOfLists === 1) {
        message = message.replace('listes', 'liste');
    }

    alert(message + '.\nVoir la console pour plus de détails.');
    console.log(message + ' :');

    lists.forEach(list => {
        list.style.border = '1px solid yellow';
        list.style.outline = '1px solid blue';
        list.style.outlineOffset = '2px';
        list.style.background = 'red';
        list.style.backgroundColor = 'red';

        console.log(list);
    });
})();
