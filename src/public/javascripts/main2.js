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
        if (y > 900 && y < 1200) {
            info1.style.transform = "translateY(0px)";
            info1.style.opacity = "1";
        } else {
            info1.style.transform = "translateY(100px)";
            info1.style.opacity = "0";
        }

        if (y > 1250 && y < 1400) {
            info2.style.transform = "translateY(0px)";
            info2.style.opacity = "1";
        } else {
            info2.style.transform = "translateY(100px)";
            info2.style.opacity = "0";
        }

        if (y > 1450 && y < 1700) {
            info3.style.transform = "translateY(0px)";
            info3.style.opacity = "1";
        } else {
            info3.style.transform = "translateY(100px)";
            info3.style.opacity = "0";
        }


        /*Despazamiento de scroll para el nav "Cel"*/
        document.querySelector('.Nosotros').onclick = function () {
            window.scroll(0, 80);
        }
        document.querySelector('.Servicios').onclick = function () {
            window.scroll(0, 650);
        }
        document.querySelector('.Tecnologias').onclick = function () {
            window.scroll(0, 2120);
        }
        document.querySelector('.Contactanos').onclick = function () {
            window.scroll(0, 2800);
        }

    };



} else {
    /*Despazamiento de scroll para el nav "compu"*/
    document.querySelector('.Nosotros').onclick = function () {
        window.scroll(0, 115);
    }
    document.querySelector('.Servicios').onclick = function () {
        window.scroll(0, 800);
    }
    document.querySelector('.Tecnologias').onclick = function () {
        window.scroll(0, 1600);
    }
    document.querySelector('.Contactanos').onclick = function () {
        window.scroll(0, 2800);
    }
}











