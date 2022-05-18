const express = require('express');
const { arrayBuffer } = require('stream/consumers');
const app = express()
const port = 5500

// body-parser 설정 
var bodyParser = require('body-parser'); 
const { Console } = require('console');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const users = [
{
    id : 1,
    name : "Lee",
    email : "Lee@gmail.com",
    phonenumber : "123-456-789",
},
{
    id : 2,
    name : "Kim",
    email : "Kim@gmail.com",
    phonenumber : "654-213-5233",
},
{
    id : 3,
    name : "Sin",
    email : "Sin@gmail.com",
    phonenumber : "213-4532-3259",
},
];

app.get('/users', (req, res) => {
    // json으로 출력해줌
    res.json(users);
});

// 사용자가 접근하고 싶은 특정 유저 아이디
app.get('/users/:userId', (req, res) => {
    // res.json(users);
    // http://localhost:5500/users/2에서 { userId: '2' } 출력
    // req.params.userId로 접근가능
    // console.log(req.params)
    const user = users.find((user) => user.id === parseInt(req.params.userId));
    // res로 send나 json을 보내면 return과 같은 느낌인 듯
    if(!user){
        res.status(404).send("유저 아이디를 찾을 수가 없어요");
    }
    res.status(200).json(user);
});

app.post("/users", (req, res) =>{
    // req.body로 오는것은 id가 오지 않음
    // 서버내에 저장된 index는 서버쪽에서 임의로 저장
    const newUser = req.body;

    if(Object.keys(newUser).length === 0){
        res.status(400).send(`user에 관한 정보를 입력해주세요`);
    }else if(Object.keys(newUser).length <3){
        res.status(400).send(`user를 추가하기 위해 모든 정보를 입력해주세요`);
    }else{
        users.push({
            // id : users.length + 1, 이것보다는 삭제하고 추가하는데 id가 겹칠 수 있음
            id : users[users.length-1].id + 1,
            ...newUser
        });
    }
    
    res.json(users)
    // newUser의 키들만 뽑아서 배열로 만들어줌
});

// nodemon
// 수정은 PUT
// app.put("/users",(req,res)=>{
//     if(Object.keys(newUser).length === 0){
//         res.status(400).send(`user에 관한 정보를 입력해주세요`);
//     }else if(Object.keys(newUser).length <4){
//         res.status(400).send(`user를 수정하기 위해 모든 정보를 입력해주세요`);
//     }else{
//         // 인덱스 찾아서 고침
//         const userIdx = users.findIndex((user) => user.id === parseInt(newUser.id));
//         users[userIdx] = newUser;
//         res.status(200).json(users);        
//     }
// })

app.put("/users/:userId",(req,res)=>{
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.userId));
    if(userIndex == -1){
        res.status(400).send(`userId가 존재하지 않습니다.`);
    }
    users[userIndex] = {
        // 나머지 보존 users[userIndex]를 넣어놈
        ...users[userIndex],
        ...req.body
    }
    res.status(200).json(users);
})

app.patch("/users/:userId",(req,res)=>{
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.userId));
    if(userIndex == -1){
        res.status(400).send(`userId가 존재하지 않습니다.`);
    }
    users[userIndex].name = req.body.name
    res.status(200).json(users);
})

app.delete("/users/:userId",(req,res)=>{
    const userId = req.params.userId;
    const userIdx = users.findIndex((user) => user.id === parseInt(userId));
    console.log(userIdx)
    if(userIdx == -1){
        res.status(400).send(`userId가 존재하지 않습니다.`);
    }else{
        users.splice(userIdx,1);
        res.status(200).json(users);
    }
})


app.listen(port, () => {
  console.log(`서버가 실행되는 포트: ${port}`)
});