/*
This code is developed by Kevin Delgado Rojas @ Alura Latam
*/
const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonDesencriptar");

const mensaje1 = document.getElementById("mensaje1");

const muneco = document.getElementById("muneco");
const mensaje2 = document.getElementById("mensaje2");

/* 
e = enter
i = imes
a = ai
o = ober
u = ufat
*/
let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

botonEncriptar.addEventListener("click", () => {
    const texto1=ingresoTexto.value.toLowerCase()
    function encriptar(texto) {
        for (let i = 0; i < remplazar.length; i++) {
            if (texto.includes(remplazar[i][0])) {
                texto = texto.replaceAll(remplazar[i][0], remplazar[i][1]); 
            }
        }
        return texto;
    }
    const textoEncriptado = encriptar(texto1);
    mensaje1.innerHTML = textoEncriptado;

    muneco.style.display = "none";
    mensaje2.style.display = "none";
    botonCopiar.style.display = "block";

})

