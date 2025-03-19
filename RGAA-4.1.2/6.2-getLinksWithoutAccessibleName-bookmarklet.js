javascript:(function () { const IS_HIDDEN = 1; const HAS_NO_ACCESSIBLE_NAME = 2; function isElementHidden(element) { if ( element.hasAttribute('aria-hidden') && element.getAttribute('aria-hidden') === 'true' ) { return true; } if (element.hasAttribute('hidden')) { return true; } const computedStyle = getComputedStyle(element); if ( computedStyle.display === "none" || computedStyle.visibility === "hidden" || computedStyle.fontSize === "0px" ) { return true; } return false; } function getLinkAccessibleName(element) { if (element.hasAttribute('aria-labelledby')) { const labelledById = element.getAttribute('aria-labelledby'); const labelledByElement = document.getElementById(labelledById); if (labelledByElement) { return labelledByElement.textContent.trim(); } } if (element.hasAttribute('aria-label')) { return element.getAttribute('aria-label').trim(); } let accessibleName = ""; function getLinkAccessibleNameRecursive(node) { if (node.nodeType === Node.ELEMENT_NODE) { if (isElementHidden(node)) { return null; } } if (node.nodeType === Node.TEXT_NODE) { accessibleName += node.textContent.trim() + " "; } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "IMG" && node.hasAttribute("alt") ) { accessibleName += node.getAttribute("alt").trim() + " "; } else if (node.hasChildNodes()) { node.childNodes.forEach(childNode => getLinkAccessibleNameRecursive(childNode)); } } if (null === getLinkAccessibleNameRecursive(element)) { return IS_HIDDEN; } accessibleName = accessibleName.trim(); if (accessibleName !== "") { return accessibleName; } if (element.hasAttribute('title')) { return element.getAttribute('title').trim(); } return HAS_NO_ACCESSIBLE_NAME; } function getLinksWithoutAccessibleName(parentElement) { const links = parentElement.querySelectorAll('a[href], [role="link"]'); const linksWithoutAccessibleName = []; links.forEach(link => { const accessibleName = getLinkAccessibleName(link); if (accessibleName === HAS_NO_ACCESSIBLE_NAME) { linksWithoutAccessibleName.push(link); } }); return linksWithoutAccessibleName; } const linksWithoutAccessibleName = getLinksWithoutAccessibleName(document); const numberOfLinksWithoutAccessibleName = linksWithoutAccessibleName.length; if (numberOfLinksWithoutAccessibleName === 0) { alert("Tous les liens ont un nom accessible."); return; } let message = numberOfLinksWithoutAccessibleName + " liens sans nom accessible"; if (numberOfLinksWithoutAccessibleName === 1) { message = message.replace("liens", "lien"); } alert(message + ".\nVoir la console pour plus de détails."); console.log(message + " :"); linksWithoutAccessibleName.forEach(link => { link.style.border = "1px solid yellow"; link.style.outline = "1px solid blue"; link.style.outlineOffset = "2px"; link.style.background = "red"; link.style.backgroundColor = "red"; console.log(link); }); })();