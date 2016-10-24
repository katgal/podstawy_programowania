# PHP - Wstęp do programowania - Ćwiczenia

## Jak rozwiązywać zadania?

Żeby rozwiązać zadania musisz wykonać następujące kroki:

1. Żeby zacząć, stwórz tak zwany [**fork**][forking] repozytorium z zadaniami.
1. Następnie [**sklonuj**][ref-clone] repozytorium na swój komputer.
1. Rozwiąż zadania i [**skomituj**][ref-commit] zmiany do swojego repozytorium.
1. [**Wypchnij**][ref-push] zmiany na swoje repozytorium na GitHubie.
1. [Stwórz **pull request**][pull-request] do oryginalnego repozytorium kiedy skończysz wszystkie ćwiczenia.

## Ćwiczenia

Niektóre ćwiczenia będą rozwiązywane razem z wykładowcą - żeby naprowadzić was jak powinniście rozwiązywać następne ćwiczenia.
Na samym dole znajdują się także ćwicznia do zrobienia w domu.

### Ćwiczenia do schematów blokowych (rozwiązywane grupowo na tablicy)

#### Ćwiczenie 1 - razem z wykładowcą
Narysuj schemat blokowy, znajdujący najwyższą liczbę w 10 elementowej tablicy.

#### Ćwiczenie 2
Narysuj schemat blokowy, który doda wszystkie elementy w 10 elementowej tablicy a wynik wypisze na ekranie.

#### Ćwiczenie 3
Narysuj schemat blokowy wypisujący wszystkie pozycje, na których w tablicy A[0, . . . , n-1] znajduje się liczba x.

### Ćwiczenia do wyrażen warunkowych (rozwiązania wpisz w odpowiednie pliki)




#### Ćwiczenie 2
Napisz program, który definiuje 3 liczby całkowite.
Za pomocą używania instrukcji if, else wypisz na stronie największą z tych liczb.
Do porównywania liczb użyj operatorów: ```>``` (większy), ```>=``` (większy równy), ```<``` (mniejszy), ```<=``` (mniejszy równy).


#### Ćwiczenie 3
Napisz program, który wystawi ocenę z testu (uzyj if, elseif i else).
0 - 39 pkt - ocena niedostateczna
40 - 54 pkt - ocena dopuszczająca
55 - 69 pkt - ocena dostateczna
70 - 84 pkt - ocena dobra
85 - 98 pkt - ocena bardzo dobra
99 - 100 pkt - ocena celująca

### Ćwiczenia do petli (rozwiązania wpisz w odpowiednie pliki)

#### Ćwiczenie 4 - razem z wykładowcą
Napisz program, który liczy wartość x!. gdzie ! oznacza silnię a x jest zmienną.
Użyj do tego obu znanych Ci pętli.
Silnia jest zdefiniowana jako iloraz wszystkich liczb całkowitych w zakresie od 1 do podanej liczby. Czyli:
```
5! = 1*2*3*4*5 = 120
8! = 1*2*3*4*5*6*7*8 = 40320
```


#### Ćwiczenie 5
Napisz program, który będzie liczył sumę wszystkich liczb w podanym przedziale od x do y.
Użyj do tego obu znanych Ci pętli.
Np. dla podanego x = 5, y = 10 suma to 5+6+7+8+9+10=45


#### Ćwiczenie 6
Napisz program który na podstawie wartości zmiennej n wypisywał wszystkie liczby od 0..n.
Przy każdej liczbie ma napisać czy jest ona parzysta czy nie. Np:
```
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
```

### Ćwiczenia do petli zagnieżdzonych (rozwiązania wpisz w odpowiednie pliki)

#### Ćwiczenie 7 - razem z wykładowcą
Napisz program który na podstawie wartości zmiennej n będzie rysował następujący schemat (tutaj dla n = 5):
```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```
Musisz do tego użyć pętli zagnieżdżonych!

#### Ćwiczenie 8 - razem z wykładowcą
Napisz program który na podstawie wartości zmiennej n będzie rysował następujący schemat (tutaj dla n = 5). Użyj do tego 2ch pętli for.
```
*
* *
* * *
* * * *
* * * * *
```
1. Rozwiąż to zadanie używając pętli zależnych.
2. Rozwiąż to zadanie używając pętli niezależnych i if-a.

#### Ćwiczenie 9
Napisz program który na podstawie wartości zmiennej n będzie rysował następujący schemat (tutaj dla n = 5):
```
  *   *   
*   *   *
  *   *  
*   *   *
  *   *   
```
Musisz do tego użyć pętli zagnieżdżonych a w wewnętrznej pętli dodać if który będzie sprawdzał odpowiedni warunek (jeżeli (i + j) jest nieparzyste to ma być gwiazdka).

#### Ćwiczenie 10
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
Najpierw używając pętli zagnieżdżonych narysuj pierwszą połowę rysunku. Potem dopiero dopisz drugą parę pętli zagnieżdżonych która dorysuję resztę.

#### Ćwiczenie 11
Napisz program który napisze tabliczkę mnożenia dla podanej zmiennej n. Np., dla n = 3 wynik będzie wyglądać następująco:

|1 x 1 = 1|1 x 2 = 2|1 x 3 = 3|
| ------- | ------- | ------- |
|2 x 1 = 2|2 x 2 = 4|2 x 3 = 6|
|3 x 1 = 3|3 x 2 = 6|3 x 3 = 9|

Do mnożenia liczb użyj operatora ```*```.

### Ćwiczenia do funkcji (rozwiązania wpisz w odpowiednie pliki)

#### Ćwiczenie 12 - razem z wykładowcą
Napisz funkcje o nazwie ```FooBar```, przyjmującą jedną zmienną. Funkcja ta ma wypisywać kolejne liczby, ale:
* W miejsce liczb podzielnych przez 3 wypisywać Foo
* W miejsce liczb podzielnych przez 5 wypisywać Bar
* W miejsce liczb podzielnych przez 3 i 5 wypisywać FOOBAR
Np. Dla parametru x = 15 wynik ma być:
12Foo4BarFoo78FooBar11Foo1314FOOBAR

#### Ćwiczenie 13 - razem z wykładowcą
Napisać funkcję, która pobiera liczbę ```a``` i ```n``` jako argument i *zwraca* jako wynik ```a``` do potęgi ```n```.
Nie używaj ```Math.pow()``` tylko pętli!

#### Ćwiczenie 14
Napisać funkcję, która przyjmuje liczbę ```n``` i wyświetma ```n``` razy na stronie napis "Programowanie w PHP jest fajne!".

#### Ćwiczenie 15
Napisać funkcję, która pobiera 3 liczby i zwraca największą z nich (zwraca a nie wypisuje na ekranie).

#### Ćwiczenie 16
Zamień ćwiczenia od 2 do 11 na funkcjie. Pamiętaj o przyjmowaniu odpowiednich argumentów do funkcji i zwracaniu wartości (funkcjie dla ćwiczeń 2, 4 i 5 powinny zwracać wawrtośc wyliczoną w środku funkcji).



## Praca domowa
Praca domową jest dokończenie i powtórzenie wszystkich ćwiczeń które zrobiliście na zajęciach.



## Zadania dla chętnych
Poniżej znajdują się dodatkowe zadania które są trochę trudniejsze. Zachęcam żeby każdy z was się co najmniej zastanowił nad tym jak je rozwiązać.

#### Ćwiczenie dodatkowe 1
Napisz funkcję sprawdzającą czy podana liczba jest liczbą pierwszą (jest podzielna tylko przez 1 i samą siebie). Funkcja ma zwracać wartość true albo false (boolean).
Zastosuj podejście brute force:
Algorytm brute force jest najprostszą, a zarazem najbardziej czasochłonną metodą na wyznaczanie liczb pierwszych. Jego działanie opiera się na sprawdzeniu wszystkich potencjalnych dzielników danej liczby - jeżeli dana liczba nie dzieli się przez żadną inną liczbę (oprócz jedynki i samej siebie) to jest ona oznaczana jako pierwsza.
W celu optymalizacji algorytmu, sprawdza się wszystkie potencjalne dzielniki nie większe niż pierwiastek z samej sprawdzanej liczby - większe wartości nie mogą być już dzielnikami.
Żeby dostać resztę z dzielenia użyj operatora %, np.:
```
12 % 5 = 2
```

#### Ćwiczenie dodatkowe 2
Napisz program który będzie zwracał wartość liczby Pi używając następującej formuły:
```
pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)
```
Zobacz jak zmienia się precyzja wyniku w zależności od ilości iteracji twojej pętli.

#### Ćwiczenie dodatkowe 3
Liczba doskonałą nazywamy liczbę która jest sumą wszystkich swoich dzielników. Jest to np. 6, ponieważ ```6 = 3 + 2 + 1```.
Liczbą niekompletną nazywamy liczbę która jest większa od sumy wszystkich swoich dzielników. Jest to np. ```10 (1+2+5=8 < 10)```.
Napisz program który wypisze wszystkie liczby do wcześniej zdefiniowanej liczby ```x``` i określi czy jest to liczba doskonała, niekompletna czy żadna z nich.

#### Ćwiczenie dodatkowe 4
Napisz funkcję mySin(x, iterNum) i myCos(x, iterNum), która zwraca aproksymacje funkcji sinus i cosinus używając następujących wzorów:
```
sin(x) = (x^1)/1! - (x^3)/3! + (x^5)/5! - (x^7)/7! + (x^9)/9! - (x^11)/11! + ...
cos(x) = (x^0)/0! - (x^2)/2! + (x^4)/4! - (x^6)/6! + (x^8)/8! - (x^10)/10! + ...
```
Pamiętaj że ```0! = 1```
Żeby to zrobić najpierw napisz funkcje do wyliczania silni, potem do wyliczania potęgi a na koniec połącz je w całość.

<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
