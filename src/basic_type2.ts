export {};

let v1: undefined = undefined;
let v2: null = null;
v1 = 123;

let v3: number | undefined = undefined;
v3 = 123;

console.log("typeof undefined =>", typeof undefined);
console.log("typeof null =>", typeof null);

let v1: 10 | 20 | 30; // 10, 20, 30 중 하나만 할당 가능
v1 = 10;
v1 = 15;

let v2: "경찰관" | "소방관"; // 경찰관, 소방관 중 하나만 할당 가능
v2 = "의사";

let value: any; // 아무 타이빙나 할당 가능
value = 123;
value = "456";
value = () => {};

// 아무 값도 반환하지 않고 종료되는 함수: void
function f1(): void {
  console.log("hello");
}
// 항상 예외 발생하여 비정상적으로 종료되는 함수: never
function f2(): never {
  throw new Error("some error");
}
// 무한루프 때문에 종료되지 않는 함수: never
// 보통 never는 사용하지 않음
function f3(): never {
  while (true) {}
}

let v: object; // 객체의 타입 object
v = { nanme: "abc" };
console.log(v.prop1); // 객체의 속성에 대한 정보가 없으므로 특정 속성 접근 시 타입 에러

let v_1: (1 | 3 | 5) & (3 | 5 | 7); // union 타입과 intersection 타입을 이용해서 여러 타입의 교집합과 합집합을 표현
v_1 = 3; // 3 입력 가능
v_1 = 1; // 1은 에러

type Width = number | string; // type 키워드를 이용해 타입에 별칭 할당
let width: Width;
width = 100;
width = "100px";
