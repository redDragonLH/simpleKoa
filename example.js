let simpleKoa = require('./application');
let app = new simpleKoa();
app.use((req,res)=>{
  res.writeHead(200);
  res.end('hello world');
});
app.listen(3000,()=>{
  console.log('3000')
})