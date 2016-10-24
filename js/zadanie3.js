/* #### Ćwiczenie 3
Napisz program, który wystawi ocenę z testu (uzyj if, elseif i else).
0 - 39 pkt - ocena niedostateczna
40 - 54 pkt - ocena dopuszczająca
55 - 69 pkt - ocena dostateczna
70 - 84 pkt - ocena dobra
85 - 98 pkt - ocena bardzo dobra
99 - 100 pkt - ocena celująca */

var x = 35;

if (x <= 39) {
    console.log("niedostateczna");
} else if (x <= 54) { //>=40
    console.log("dopuszczajaca");
} else if (x <= 69) {
    console.log("dostateczna");
} else if (x <= 84) {
    console.log("dobra");
} else if (x <= 98) {
    console.log("b.dobra");
} else /*if (x <= 100)*/ {
    console.log("celujaca");
}
// teoretycznie ostatni else nie potrzebuje ifa, "raczej nikt nie będzie miał więcej niż max"...
