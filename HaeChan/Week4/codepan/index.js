const $body = document.getElementsByTagName('body');
let $container = document.getElementsByTagName('container');
const $title = document.getElementById('title');
const $cityList = document.getElementById('cityList');
//const $citys = document.getElementsByTagName('li');
//쿼리 설렉터는 조건을 만족하는 제일 앞에있는것 하나 선택
//const $citys = document.querySelector('li');
//유사배열, 노드리스트로 받아옴
//html collection은 forEach 지원 X
//노드리스트는 forEach 지원
let $citys = document.querySelectorAll('li');


console.log($body);
console.log($container[0]);
console.log($title);
console.log($cityList);
console.log($citys);

//map은 타켓이 배열일 때만 사용가능

$citys.forEach(city => console.log(city.innerText));

// spread operator, Array.from 배열로 유사배열을 배열로 전환

let newCities = [...$citys]
console.log(newCities)
newCities.map(city => console.log(city.innerText));

newCities = Array.from($citys);
newCities.map(city => console.log(city.innerText));

//자바스크립트에서의 스타일변환
//body는 태그네임으로 선택 -> 유사배열
$body[0].style.backgroundColor = 'teal';
let $cityDiv = document.querySelector('#cityList');
$cityDiv.style.color = 'gray'

//태그, 요소 추가하기
let worstCity = document.createElement('ul');
const worstCityArr = ["카이로","런던","리스본","시드니"];

worstCityArr.map(city => {
  const worstCityItem = document.createElement('li');
  worstCityItem.innerText = city;
  console.log(worstCityItem);
  worstCity.appendChild(worstCityItem);
})

$cityDiv = document.querySelector('.city');
$cityDiv.appendChild(worstCity);

$container = document.getElementsByClassName('container');
const worstCityDiv = document.createElement('div');
const worstCitySubTitle = document.createElement("h2");

worstCitySubTitle.innerText = "< Worst 5 > ";
worstCityDiv.appendChild(worstCitySubTitle);
worstCityDiv.appendChild(worstCity);

$container[0].appendChild(worstCityDiv);

//클래스 추가
worstCityDiv.classList.add("city");
worstCityDiv.classList.remove("city");

//속성추가
worstCityDiv.setAttribute('name','worstCity');
console.log(worstCityDiv);

//다른방법
// worstCityList = "<ul><li>카이로</li><li>런던</li></ul>";
      
// $cityDiv.insertAdjacentHTML('beforeend',worstCityList);



