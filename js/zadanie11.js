/* #### Ćwiczenie 11
Napisz program który napisze tabliczkę mnożenia dla podanej zmiennej n. Np., dla n = 3 wynik będzie wyglądać następująco:

|1 x 1 = 1|1 x 2 = 2|1 x 3 = 3|
| ------- | ------- | ------- |
|2 x 1 = 2|2 x 2 = 4|2 x 3 = 6|
|3 x 1 = 3|3 x 2 = 6|3 x 3 = 9|

Do mnożenia liczb użyj operatora ```*```.
*/

var n = 3;

for (var i = 1; i <= n; i++) {

    space = "" + "|";

    for (var j = 1; j <= n; j++) {

        space = space + i + " x " + j + " = " + i * j + "|";
    }
    console.log(space);
}

// hmmm a jak zrobić te linie w drugim rzędzie? Może kiedyś rozwikłam tę zagwozdkę... ;P
