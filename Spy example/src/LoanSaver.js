//Clase ya testeada para hacer alertas
function AlertNotifier() {
}

//Metodo ya testeado
AlertNotifier.prototype.sendAlert = function(id, loan) {
  //Aqui se realiza toda la funcionalidad de enviar una alerta.
}

/*Nuestro LoanSaver se construye con un AlertNotifier
Nota: Para poder "mockear" cualquier funcionalidad en lenguajes como c# o Java
tendras que disponer de una interfaz y hacer uso de Object Factory (evitando
hacer uso de new y el acoplamiento que genera). Pero no te preocupes,TDD te
obligara a crearlo.
*/
function LoanSaver(alertNotifier) {
  this.alertNotifier = alertNotifier;
}

LoanSaver.prototype.save = function(id, loan) {
   this.alertNotifier.sendAlert(id, loan);
   //Aqui se estan realizando mucha más funcionalidad
};
