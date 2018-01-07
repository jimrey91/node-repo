const express = require('express');
const app = express();

let personas = [
    {

        id: 1,
        nombre: "Jimmy"
    },
    {
        id: 2,
        nombre: "Jim"
    }, 
    {
        id: 3,
        nombre: "King"
    }
    
]   

app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    res.render('template', {titulo:'pug', mensaje:'Jimmy | Pug', personas:personas});
});

app.listen(3000, () => console.log('Listenig on port 3000!'))
