javascript:(function () { document.querySelectorAll('strong.openSpan, strong.closeSpan').forEach(el => el.remove()); document.querySelectorAll('ul, ol, dl').forEach(list => { list.style.outline = 'green 2px solid'; list.style.padding = '2px'; list.style.listStylePosition = 'inside'; }); document.querySelectorAll('ul, ol').forEach(list => { const paragraphs = list.querySelectorAll(':scope > p'); if (paragraphs.length === 0) { return; } list.style.outline = '2px solid red'; list.style.padding = ''; list.style.listStylePosition = ''; paragraphs.forEach(paragraph => { paragraph.style.outline = '2px solid red'; }); if (!list.querySelector('.openSpan')) { const strongElement = document.createElement('strong'); strongElement.className = 'openSpan'; strongElement.style.cssText = 'color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation'; strongElement.textContent = '❌PARAGRAPHE(S) DANS LA LISTE'; list.prepend(strongElement); } }); const elements = { 'ul': '📝', 'ol': '🔢', 'dl': '📕', 'li': '', 'dd': '', 'dt': '' }; for (const [tag, emoji] of Object.entries(elements)) { document.querySelectorAll(tag).forEach(element => { const openSpan = document.createElement('strong'); openSpan.className = 'openSpan'; openSpan.style.cssText = 'color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;'; openSpan.textContent = `<${tag}>${emoji}`; element.insertBefore(openSpan, element.firstChild); const closeSpan = document.createElement('strong'); closeSpan.className = 'closeSpan'; closeSpan.style.cssText = 'color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;'; closeSpan.textContent = `</${tag}>`; element.appendChild(closeSpan); }); } const lists = document.querySelectorAll('ul, ol, dl'); if (!lists.length) { alert('Aucune liste trouvée sur la page.'); } else { alert(`${lists.length} listes trouvées sur la page.`); } })();