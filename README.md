## 微信小程序授权登录弹框

微信小程序登录框
1.安装方法：

```
git clone https://github.com/BkHumor/wxlogin.git
```
2.使用方法：

（1）在所需页面的JSON文件中引入登录框组件：

```
{
  "component": true,
  "usingComponents": {
    "wxc-dialog": "/components/dialog/dialog"
  }
}
```
（2）修改登录提示信息。

```
loginInfo:{
      title:'微信授权',
      content:'获得您的公开信息(昵称、头像等)',
      logName:'Gayhub',
      logImage:'../../images/logo.jpg',
    }
```

可以参考example


3.图片示例:

(1)进入首页自动调用
 ![](https://bbs.pediy.com/upload/attach/201811/741716_3RGDWSYZJZV97E9.png)


(2)点击允许后
 ![](https://bbs.pediy.com/upload/attach/201811/741716_BD5WB763NQDZYSY.png)
