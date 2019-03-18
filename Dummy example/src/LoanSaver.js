//Clase ya testeada para hacer operaciones con la base de datos
function DataBaseConfiguration() {
}

//Metodo ya testeado
DataBaseConfiguration.prototype.setUp = function() {
  //Aqui se realiza toda la funcionalidad para configurar la base de datos
}

/*
Nuestro LoanSaver se construye con un DataBaseConfiguration
Nota: Para poder "mockear" cualquier funcionalidad en lenguajes como c# o Java
tendras que disponer de una interfaz y hacer uso de Object Factory (evitando
hacer uso de new y el acoplamiento que genera). Pero no te preocupes,TDD te
obligara a crearlo.
*/
function LoanSaver(dataBaseConfiguration) {
  this.dataBaseConfiguration = dataBaseConfiguration;
}

LoanSaver.prototype.save = function(id, loan) {
   //Aqui se estan realizando mucha más funcionalidad en la que no se hace uso
   //de DataBaseConfiguration
   return true;
};

LoanSaver.prototype.setUp = function ()
{
  this.dataBaseConfiguration.setUp();
}
