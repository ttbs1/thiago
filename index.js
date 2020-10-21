
function getSizes() {
    document.getElementById("load").style.display = "none";
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var element = document.getElementById('navbar');
    var navbarItens = document.getElementById("navbar-itens");
    if (isMobile) {
        element.classList.add("nav-mobi");
        navbarItens.style.display = "none";
        document.getElementById("navbar-toggle").style.display = "block";
    } else {
        element.classList.add("nav-pc");
        document.getElementById("navbar-toggle").style.display = "none";
        navbarItens.style.display = "block";
    }
    
    var main = document.getElementById("inicio");
    main.style.height = window.innerHeight - 50+"px";
    main.style.display = "block";
    var about = document.getElementById("sobre");
    about.style.height = window.innerHeight - 50+"px";
    about.style.display = "none";
    
};

function toggleHome () {
    document.getElementById("sobre").classList.add("hide");
    setTimeout(function () {
        document.getElementById("sobre").style.display = "none";
        document.getElementById("inicio").classList.add("hide");
        document.getElementById("inicio").style.display = "block";
        setTimeout(function () {
            document.getElementById("inicio").classList.remove("hide");
        }, 500);
    }, 500);
};

function toggleAbout () {
    document.getElementById("inicio").classList.add("hide");
    setTimeout(function () {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("sobre").classList.add("hide");
        document.getElementById("sobre").style.display = "block";
        setTimeout(function () {
            document.getElementById("sobre").classList.remove("hide");
        }, 500);
    }, 500);
};





