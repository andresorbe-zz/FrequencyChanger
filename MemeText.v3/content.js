function randoSwitch() {
    return Math.floor(Math.random() * 2);
}

function bringChaos(word) {
    let final_product = "";
    for (let i = 0, l = word.length; i < l; i++) {
        let option = randoSwitch();

        if (option == 1) {
            final_product += word[i].toLowerCase();
        } else {
            final_product += word[i].toUpperCase();
        }
    }
    return final_product;
}


function final_tap() {
    let elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            let node = element.childNodes[j];

            if (node.nodeType === 3) {
                let text = node.nodeValue;
                let newText = bringChaos(text);

                let replacedText = text.replace(text, newText);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
    console.log("Ran --> Main");
}

final_tap();
