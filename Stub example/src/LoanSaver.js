//Clase ya testeada para hacer operaciones con la base de datos
function DataBaseHandler() {
}

//Metodo ya testeado
DataBaseHandler.prototype.save = function(id, loan) {
  var isSaved = true;
  //Aqui hay unos metodos muy interesantes relancionados con como guardar
  // la información en nuestra base de datos.
  return IsSaved;
}

//Nuestro LoanSaver se construye con un dataBaseHandler
function LoanSaver(dataBaseHandler) {
  this.dataBaseHandler = dataBaseHandler;
}

LoanSaver.prototype.save = function(id, loan) {
  return this.dataBaseHandler.save();
};
