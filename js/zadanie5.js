/* #### Ćwiczenie 5
Napisz program, który będzie liczył sumę wszystkich liczb w podanym przedziale od x do y.
Użyj do tego obu znanych Ci pętli.
Np. dla podanego x = 5, y = 10 suma to 5+6+7+8+9+10=45
*/

var x = 5;
var y = 10;
// 5,6,7,8,9,10
var sum = 0 //od czegos trzaba zaczac dodawac
for (var i = x; i <= y; i++) {
    //i=5
    //i=6
    //i=7....
    sum = sum + i;
}

console.log(sum);

-- -- -- -- -- --

var x = 5;
var y = 10;

var sum = 0
    //5<=10
    //6<=10
    //7<=10
    //8<=10
    //9<=10
    //10<=10

while (x <= y) {
    sum = sum + x;
    x = x + 1;
}
console.log(sum);
