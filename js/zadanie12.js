/*#### Ćwiczenie 12 - razem z wykładowcą
Napisz funkcje o nazwie ```FooBar```, przyjmującą jedną zmienną. Funkcja ta ma wypisywać kolejne liczby, ale:
* W miejsce liczb podzielnych przez 3 wypisywać Foo
* W miejsce liczb podzielnych przez 5 wypisywać Bar
* W miejsce liczb podzielnych przez 3 i 5 wypisywać FOOBAR
Np. Dla parametru x = 15 wynik ma być:
12Foo4BarFoo78FooBar11Foo1314FOOBAR */

function fooBar(x) {
    for (i = 1; i <= x; i++) {
        //w i jest aktualna liczba
        if (i % 3 === 0) {
            //jest przez 3
            if (i % 5 === 0) {
                //jest przez 5 i przez 3
                console.log('foobar');
            } else {
                //tylko przez 3
                console.log('Foo');
            }
        } else if (i % 5 === 0) {
            console.log('Bar');
        } else {
            console.log(i);
        }
    }
};

fooBar(34);
