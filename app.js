/*
This code is developed by Kevin Delgado Rojas @ Alura Latam
*/
const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonDesencriptar");

const mensaje1 = document.getElementById("mensaje1");

/* 
e = enter
i = imes
a = ai
o = ober
u = ufat
*/
let reemplazo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

botonEncriptar.addEventListener("click", () => {
    const texto1=ingresoTexto.value.toLowerCase()
    console.log(texto1)
})


function encriptar(params) {
    
}

function desencriptar(params) {
    
}