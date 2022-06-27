// implementazione del contenuto HTML
// implementazione del div container
let divContainer = document.createElement("div");
divContainer.className = "container";
document.body.append(divContainer);

let titolo = document.createElement("h3");
titolo.textContent = "IAICH COUNTER";
divContainer.append(titolo);

// implementazione del div risultato che rappresenta lo screen del counter
let result = document.createElement("div");
result.className = "risultato";
result.textContent = "0";
divContainer.append(result);

// implementazione del div aumentoDecremento all'interno del quale si implementeranno due div relativi al + e -
let aumentoDecremento = document.createElement("div");
aumentoDecremento.className = "piuMeno";
divContainer.append(aumentoDecremento);

let aumento = document.createElement("div");
aumento.className = "piu";
aumento.textContent = "+";
aumentoDecremento.append(aumento);

let decremento = document.createElement("div");
decremento.className = "meno";
decremento.textContent = "-";
aumentoDecremento.append(decremento);

// implementazione del div resetta che resetta il counter da 0
let reset = document.createElement("div");
reset.className = "resetta";
reset.textContent = "Reset";
divContainer.append(reset);

// implementazione del counter
aumento.addEventListener("click", aumenta);

let count = 0;
function aumenta() {
    count++;
    result.innerText = count;
}

decremento.addEventListener("click", diminuisci);

function diminuisci() {
    count--;
    result.innerText = count;
}

reset.addEventListener("click", cancella);

function cancella () {
    result.innerText = "0";
    count = 0;
}