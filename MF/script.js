function dontwork(){
    alert("Funzione ancora in fase di sviluppo, torna a controllare più tardi");
};

function tornasu(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
