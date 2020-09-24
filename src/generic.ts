import { identity } from "lodash";

export {};
/*
    generic은 타입 정보가 동적으로 결정되는 타입

    함수 오른쪽에 <>를 이용
*/

function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];

function makeArray(
  defaultValue: number | string,
  size: number | string
): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}
const arr1 = makeArray(1, 10);
const arr2 = makeArray("empty", 10);

function makeArray2<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}
// const arr3 = makeArray2<number>(1, 10);
// const arr4 = makeArray2<string>("empty", 10);

const arr3 = makeArray2(1, 10); // 위의 코드와 동일하게 적용된다
const arr4 = makeArray2("empty", 10);
const arr5 = makeArray2(true, 10);

function indentity<T extends number | string>(p1: T): T {
  return p1;
}
identity(1);
identity("a");
identity([]); // indentity 타입은 number나 string 타입만 적용 가능하므로 에러

interface Person {
  name: string;
  age: number;
}
interface Korean extends Person {
  liveInSeoul: boolean;
}
// T extends Person는 T가 Person에 할당 가능해야 함
// K extends keyof Person는 K가 "name" | "age"에 할당 가능한 값이어야 함
function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K // name이나 age를 입력 가능
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길동",
  age: 23,
  liveInSeoul: true,
};

const p2: Korean = {
  name: "김삿갓",
  age: 31,
  liveInSeoul: false,
};
swapProperty(p1, p2, "age");
swapProperty(p1, p2, "age1"); // 입력 불가

interface Product {
  name: string;
  price: number;
}
const p3: Product = {
  name: "시계",
  price: 1000,
};
const p4: Product = {
  name: "자전거",
  price: 2000,
};
swapProperty(p3, p4, "name"); // 타입 정의가 맞지 않아 에러
