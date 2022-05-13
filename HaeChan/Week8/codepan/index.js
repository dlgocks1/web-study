// 브라우저와의 통신을 할 때 사용하는 것
// fetch axios

// 데이터 통신은 비동기로 이루어짐
// 1. fetch : fetch(url, options)

const result = [];

// fetch("https://jsonplaceholder.typicode.com/users")
// // 받아온 값은 Promise형태이기 때문에 JSON으로 변환
// .then(res => res.json())
// .then(data => {
//     data.map(item =>
//         result.push(item)
//         )})
// .catch(error => console.log(error))

// console.log(result);

// async await을 사용해 받아오기
// const datafetch = async() =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     return data
// }

// const dataResult = datafetch();
// console.log(dataResult);
// dataResult.then(
//     it => console.log(it)
// )

// 2. axios 
{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> HTML내에 추가 */}
axios.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data.data))

// const datafetch = async() =>{
//     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//     // Promise 객체가 리턴됨
//     return res;
// }

// const dataResult = datafetch();

// // Promise임으로 then으로 사후처리
// dataResult.then(
//     data => console.log(data)
// )

