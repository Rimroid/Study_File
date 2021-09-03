// IF 조건문
// var a = 20;
// var b = 40;
// var c = 60;

/*
if(a > b) {
    console.log("a는 b보다 작다.");
}
*/

// else
/*
if (a > b) {
    console.log("a는 b보다 크다.");
} else {
    console.log("a는 b보다 작다.");
}
*/


// else if
/*
if(a > b) {
    console.log("a는 b보다 크다.");
} else if(b > c ) {
    console.log("b는 c보다 크다.");
} else if(a < c) {
    console.log("a는 c보다 작다.");
} else if(b < c) {
    console.log("b는 c보다 작다.");
} else {
    console.log("모든 조건을 만족하지 않는다.");
}
*/


// 중첩 if문
/*
if(a !== b) {

    if(a > b) {
        console.log("a는 b보다 크다.");
    } else {
        console.log("a는 b보다 작다.");
    }

} else {
    console.log("a와 b는 같다.");
}
*/


// 거짓이 되는 상황
// false, ' ' & " ", 0, null, undefined
/*
if(undefined) {
    console.log("참!!!");
} else {
    console.log("거짓!!!");
}
*/


// 삼항 연산자
/*
var age = 15;

if(age >= 18) {
    console.log("성인");    
} else {
    console.log("어린이");
}


var result = (age >= 18) ? "성인" : "어린이";
console.log(result);
*/


// 조건문 응용

/*
var userID = prompt("아이디를 입력해 주세요.");
var userPW = prompt("비밀번호를 입력해 주세요.");
*/

// console.log(userID);
// console.log(userPW);

/*
if(userID === "Chaeeop" && parseInt(userPW) === 12345) {
    alert("로그인되었습니다.");
} else {
    alert("아이디 또는 비밀번호가 틀렸습니다.")
}
*/


// 전역변수, 지역변수
/*
var globalV = "전역변수";

function func() {
    var localV = "지역변수";

    console.log(globalV);
    console.log(localV);
}

// func();

console.log(globalV);
console.log(localV);
*/


// 변수 만들 시 주의점
/*
var gv = "전역변수";

function func() {
    var gv = "지역변수";
    console.log(gv);
}

func();

console.log(gv);
*/

/*
var gv = "전역변수";

if(true) {
    var lv = "지역변수???";

    // console.log(gv);
    // console.log(lv);
}

console.log(gv);
console.log(lv);
*/


// 전역변수를 조금 더 간편하게 확인하는 방법

// var gv = "전역변수";

/*
function a() {
    console.log("a");
}
*/


// 스코프
// 전역 스코프
/*
var gv = "전역변수";

function func() {
    console.log(gv);
}

func();

console.log(gv);
*/


// 지역 스코프
/*
function func() {
    var lv = "지역변수";
    console.log(lv);
}

func();

console.log(lv);
*/


// 렉시컬 스코핑(Lexical scoping)
// 함수는 서로의 스코프에 접근할 수 없다!!!!
/*
function a() {
    var apple = "사과";
}

function b() {
    a();
    console.log(apple);    
}

b();
*/


// 스코프 체인
/*
var a = 10;

function func1() {

    var b = 20;

    function func2() {
        var c = 30;

        console.log(a + b + c);
    }

    func2();

}

func1();
*/


// 렉시컬 스코핑(Lexical scoping)
/*
var name = "Chaeeop";

function func1() {
    console.log(name);
}

function func2() {
    var name = "Rim";

    func1();  // console.log(name) (x)
}

func2();
*/


// 호이스팅
// 변수 호이스팅
/*
console.log(a);

var a;
a = "나는 A다.";

console.log(a);


console.log(b);

var b = "나는 B다";

console.log(b);
*/


// 함수 호이스팅

/*
function func1() {
    console.log("Func1 함수다.");
}
*/
/*
func1();

function func1() {
    console.log("Func1 함수다.");
}
*/
// func1();


// var func2 = undefined;
/*
func2();

var func2 = function () {
    console.log("Func2 함수다");
}

// func2();
*/



// Math
// console.log(Math);
/*
var num1 = Math.abs(-3);
console.log(num1);

var num2 = Math.ceil(0.3);
console.log(num2);

var num3 = Math.floor(10.9);
console.log(num3);

var num4 = Math.random();
console.log(num4);
*/


// parseInt() - 정수형, parseFloat() - 실수형
// String -> Number
/*
var str1 = "20.6";
var str2 = "3.14";

console.log(typeof str1);
console.log(typeof str2);


var num1 = parseInt(str1);
var num2 = parseFloat(str2);

console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);
*/


// 반복문
// 고정값 : console.log(2 * );
// 일정한 규칙을 갖고 있는 가변값  : 1, 2, 3, 4, 5, 6, 7, 8, 9
/*
console.log(2 * 1);
console.log(2 * 2);
console.log(2 * 3);
console.log(2 * 4);
console.log(2 * 5);
console.log(2 * 6);
console.log(2 * 7);
console.log(2 * 8);
console.log(2 * 9);
*/

//while
/*
var num = 1; // 2, 3, 4 ... 10

while (num < 10) {
    // 2 * 1 = 2
    // 2 * 2 = 4 ...
    // 2 * 9 = 18
    // num = 10이 되면 반복문 종료
    console.log(2 * num);
    num++;
}

console.log("반복문 종료");
*/


// do ~ while
/*
var i = 12;

do {
    console.log(i);
    i++;    
} while (i < 10);
*/


// 고정값
// 일정한 규칙을 갖고 있는 가변값
// for
/*
for (var i = 1; i < 10; i++) {
    console.log(3 * i);
}
*/


// 중첩 반복문
// 중첩 for

// 2단 ~ 9단
/*
for (i = 2; i < 10; i++) {
    for(j = 1; j < 10; j++) {
        console.log( i * j);
    }
}
*/


// break, continue
/*
for (var i = 1; i < 10; i++) {
    
    if(i === 5) {
        break;
    }

    console.log(2 * i);
}
*/
/*
for (var i = 1; i < 10; i++) {
    
    if(i === 5) {
        continue;
    }

    console.log(3 * i);
}
*/

/*
var arr = ['바나나', '사과', '수박', '포도', '배'];
console.log(arr);
console.log(arr.length);

// 고정값 console.log(arr[]);
// 가변값 : 0, 1, 2

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
*/


// for ~ in
/*
var arr = ['바나나', '사과', '수박', '포도', '배'];

for (var i in arr) {
    console.log(i);
    console.log(arr[i]);
}
*/


// arr.forEach()
// 익명함수, 콜백함수를 사용함
/*
var arr = ['야구', '축구', '농구', '배구'];

arr.forEach(function(element, index) {
    console.log(element);
    console.log(index);
})
*/


// arr.map()

// var arr = ['기타', '드럼', '베이스', '보컬'];
/*
arr.map(function(element, index) {
    console.log(element);
    console.log(index);
})
*/
/*
var result = arr.map(function(element, index) {
    return element + " " + "10";    
})

console.log(result);
*/


// 객체에서 활용할 수 있는 반복문

