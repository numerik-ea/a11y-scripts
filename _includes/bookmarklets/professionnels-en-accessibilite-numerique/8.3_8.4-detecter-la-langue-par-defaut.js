(function () {
    const htmlElementWithLang = document.querySelector('html[lang]');

    if (htmlElementWithLang === null) {
        alert(`8.3 NC & 8.4 NA`);
        return;
    }

    const lang = htmlElementWithLang.getAttribute('lang');

    if (lang === null) {
        alert(`8.3 NC & 8.4 NC`);
        return;
    }
    alert(`Langue par défaut de la page : <html lang="${lang}">`);
})();