
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
    
    var trabalhos = document.getElementById("trabalhos");
    trabalhos.style.height = window.innerHeight - 50+"px";
    trabalhos.style.display = "none";
    var contato = document.getElementById("contato");
    contato.style.height = window.innerHeight - 50+"px";
    contato.style.display = "none";
    var planos = document.getElementById("planos");
    planos.style.height = window.innerHeight - 50+"px";
    planos.style.display = "none";
    
    var myModalEl = document.getElementById('confirmModal');
    myModalEl.addEventListener('hidden.bs.modal', function (e) {
        document.location.reload();
    });
    
};

function toggleHome () {
    var sobre = document.getElementById("sobre");
    sobre.classList.add("hide");
    var trabalhos = document.getElementById("trabalhos");
    trabalhos.classList.add("hide");
    var contato = document.getElementById("contato");
    contato.classList.add("hide");
    setTimeout(function () {
        contato.style.display = "none";
        trabalhos.style.display = "none";
        sobre.style.display = "none";
        planos.style.display = "none";
        document.getElementById("inicio").classList.add("hide");
        document.getElementById("inicio").style.display = "block";
        setTimeout(function () {
            document.getElementById("inicio").classList.remove("hide");
        }, 500);
    }, 500);
};

function toggleAbout () {
    var inicio = document.getElementById("inicio");
    inicio.classList.add("hide");
    var trabalhos = document.getElementById("trabalhos");
    trabalhos.classList.add("hide");
    var contato = document.getElementById("contato");
    contato.classList.add("hide");
    setTimeout(function () {
        contato.style.display = "none";
        trabalhos.style.display = "none";
        inicio.style.display = "none";
        planos.style.display = "none";
        var sobre = document.getElementById("sobre");
        sobre.classList.add("hide");
        sobre.style.display = "block";
        setTimeout(function () {
            sobre.classList.remove("hide");
        }, 500);
    }, 500);
};

function toggleJobs () {
    var inicio = document.getElementById("inicio");
    inicio.classList.add("hide");
    var sobre = document.getElementById("sobre");
    sobre.classList.add("hide");
    var contato = document.getElementById("contato");
    contato.classList.add("hide");
    setTimeout(function () {
        contato.style.display = "none";
        sobre.style.display = "none";
        inicio.style.display = "none";
        planos.style.display = "none";
        var trabalhos = document.getElementById("trabalhos");
        trabalhos.classList.add("hide");
        trabalhos.style.display = "block";
        setTimeout(function () {
            trabalhos.classList.remove("hide");
        }, 500);
    }, 500);
};

function toggleContact () {
    var inicio = document.getElementById("inicio");
    inicio.classList.add("hide");
    var sobre = document.getElementById("sobre");
    sobre.classList.add("hide");
    var trabalhos = document.getElementById("trabalhos");
    trabalhos.classList.add("hide");
    var planos = document.getElementById("planos");
    planos.classList.add("hide");
    setTimeout(function () {
        trabalhos.style.display = "none";
        sobre.style.display = "none";
        inicio.style.display = "none";
        planos.style.display = "none";
        var contato = document.getElementById("contato");
        contato.classList.add("hide");
        contato.style.display = "block";
        setTimeout(function () {
            contato.classList.remove("hide");
        }, 500);
    }, 500);
};

function togglePlans () {
    var inicio = document.getElementById("inicio");
    inicio.classList.add("hide");
    var sobre = document.getElementById("sobre");
    sobre.classList.add("hide");
    var trabalhos = document.getElementById("trabalhos");
    trabalhos.classList.add("hide");
    var contato = document.getElementById("contato");
    contato.classList.add("hide");
    setTimeout(function () {
        trabalhos.style.display = "none";
        sobre.style.display = "none";
        inicio.style.display = "none";
        contato.style.display = "none";
        var planos = document.getElementById("planos");
        planos.classList.add("hide");
        planos.style.display = "block";
        setTimeout(function () {
            planos.classList.remove("hide");
        }, 500);
    }, 500);
};

function switchDM () {
    var dm = document.getElementById("flexSwitchCheckDefault");
    var html = document.getElementsByTagName("html");
    if(dm.checked)
        html[0].classList.add("dark-mode");
    else
        html[0].classList.remove("dark-mode");
};
            
function sendMail () {
    
    emailjs.sendForm('service_lwfav9d', 'template_bhejc0n', '#contact-form').then(function(response) {
       var modal = new bootstrap.Modal(document.getElementById('confirmModal'), {
            keyboard: false
        });
        modal.show();
    }, function(error) {
       var modal = new bootstrap.Modal(document.getElementById('errorModal'), {
            keyboard: false
        });
        modal.show();
    });
            
    //document.getElementById("contact-form").reset();
};
