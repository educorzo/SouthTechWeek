function Inverter () {}

Inverter.prototype.invertName = function(name)
{
  if(name === null){
    return '';
  }
  name = name.trim();
  var names = name.split(/\s+/);
//var names = name.split(' ')
  if(names.length == 2){
    return names[1] + ', ' + names[0];
  }

  return name;
}
