var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Aimee Hernandez Mendoza ', appName:'ejemplo s10' , company:'Awsome Software' });  //se tiene    que reiniciar el servidor 
  //appName en layout.hbs se tiene que crear primero 
});
/*agregando nueva ruta        http://localhost:3000/greeting    */
router.get('/greeting', function(req, res, next){
  res.send('HERNANDEZ MENDOZA VIVIANA AIMEE')
  //* segundo ejemplo*/
  //* res.status(200).json({message:'HERNANDEZ MENDOZA VIVIANA AIMEE'})   */
})
module.exports = router;
