'use strict'

var istniejacyWezel = document.getElementById('parFirst').children[2];
console.log(istniejacyWezel);

var newElement = document.createElement('p');/*tworze nowy element p*/
var newElementContent = document.createTextNode('To jest nowy paragraf');/*tworze lement z treścią*/

newElement.appendChild(newElementContent); 
document.getElementById('parFirst').replaceChild(newElement, istniejacyWezel);/*zamiast drugiego linki pojawia się treść to jest nowy paragraf*/

var allLinks = document.querySelectorAll ('a');/*tworze tablice z wszystkimi linkami*/

for( var i=0; i<allLinks.length; i++) {
    var br = document.createElement('br');/*tworze element br*/
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class');
}
/*insert.before jeste w wezle parent i przed tym wezlem musze stworzyc jeszcze jeden wezel; przed kolejnym rodzeństwem kolejenego linku i wstawia br*/
