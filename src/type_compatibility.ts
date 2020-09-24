export {};

function func1(a: number, b: number | string) {
  const v1: number | string = a;
  const v2: number = b;
}
function func2(a: 1 | 2) {
  const v1: 1 | 3 = a;
  const v2: 1 | 2 | 3 = a;
}

interface Person {
  name: string;
}
interface Product {
  name: string;
  age: number;
}
const obj = { name: "mike", age: "23", city: "abc" };
let person: Person = obj;
let product: Product = obj; // Product의 age는 number 타입, obj의 age는 string 타입이라 에러 발생
product = person; // person의 값의 집합이 더 크기 때문에 더 작은 집합으로 넣을 수 없음
person = product; // product는 person보다 작기 때문에 큰 집합으로 넣을 수 있음
