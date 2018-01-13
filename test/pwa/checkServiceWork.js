/**
 * 检查是否支持servoce worker
 */

funciton checkServiceWork(){
  if ('serviceWorker' in navigator) {
    // register service worker 注册service worker(告诉浏览器service worker脚本在哪)
    navigator.serviceWorker.register('/service-workwe.js', {scope: './'}) // 第二个参数 导航匹配
    .then(registration => {
      //注册成功；
      // registration对象存有对service worker所有生命周期的状态变更事件及一些父接口的方法
      // 状态：installing 、installed、 waiting、activing、 actived
      console.log('', registration.scope);
    }).catch(err => {

    });

  }
}
