function verdoppeln(zahl, callback){
    zahl = zahl * 2;
    callback(zahl)
}

verdoppeln(5, function(ergebnis){
    console.log("Das Ergebnis ist:", ergebnis)
})