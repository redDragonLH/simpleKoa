let simpleKoa = require('./src/application');
let app = new simpleKoa();


// ---------------------------------------------
let responseData = {};
app.use(async (ctx,next) => {
  responseData.name = 'tom';
  await next();
  ctx.body = responseData;
});
app.use(async (ctx,next) => {
  responseData.age = 16;
  await next();
});
app.use(async ctx =>{
  responseData.sex = 'male';
});


// -------------------------------------------------------------------------
// 对 ctx进行扩展
// app.context.echoData = function(errno = 0,data = null, errmsg = ''){
//   this.res.setHeader('Content-Type','application/json;charset=utf-8');
//   this.body = {
//     errno: errno,
//     data: data,
//     errmsg: errmsg
//   };
// };
// app.use(async ctx =>{
//   let data = {
//     name: ctx.query.name,
//     age: ctx.query.age,
//     sex: ctx.query.sex
//   }
//   // 这里使用扩展，方便的返回utf-8格式编码，带有 errno和errmsg的消息体
//   ctx.echoData(0,data,'success');
// })

// -------------------------------------------------------------------------
// app.use(async ctx =>{
//   ctx.body = 'hello ' + ctx.query.name
// })
app.listen(3000,()=>{
  console.log('3000')
})