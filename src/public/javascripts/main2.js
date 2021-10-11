/*Posicion estatica del navegador*/
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 1);
});

/*Evento "click" del menu*/
const navigation = document.querySelector('nav');
document.querySelector('.menu').onclick = function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

/*Evento "click" el en nav "celular"*/
const menu = document.querySelector('.menu');
document.querySelector('.falla').onclick = function () {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}



if (screen.width < 991) {
    window.onscroll = function () {
        /*targetas para cel*/
        var y = window.scrollY;
        var info1 = document.getElementById("info1");
        var info2 = document.getElementById("info2");
        var info3 = document.getElementById("info3");


        /*targetas de servicio*/
        if (y > 1000 && y < 1300) {
            info1.style.transform = "translateY(0px)";
            info1.style.opacity = "1";
        } else {
            info1.style.transform = "translateY(100px)";
            info1.style.opacity = "0";
        }

        if (y > 1250 && y < 1600) {
            info2.style.transform = "translateY(0px)";
            info2.style.opacity = "1";
        } else {
            info2.style.transform = "translateY(100px)";
            info2.style.opacity = "0";
        }

        if (y > 1450 && y < 2200) {
            info3.style.transform = "translateY(0px)";
            info3.style.opacity = "1";
        } else {
            info3.style.transform = "translateY(100px)";
            info3.style.opacity = "0";
        }

    };



} 











