/**
 * Convertir des pouces en centimetres
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * L'utilisateur saisit un nombre de pouces à convertir
 * 1" (1 pouce) = 2,54 centimètres  
 * 
 * https://www.pouce-cm.fr/
 */


// Write your code here


var prompt = require('prompt')
prompt.start()
prompt.get("pouces", function(err,result){
    
    console.log(result.pouces + "en centimetre vaut " + result.pouces *2.54)
})