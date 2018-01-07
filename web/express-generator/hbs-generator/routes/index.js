var express = require('express');
var router = express.Router();

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


router.get('/', (req, res) =>{
  res.render('index', {titulo:'Handlebars', mensaje:'Jimmy | Handlebargs', personas:personas});
});

module.exports = router;
