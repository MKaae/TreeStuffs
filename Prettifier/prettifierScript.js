function formatElement(element, level) {

    // Indentation setting så jeg kan skrive tingene i rigtige rækkefølge. Bruger level ting at finde ud af hvor meget indentation.
    const indent = " ".repeat(level * 2);
    
    //Hvis det er en text node altså indhold så skriv den ikke ellers får jeg <#text> nodes.
    if (element.nodeType === Node.TEXT_NODE) {
        return '';
    }
    
    // Den returnerer bare navnene på dom elementer så skal tilføje starttag.
    let formattedElement = indent + "<" + element.nodeName.toLowerCase();
    // Checker efter attributename og attributes og sætter attributesname og attributes. 
    if (element.attributes) {
        for (let i = 0; i < element.attributes.length; i++) {
            let attribute = element.attributes[i];
            formattedElement += ` ${attribute.nodeName}="${attribute.nodeValue}"`;
        }
    }

    // Tjek om det er et blad på slutnignen af træet.
    const isLeafNode = element.childNodes.length === 0;

    // Tilføjer newline hvis der er child nodes eller tilføjer den et sluttag.
    if (isLeafNode) {
        formattedElement += ">\n";
    } else {
        formattedElement += ">\n";
    }

    // Hvis den child node den er igang med har child nodes kalder den formatElement igen på den child node.
    for (let i = 0; i < element.childNodes.length; i++) {
        formattedElement += formatElement(element.childNodes[i], level + 1);
    }

    // Hvis der ikke er nogle child nodes tilføje den et sluttag med nodeName.
    if (!isLeafNode) {
        formattedElement += indent + `</${element.nodeName.toLowerCase()}>\n`;
    }

    return formattedElement;
}

// Peger på roden af DOM træet så jeg kan læse det hele
const rootElement = document.documentElement;

console.log(formatElement(rootElement, 0));
