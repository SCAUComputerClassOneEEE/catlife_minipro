module.exports = {
  bindTabChange
}
var app = getApp();

function bindTabChange(item) {
  // 当index不为0时，弹出登录申请。
  if (item.index !== 0) {
    sessionOnLogin();
  }
}

function sessionOnLogin() {
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
            onLogin();
          } else if (res.cancel) {
            wx.reLaunch({ // 跳转回index
              url: '/pages/index/index'
            })
          }
        }
      })
    }
  })
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
            sendData['userInfo'] = resUserInfo.userInfo;
            sendData['code'] = res.code;
            serverSessionRenew(sendData);
          },
          fail: function() {
            return;
          }
        })
      }
    },

    fail: function(res) {

    }
  })
}

function serverSessionRenew(sendData) {
  wx.request({
    // 发送用户信息给后端更新，顺便刷新redis session
    url: app.globalData.serverDomain + '/self/login',
    data: sendData,
    success: function(res) {
      // res 为返回的数据
    },
    fail: function (res) {

    }
  })
}
