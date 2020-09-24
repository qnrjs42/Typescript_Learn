export {};

const size: number = 123; // number 타입
const isBig: boolean = size >= 100; // boolean 타입
const msg: string = isBig ? "크다" : "작다"; // string 타입

const values: number[] = [1, 2, 3]; // number 배열 타입
const values2: Array<number> = [1, 2, 3]; // number 배열 타입
values.push("a"); // number 배열타입에 string 타입 push 불가

const data: [string, number] = [msg, size]; // 첫 번째 엘리먼트 string 타입, 두 번째 엘리먼트 number 타입
data[0].substr(1); // 첫 번째 엘리먼트는 string 타입으로 substr 메소드 사용 가능
data[1].substr(1); // 두 번째 엘리먼트는 number 타입으로 substr 메소드 사용 불가

console.log("typeof 123 =>", typeof 123); // 123의 타입 확인 || number
console.log('typeof "abc =>', typeof "abc"); // 'abc'의 타입 확인 || string
console.log("typeof [1, 2, 3] =>", typeof [1, 2, 3]); // [1, 2, 3]의 타입 확인 || string[]
