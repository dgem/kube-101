const app = require('express')();


app.get('/alive', (req, res)=>{
  console.log(`/alive invoked ${Date(Date.now())}`)
  res.send('OK');
});

app.get('/ready', (req, res)=>{
  console.log(`/ready invoked ${Date(Date.now())}`)
  res.send('OK');
});

app.get('*', (req, res)=>{
  out = "<html><h1>Hello Kubernetes</h1><p>The time now is: "+ Date(Date.now()).toString()+"</p></html>"
  res.send(out);
});

const port = process.env.PORT || 8080
app.listen(port, ()=>{
  console.log(`listening on ${port}`);
})
