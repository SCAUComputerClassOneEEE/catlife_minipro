// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    
  },
  globalData: {
    userInfo: null,
    serverDomain: 'https://scaucatlife.xyz:8567'
  }
})
