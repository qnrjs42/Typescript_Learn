function Counter() {
  this.value = 0;
  // 화살표 함수의 this는 함수가 생성될 때 당시의 this를 가리킴
  this.add = (amount) => {
    this.value += amount;
  };
}
const counter = new Counter(); // new 키워드를 이용해 호출하면 Counter에서 사용된 this는 counter 객체를 가리킴
console.log(counter.value); // 0
counter.add(5);
console.log(counter.value); // 5
const add = counter.add;
add(5);
console.log(counter.value); // 10

function Counter2() {
  this.value = 0;
  // 일반 함수의 this는 이 함수를 호출한 주체를 가리킴
  this.add = function (amount) {
    this.value += amount;
  };
}
const counter2 = new Counter2();
console.log(counter2.value); // 0
counter2.add(5); // counter2가 add 함수를 호출한 주체
console.log(counter2.value); // 5
const add2 = counter2.add;
add2(5); // 이 함수가 호출할 때  Counter2의 this가 가리키는게 counter2가 아님
console.log(counter2.value); // 5
