// Variables
const carrito = document.querySelector('#carrito');
const lista_cursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#variar-carrito');



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
    console.log(curso)

    //Creo un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad :1
    }
    console.log(infoCurso)
}