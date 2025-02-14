import { tojaslista } from "./adat.js";

let koszonElem = document.getElementById("Köszön");
console.log(koszonElem);
koszonElem.innerHTML = "Tojás választék";



let artok = document.getElementById("art");
let txt = "";
for (let i = 0; i < tojaslista.length; i++) {
    txt += `<div class="tojas">
                <h2>Név: ${tojaslista[i].nev}</h2>
                <p>Szín: ${tojaslista[i].szin}</p>
                <p>Méret: ${tojaslista[i].meret}</p>
                <img src ="${tojaslista[i].eleresiUt}"alt=${tojaslista[i].eleresiUt}</img> `;
}
console.log(txt);
artok.innerHTML = txt;