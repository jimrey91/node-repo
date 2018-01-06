const prom = require('./promise');

prom.calcular(4,2).then((resultado) =>{
    console.log(resultado);
}, (error) =>{
    console.log(error);
})
/*let promesa = new Promise((resolve, reject)=>{
    //resolve('Exito al procesar los datos');
    reject('Error');
});

promesa.then((resultado)=>{
    console.log(resultado);
}, (error)=>{
    console.log(error);
})*/
