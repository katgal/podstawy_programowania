/*#### Ćwiczenie 1 - razem z wykładowcą
Napisz skrypt który definiuje 3 liczby: a, b i c. Nastepnie sprawdzi czy podane liczby mogą być bokami trójkąta.
Trójkąt można zbudować z 3 linii tylko wtedy kiedy:
```
a + b > c
c + b > a
a + c > b
```
Żeby wypisać coś w konsoli użyj funkcji ```console.log("Tekst który pokaże się w konsoli");``` */




var a = 5;
var b = 8;
var c = 10;


if (a + b > c) {
    if (b + c > a) {
        if (c + a > b) {
            console.log("mozna zbudowac trojkat");

        } else {
            console.log("nie mozna zbudowac trojkata");
        }
    } else {
        console.log("nie mozna zbudowac trojkata");
    }
} else {
    console.log("nie mozna zbudowac trojkata");
}
