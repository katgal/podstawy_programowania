/* #### Ćwiczenie 10
Napisz program który na podstawie wartości zmiennej n będzie rysował następujący schemat (tutaj dla n = 5):
```
* 2 3 4 5
* * 3 4 5
* * * 4 5
* * * * 5
* * * * *
* * * * *
* * * * 5
* * * 4 5
* * 3 4 5
* 2 3 4 5
```
Najpierw używając pętli zagnieżdżonych narysuj pierwszą połowę rysunku. Potem dopiero dopisz drugą parę pętli zagnieżdżonych która dorysuję resztę. */

var n = 5;

for (var i = 1; i <= n; i++) { // [Add. rząd pierwszy rysunku] trzeba zacząć od 1, by od razu wyświetliła się gwiadka, a potem 2 (gwiazdka = j(1) nie jest większe od i(1); (druga iteracja) 2 = j(2) jest już większe od i(1), itd.)
    // tworzy n-wierszy
    var stars = ""; //powoduje, że nie widać cyfr
    for (var j = 1; j <= n; j++) {
        //gwiazdki wiersza
        if (j > i) {
            stars = stars + j; //jezeli j jest większe to dodaje "puste miejsce" + j(cyfrę)

        } else {
            stars = stars + "*"; //jeśli nie, to dodaje "puste miejsce" i *
        }
    }
    console.log(stars);
}

// druga para pętli

for (var i = 1; i <= n; i++) {

    var stars = "";

    for (var j = n; j >= 1; j--) { // j--  zmniejszamy j, czyli zaczynamy od j=n, czyli 5 i zmniejszamy aż do 1 włącznie! 5 4 3 2 1
        /*
              // drugą pętlę trzeba zacząć od j=n
              // czyli j zaczynamy od 5, a nie od 1 jak poprzednio!!

                   j
                5 4 3 2 1
            i  1* * * * * w tym rzędzie same gwiazdki, bo j >= i
               2* * * * (5-1) = 4 i musimy dodać 1, żeby było tak jak w poleceniu!! czyli wychodzi 5!!  ...  tutaj j jest mniejsze i dlatego cyfra!
               3* * * (5-2)= 3 +1 = 4! itd...
               4* * 3 4 5
               5* 2 3 4 5
            */

        if (j >= i) {
            // dajemy gwiazdki gdy j >= i
            stars = stars + "*";

        } else {
            // dajemy cyfry, gdy j <= i
            stars = stars + (n - j + 1);
        }
    }
    console.log(stars);
}
