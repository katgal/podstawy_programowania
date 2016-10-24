/* #### Ćwiczenie 13 - razem z wykładowcą
Napisać funkcję, która pobiera liczbę ```a``` i ```n``` jako argument i *zwraca* jako wynik ```a``` do potęgi ```n```.
Nie używaj ```Math.pow()``` tylko pętli! */

function power(a, n) {
    //a =2
    //n=3
    var result = 1;
    for (var i = 0; i < n; i++) {
        result = result * a;
    }
    return result;
};

var ret = power(2, 3);
console.log(ret) //8
    //2*2*2

power(3, 4); //
//3*3*3*3
