// pages/dailyRecord/dailyRecord.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,          //猫咪框架代码data
      array: [{  
        title: '猫咪成长',
        date: '2020-07-20',
        amount: '200',
        transaction: '180',
        fee: '20',
        toggle: false,
        value: '99',
        checked: 'false'
      }, {
        title: '猫咪饮食',
        date: '2020-07-20',
        amount: '200',
        transaction: '180',
        fee: '20',
        toggle: false,
        value: '8',
      }, {
        title: '猫咪卫生',
        date: '2020-07-20',
        date: '2020-07-20',
        amount: '200',
        transaction: '190',
        fee: '10',
        toggle: false,
        value: '200517-00004248',
      }],
      array1:[{
        title:'猫咪卫生test',
        lastShowerTime:'2021.4.10',     //上次洗澡的时间
        InsecticidalTime:'2021.3.3',     //上次除虫的时间
        another:'no',                    //其他
        toggle: false,
      }],

      
      //以下是框架代码的数组
      checkbox: [{
        value: 0,
        name: '10元',
        checked: false,
        hot: false,
      }, {
        value: 1,
        name: '20元',
        checked: true,
        hot: false,
      }, {
        value: 2,
        name: '30元',
        checked: true,
        hot: true,
      }, {
        value: 3,
        name: '60元',
        checked: false,
        hot: true,
      }, {
        value: 4,
        name: '80元',
        checked: false,
        hot: false,
      }, {
        value: 5,
        name: '100元',
        checked: false,
        hot: false,
      }]
    
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


    //我的猫咪框架代码       2021/7/17 这是啥？？
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
  
  