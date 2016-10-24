/*#### Ćwiczenie 4 - razem z wykładowcą
Napisz program, który liczy wartość x!. gdzie ! oznacza silnię a x jest zmienną.
Użyj do tego obu znanych Ci pętli.
Silnia jest zdefiniowana jako iloraz wszystkich liczb całkowitych w zakresie od 1 do podanej liczby. Czyli:
```
5! = 1*2*3*4*5 = 120
8! = 1*2*3*4*5*6*7*8 = 40320
``` */


var a = 5;

// czyli 1*2*3*4*5
var silnia = 1; //przechowuje wynik

//musi i byc 1 bo mnozenie przez zero nie ma sensu
for (var i = 1; i <= a; i = i + 1) {
    //1,2,3,4,5

    //i=1 silnia=1
    //i=2 silnia =1 (bo poprzednia była 1)
    //i=3 silnia =2
    //i=4 silnia = 6
    silnia = silnia * i;
    //1*1=1
    //1*2=2
    //2*3=6
    //6*4=24

}
console.log(silnia);
