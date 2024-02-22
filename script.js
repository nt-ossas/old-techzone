var ciao = document.querySelector(".body");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

function dark(){
    ciao.classList.remove('.body');
    ciao.classList.add('.darkmode');
};
function dontwork(){
    alert("Funzione ancora in fase di sviluppo, torna a controllare più tardi");
};
