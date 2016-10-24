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

var n = 5;

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
