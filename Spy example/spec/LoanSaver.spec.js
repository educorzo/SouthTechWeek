describe('LoanSaver', function() {
/*
Aqui podría haber mas tests sobre nuestro LoanSaver
*/
  describe('when loan is saved', function () {
    //Ejemplo de Spy.
    /*
    En este caso el spy va a sustituir a la funcion SendAlert del AlertNotifier.
    El proposito de este spy es comprobar que se llama a la funcion.
    En el caso que quisieramos añadirle nueva funcionalidad, lo que estariamos aplicando
    sería el concepto de mock.
    */
    it('should send an alert to user', function (){
        //Arrange
        var id ="fakeId",
            loan= 5000,
            loanSaver,
            alertNotifier;

        alertNotifier = new AlertNotifier();

        spyOn(alertNotifier, "sendAlert");

        loanSaver = new LoanSaver(alertNotifier);

        //Act
        loanSaver.save(id, loan);

        //Assert
        expect(alertNotifier.sendAlert).toHaveBeenCalledWith(id, loan);
    });
  });
});
