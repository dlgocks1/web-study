핵심 키워드 🎯
JavaScript
ES6
JavaScript 문법
선언, 변수, 조건문, 반복문, 함수, 배열
체크리스트✅
변수, 자료형

 const : 상수값으로 선언시 변수를 변경할 수 없음
 let : 처음 변수를 선언
 string : 문자열에 해당 ex)"Hello"
 boolean : 참,거짓 값에 해당 ,True, False
 undefined : 값이 정해지지 않은값, 선언할때 쓰임
 null : 값이 '비었다' 는 뜻
배열

 push : 배열의 마지막에 원소 추가
 unshift : 배열 맨 앞부분에 원소 추가
 splice : 배열을 부분적으로 파라미터로 지정하여 삭제등의 작업
 pop : 배열의 맨 뒷부분값을 출력, 반환 하고 삭제
 shift : 배열의 맨 앞부분을 반환하고 삭제
객체

 배열과 객체의 차이 : 배열은 같은 종류의 원소들, 객체는 각기 다른 타입의 원소들 존재 가능
 생성자 함수 : 객체를 말 그대로 생성해주는 역할 원소값을 추가하거나 변경,가능
함수
- [ ] function : 함수를 통해 여러 실행 줄을 하나의 묶음으로 표현 가능
- [ ] arrow function :화살표 함수 표현(arrow function expression)은 전통적인 함수표현(function)의 간편한 대안입니다. 하지만, 화살표 함수는 몇 가지 제한점이 있고 모든 상황에 사용할 수는 없습니다.


조건문

 if문이 거짓으로 판단하는 값 : null,Nan
 삼항연산자 : if else 문을 간단히 한 구문,
"if 조건 ? 참값 : 거짓값; "형식
 if, else if, else문과 switch문의 차이 :
if,else문은 구문 조건을 순차적으로 전체 실행, switch는 해당 케이스에 해당하는 조건문만 실행하고 break등으로 분기
반복문

 for문과 while문을 사용하여 아래 배열의 index값들을 각 10씩 더한 반복문

const numArr = [77, 81, 12, 34, 51, 20];
for(let i = 0; i<6;i++){
	numArr[i]+=10
}
