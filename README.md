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
![](https://upload-images.jianshu.io/upload_images/7072486-70ad5a236b2de8c1.png)

![](https://img2018.cnblogs.com/blog/978478/201811/978478-20181107153652374-286032442.png)
 
![](https://img2018.cnblogs.com/blog/978478/201811/978478-20181107153805097-53526742.png)


 
