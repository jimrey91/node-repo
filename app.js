const os = require('os');
const fs = require('fs');
const pr = require('./prueba');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

//let rpta = pr.sumar(10, 10);
let rpta = pr.mostrar(5);
console.log(rpta);

setTimeout( () => {
    console.log('Terminé');
}, 2000);

/*pr.saludar();
console.log(pr.subs);*/
//console.log(pr.subscripciones);
//console.log(cpu);
//console.log(sistema);
//console.log(usuario);
/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('reyes.txt', `Informacion del cpu : ${cpu_string}` , function(error){
    if(error){
    console.log('Error al crear el archivo')
    }
});*/

