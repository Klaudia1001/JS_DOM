"use strict";

var mainHeader = document.getElementById('main_header');

mainHeader.innerHTML= "Treść nagłówka";

var link = document.getElementsByClassName('link')[0];
link.href= "http://onet.pl"; /*pierwszy link odsyła do strony onetu*/

link.className= "nowa_klasa";


mainHeader.style.color = "#56ff36";


