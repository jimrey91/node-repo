console.log('Esto es una prueba');

let subscripciones = 22000;

module.exports.subscripciones = 22000;

/*function saludar(){
    console.log('Hola desde prueba');
}

module.exports.saludo = saludar();

module.exports.saludar = function(){
    console.log('Hola desde prueba');
}*/

module.exports = {
    subs : subscripciones,
    saludar : function(){
        console.log('Hola desde prueba');
    },
    sumar : (a, b) =>{
        return a + b;
    },
    mostrar : x => x + 10
}