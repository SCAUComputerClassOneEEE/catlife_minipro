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
    userName:"拔丝芋头真好吃",                 //用户id
   postTime:"2019年12月3日",                 //发布时间
   headPortrait:"../pictures/catpic1.jpg",             //头像
   content:"文字内容",                  //发表的文字内容
   img:"../pictures/post/postImg-1.jpg",                      //发布的图片内容
   likeNumber:2,                //点赞数
   commentNumber:3,             //评论数
  
   postList:[{
    userName:"拔丝芋头真好吃",                 //用户id
    postTime:"2019年12月3日",                 //发布时间
    headPortrait:"../pictures/Beautiful-Bombay-Cat-Face.jpg",             //头像
    content:"文字内容1",                  //发表的文字内容
    img:"../pictures/Turkish Van.2.jpg",                      //发布的图片内容
    likeNumber:3,                //点赞数
    commentNumber:3,             //评论数
    postId:1,
   },
   {
    userName:"拔丝芋头真好吃",                 //用户id
    postTime:"2019年12月3日",                 //发布时间
    headPortrait:"../pictures/egyptian-mau-cat-facts4.jpg",             //头像
    content:"文字内容2",                  //发表的文字内容
    img:"../pictures/tonkinese.jpg",                      //发布的图片内容
    likeNumber:2,                //点赞数
    commentNumber:8,             //评论数
    postId:2,
   },
   {
    userName:"拔丝芋头真好吃",                 //用户id
    postTime:"2019年12月3日",                 //发布时间
    headPortrait:"../pictures/havana.jpg",             //头像
    content:"文字内容3",                  //发表的文字内容
    img:"../pictures/lihua.jfif",                      //发布的图片内容
    likeNumber:2,                //点赞数
    commentNumber:5,             //评论数
    postId:3,
   },
   {
    userName:"拔丝芋头真好吃",                 //用户id
    postTime:"2019年12月3日",                 //发布时间
    headPortrait:"../pictures/americanShor.jpg",             //头像
    content:"文字内容4",                  //发表的文字内容
    img:"../pictures/egyptian-mau-cat-facts4.jpg",                      //发布的图片内容
    likeNumber:2,                //点赞数
    commentNumber:3,             //评论数
    postId:4,
   }
  ]
  },
 
  /*
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
  */


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
  /* 广场先不把发现和关注分开写 先把顶端导航栏下的分页面先注释掉
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
  */

  onClick:function(event){
    var index = event.currentTarget.dataset.id;
    this.setData({
      current:index
    })
  },

  //事件：点击动态卡片跳转到评论详情
  onTapToDetail(event){
    //var postId=event.currentTarget.dataset.postId;
    var postList=JSON.stringify(event.currentTarget.dataset.postList);        //进行页面间参数传递的时候，对象和数组需要转成字符串再进行传递
    //console.log(postId);
    wx.navigateTo({
      //url: '../catSqure/post-detail/post-detail?postList='+postList,
      url: '../../pages/postDetail/postDetail',
    })
  }

})