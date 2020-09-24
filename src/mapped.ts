export {};

/*
    mapped type은 Person 인터페이스를 optional로 바꾸거나 readonly로 바꿔주는 일을 함
*/

interface Person {
  name: string;
  age: number;
}

interface PersonOptional {
  name?: string;
  age?: number;
}
interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}

// mapped 타입을 이용한 코드
// 객체로 만듦, 대괄호는 key를 나타냄, in 키워드 사용
//'prop1' | 'prop2' 이 문자열이 이 전체 객체 타입의 속성으로 만들어짐
// K는 아무런 값
type T1 = { [K in "prop1" | "prop2"]: boolean };

/*
    [P in keyof T]: 'name' | 'age'를 key로 사용하겠다고 뜻 함 즉, Person의 모든 속성 이름을 나열
    원래는 name과 age는 string과 number만 가능했지만 ? 옵셔널을 통해 선택 속성이 된다

*/
type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;

/*
    type Readonly<T> = { readonly [P in keyof T]: T[P] };
    readonly [P in keyof T]: 모든 속성 이름을 나열, 그 모든 속성에 대해서 readonly를 부여
    T[P]: type T2 = Person["name"]; || 인터페이스에 속성 이름을 적어주면 그 속성의 값의 타입을 의미
    즉, 각 속성의 원래 값의 타입

    type Partial<T> = { [P in keyof T]?: T[P] };
    [P in keyof T]?: : 모든 속성을 선택 속성으로 만들고, 위와 동일하게 값의 타입은 변화를 주지 않음

    readonly와 partial은 타입스크립트에 내장되어 있어 타입을 지정하지 않아도 쓸 수 있다
*/
type T2 = Person["name"];
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type Partial<T> = { [P in keyof T]?: T[P] };
type T3 = Partial<Person>; // 모든 속성이 optional 속성
type T4 = Readonly<Person>; // 모든 속성이 readonly 속성

/*
    type Pick<T, K extends keyof T> = { [P in K]: T[P] };
    <T, K extends keyof T>: 두 개의 제너릭
    인터페이스 T를 입력
    T 인터페이스의 모든 속성을 나열, K는 keyof T에 할당 가능해야 한다

     [P in K]: 입력된 K 속성들로 이루어진 인터페이스를 만듦
     T[P]: 원래 값의 타입 사용
*/
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
interface Person2 {
  name: string;
  age: number;
  language: string;
}
type T5 = Pick<Person2, "name" | "language">; // T5는 name과 language만 선택 가능

/*
    문자열로 이루어진 K와 T를 입력

    [P in K]: K 속성들로 이루어진 인터페이스를 만듦
    [P in K]: T || T는 값의 타입
*/
interface Person3 {
  name: string;
  age: number;
  language: string;
}
type Record<K extends string, T> = { [P in K]: T };
type T6 = Record<"p1" | "p2", Person>; // T6는 p1과 p2는 Person으로 값의 타입 지정
type T7 = Record<"p1" | "p2", number>; // T6는 p1과 p2는 number로 값의 타입 지정

/*
    아래 코드는 Fruit이 변화가 있을 때 FRUIT_PRICE도 바꿔줘야 한다
    그런데 실수로 FRUIT_PRICE를 안 바꿔줄 때도 있는데 에러가 나지 않는다
    그래서 mapped를 사용
*/
enum Fruit {
  Apple,
  Banana,
  Orange,
  Orange2,
}
const FRUIT_PRICE = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 1500,
  [Fruit.Orange]: 2000,
};

/*
    [key in Fruit]: in으로 enum 타입을 작성 해주면 enum에 있는 모든 아이템을 나열 해줘야 함
    그래서 에러 표시가 확실히 난다

*/
enum Fruit2 {
  Apple,
  Banana,
  Orange,
}
const FRUIT_PRICE2: { [key in Fruit2]: number } = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 1500,
};
