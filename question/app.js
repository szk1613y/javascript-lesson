// Q1 変数
let nickname = 'suzuki';
let age = 26;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age +'歳です。');


// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let Q2text = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`

console.log(Q2text);


// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


// Q5 四則演算
let sum = 0;

for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}

let ageAvg = sum / playerList.length;

console.log(ageAvg);

// Q6 関数
function sayHello() {
  console.log('Hello');
};

sayHello();


let sayWorld = function() {
  console.log('World');
};

sayWorld();


// Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello！')
};

user.sayHello();


// Q8 引数
let calc = {};
x = Math.floor(Math.random() * 100)

calc.add = function(x, y){
  console.log(x + y);
};

calc.subtract = function(){
  console.log(x - y);
};

calc.multiply = function(){
  console.log(x * y);
};

calc.divide = function(){
  console.log(x / y);
};

y = 7 - x;
calc.add(x, y);

y = x - 10;
calc.subtract(x, y);

y = 49 / x
calc.multiply(x, y);

y = x / 5;
calc.divide(x, y);


// Q9 返り値
function remainder(x, y){
  return x % y;
}

console.log('5 を 3 で割った余りは ' + remainder(5, 3) + ' です。');


// Q10 スコープ
function foo() {
  let x = 1;
}
console.log(x);

// Q10回答
// 変数xのスコープは関数foo内となり、
// 関数foo外から参照しようとしているため。



// 応用編 問題
// Q1 標準組み込みオブジェクト
console.log(Math.floor(Math.random()*10));


// Q2 コールバック関数
function q2Func(fn) {
  setTimeout(fn,3000)
};

function sayHelloWorld(){
  console.log('HelloWorld')
};

q2Func(sayHelloWorld);


// Q3 if
let num = 1 - Math.floor(Math.random() * 3);
console.log(num);

if (num > 0) {
  console.log('num is greater than 0')
} else if (num < 0) {
  console.log('num is less than 0')
} else if (num === 0) {
  console.log('num is 0')
};


// Q4 for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers[i] = i;
};

console.log(numbers);


// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'string'){
    console.log('not number');
  } else if ((mixed[i] % 2) === 1) {
    console.log('odd');
  } else if ((mixed[i] % 2) === 0) {
    console.log('even');
  }
};
