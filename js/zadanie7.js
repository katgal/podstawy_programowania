/*#### Ćwiczenie 7 - razem z wykładowcą
Napisz program który na podstawie wartości zmiennej n będzie rysował następujący schemat (tutaj dla n = 5):
```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```
Musisz do tego użyć pętli zagnieżdżonych! */


var n = 4;

for (var i = 0; i < n; i++) {
    //rzad pojedynczy (n - wierszy)
    //console.log("*" +i);
    var stars = ""; //pusty ciag (by nie było liczby przed gwiazdkami)
    for (var j = 0; j < n; j++) {
        //gwiazdki wiersza
        stars = stars + "*";
    }
    console.log(stars); //console.log(stars+1)
}
