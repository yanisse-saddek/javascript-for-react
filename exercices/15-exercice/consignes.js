/*
* À l'aide de la méthode filter, récupérer les prenoms qui commencent par 'Ma'
*/
let prenoms = ["Marie", "Antoine", "Sarah", "Mandax"];

 
// Write your code here

maPrenoms = prenoms.filter((prenom)=>{
    if(prenom[0] == "M" && prenom[1] == "a"){
        return prenom
    }
})
console.log(maPrenoms)