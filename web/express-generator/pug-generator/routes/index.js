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
  res.render('index', {titulo:'pug', mensaje:'Jimmy | Pug', personas:personas});
});

module.exports = router;
