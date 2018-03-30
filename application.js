let http = require('http');
class Application {
  /**
   * 构造函数
   */
  constructor() {
    this.callbackFunc;
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
         this.callbackFunc(req,res);
       }
     }
}
module.esports = Application;