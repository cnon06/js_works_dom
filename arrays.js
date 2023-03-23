let brands1 = ['opel','toyota','mazda'];
let brands2 = ['bmw','mercedes'];
let brands3 = ['audi'];

let outcome = brands1.concat(brands2);
console.log(outcome);

let outcome2 = [...brands1, ...brands2, ...brands3,];
console.log(outcome2);


var fruits = ['apple','banana','strawberry','orange'];
console.log(fruits);
console.log(fruits.length);
fruits.push('cherry');
console.log(fruits);
fruits.splice(2,2);
console.log(fruits);

let map1 = {'elma':1,'armut':2};

console.log(map1['armut']);

console.log(map1.elma);
