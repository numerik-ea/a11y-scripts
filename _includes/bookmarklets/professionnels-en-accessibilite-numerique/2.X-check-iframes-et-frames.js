(function checkIframesAndFrames() {
    const iframesAndFrames = document.querySelectorAll('iframe, frame');

    if (iframesAndFrames.length === 0) {
        alert('2.1 NA et 2.2 NA : pas de cadres sur la page.');
        return true;
    }

    const iframesAndFramesWithoutTitle = (
        Array.from(iframesAndFrames)
             .filter(iframeOrFrame => !iframeOrFrame.hasAttribute('title'))
    );

    const iframesAndFramesWithTitle = (
        Array.from(iframesAndFrames)
             .filter(iframeOrFrame => iframeOrFrame.hasAttribute('title'))
    );

    let message = '';
    let messageIframesAndFramesWithoutTitle = '';
    let messageIframesAndFramesWithTitle = '';

    console.clear();
    
    // Check for frames without title (test 2.1)
    if (iframesAndFramesWithoutTitle.length === 0) {
        messageIframesAndFramesWithoutTitle += '2.1 C : tous les cadres ont un attribut title';
    } else {
        messageIframesAndFramesWithoutTitle += (
            '2.1 NC : '
            + iframesAndFramesWithoutTitle.length
            + ' cadres n\'ont pas d\'attribut title'
        );

        if (iframesAndFramesWithoutTitle.length === 1) {
            messageIframesAndFramesWithoutTitle = (
                messageIframesAndFramesWithoutTitle.replace(
                    'cadres n\'ont pas', 'cadre n\'a pas'
                )
            );
        }

        console.log(messageIframesAndFramesWithoutTitle + ' :');
        iframesAndFramesWithoutTitle.forEach(
            iframeOrFrame => console.log(iframeOrFrame)
        );
    }

    message += messageIframesAndFramesWithoutTitle;

    // Check for frames with title (test 2.2)
    if (iframesAndFramesWithTitle.length === 0) {
        messageIframesAndFramesWithTitle += '2.2 NA : tous les cadres n\'ont pas d\'attribut title';
    } else {
        messageIframesAndFramesWithTitle += (
            '2.2 : '
            + iframesAndFramesWithTitle.length
            + ' cadres ont un attribut title'
        );

        if (iframesAndFramesWithTitle.length === 1) {
            messageIframesAndFramesWithTitle = (
                messageIframesAndFramesWithTitle.replace(
                    'cadres ont', 'cadre a'
                )
            );
        }

        console.log(messageIframesAndFramesWithTitle + ' :');
        iframesAndFramesWithTitle.forEach(
            iframeOrFrame => console.log(iframeOrFrame)
        );
    }

    message += '.\n';
    message += messageIframesAndFramesWithTitle;
    message += '.\nVoir la console pour plus de détails.';

    alert(message);
})();