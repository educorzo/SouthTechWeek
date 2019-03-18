//Clase ya testeada para hacer operaciones con la base de datos
function DataBaseHandler() {
}

//Metodo ya testeado
DataBaseHandler.prototype.save = function(id, loan) {
  var isSaved = false;
  //Aqui hay unos metodos muy interesantes relancionados con como guardar
  // la información en nuestra base de datos.
  return IsSaved;
}

//Clase ya testeada para hacer alertas
function AlertNotifier() {
}

//Metodo ya testeado
AlertNotifier.prototype.sendAlert = function(id, loan) {
  //Aqui se realiza toda la funcionalidad de enviar una alerta.
}

//Nuestro LoanSaver se construye con un dataBaseHandler
function LoanSaver(dataBaseHandler, alertNotifier) {
  this.dataBaseHandler = dataBaseHandler;
  this.alertNotifier = alertNotifier;
}

LoanSaver.prototype.save = function(id, loan) {
  var isSaved = true;

  if(this.dataBaseHandler.save(id, loan)){
      this.alertNotifier.sendAlert(id, loan);
      return isSaved;
  }else{
    //Diversa funcionalidad que intenta hacer un salvado en la BD de diferentes maneras.
    return isSaved;
  }

};
