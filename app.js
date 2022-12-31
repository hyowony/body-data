const express = require('express');

const app = express();
const port = 3000;
const testjson = require('./test/test.json')

app.use(express.json())
app.use(express.urlencoded({extended:false}))


//json으로 데이터 보내기 연습, test 폴더안에 test.json의 데이터가 서버를 실행시켯을 때 호출되는 것은 확인했으나, url에서 자료를 변경하는 것은 잘 안 되었다.

app.get('/test', (req,res)=> {
  testjson.t=(req,res)=> 
    testjson.t=req.query.t
    res.json(testjson)
  
})

/// 민석님 폼 데이터 활용 코드 html 파일 버튼을 만들어서 전송했을 때 내가 입력한 데이터가 그대로 적용된 것을 확인하였다. 

app.get("/", (req,res) => {
  res.send('<form action="/" enctype="multiaprt/form-data" method="post"><input name="id"/><button  type="submit">전송</button></form>')
})

app.post("/", (req,res) => {
  const id = req.body.id
  res.send(id)
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