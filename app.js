// app.js
App({
  onLaunch() {
    // wx.request({
    //   url: 'https://scaucatlife.xyz:8567/public/topIdentity?top=-1',
    //   success: function(data) {

    //   },
    //   fail: function() {
    //     wx.showLoading({
    //       title: '连接丢失',
    //       mask: true
    //     })
    //   }
    // })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    
  },
  globalData: {
    userInfo: null,
    serverDomain: 'https://scaucatlife.xyz:8657',
    topHotClasses: null
  }
})
