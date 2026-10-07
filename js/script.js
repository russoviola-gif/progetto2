//Funzioni da implementare

function eta() {
    let numero = prompt("inserisci eta'");;
    if (numero == null) {
        alert("eta' non inserita");
    } else {
        if (numero<= 5) {
            console.log("entrata gratis");
            alert("entrata gratis");
        } else if(numero >= 18&& numero <= 25) {
            console.log("prezzo:3.5€");
            alert("prezzo:3.5€");
        }else if(numero >= 50 && numero <= 55){
            console.log("prezzo:5€");
            alert("prezzo:5€");
        }else{
            console.log("prezzo:8€");
            alert("prezzo:8€");
        }

    }

}