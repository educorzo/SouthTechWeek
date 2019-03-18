describe('LoanSaver', function() {
/*
Aqui podría haber más tests sobre nuestro LoanSaver
*/
  describe('when loan is not saved', function () {
    //Ejemplo de stub.
    /*
    En este caso el stub va a sustituir a la funcion Save del dataBaseHandler.
    Haremos que esta funcion "stubeada" devuelva false, fingiendo que nuestro
    dataBaseHandler no ha tenido exito salvando.
    */
    it('should return false', function (){
        //Arrange
        var result,
            id ="fakeId",
            loan= 5000,
            loanSaver,
            dataBaseHandler;

        dataBaseHandler = new DataBaseHandler();

        spyOn(dataBaseHandler, "save").and.returnValue(false);

        loanSaver = new LoanSaver(dataBaseHandler);

        //Act
        result = loanSaver.save(id, loan);

        //Assert
        expect(result).toEqual(false);
    });
/*
El siguiente test sería el siguiente:
  describe('when loan is successfully saved', function () {
    it('should return true', function (){
    })
  });
*/
  });
});
