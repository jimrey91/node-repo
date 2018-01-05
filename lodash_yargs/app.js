const _ = require('lodash');
const argv = require('yargs').argv;

/*let comando = process.argv[2];
console.log(comando);*/

if(argv.usuario === 'Jimmy'){
            
        let x = {"nombre": "Jaime"}
        let y = {"apodo": "Jimmy"}
        let z = [
            {nombre: "Jaime", apellido: "Reyes", edad: 26},
        {nombre: "Jim", apellido: "King", edad: 26}]

        /*let resultado = _.assign(x,y);
        console.log(resultado);*/

        //_.times(3, ()=> console.log("Hola node"));

        let resultado = _.find(z, {nombre:"Jaime", apellido: "Reyes"});
        console.log(resultado);

    }else{
        console.log('Usuario no valido');
    }