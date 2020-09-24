export {};

interface Person {
  readonly name: string;
  age?: number;
}
const p1: Person = {
  name: "mike",
};
p1.name = "jone"; // Person 인터페이스의 name은 readonly라서 재할당할 수 없다

const p2 = {
  name: "mike",
  birthday: "1997-01-01",
};
const p3: Person = p2;

interface Person2 {
  readonly name: string;
  age: number;
  [key: string]: string | number; // key라는 속성 이름이 문자열인 모든 속성에서 값의 타입을 문자열 또는 숫자라고 정의
}

const pp1: Person2 = {
  name: "mike",
  birthday: "1997-01-01", // 이 속성은 [key: string]: string | number;에 영향을 받는다
  age: "25", // 이 속성은  age: number;에 영향을 받는다
};

interface YearPriceMap {
  [year: number]: number; // 이 number는 아래 코드에서 할당 가능해야 함 || 속성 이름은 문자열로 변환이 되서 취급되기 때문
  [year: string]: string | number;
}

const yearMap: YearPriceMap = {};
yearMap[1998] = 1000;
yearMap[1998] = "abc";
yearMap["2000"] = 1234;
yearMap["2000"] = "million";

// 이 코드는 아래에 type GetText로 정의한 것과 동일하다
interface GetText {
  (name: string, age: number): string;
}
// type GetText = (name: string, age: number) => string;
const getText: GetText = function (name, age) {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}`;
};

interface GetText2 {
  (name: string, age: number): string;
  totalCall?: number;
}

const getText2: GetText2 = function (name, age) {
  if (getText2.totalCall !== undefined) {
    getText2.totalCall += 1;
    console.log(`totalCall: ${getText2.totalCall}`);
  }
  return "";
};
getText2.totalCall = 0;
getText2("", 0);
getText2("", 0);

interface Person3 {
  name: string;
  age: number;
}
interface Product {
  name: string;
  price: number;
}
type PP = Person & Product; // & 교차 타입, 교집합, Person과 Product의 모든 속성 값을 포함
const pp: PP = {
  name: "a",
  age: 23,
  price: 1000,
};
