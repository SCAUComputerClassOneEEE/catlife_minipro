// pages/dailyRecord/dailyRecord.js
const app = getApp();

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
  
  