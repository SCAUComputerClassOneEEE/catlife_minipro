var app = getApp();

module.exports = {
  detect,
  stopDetectInterval
}

var detectInterVal = undefined;
var isDetecting = false;
var tryClass = "";
var tryDetect = 0;
/**
 * 
 * @param {图片路径} data
 * @returns {识别结果} tryClass 
 */
function detect(data) {
  if (isDetecting) {
    return;
  }
  init();
  const upImagePath = data.path;
  isDetecting = true;
  wx.uploadFile({
    filePath: upImagePath,
    name: 'img',
    url: app.serverDomain + '/public/catDetect',
    header: {
      'content-type': 'multipart/form-data'
    },
    success: function(res) {
      if (res.status === 0) {
        // 得到taskUUID
        const uuid = res.data;
        // 开始定时任务
        detectInterVal = setInterval(
          function(){
            var stopOrNot = false;

            if (tryDetect > 9) {
              stopOrNot = true;
            }
            tryDetect ++;
            try {
              tryClass = detectClass(uuid);
              if (tryClass !== "") {
                // 识别成功
                stopOrNot = true;
              }
            } catch(error) {
              stopOrNot = true;
            }
            if (stopOrNot) {
              stopDetectInterval();
            }
          }, 1000
        )
      } else {
        wx.showToast({ title: '系统错误' });
      }
    },
    fail: function() {
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
      isDetecting = false;
      return tryClass;
    }
  })
}

function detectClass(uuid) {
  wx.request({
    url: app.serverDomain + '/public/detectClass?uuid=' + uuid,
    success: function(res) {
      return res.data;
    },
    fial: function() {
      throw new Error("服务器异常");
    }
  })
}

function init() {
  stopDetectInterval();
  detectInterVal = undefined;
  tryClass = "";
}

function stopDetectInterval() {
  if (detectInterVal !== undefined) {
    clearInterval(detectInterVal);
  }
  isDetecting = false;
}