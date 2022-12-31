const express = require('express');

const app = express();
const port = 3000;
const testjson = require('./test/test.json')

//json으로 데이터 보내기 연습 
app.get('/test', (req,res)=> {
  testjson.t=(req,res)=> 
    testjson.t=req.query.t
    res.json(testjson)
  
})

app.get('/querystring', (req, res) => {
  const id = req.query.id
  const password = req.query.password
  

})

app.post('/body-formdate', (req, res) => {
  res.send('폼데이터입니다')
})
///
app.post('/body-multipart', (req, res) => {
  res.send('멀티파트입니다')
})

app.post('/body-json', (req, res) => {
  res.send('바디 제이슨입니다.')
})

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});