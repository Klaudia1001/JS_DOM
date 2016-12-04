var div = document.getElementById('parSecond');
console.log(div);

var linki = document.getElementsByTagName('a');

var linkiPoKlasie = document.getElementsByClassName('link');
console.log(linkiPoKlasie);

var drugiLink = document.getElementsByClassName('link')[1];/*zmienna tworzy tablice*/
/*inne rozwiązanie to var drugiLink = linkiPoKlasie[1]; console.log(drugiLink);*/

for(var i=0; i<linkiPoKlasie.length; i++) {
    console.log(i);
    console.log(linkiPoKlasie[i] + ' to jest link ' + (i + 1));
}


