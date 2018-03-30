let http = require('http');
let context = require('./context');
let request = require('./request');
let response = require('./response');

class Application {
  /**
   * 构造函数
   */
  constructor() {
    this.callbackFunc;
    this.context = context;
    this.request = request;
    this.response = response;
  }
  
  /**
   * 开启 http server 并传入callback
   */
   listen(...args){
     let server = http.createServer(this.callback());
     server.listen(...args);
   }
   
   /**
    * 挂载回调函数
    * @param {function} fn 回调处理函数
    */
    use(fn) {
      this.callbackFunc = fn;
    }
    
    /**
     *  获取 http server 所需的 callback 函数
     *  @return {function} fn
     */
     callback (){
       return (req,res) =>{
         let ctx = this.createContext(req,res);
         let respond = () => this.responseBody(cxt)
         this.callbackFunc(ctx).then(respond);
       };
     }
/**
 * 构造 ctx 
 * @param {Object} req node req实例
 * @param {Object} res node res实例
 * @return {Object} ctx实例
 */
 
 createContext(req,res) {
   // 针对每个请求，都要创建 ctx 对象
   let ctx = Object.create(this.context);
   ctx.request = Object.create(this.request);
   ctx.response = Object.create(this.response);
   ctx.req = ctx.request.req = req;
   ctx.res = ctx.response.res = res;
   return ctx;
 }
 
 /**
  * 对客户端消息进行回复
  * @param {Object} ctx ctx实例 
  */
  responseBody(ctx){
    let content = ctx.body;
    if (typeof content === 'string') {
      ctx.res.end(content);
    }else if (typeof content === 'object'){
      ctx.res.end(JSON.stringify(content));
    }
  }
}
module.esports = Application;