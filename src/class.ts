export {};

class Person {
  name: string;
  age: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("안녕하세요");
  }
}

class Person2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  }
}

class Programmer extends Person2 {
  // 자식 클래스에서 constructor를 작성할 때 반드시 super를 호출 해줘야 한다
  constructor(name: string) {
    super(name);
  }
  // Programmer 객체가 만들어지고, sayHello 메소드는 부모의 메소드를 오버라이딩 된다.
  sayHello() {
    super.sayHello(); // 부모 메소드 호출
    console.log("저는 프로그래머 입니다.");
  }
}

class Docter extends Person2 {
  constructor(name: string) {
    super(name);
  }
  sayHello() {
    super.sayHello();
    console.log("저는 의사 입니다.");
  }
}
const programmer = new Programmer("홍길동");
programmer.sayHello();

/*
    public: 외부와 상속받는쪽 모두 노출
    protected: 상속받는 쪽만 노출
    private: 외부와 상속 노출 금지
*/

class Person3 {
  //   public age: number;
  //   constructor(public name: string, age: number) {
  //     this.age = age;
  //   }

  constructor(public name: string, public age: number) {} // 위의 코드와 동일하다
}
const person3 = new Person3("홍길동", 23);
console.log(person3.name, person3.age);
