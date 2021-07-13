// Variables
const carrito = document.querySelector('#carrito');
const lista_cursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#variar-carrito');
let articulosCarrito = [];



cargarEventListeners();
function cargarEventListeners(){
    //Cuando le das al boton de agregar
    lista_cursos.addEventListener('click',agregarCurso);
}



// F U N C I O N E S 
function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
}
}


//Leer el contenido del HTML 
function leerDatosCurso(curso){
    //console.log(curso)

    //Creo un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad :1
    }
    // Agrega elementos al carrito 
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito)

    carritoHtml();
}

//Mostrar carrito de compras en HTML
function carritoHtml(){

    //Limpiar el html
    limpiarHtml();

    //Recorre y genera nuevo html
    articulosCarrito.forEach( curso =>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        //Agregar el html del carrito en el  tbody
        contenedorCarrito.appendChild(row); 
    });
}

//Elimina los cursos del tbody
function limpiarHtml(){
    contenedorCarrito.innerHTML= '';
}