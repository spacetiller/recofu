const app = getApp();
var config = app.globalData.config, util = getApp().globalData.util;
Page({
  data: { 
    Height: 0,
    BtnTop: 0,
    //countries: ["切换景区", "云冈石窟", "五台山", "洪洞大槐树"],
    countries: ["景山公园"],
    countryIndex: 0,
    bgList:[
      '../../images/index_bg.png',
      //'http://image.efanji.com/image/yungang_bg.png',
      //'http://image.efanji.com/image/wutaishan_bg.png',
      //'http://image.efanji.com/image/dahuaishu_bg.jpg',
    ],
    wd: '',
    jd: '',
		frontList: []
  },

  onLoad: function (options) {
    var that = this;
		var url = "https://" + config.host2 + 'front';
		console.log(url);
		util.makeRequest(that, url, {}, function (res) {
			if (res.code == 0) {
				console.log(res);
				that.setData({ frontList: res.data })
			} else {
				console.log(res.data.msg);
				//return false;
			} 
		}, 'GET');
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        let wd = parseInt(res.latitude), jd = parseInt(res.longitude), val = 0;
        console.log(wd, jd)
        //山西大同  40.109810，113.144800
        //五台山  38.968620,113.590720
        //大槐树 36.271250,111.677110
        //北京  40.22077  116.23128
        //景山公园  39.925847  116.396776
        if (wd == 40 && jd == 113) val = 1
        if (wd >= 38 && wd < 40 && jd == 113) val = 2
        if (wd >= 36 && wd < 37 && jd == 111) val = 3
        console.log(val)
        that.setData({
          countryIndex: val
        })
				wx.setStorage({
					key: 'countryIndex',
					data: val
				});
      }
    })
  },
  bindCountryChange: function (e) {
    this.setData({
      countryIndex: e.detail.value
    })
  },

  goToAi: function () {
    wx.navigateTo({
      url: '/pages/home/index'
    })
  },

  goToMap: function () {
    wx.navigateTo({
      url: '/pages/webview/index?url=https://dmc.pk4yo.com/map_jingshan.html'
    })
  },

  goToRobot: function () {
    wx.navigateTo({
      url: '/pages/webview/index'
    })
  }

})
