const app = require('express')();


app.get('/alive', (req, res)=>{
  console.log(`/alive invoked ${Date(Date.now())}`)
  res.send('OK')
})

app.get('/ready', (req, res)=>{
  console.log(`/ready invoked ${Date(Date.now())}`)
  res.send('OK')
})

const port = process.env.PORT || 8080
app.listen(port, ()=>{
  console.log(`listening on ${port}`)
})
