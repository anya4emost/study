'use strict';
/*
var t = [
  {id: 2, include: false},
  {id: 1, include: true},
  {id: 5, include: true},
  {id: 3, include: false},
  {id: 10, include: true},
  {id: 15, include: true},
  {id: 7, include: false},
  {id: 6, include: true},
  {id: 8, include: false},
  {id: 11, include: true},
  {id: 12, include: true},
  {id: 4, include: false}
];

var f = t.filter(function(item){
            return item.include;
          }).map(function(item){
            return item.id;
          })
          .sort(function(item1, item2){
              return item1 < item2;
          })
          .reduce(function(prevItem, curItem, result){
            return prevItem + curItem;
          });

console.log(f);


var foo = [];

foo.push(1);
foo.push(2);

foo.unshift(5);

foo.splice(0,0);
foo.slice(0,1);



console.log(foo);



for (var i = 0; i < 5; i++) {
  (function(i){
    setTimeout(function() {
      console.log(i);
    }, 1000);
  })(i)
}

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
}

for (var i = 0; i < 5; i++) {
    setTimeout(function(i) {
      console.log(i);
    }, 1000, i);
}



var t = [[1], [2,3,4,5], [6,7,8,9,10]];
for (var i = 0; i < t.length; i++) {
  for (var a = 0; a < t[i].length; a++) {
    console.log(t[i][a])
  }
}
*/



//1 Нахождение файториала числа после ввода пользователя
// Подсказка: prompt вернет не число
/*var g = prompt('Vvedite chislo dlya nahogedniya ego factoriala')
console.log(g);
var n = parseInt(g);
var b = 1;
for (var i = n; i > 1 ; i--) {
        b *= i;
}
console.log(b);
*/
//2  Найти сумму чисел от 100 до 200 кратных 17.
var b = 0;
for (var i = 100; i <=200; i++) {
      if (i%17 == 0) {
    b += i;
      }
}
console.log(b);
//3 27. У первокласника пети m рублей.Мороженое стоит k рублей.
//Петя решил наесться досыта мороженого, для этого он покупал по одному мороженому и съедал его до тех пор, пока ему хватало денег.
//Как пете узнать, сколько денег останется у него в конце концов? учтите, что петя делить еще не умеет,
// а умеет только вычитать и складывать. сколько мороженых он может съесть?.
var i = 0;
var m = 10;
var k = 3;
while (m >= k) {
  i++;
  m -= k;
}
console.log (i);
