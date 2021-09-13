// pages/myPage/myFollow/myFollow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    followList:[{
      headPortrait:"../../pictures/3.png",      //头像
      userName:"用户名11111111",        //用户名
    },
    {
      headPortrait:"../../pictures/Beautiful-Bombay-Cat-Face.jpg",      //头像
      userName:"用户名22222",        //用户名
    },
    {
      headPortrait:"../../pictures/egyptian-mau-cat-facts4.jpg",      //头像
      userName:"用户名333333333333",        //用户名
    },
    {
      headPortrait:"../../pictures/havana.jpg",      //头像
      userName:"用户名444",        //用户名
    }]
  },
  
 



//取消关注部分的js代码：showModal  hideModal
showModal(e) {
  this.setData({
    modalName: e.currentTarget.dataset.target
  })
},

hideModal(e) {
  this.setData({
    modalName: null
  })
},


DateChange(e) {
  this.setData({
    date: e.detail.value
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