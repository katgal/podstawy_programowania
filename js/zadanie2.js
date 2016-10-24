/* #### Ćwiczenie 2
Napisz program, który definiuje 3 liczby całkowite.
Za pomocą używania instrukcji if, else wypisz na stronie największą z tych liczb.
Do porównywania liczb użyj operatorów: ```>``` (większy), ```>=``` (większy równy), ```<``` (mniejszy), ```<=``` (mniejszy równy). */


var a = 5;
var b = 7;
var c = 1;

if (a > b) {
    //tutaj a jest większe to następny
    if (a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else {
    if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
