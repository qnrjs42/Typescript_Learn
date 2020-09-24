export {};

/*
    조건부 타입 (extends, ? 키워드 사용)

    입력된 제너릭 타입에 따라 타입을 결정

    T extends string ? 'yes' : 'no';
    제네릭으로 입력된 T가 string에 할당이 가능하면 'yes'라는 타입 사용, 그렇지 않으면 'no'라는 타입 사용
    여기서 중요한게 값이 아니라 타입이다

    type T4 = IsStringType<string | IsStringType<number>>;
    조건부 타입 T에 유니온 타입을 사용했을 때는
    각각의 타입을 조건부 타입에 적용한 다음에 다시 각각 유니온 타입으로 묶어준다
*/

type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string>; // string 할당이 가능해서 'yes'
type T2 = IsStringType<number>; // string 할당이 불가능해서 'no'

type T3 = IsStringType<string | number>; // 'yes' | 'no'
type T4 = IsStringType<string | IsStringType<number>>; //

/*
    type T5 = Array2<string | number>;
    string[] | number[] 타입이 아니라 (string | number)[]로 만들어진다
*/
type Array2<T> = Array<T>;
type T5 = Array2<string | number>;

/*
    타입스크립트에는 Exclude와 Extract가 내장된 타입이 있다
    두 타입 모두 조건부 타입으로 만들 수 있음

    Exclude
    type TT2 = Exclude<1 | 3 | 5 | 7, 1 | 5 | 9>;
    - 1은 1 | 5 | 9에 할당 가능하므로 1 제외
    - 3은 1 | 5 | 9에 할당이 불가능하므로 살림
    - 5는 1 | 5 | 9에 할당 가능하므로 5 제외
    - 7은 1 | 5 | 9에 할당 불가능하므로 살림
    결과는 TT2의 타입은 3 | 7

    type TT3 = Exclude<string | number | (() => void), Function>;
    Function에 할당 가능한 것이 제외될 것으로 세 번째 타입이 제거된다, 즉 string 또는 number만 남음
    결과는 TT3의 타입은 string | number

    Extract
    type TT4 = Extract<1 | 3 | 5 | 7, 1 | 5 | 9>;
    - 1은 1 | 5 | 9에 할당 가능하므로 살림
    - 3은 1 | 5 | 9에 할당이 불가능하므로 제외
    - 5는 1 | 5 | 9에 할당 가능하므로 살림
    - 7은 1 | 5 | 9에 할당 불가능하므로 제외
    결과는 TT4의 타입은 1 | 5
*/
type TT1 = number | string | never; // never는 union 타입에서 제거된다
type Exclude<T, U> = T extends U ? never : T; // T와 U를 입력받아서 T가 U에 할당 가능하면 never를 사용하고, 그렇지 않으면 T를 사용
type TT2 = Exclude<1 | 3 | 5 | 7, 1 | 5 | 9>;
type TT3 = Exclude<string | number | (() => void), Function>;
type Extract<T, U> = T extends U ? T : never; // T와 U를 입력받아서 T가 U에 할당 가능하면 T를 사용하고, 그렇지 않으면 제외
type TT4 = Extract<1 | 3 | 5 | 7, 1 | 5 | 9>;

/*
    타입스크립트에는 ReturnType이라는 내장 타입이 있다

    type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
    T가 함수일 때 T 함수의 반환 타입을 추출
    R은 함수의 반환 타입을 의미
*/
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type TTT1 = ReturnType<() => string>;
function f1(s: string): number {
  return s.length;
}
type TTT2 = ReturnType<typeof f1>; // f1의 함수는 number 타입을 반환하기 때문에 TTT2의 타입도 number가 된다

/*
    type Unpacked<T> = T extends (infer U)[] 
    type Unpacked<T> = T  입력된 T라는 타입이 
    extends (infer U)[] 어떤 값의 배열이면 (어떤 배열인지 아직 결정되지 않아 infer 키워드 사용)
    ? U 그 배열의 아이템(타입)을 사용하겠다
    : T extends (...args: any[]) => infer U 배열이 아니라면 T가 함수에 할당 가능한 타입이라면
    ? U 이 함수의 반환 타입을 사용
    : T extends Promise<infer U> T가 함수에 할당 가능한 타입이 아니라면  (Promise의 어떤 값인지는 아직 결정되지 않았기 때문에 infer 키워드 사용)
    ? U Promise의 값인 U를 사용
    : T 위에 세 조건들이 만족하지 않으면 T 자기 자신을 사용
*/
type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type TTTT0 = Unpacked<string>; // 3가지 조건 만족하지 않아 T 자기 자신을 사용해 string 타입
type TTTT1 = Unpacked<string[]>; // 첫 번째 조건에 따라 배열의 아이템인 string이 반환
type TTTT2 = Unpacked<() => string>; // 두 번째 조건에 따라 이 함수의 반환 타입인 string이 반환
type TTTT3 = Unpacked<Promise<string>>; // 세 번째 조건에 따라 Promise의 값인 string이 반환
type TTTT4 = Unpacked<Promise<string>[]>; // 첫 번째 조건에 따라 Promise의 배열이 되어 Promise 반환
type TTTT5 = Unpacked<Unpacked<Promise<string>[]>>; // Unpacked 두 번 사용했을 때 첫 번째는 배열 첫 번째 조건에 따라 Promise 반환, 두 번째는 세 번째 조건에 따라 string 반환
