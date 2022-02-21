/**
 * Convertir des heures en minutes
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * l'utilisateur saisit des heures
 * l'utilisateur saisit des minutes
 * convertir les heures et minutes en minutes
 * exemple: 1h30 -> 90minutes
 */


// Write your code here

var prompt = require('prompt')
console.log('Indiquez sous forme 1h30')
prompt.start()
prompt.get("time", function(err,result){
    hours = result.time.split('h')
    hoursToMinutes = hours[0]*60
    hoursToMinutes = hoursToMinutes
    minutesToMinutes = parseInt(hours[1])
    console.log(hoursToMinutes+minutesToMinutes + " minutes")
})
