// Change Background Color and icon
var icon = document.getElementById('icona');
var boda = document.querySelector('body');
icon.onclick = function(){

    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        icon.src = "https://raw.githubusercontent.com/nawazdanish1996/HTML-CSS-Project---HTML-CSS-Mini-Project---hmvp5eqhxlv0/master/dark%20theme%20icon/moon.png";
        boda.style.background = "#111111";
        
    }else{
        icon.src = "https://raw.githubusercontent.com/nawazdanish1996/HTML-CSS-Project---HTML-CSS-Mini-Project---hmvp5eqhxlv0/master/dark%20theme%20icon/sun.png";
        boda.style.background = "#192a56";
    }
}