//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    this.login();
  },
  login:function() {
    var that = this;
      wx.login({
        success: function(res){
          console.log(res);
          wx.getUserInfo({
            success: function(res){
              
            }
          })
        }
      })
  },


  decode:function(encryptedData, signature, iv) {
      encryptedData = atob(encryptedData);
      signature = atob(signature);
      console.log(encryptedData);
      console.log(signature);
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  globalData:{
    userInfo:null,
  },
  setGlobalData: function(data) {
    this.globalData = data;
  }
})