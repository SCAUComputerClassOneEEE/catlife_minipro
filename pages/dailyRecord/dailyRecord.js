// pages/dailyRecord/dailyRecord.js
const app = getApp();
const tabChange = require('../../utils/tabChange.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,          //猫咪框架代码data
    date: '2021-12-25',
    imgList: [],
    catSex:['雌','雄'],
    catSexID:0,
    CatBreed:['暹罗猫','布偶猫','苏格兰折耳猫','英国短毛猫','波斯猫','俄罗斯蓝猫','美国短毛猫','异国短毛猫','挪威森林猫','孟买猫','缅因猫','埃及猫','伯曼猫','斯芬克斯猫','缅甸猫','阿比西尼亚猫','新加坡猫','索马里猫','土耳其梵猫','美国短尾猫','中国狸花猫','西伯利亚森林猫','日本短尾猫','巴厘猫','土耳其安哥拉猫','褴褛猫','东奇尼猫','马恩岛猫','柯尼斯卷毛猫','奥西猫','沙特尔猫','德文卷毛猫','美国刚毛猫','哈瓦那棕猫','波米拉猫','美国卷毛猫','欧洲缅甸猫','孟加拉猫','夏尔特猫','重点色短毛猫','爪哇猫','克拉特猫','拉波卷毛猫','欧西猫','东方猫','赛尔凯克卷毛猫'],
    CatBreedID:0,
    sterilization:['是','否'],
    sterilizationID:0,


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

  //选择猫咪性别
  catSexChange:function(e){
    console.log('猫咪性别',e.detail.value);
    this.setData({
      catSexID:e.detail.value         //把当前的触摸的索引给catSexID  （？？有点没理解
    })
  },

  //选择猫咪品种
  catBreedChange:function(e){
    console.log('猫咪品种',e.detail.value);
    this.setData({
      CatBreedID:e.detail.value         //把当前的触摸的索引给catSexID  （？？有点没理解
    })
  },

  //选择猫咪是否绝育
  sterilizationChange:function(e){
    console.log('是否绝育',e.detail.value);
    this.setData({
      sterilizationID:e.detail.value         //把当前的触摸的索引给catSexID  （？？有点没理解
    })
  },

  //显示和隐藏为猫咪建档页面
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

  //猫咪建档页面：选择日期
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  
  //为猫咪建档页面：选择图片
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '删除图片',
      content: '确定要删除这张图片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
 



  gotoCatDetail(event){
    wx.navigateTo({
      url: "../dailyRecord/oneCat/oneCat"
    })
  },

  onTabItemTap(item) {
    tabChange.bindTabChange(item);
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
  
    /**
     * 页面的初始数据
     */
    
    //折叠面板
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

    gotoMycat(event){
      wx.navigateTo({
        url: "../myCat/myCat"
      })
    },


    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    ChooseCheckbox(e) {
      let items = this.data.checkbox;
      let values = e.currentTarget.dataset.value;
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        if (items[i].value == values) {
          items[i].checked = !items[i].checked;
          break
        }
      }
      this.setData({
        checkbox: items
      })
    }
  })
  
  