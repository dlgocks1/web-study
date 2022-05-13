

const result = [];

//fetch("https://jsonplaceholder.typicode.com/users")
//.then(response => response.json())
//.then(data => data.map(item => result.push(item.name)))
//.catch(error => console.log(error));

//console.log(result);

const dataFetch = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await  response.json();

    return data
}

const dataResult = dataFetch();


//2.axios

axios.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data.data))