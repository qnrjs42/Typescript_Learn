export {};

/*
    enum은 javascript에 없고 typescript에만 있는 타입
*/

enum Fruit {
  Apple,
  Banana,
  Orange,
}
const v1: Fruit = Fruit.Apple; // Fruit으로 타입 정의
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana; // Fruit가 아닌 Apple과 Banana로 타입 정의

/*
    enum의 첫 번째 원소에 값을 할당하지 않으면 자동으로 0이 할당

    euum의 각 원소에는 숫자 또는 문자열 할당 가능
    명시적으로 값을 입력하지 않으면, 이전 원소에서 1만큼 증가한 값이 할당

    enum의 각 원소는 이름과 값이 양방향으로 맵핑
*/
enum Fruit2 {
  Apple,
  Banana = 5,
  Orange,
}

console.log(Fruit2.Apple, Fruit2.Banana, Fruit.Orange); // 0, 5, 6

console.log(Fruit2.Banana); // 5
console.log(Fruit2["Banana"]); // 5
console.log(Fruit2[5]); // Banana

/*
    enum의 원소에 문자열을 할당하는 경우에는 단방향으로만 맵핑
*/
enum Language {
  Korean = "ko",
  English = "en",
  Japanese = "jp",
}

/*
    enum을 사용하면 컴파일 후에도 enum 객체가 남아있어 번들 파일의 크기가 불필요하게 커질 수 있다
    enum 객체에 접근하지 않는다면 굳이 컴파일 후에 객체로 남겨 놓을 필요가 없다.
    
    const eunm은 컴파일 후에 객체를 남기지 않으므로 번들 파일의 크기를 줄일 수 있다
*/

const enum Fruit3 {
  Apple,
  Banana,
  Orange,
}
const fruit3: Fruit3 = Fruit3.Apple;

const enum Language2 {
  Korean = "ko",
  English = "en",
  Japanese = "jp",
}
const lang: Language2 = Language2.Korean;
