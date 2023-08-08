function login() {
    var numeparola = "davidakapiciu,leonardodavinci"
    let loginprompt = prompt("Scrie numele si parola corecta pentru a te loga in PANEL!", "")

    if(loginprompt == numeparola) {
        location.assign("panelpage.html")
        console.log("Nume si parola corecte!")
    }else{
        console.log("Numele sau parola a fost introdus gresit!")
    }
}

function logout() {
    console.log("Utilizatorul a fost DELOGAT cu succes!")
}