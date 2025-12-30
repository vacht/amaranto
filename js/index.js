import { initMenu } from './helpers/menu.js';
import { home } from './helpers/home.js';
import { servicios } from './helpers/servicios.js';
import { productos } from './helpers/productos.js';

document.addEventListener('DOMContentLoaded', () => {
    // 🔹 MENÚ GLOBAL
initMenu();

    // 🔹 HOME
if (document.body.classList.contains('home')) {
    home();
}

    // 🔹 SERVICIOS
if (document.body.classList.contains('services')) {
    servicios();
}

    //🔹 PRODUCTOS
if (document.body.classList.contains('products')) {
    productos();
}
});
