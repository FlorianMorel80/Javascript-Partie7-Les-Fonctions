// Appel des listener 

// Pour le paragraph
let colorParagraph = document.querySelector('div');


// Pour la couleur bleu 
let aleatoire = document.querySelector('#colorButton');
aleatoire.addEventListener('click', textColor);

// Pour le texte en gras
let bold = document.querySelector('#boldButton')
bold.addEventListener('click', textBold);

// Pour le texte en zoom
let zoom = document.querySelector('#upButton');
zoom.addEventListener('click', zoomText);



// Appel des fonctions  


// Pour la couleur  
//********************************** On va créer la fonction randomColor qui va permettre d'afficher une couleur alétoirement *********** */
function randomColor() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

//**************************** Mise en place des conditions pour la fonction textColor qui si la couleur est différente de "black" alors on appel la fonction randomColor */
function textColor() {
    if (colorParagraph.style.color != "black") {
        cancel();
    } else {
        colorParagraph.style.color = randomColor();
    }
}
// Fin de la couleur 


// Pour le texte en gras
function textBold() {
    if (colorParagraph.style.fontWeight === "bold") {
        cancel();
    } else {
        colorParagraph.style.fontWeight = "bold"
    }
}
// Pour le texte en zoom 
function zoomText() {
    if (colorParagraph.style.fontSize === "larger") {
        cancel();
    } else {
        colorParagraph.style.fontSize = "larger";
    }
}


function cancel() {
    colorParagraph.style.color = "black";
    colorParagraph.style.fontWeight = "normal";
    colorParagraph.style.fontSize = "initial";
}
// new function qui va réinitialiser le style et color du texte, puis appelé chaque fois qu'il y aura appel de ce bouton