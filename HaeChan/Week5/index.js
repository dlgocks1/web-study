//돔으로 선택한 변수들을 구별하기위해 $작성 -> 우리들의 약속
const $div = document.querySelector('.container');

const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

//이벤트를 추가하는 방법 2가지

// 1. 이벤트 핸들러
// 콜백 함수는 중첩 불가능
//$div.onclick = handleClick;
// Arrow function
// $div.onclick = () => alert('container Clicked');
// function handleClick(){
//     console.log('container Clicked');
// }

// 2. addEventLsitener
// 이벤트 리스너는 리스너를 다는것이여서 중첩가능
//$div.addEventListener('click',()=>console.log('clicked'));
//$div.addEventListener('click',handleClick);
//$div.addEventListener('click',()=>alert('clicked'));

// function handleClick(){
//     console.log("clicekd");
// }

// 3. removeEventListener
// $div.removeEventListener('click',handleClick)

$div.addEventListener('click',handleClick);

//첫번째 매개변수는 무슨 이벤트인지 알려줌
function handleClick(e){
    console.log(e);
    console.log(e.target.innerText);
}

$input.addEventListener('change',handleChange);
function handleChange(e){
    //console.dir(e.target);
    //console.log(e.target.value);
}

//form의 경우 엔터나 서브밋을 클릭하면 새로고침됨
// $form.addEventListener('submit',handleSubmit);
// function handleSubmit(e){
//     //submit이벤트의 새로고침 막기
//     e.preventDefault();
//     const inputValue = $input.value;
//     console.log(inputValue);
//     $input.value = '';
// }   


$form.addEventListener('submit',(event)=>handleSubmit(event,$input.value));
function handleSubmit(e,inputValue){
    e.preventDefault();
    console.log(inputValue);
    $input.value = '';
}   