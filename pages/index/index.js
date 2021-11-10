// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cardCur: 0,        //轮播框架代码data
    sources:'',        //照片文件列表
    StatusBar: app.globalData.StatusBar,       //列表宫格框架代码data
    CustomBar: app.globalData.CustomBar,       //列表宫格框架代码data
    gridCol:3,        //列表宫格框架代码data
    skin: false,      //列表宫格框架代码data

   

    swiperList: [{     //轮播框架代码swiperList数组
      id: 0,
      type: 'image',
      url: '../pictures/abyssinian_l2.jpg'
    }, {
      id: 1,
        type: 'image',
        url: '../pictures/americanShor.jpg',
    }, {
      id: 2,
      type: 'image',
      url: '../pictures/Beautiful-Bombay-Cat-Face.jpg'
    }, {
      id: 3,
      type: 'image',
      url: '../pictures/egyptian-mau-cat-facts4.jpg'
    }, {
      id: 4,
      type: 'image',
      url: '../pictures/havana.jpg'
    }, {
      id: 5,
      type: 'image',
      url: '../pictures/lihua.jfif'
    }, {
      id: 6,
      type: 'image',
      url: '../pictures/tonkinese.jpg'
    }
  ],


    //以下是列表宫格代码框架的数组
    catList: [{
      name: '美国短毛猫',
      img:"../pictures/tonkinese.jpg"
    }, {
      name: '狸花猫',
      img:"../pictures/havana.jpg"
    }, {
      name: '无毛猫',
      img:"../pictures/Turkish Van.2.jpg"
    }, {
      name: '挪威森林猫',
      img:"../pictures/havana.jpg"
    }, {
      name: '孟买猫',
      img:"../pictures/havana.jpg"
    }, {
      name: '土耳其猫',
      img:"../pictures/havana.jpg"
    },{
      name: '异国短毛猫（加菲）',
      img:"../pictures/havana.jpg"
    }, {
      name: '波斯猫',
      img:"../pictures/havana.jpg"
    }, {
      name: '布偶猫',
      img:"../pictures/havana.jpg"
    }
    ],

    array: [{
      toggle: false,
    }]

  
  },


  
  //猫咪热榜 折叠面板
  panel: function (e) {
    //获取到元素的id值
    var id = e.currentTarget.dataset.index;
    //获取到全部数据
    var items = this.data.array;
    //获取到当前元素的显示与隐藏
    //var ishow = !items[id].toggle;
    //将新的toggle值复制给原来的toggle
    items[id].toggle = !items[id].toggle;
    this.setData({
      array: items
    })
  },




  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },



  //选择图片
  selectPhotoTap:function(){
    var self=this;
    wx.chooseImage({    //调用微信提供的选择照片的函数
      count: 1,        //最多选择一张图片
      sizeType:['original'],          //选择原图
      sourceType:['album','camera'],           //从相册中选择
      //成功时的回调
      success:function(res){
        console.log(res);
        self.setData({
          sources:res.tempFilePaths        //更新相片列表
        })
      }
    })
  },


  //以下是轮播框架js事件代码
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },



  //以下是列表宫格框架的js代码
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
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
  },

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection =='left'){
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },


   //事件：点击猫咪宫格跳转到猫咪详情介绍页面
   onTapToDetail0(event){
    console.log("发生点击事件");
    wx.navigateTo({
      url: '../catIntroduce/intro1/intro1',
    })
  },

  onTapToDetail1(event){
    wx.navigateTo({
      url: '../Identified/Identified',
    })
  },

  onTapToDetail2(event){
    wx.navigateTo({
      url: '../Identified/Identified',
    })
  },

  onTapToDetail3(event){
    wx.navigateTo({
      url: '../Identified/Identified',
    })
  },

  onTapToDetail4(event){
    wx.navigateTo({
      url: '../Identified/Identified',
    })
  },

  onTapToDetail5(event){
    wx.navigateTo({
      url: '../Identified/Identified',
    })
  },

  onTapToDetail6(event){
    wx.navigateTo({
      url: '../Identified/Identified',
    })
  }

})



