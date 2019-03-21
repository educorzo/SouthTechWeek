describe('Inverter', function() {
  var inverter;

  beforeEach(function() {
    inverter = new Inverter();
  });

  describe('when there is no name', function () {
    it('should return empty string', function (){
      assertInverter (null, '');
    });
  });

  describe('when name is empty', function() {
    it('should return empty string', function () {
      assertInverter('', '');
    });
  });

  describe('when name has not surname', function(){
    it('should return just the name', function (){
      assertInverter('name', 'name');
    });

    describe('and name has extra spaces', function () {
      it('should return just the name', function () {
          assertInverter(' name ', 'name');
      });
    });
  });

  describe('when name has surname', function () {
    it('should return surname and name with comma', function (){
      assertInverter('First last', 'last, First');
    });

    describe('and name and surname have extra spaces', function () {
      it('should return surname and name with comma and without extra spaces', function (){
        assertInverter(' First  last ', 'last, First');
      });
    });
  });

  var assertInverter = function(input, expected)
  {
    var result;

    result = inverter.invertName(input);

    expect(result).toEqual(expected);
  }
});
