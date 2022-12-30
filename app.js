const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

app.get('/querystring', (req, res) => {
  res.send('쿼리스트링')
  console.log(req.query.id) 
  // 쿼리에 있는 오브젝트 id값을 가져와라

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
