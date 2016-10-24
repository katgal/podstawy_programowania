/*####
Ćwiczenie 16
Zamień ćwiczenia od 2 do 11 na funkcjie.Pamiętaj o przyjmowaniu odpowiednich argumentów do funkcji i zwracaniu wartości(funkcjie dla ćwiczeń 2, 4 i 5 powinny zwracać wawrtośc wyliczoną w środku funkcji). */

/* #### Ćwiczenie 2
Napisz program, który definiuje 3 liczby całkowite.
Za pomocą używania instrukcji if, else wypisz na stronie największą z tych liczb.
Do porównywania liczb użyj operatorów: ```>``` (większy), ```>=``` (większy równy), ```<``` (mniejszy), ```<=``` (mniejszy równy). */

var a = 3;
var b = 5;
var c = 8;

function compare(a, b, c) {
    if (a > b) {
        //tutaj a jest większe to następny
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
};
/* var ret = */
compare(a, b, c);
// console.log(ret)

/* #### Ćwiczenie 3
Napisz program, który wystawi ocenę z testu (uzyj if, elseif i else).
0 - 39 pkt - ocena niedostateczna
40 - 54 pkt - ocena dopuszczająca
55 - 69 pkt - ocena dostateczna
70 - 84 pkt - ocena dobra
85 - 98 pkt - ocena bardzo dobra
99 - 100 pkt - ocena celująca */

var x = 77;

function note(x) {
    if (x <= 39) {
        console.log("niedostateczna");
    } else if (x <= 54) {
        console.log("dopuszczajaca");
    } else if (x <= 69) {
        console.log("dostateczna");
    } else if (x <= 84) {
        console.log("dobra");
    } else if (x <= 98) {
        console.log("bardzo dobra");
    } else if (x <= 100) {
        console.log("celująca");
    }
};
note(x);


/*#### Ćwiczenie 4 - razem z wykładowcą
Napisz program, który liczy wartość x!. gdzie ! oznacza silnię a x jest zmienną.
Użyj do tego obu znanych Ci pętli.
Silnia jest zdefiniowana jako iloraz wszystkich liczb całkowitych w zakresie od 1 do podanej liczby. Czyli:
```
5! = 1*2*3*4*5 = 120
8! = 1*2*3*4*5*6*7*8 = 40320
``` */

function foo(a) {

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
};
foo(8);

/* #### Ćwiczenie 5
Napisz program, który będzie liczył sumę wszystkich liczb w podanym przedziale od x do y.
Użyj do tego obu znanych Ci pętli.
Np. dla podanego x = 5, y = 10 suma to 5+6+7+8+9+10=45
*/

function sumaLiczb(x, y) {
    var sum = 0 //od czegos trzaba zaczac dodawac
    for (var i = x; i <= y; i++) {
        //i=5
        //i=6
        //i=7....
        sum = sum + i;
    }
    return sum;
};
console.log(sumaLiczb(3, 9));

-- -- -- -- -- -- -- -- -- -

function sumaLiczb(x, y) {
    var sum = 0
    while (x <= y) {
        sum = sum + x;
        x = x + 1;
    }
    return sum
};
console.log(sumaLiczb(3, 9));

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


function parzystaNieparzysta(x) {
    for (var i = 0; i <= x; i = i + 1) {
        if (i % 2 === 0) {
            //sprawdzamy czy dzielona przez 2 = parzysta
            console.log(i, "parzysta");
        } else {
            console.log(i + "-" + "nieparzysta");
        }
    }
};
parzystaNieparzysta(12);


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

function rysujGwiazdki(n) {

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
};
rysujGwiazdki(5);


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

function gwiazdki(n) {

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
};
gwiazdki(7);

// Pętla z if (niezależna?)

function gwiazdki(n) {

    for (var i = 0; i < n; i++) {
        //tworzy n-wierszy
        var stars = "";
        for (j = 0; j <= n; j++) {
            //gwiazdki wiersza
            stars = stars + " *";
            if (j >= i) {
                j = n; //czyli staje się cyfrą, która się nie wyświetla, bo var stars = ""?
            }
        }
        console.log(stars);
    }
};
gwiazdki(7);

/* #### Ćwiczenie 9
Napisz program który na podstawie wartości zmiennej n będzie rysował następujący schemat (tutaj dla n = 5):
```
  *   *
*   *   *
  *   *
*   *   *
  *   *
```
Musisz do tego użyć pętli zagnieżdżonych a w wewnętrznej pętli dodać if który będzie sprawdzał odpowiedni warunek (jeżeli (i + j) jest nieparzyste to ma być gwiazdka). */

function gwiazdkiRysuj(n) {
    for (var i = 1; i <= n; i++) {
        // tworzy n - wierszy
        var stars = "";
        for (var j = 1; j <= n; j++) {
            // tworzy gwiazdki wiersza
            if ((i + j) % 2 !== 0) {
                stars = stars + "* ";
                //jesli nieparzyste to gwiazdka
            } else {
                stars = stars + "  ";
                // jesli nie to 2.spacje (daje kształt taki jak na wzorze powyżej)
            }
        }
        console.log(stars);
    }
};
gwiazdkiRysuj(5);

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

function lustro(n) {

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
};
lustro(5);


/* #### Ćwiczenie 11
Napisz program który napisze tabliczkę mnożenia dla podanej zmiennej n. Np., dla n = 3 wynik będzie wyglądać następująco:

|1 x 1 = 1|1 x 2 = 2|1 x 3 = 3|
| ------- | ------- | ------- |
|2 x 1 = 2|2 x 2 = 4|2 x 3 = 6|
|3 x 1 = 3|3 x 2 = 6|3 x 3 = 9|

Do mnożenia liczb użyj operatora ```*```.
*/

function tabliczkaMnozenia(n) {

    for (var i = 1; i <= n; i++) {

        space = "" + "|";

        for (var j = 1; j <= n; j++) {

            space = space + i + " x " + j + " = " + i * j + "|";
        }
        console.log(space);
    }
};
tabliczkaMnozenia(3);
