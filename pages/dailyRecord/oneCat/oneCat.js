// pages/oneCat/oneCat.js
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    height:"",      //身高
    weight:"",      //体重
    molar:"",       //磨牙
    growAnother:"",
    catFoodG:"",    //猫粮（g）
    can:"",         //罐头
    catFood:"",     //猫粮勺
    milk:"",      
    dietAnother:"",
    bathe:"",       //洗澡
    insert:"",      //驱虫
    healthAnother:""
    },



  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },

  onChangeField(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },

  onChangeSlider(event) {
    wx.showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  },

  onChangeStepper(event) {
    console.log(event.detail);
  },

  onChangeRadio(event) {
    this.setData({
      radio: event.detail,
    });
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