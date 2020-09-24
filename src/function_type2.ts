export {};

function getParam(this: string, index: number): string {
  const params = this.split(",");
  if (index < 0 || params.length <= index) {
    return "";
  }
  return this.split(",")[index];
}

// String 내장 타입에 속성을 추가하고 싶을 때 인터페이스 이용
interface String {
  getParam(this: string, index: number): string;
}
String.prototype.getParam = getParam;
console.log("asdf, 1234, ok ".getParam(1));

interface Object {
  getShortKeys(this: object): string[];
}

Object.prototype.getShortKeys = function () {
  return Object.keys(this).filter((key) => key.length <= 3);
};

const obj = {
  a: 1,
  bb: 2,
  ccc: 3,
  dddd: 4,
};
console.log(obj.getShortKeys());
