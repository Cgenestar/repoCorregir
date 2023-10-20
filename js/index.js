const guitarra = [
    { id: 0, marca: "Fender", modelo: "STRATOCASTER", precio: 500, img: "./img/fenderStrato.jpg" },
    { id: 1, marca: "Fender", modelo: "TELECASTER", precio: 600, img: "./img/telecaster.jpg" },
    { id: 2, marca: "Gibson", modelo: "Les Paul", precio: 700, img: "./img/gipson.jpg" },
    { id: 3, marca: "Ibanez", modelo: "MAR10", precio: 500, img: "./img/ibañez.jpg" },
    { id: 4, marca: "Gibson", modelo: "SG", precio: 700, img: "./img/gibsonSG.jpg" },
    { id: 5, marca: "Epiphone", modelo: "Sheraton-II PRO", precio: 800, img: "./img/Epiphone.jpg" }
];

let carrito = [];

const contenedor = document.getElementById("container-guitarras");
const carritoContainer = document.getElementById("carrito-container");

// Función para crear una tarjeta de guitarra
function crearGuitarraCard(guitarra) {
    const contenedorGuitar = document.createElement("div");
    contenedorGuitar.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${guitarra.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${guitarra.marca}</h5>
                <p class="card-text">${guitarra.modelo}</p>
                <p class="card-text">Precio: $${guitarra.precio}</p>
                <button class="btn btn-primary comprar-btn" data-id="${guitarra.id}">Comprar</button>
            </div>
        </div>`;
    return contenedorGuitar;
}

// agregar una guitarra al carrito
function agregarAlCarrito(guitarra) {
    carrito.push(guitarra);
}

// actualizar la interfaz del carrito
function actualizarCarritoUI() {
    carritoContainer.innerHTML = "";
    carrito.forEach((guitarra) => {
        const carritoItem = document.createElement("div");
        carritoItem.innerHTML = `
            <div class="carrito-item">
                <img src="${guitarra.img}" alt="${guitarra.modelo}">
                <div>
                    <p>${guitarra.marca}</p>
                    <p>${guitarra.modelo}</p>
                    <p>Precio: $${guitarra.precio}</p>
                </div>
            </div>`;
        carritoContainer.appendChild(carritoItem);
    });
}

// Agregar las tarjetas de guitarra y event listeners
guitarra.forEach((guitarra) => {
    const contenedorGuitar = crearGuitarraCard(guitarra);
    contenedor.appendChild(contenedorGuitar);

    contenedorGuitar.querySelector(".comprar-btn").addEventListener("click", () => {
        agregarAlCarrito(guitarra);
        console.log("Artículo agregado al carrito:", guitarra);
        actualizarCarritoUI();
    });
});

let totalCarrito = 0;  // Variable para almacenar el total del carrito

// calcular el total del carrito
function calcularTotalCarrito() {
    totalCarrito = carrito.reduce((total, guitarra) => total + guitarra.precio, 0);
}

//  mostrar el total del carrito 
function mostrarTotalCarrito() {
    calcularTotalCarrito();
    alert(`Total del carrito: $${totalCarrito}`);
}

// Agregar event listener para mostrar el total del carrito
const mostrarTotalBtn = document.getElementById("mostrarTotalBtn");
mostrarTotalBtn.addEventListener("click", mostrarTotalCarrito);

// borrar el carrito
function borrarCarrito() {
    carrito.length = 0;
    actualizarCarritoUI();
    alert("Carrito borrado");
}

// Agregar event listener para borrar el carrito
const borrarCarritoBtn = document.getElementById("borrarCarritoBtn");
borrarCarritoBtn.addEventListener("click", borrarCarrito);

//  guardar el carrito en el almacenamiento local
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// cargar el carrito desde el almacenamiento local
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarritoUI();
    }
}

// Agregar un event listener para cargar el carrito 
window.addEventListener('load', cargarCarritoDesdeLocalStorage);

// Agregar un event listener para guardar el carrito 
window.addEventListener('beforeunload', guardarCarritoEnLocalStorage);

// Cambiar el modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

    

   
    
    
    































    























