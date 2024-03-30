function mostraRisultato() {
    var dove = document.getElementById("dove").value;
    var appetito = document.getElementById("appetito").value;
    var orario = document.getElementById("orario").value;
    const stampa = document.getElementById("stampa");

    //fuori poca
    if(dove === "fuori" && appetito==="poca"){
        if(orario === "mattina") {
            stampa.textContent = "Puoi andare a fare colazione al bar vicino a casa !";
        } 
        else if(orario === "pranzo") {
            stampa.textContent = "Puoi andare a magiare un panino al chioschetto !";
        }
        else if(orario === "cena") {
            stampa.textContent = "Puoi andare a magiare un menù small con il POLLO con le offerte del mc !";
        }
        else if(orario === "snack") {
            stampa.textContent = "Puoi andare a prendere qualcosa al bar !";
        }
        else{
            stampa.textContent = "Seleziona luogo appetito e orario correttamente !";
            alert("Seleziona luogo appetito e orario correttamente !");
        }
    }
    //fuori abbastanza
    else if(dove === "fuori" && appetito === "abbastanza"){
        if(orario === "mattina") {
            stampa.textContent = "Puoi andare a prendere una bella pasta al bar vicino a casa !";
        } 
        else if(orario === "pranzo") {
            stampa.textContent = "Puoi andare a magiare una piadina al chioschetto !";
        }
        else if(orario === "cena") {
            stampa.textContent = "Puoi andare a magiare un menù medio con il POLLO con le offerte del mc !";
        }
        else if(orario === "snack") {
            stampa.textContent = "Puoi andare a prendere qualcosa al bar !";
        }
        else{
            stampa.textContent = "Seleziona luogo appetito e orario correttamente !";
            alert("Seleziona luogo appetito e orario correttamente !");
        }
    }
    //fuori tanta
    else if(dove === "fuori" && appetito === "tanta"){
        if(orario === "mattina") {
            stampa.textContent = "Puoi andare a fare colazione al mc/burger king !";
        } 
        else if(orario === "pranzo") {
            stampa.textContent = "Puoi andare a mangiare un menù large con il POLLO con le offerte del mc !";
        }
        else if(orario === "cena") {
            stampa.textContent = "Puoi andare a magiare una bella pizza !";
        }
        else if(orario === "snack") {
            stampa.textContent = "Puoi andare a prendere qualcosa al bar !";
        }
        else{
            stampa.textContent = "Seleziona luogo appetito e orario correttamente !";
            alert("Seleziona luogo appetito e orario correttamente !");
        }
    }
    //casa poca
    else if(dove === "casa" && appetito === "poca"){
        if(orario === "mattina") {
            stampa.textContent = "Puoi mangiarti un po' di fragole !";
        } 
        else if(orario === "pranzo") {
            stampa.textContent = "Puoi farti un panino con il POLLO !";
        }
        else if(orario === "cena") {
            stampa.textContent = "Puoi farti una bella piadina (mozzarella) !";
        }
        else if(orario === "snack") {
            stampa.textContent = "Puoi mangiarti un gelato !";
        }
        else{
            stampa.textContent = "Seleziona luogo appetito e orario correttamente !";
            alert("Seleziona luogo appetito e orario correttamente !");
        }
    }
    //casa abbastanza
    else if(dove === "casa" && appetito === "abbastanza"){
        if(orario === "mattina") {
            stampa.textContent = "Puoi mangiarti una ciotola di fragole !";
        } 
        else if(orario === "pranzo") {
            const frasi = ["Puoi mangiarti un wrap con il POLLO !","Puoi mangiarti un bel piatto di pasta al sugo !"];
            const random = Math.floor(Math.random() * frasi.length);
            stampa.textContent = frasi[random];
        }
        else if(orario === "cena") {
            const frasi = ["Puoi mangiarti un paninozzo con il POLLO !","Puoi mangiarti un bel piatto di carbonara !"];
            const random = Math.floor(Math.random() * frasi.length);
            stampa.textContent = frasi[random];
        }
        else if(orario === "snack") {
            stampa.textContent = "Puoi mangiarti un po' di fragole !";
        }
        else{
            stampa.textContent = "Seleziona luogo appetito e orario correttamente !";
            alert("Seleziona luogo appetito e orario correttamente !");
        }
    }
    //casa tanta
    else if(dove === "casa" && appetito === "tanta"){
        if(orario === "mattina") {
            stampa.textContent = "Puoi mangiarti una ciotola di fragole con il succo al mirtillo !";
        } 
        else if(orario === "pranzo") {
            
            const frasi = ["Puoi magiarti un paninozzo con il POLLO, bacon e patatine !","Puoi mangiarti un bel piatto di pasta con il tonno !"];
            const random = Math.floor(Math.random() * frasi.length);
            stampa.textContent = frasi[random];
        }
        else if(orario === "cena") {
            const frasi = ["Puoi magiarti un paninozzo con il POLLO e patatine !","Puoi mangiarti un bel piatto di pasta con il tonno !"];
            const random = Math.floor(Math.random() * frasi.length);
            stampa.textContent = frasi[random];
        }
        else if(orario === "snack") {
            stampa.textContent = "Puoi mangiarti un po' di fragole con il succo al mirtillo!";
        }
        else{
            stampa.textContent = "Seleziona luogo appetito e orario correttamente !";
            alert("Seleziona luogo appetito e orario correttamente !");
        }
    }
   else{
            stampa.textContent = "Seleziona luogo appetito e orario correttamente !";
            alert("Seleziona luogo appetito e orario correttamente !");
    }
}