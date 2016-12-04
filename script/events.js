'use strict'


var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;


var thirdLink = document.getElementsByTagName('a')[2];
thirdLink.addEventListener('click', alarm);

function alarm () {
    alert('kliknieto w kolejny link');
    /*e.preventDefault (); zatrzymuje akcje, nic się nie dzieje*/
    
}


/*var mainHeader = document.getElementById('main_header');
mainHeader. onmouseover= resize;

function resize () {
    mainHeader.style.fontSize = "70px";
}*/

var mainHeader = document.getElementById('main_header');
mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;

function resize (e) {
    if (e.type == 'mouseover'){ 
        mainHeader.style.color = "blue";
    } else {
        mainHeader.style.fontSize = "inherit";
    }
   
}

document.getElementsByTagName('header')[0].onclick = klikHeader; 

/*function klikHeader () {
    alert ("kliknęłaś w header");
}*/

function klikHeader(e) {
    e.stopPropagation ();
    alert ("kliknęłaś w header");
}

