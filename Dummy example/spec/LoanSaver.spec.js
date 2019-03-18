describe('LoanSaver', function() {
/*
Aqui podría haber mas tests sobre nuestro LoanSaver
*/
  describe('when loan is successfully saved', function () {
    //Ejemplo de Dummy.
    /*
    En este caso el dummy reemplaza todo DataBaseConfiguration. En este caso nos
    da igual si se realiza la funcion setUp. Solo queremos testear que nuestra
    funcion save devuelve true.
    En el caso de que DataBaseConfiguration estuviera roto nuestro test no
    debería de fallar debido a que estamos testeando otra funcionalidad.
    */
    it('should return true', function (){
        //Arrange
        var result,
            id ="fakeId",
            loan= 5000,
            loanSaver,
            alertNotifier;

        dataBaseConfiguration = {};

        loanSaver = new LoanSaver(dataBaseConfiguration);

        //Act
        result = loanSaver.save(id, loan);

        //Assert
        expect(result).toEqual(true);
    });
  });
});
