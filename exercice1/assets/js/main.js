function result() {
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    let button = document.querySelector('#benjaminButton');

    // Pour faire l'appel de la fonction onclick sur le JS : 

    // button.onclick=function() {
    // }

    // Et on efface la fonction onclick="result()" sur le HTML 

    document.write('<div>' + number1 * number2 + '</div');
}