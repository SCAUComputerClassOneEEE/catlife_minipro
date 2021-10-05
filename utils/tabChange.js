module.exports = {
  bindTabChange
}
var app = getApp();

var serverLogining = false;

function bindTabChange(item) {
  if (serverLogining) {
    return;
  }
  // 当index不为0时，弹出登录申请。
  serverLogining = true;

  if (item.index !== 0) {
    wx.checkSession({
      success: (res) => {
        // 登录会话中
      },
      fail: function () {
        // 非登录会话中
        wx.showModal({
          title: '提示',
          content: '会话过期，请重新授权',
          success: res => {
            if (res.confirm) {
              // 选择确认
              onLogin();
            } else if (res.cancel) {
              // 选择取消
              wx.reLaunch({ // 跳转回index
                url: '/pages/index/index'
              })
            }
          }
        })
      },
      complete: function() {
        serverLogining = false;
      }
    })
  }
}

/**
 * 获得用户授权之后调用
 * 更新数据库的用户信息
 */
function onLogin() {
  wx.login({
    success: function(res) {
      if(res.code) {
        var sendData = {};
        wx.getUserInfo({
          success: function(resUserInfo) {
            // 得到用户的信息
            app.userInfo = resUserInfo.userInfo;
            sendData['encryptedData'] = resUserInfo.encryptedData;
            sendData['code'] = res.code;
            sendData['iv'] = resUserInfo.iv;
            wx.showLoading({
              title: '登陆中'
            })
            wx.request({
              // 发送用户信息给后端更新，顺便刷新redis session
              url: app.globalData.serverDomain + '/self/login',
              data: sendData,
              success: function(res) {
                // res 为返回的数据
                if (res.status === 0) {
                  wx.setStorageSync('catOwner', res.data);
                } else {
                  wx.showToast({ title: '系统错误' });
                }
              },
              fail: function () {
                wx.showToast({
                  title: '服务掉线' ,
                  duration: 2000,
                  success: function() {
                    setTimeout(function () {
                      //要延时执行的代码
                      wx.reLaunch({ // 跳转回index
                        url: '/pages/index/index'
                      })
                    }, 2000) //延迟时间
                  }
              });
              },
              complete: function() {
                wx.hideLoading();
              }
            })
          },
          fail: function() {
            return;
          }
        })
      }
    },

    fail: function(res) {
      wx.reLaunch({ // 跳转回index
        url: '/pages/index/index'
      })
    }
  })
}