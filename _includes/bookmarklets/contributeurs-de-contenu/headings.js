/**
 * Found here: https://pauljadam.com/bookmarklets/index.html
 * source code: https://github.com/pauljadam/bookmarklets/blob/master/headings.js
 */

(function () {
    let headingsCount = 0;
    function main(doc) {
        const headingStyles = 'color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;';

        function createSpan(className, content) {
            const span = doc.createElement('strong');

            span.className = className;
            span.style.cssText = headingStyles;
            span.textContent = content;

            return span;
        }

        function processHeadingElements(selector, tagName) {
            doc.querySelectorAll(selector).forEach(heading => {
                heading.insertBefore(createSpan('openSpan', `<${tagName}>`), heading.firstChild);
                heading.appendChild(createSpan('closeSpan', `</${tagName}>`));
            });
        }

        function processHeadings() {
            // Remove existing spans
            doc.querySelectorAll('.openSpan, .closeSpan').forEach(el => el.remove());

            // Process h1-h6 elements
            for (let i = 1; i <= 6; i++) {
                processHeadingElements(`h${i}`, `h${i}`);
                processHeadingElements(`[role=heading][aria-level='${i}']`, `[role=heading][aria-level=${i}]`);
            }

            // Check if any headings exist
            const hasHeadings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6, [role=heading][aria-level=\'1\'], [role=heading][aria-level=\'2\'], [role=heading][aria-level=\'3\'], [role=heading][aria-level=\'4\'], [role=heading][aria-level=\'5\'], [role=heading][aria-level=\'6\']');
            
            headingsCount += hasHeadings.length;
        }

        processHeadings();
    }

    function traverseFrames(doc) {
        main(doc);

        const frametypes = ['frame', 'iframe'];

        for (let i = 0; i < frametypes.length; i++) {
            const myframes = doc.getElementsByTagName(frametypes[i]);

            for (let z = 0; z < myframes.length; z++) {
                try {
                    traverseFrames(myframes[z].contentWindow.document);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    traverseFrames(document);

    const message = headingsCount > 0
        ? `${headingsCount} titres trouvés sur la page.`
        : 'Aucun titre trouvé sur la page.';

    alert(message);
})();
