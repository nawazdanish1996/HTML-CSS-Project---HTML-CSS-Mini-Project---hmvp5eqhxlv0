// Change Background Color and icon
var icon = document.getElementById('icona');
var boda = document.querySelector('body');
icon.onclick = function(){

    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        icon.src = "/dark theme icon/moon.png";
        boda.style.background = "#111111";
        
    }else{
        icon.src = "/dark theme icon/sun.png";
        boda.style.background = "#192a56";
    }
}