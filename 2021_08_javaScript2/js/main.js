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


// 함수는 서로의 스코프에 접근할 수 없다!!!!