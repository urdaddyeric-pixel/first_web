


const body = document.body;
const array_a = document.getElementsByTagName("a");
const array_p = document.getElementsByTagName("p");
const array_h1 = document.getElementsByTagName("h1");

function changeToDarkMode(){
    body.classList.toggle("blackMode");
    for (let i = 0; i < array_a.length; i++){
        array_a[i].classList.toggle("aColor");
    }
    for (let i = 0; i < array_p.length; i++){
        array_p[i].classList.toggle("pColor");
    }
    for (let i = 0; i < array_h1.length; i++){
        array_h1[i].classList.toggle("h1Color");
    }
}