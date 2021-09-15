// pages/myCat/myCat.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,          //猫咪框架代码data

    array: [{  
      img:"../pictures/americanShor.jpg",
      name:"大胖ppppppppppp"
    }, {
      img:"../pictures/Beautiful-Bombay-Cat-Face.jpg",
      name:"二胖pppppp"
    }, {
      img:"../pictures/tonkinese.jpg",
      name:"小胖ppppppppp"
    }],
    array1:[{
        img:"../pictures/americanShor.jpg",
        name:"大胖"
    }],
  },


  gotoCatDetail(event){
    wx.navigateTo({
      url: "../dailyRecord/oneCat/oneCat"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})