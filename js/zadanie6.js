/*#### Ćwiczenie 6
Napisz program który na podstawie wartości zmiennej n wypisywał wszystkie liczby od 0..n.
Przy każdej liczbie ma napisać czy jest ona parzysta czy nie. Np:
```
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
``` */

var x = 12;

for (var i = 0; i <= x; i = i + 1) {
    if (i % 2 === 0) {
        //sprawdzamy czy dzielona przez 2 = parzysta
        console.log(i, "parzysta");
    } else {
        console.log(i + "-" + "nieparzysta");
    }
}
