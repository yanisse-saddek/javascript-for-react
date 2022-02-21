/*
* Exercice BONUS faire un rot 11
* Vous pouvez utilsier les arguments envoyés depuis le terminal pour cet exercice.
* Un rot est un algorithme qui décale les lettres pour chiffrer un message.
* "Le texte chiffré s'obtient en remplaçant chaque lettre du texte clair original par une lettre à distance fixe, toujours du même côté, dans l'ordre de l'alphabet.
* Pour les dernières lettres (dans le cas d'un décalage à droite), on reprend au début."" Wikipedia
* A + 11 = L
* Z + 11 = K
* "Salut"  devient "Dlwfe"
*  indice: charCodeAt(letter) pour convertir un caractère en nombre (table ASCII)
*  indice: String.fromCharCode(ascii) pour convertir du code ASCII en caractère
*  indice: il faut parcourir la chaine caractère par caractère et la transformer
* verifier : https://rot13.com/
* table ascii https://fr.wikibooks.org/wiki/Les_ASCII_de_0_%C3%A0_127/La_table_ASCII*Descriptif3
# chiffrement par decalage: https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage
*/


// Write your code here