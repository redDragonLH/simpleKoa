let proto = {}；

// 为proto 名为property 的属性设置setter
function delegatSet(property,name){
  proto._defineSetter_(name,function(val){
    this[property][name] = val;
  });
}

// 为 proto名为property 的属性设置gettet
function delegatGet(property,name){
  proto._defineGetter_(name,function(){
    return this[property][name];
  });
}

// 定义 request 中要代理的 settet 和 getter
let requestSet = [];
let requestGet = ['query'];

// 定义 response  中要代理的setter和 getter
let responseSet = ['body','status'];
let responseGet = responseSet;

requestSet.forEach(ele => {
  delegatSet('request',ele);
});
requestGet.forEach(ele => {
    delegateGet('request', ele);
});
responseSet.forEach(ele => {
    delegateSet('response', ele);
});
responseGet.forEach(ele => {
    delegateGet('response', ele);
});

module.exports = proto;