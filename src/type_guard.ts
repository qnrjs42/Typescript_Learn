export {};

/*
    타입 가드
    자동으로 타입의 범위를 좁혀 주는 타입스크립트 기능


*/
// 타입 이용
function print(value: number | string) {
  if (typeof value === "number") {
    console.log((value as number).toFixed(2));
  } else {
    console.log((value as string).trim());
  }
}

interface Person {
  type: "a";
  name: string;
  age: number;
}

interface Product {
  type: "b";
  name: string;
  price: number;
}

// interface 속성 이용
function print2(value: Person | Product) {
  switch (value.type) {
    case "a":
      console.log(value.age);
      break;
    case "b":
      console.log(value.price);
      break;
  }
}

// in 키워드 이용
function print3(value: Person | Product) {
  if ("age" in value) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
