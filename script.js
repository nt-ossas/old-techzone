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
    //alert("Funzione ancora non disponibile, torna a controllare più tardi");
    ciao.classList.remove('.body');
    ciao.classList.add('.darkmode');
};
