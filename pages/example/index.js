const app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    loginInfo: {
      title: '微信授权',
      content: '获得您的公开信息(昵称、头像等)',
      logName: 'Gayhub',
      logImage: '../../images/logo.jpg',

    }
  },
  onShareAppMessage: function() {
    return {
      title: '登录弹框示例',
      path: '/pages/example/index',
      success: function(res) {}
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
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (this.data.angle !== angle) {
        this.setData({
          angle: angle
        });
      }
    });
  },
  isLog() { // 判断是否授权，已授权返回true/未授权返回false
    let userInfo = wx.getStorageSync('userInfo')
    console.log(userInfo);
    let dialogComponent = this.selectComponent('.wxc-dialog'); //获取登录组件的示例对象
    if (!userInfo) {
      dialogComponent && dialogComponent.show();
      return false;
    } else {
      this.setData({
        userInfo: userInfo
      })
      dialogComponent && dialogComponent.hide();
      return true;
    }
  },
  userHelp() { //当用户执行 需要授权的操作时 如未授权 在弹出授权框
    let isLog = this.isLog();
    if (isLog) {
      console.log('已授权，助力成功')
    } else {
      console.log("未授权，助力失败，请先授权！")
    }
  },
  onConfirm(e) { // 点击允许
    console.log("点击允许")
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
    console.log("点击拒绝")
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
  }
});