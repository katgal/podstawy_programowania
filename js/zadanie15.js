// #### Ćwiczenie 15
// Napisać funkcję, która pobiera 3 liczby i zwraca największą z nich (zwraca a nie wypisuje na ekranie).

function compare(x, y, z) {
    if (x >= y) {
        if (x >= z) {
            return x;
        } else {
            return z;
        }
    } else {
        if (y >= z) {
            return y;
        } else {
            return z;
        }
    }
};

//  var ret = compare(2,4,9);
//  console.log(ret);

compare(2, 4, 9);

// co w przypadku np, liczb 2, 2, 3? Porównanie >= byłoby bezpieczniejsze w tych ifach.
