describe('LoanSaver', function() {
/*
Aqui podría haber más tests sobre nuestro LoanSaver
*/
  describe('when saving loan', function () {
    //Ejemplo de mock.
    /*
    En este caso el mock va a sustituir a la funcion Save del dataBaseHandler.
    Haremos que esta funcion "mockeada" devuelva true, fingiendo que nuestro
    dataBaseHandler ha tenido exito salvando. Despues preguntaremos si se ha llamado
    correctamente. También haremos un stub del AlertNotifier para que no interfiera
    en nuestro test.
    */
    it('should save through dataBaseHandler', function (){
        //Arrange
        var id ="fakeId",
            loan= 5000,
            loanSaver,
            mockDataBaseHandler,
            stubAlertNotifier;

        mockDataBaseHandler = new DataBaseHandler();
        stubAlertNotifier = new AlertNotifier();

        spyOn(mockDataBaseHandler, "save").and.returnValue(true);
        spyOn(stubAlertNotifier, "sendAlert");

        loanSaver = new LoanSaver(mockDataBaseHandler, stubAlertNotifier);

        //Act
        loanSaver.save(id, loan);

        //Assert
        expect(mockDataBaseHandler.save).toHaveBeenCalledWith(id, loan);
    });
  });
});
