"use strict";
var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');
var expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    direccion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    observaciones: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
};
var campos = {
    observaciones: false,
    nombre: false,
    direccion: false,
    correo: false,
    telefono: false
};
