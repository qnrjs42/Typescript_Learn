export {};

// string 타입으로 반환
function getText(name: string, age: number): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}`;
}

const v1: string = getText("mike", 23); // 올바른 함수 사용
const v2: string = getText("mike", "23"); // 두 번째 파라미터가 string으로 타입 정의할 때 타입 에러
const v3: number = getText("mike", 23); // 변수는 number 타입이고 함수의 반환 타입이 string일 때 타입 에러

// 함수를 저장할 변수의 타입은 화살표 기호를 이용 => string
const getText2: (name: string, age: number) => string = function (name, age) {
  return "";
};

/*
    매개변수 이름 오른쪽에 물음표 기호는 선택 매개변수
    그러면 language?: string은 타입이 string일 수도 있고 undefined일 수도 있음
    -> 이걸 옵셔널 파라미터라고 한다

    매개변수 중간에 사용할 수 없고, 대체방법은
    language: string | undefined
    -> 하지만 함수를 실행할 때 전달한 매개변수를 정해줘야 한다 (가독성과 사용성이 떨어짐)

*/
function getText3(name: string, age: number, language?: string): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  const languageText = language ? language.substr(0, 10) : "";
  return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

getText3("mike", 23, "ko");
getText3("mike", 23);
getText3("mike", 23, 123);

/*
    language = "korean"
    - 타입을 정의하지 않아도 "korean"이 string이기 때문에 자동으로 string 타입이 정의 됨
*/
function getText4(name: string, age: number = 15, language = "korean"): string {
  return "";
}
console.log(getText4("mike")); // mike, 15, korean
console.log(getText4("mike", 23)); // mike, 23, korean
console.log(getText4("mike", 23, "english")); // mike, 23, english

/*
    rest 파라미터를 이용했을 때
*/
function getText5(name: string, ...rest: number[]): string {
  return "";
}

console.log(getText5("mike", 1, 2, 3)); // mike, 1, 2, 3
