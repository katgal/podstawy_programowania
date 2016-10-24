/* #### Ćwiczenie 8 - razem z wykładowcą
Napisz program który na podstawie wartości zmiennej n będzie rysował następujący schemat (tutaj dla n = 5). Użyj do tego 2ch pętli for.
```
*
* *
* * *
* * * *
* * * * *
```
1. Rozwiąż to zadanie używając pętli zależnych.
2. Rozwiąż to zadanie używając pętli niezależnych i if-a. */

var n = 7;

for (var i = 0; i < n; i++) {
    //rzad pojedynczy (n-wierszy)
    //console.log("*" +i);
    var stars = ""; //pusty ciag
    for (var j = 0; j <= i; j++) {
        //gwiazdki wiersza
        stars = stars + " *";
    }
    console.log(stars); //console.log(stars+1)
}


// Pętla z if (niezależna?)
for (var i = 0; i < n; i++) {
    //tworzy n-wierszy
    var stars = "";
    for (j = 0; j <= n; j++) {
        //gwiazdki wiersza
        stars = stars + "*";
        if (j >= i) {
            j = n; //czyli staje się cyfrą, która się nie wyświetla, bo var stars = ""?
        }
    }
    console.log(stars);
}
