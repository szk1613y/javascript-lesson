// console.log('Hello world!');
// console.log('1つ目の値', '2つ目の値');

// let text = 'JavaScriptの練習';
// console.log(text);

// text = 'JavaScriptをマスターした';
// console.log(text);

// console.log('elephant');
// // console.log(elephant);

// let name = 'ジョニー';
// let greet = '私は' + name + '!';
// console.log(greet);

// let num = 10 ;
// let strTen = '10';
// console.log(num, strTen);

// let minus = -10;
// let decimal = 1.1;
// console.log(minus, decimal);

// let num1 = 25;
// let num2 =2;

// console.log(num1 / num2);

// let number = 5;
// number = number + 3;
// number += 3;
// number++;
// console.log(number);

// let names = ['John', 'Bob', 'Michael', 'Emma'];

// console.log('names[0] => ', names[0]);
// console.log('names[1] => ', names[1]);
// console.log('names[2] => ', names[2]);
// console.log('names[3] => ', names[3]);
// console.log('names.length => ', names.length);

// let Andy = {};

// Andy.name = 'Andy';
// Andy.age = 19;
// Andy.bloodType = 'B';
// Andy.favorite = 'sweets';

// console.log(Andy);
// console.log(Andy.favorite);

// let one = '1';
// let two = 2;

// console.log('one →', typeof one, one); // one → string 1
// console.log('two →', typeof two, two); // one → number 2

// function getArea() {
//   let radius = 2;
//   let circle = radius * radius * 3.14;
//   console.log('円の面積は' + circle + 'です');
// }

// getArea();
// getArea();
// getArea();

// function getArea(radius) {
//   let circle = radius * radius * 3.14;
//   console.log('円の面積は' + circle + 'です');
// }

// getArea(5);
// getArea(6);
// getArea(10);

// function getArea(radius) {
//   let circle = radius * radius * 3.14;
//   return circle;
// }

// console.log('円の面積は' + getArea(5) + 'です');

// function getArea(radius) {
//   let circle = radius * radius * 3.14;
//   return circle;

//   console.log('ここはreturnよりも後ろの処理です。');
// }

// getArea(5);

// function define1() { // define1という名前の関数
//   return 'This is console in showConsole function1!';
// }

// const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
//   return 'This is console in showConsole function2!';
// }

// console.log(define1());
// console.log(define2());


// function doFunc(callback) {
//   console.log('doFuncが呼び出されました');
//   callback();
// }

// doFunc(function() {
//   console.log('コールバック関数が呼び出されました');
// });


// function doFunc(callback) {
//   console.log('doFuncが呼び出されました');
//   console.log(num);
//   callback();
// }

// function output(test) {
//   num = test + 3;
//   console.log('コールバック関数が呼び出されました', num);
//   return num;
// }

// doFunc(output(2));

// let John = {
//   name: 'John',  // key（キー）: value（バリュー）
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
//   sing: function() {
//     console.log('LA~LA~LA~~~♪');
//   }
// };

// console.log(John);

// John.sing();


// let round = Math.round(2.86); // 四捨五入
// console.log('round => ', round);

// let ceil = Math.ceil(4.05);   // 切り上げ
// console.log('ceil => ', ceil);

// let floor = Math.floor(4.98); // 切り下げ
// console.log('floor => ', floor);

// let random = Math.random(); // 0~1までの乱数の生成
// console.log('random => ', random);


// let val = 26;
// console.log(val >= 20);
// console.log(val === '26');
// console.log(val == '26');
// console.log('hello' === 'world');


// let myAge = 60;
// if (myAge >= 35) {
//   console.log('健康診断でバリウムを飲みます');
// } else if (myAge >= 20) {
//   console.log('お酒が飲めます');
// } else if (myAge >= 18) {
//   console.log('選挙権があります');
// }


// let numVal = 8;
// let strVal = 'text'

// console.log(numVal === 7 || strVal === 'text');


// let errMsg = undefined;

// errMsg ==  ? console.log('ない！') : console.log('ある！');


// for (let i = 0; i < 10; i++) {
//   console.log(i + '回目のコンソール');
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);