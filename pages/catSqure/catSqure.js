// pages/catSqure/catSqure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    TabCur: 0,
    scrollLeft:0,
    */
   userName:"凯尔",                 //用户id
   postTime:"",                 //发布时间
   headPortrait:"",             //头像
   content:"",                  //发表的文字内容
   img:"",                      //发布的图片内容
   likeNumber:1,                //点赞数
   commentNumber:3,             //评论数
  },
 

  isCard(e) {
    this.setData({
      isCard: e.detail.value
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

  },

  data: {                 //猫圈页面导航栏
    current:0,
    newslist:[{
        text:'这是发现界面内容',     
      },{
        text:'这是关注界面内容'
      },{
        text:'这是发现界面内容'   
      }
    ]
  },

  onClick:function(event){
    var index = event.currentTarget.dataset.id;
    this.setData({
      current:index
    })
  },

  //事件：点击动态卡片跳转到评论详情
  onTapToDetail(event){
    wx.navigateTo({
      url: '../postDetail/postDetail',
    })
  }

})