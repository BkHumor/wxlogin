const app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    loginInfo:{
      title:'微信授权',
      content:'获得您的公开信息(昵称、头像等)',
      logName:'Gayhub',
      logImage:'../../images/logo.jpg',
      
    }
  },
  onShareAppMessage: function () {
    return {
      title: '登录弹框示例',
      path: '/pages/example/index',
      success: function (res) {
      }
    }
  },
  goToIndex() {
    wx.redirectTo({
      url: '../list/index',
    });
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: `登录弹框示例`
    })
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange((res) => {
      let angle = -(res.x * 30).toFixed(1);
      if (angle > 14) { angle = 14; }
      else if (angle < -14) { angle = -14; }
      if (this.data.angle !== angle) {
        this.setData({
          angle: angle
        });
      }
    });
  },
  onShow() {
    let userInfo = wx.getStorageSync('userInfo')
    console.log(userInfo);
    let dialogComponent = this.selectComponent('.wxc-dialog');
    if (!userInfo) {
      dialogComponent && dialogComponent.show();
    } else {
      this.setData({
        userInfo: userInfo
      })
      dialogComponent && dialogComponent.hide();
    }
  },
  onConfirm(e) { // 点击允许
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
    let userInfo = JSON.parse(e.detail.detail.rawData)
    if (!userInfo) {
      return;
    }
    this.setData({
      userInfo: userInfo
    })
    wx.setStorageSync('userInfo', userInfo)
  },
  onCancel() { // 点击拒绝
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
  }
});