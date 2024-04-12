/*PROYECTO JAVASCRIPT A DESARROLLAR
Señor(a) Estudiante: Usted ha sido contratado por la empresa
 “POLITECNICO CHANGE” Para realizar una aplicación web que permita
apoyar el cambio de moneda (EU – Euros o USD – Dólares o BR – Reales Brasileños) a COP Pesos colombianos.
Requerimientos:
- Debe proponer una línea de colores, fuentes, tamaños de fuentes, 
imágenes y posición de la información para el Diseño del SiteWeb.
- El sitio web debe contar con un esquema y mapa de navegación, acordes a
la identidad corporativa propuesta.
- El sitio web deberá estar programado bajo HTML – CSS – Javascript según
 lo visto en las sesiones de clase, se aceptan scripts adicionales que le generen valor al sitio web.
- El sitio web debe contener un Banner Principal y Pie de página (Animado o Estático).
- El sitio web debe estar publicado en un hosting en cual permita su
 visualización desde cualquier dispositivo electrónico.*/

function Convertir(){
    var Valornum = parseInt(document.getElementById("Cantidad").value);
    var Moneda = document.getElementById("Moneda").value;
    var Resultado = 0;
    if(Moneda === "Euro"){
        Resultado = Valornum * 4.107,95;
    } else if (Moneda === "Dolar"){
        Resultado = Valornum * 3.827,47;
    } else if (Moneda === "Real"){
        Resultado = Valornum * 754.47;
    }
    document.getElementById("Total").value = Resultado.toFixed(3);

    event.preventDefault();
}
