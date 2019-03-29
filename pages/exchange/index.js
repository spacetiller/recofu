// pages/exchange/index.js
const app = getApp();
var config = app.globalData.config, util = getApp().globalData.util;

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title: "福分",
		wximg: config.imageUrl + "/" + config.appName + "/payexample-wx.jpg",
		alimg: config.imageUrl + "/" + config.appName + "/payexample-ali.jpg"
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},
	submit: function (e) {
		var url = "https://" + config.host2 + "users/login";
		/*util.makeRequest(that, url, {}, function (res) {
			if (res.code == 0) {
				console.log(res);
				that.setData({ frontList: res.data })
			} else {
				console.log(res.data.msg);
				//return false;
			}
		}, 'GET');*/
		// below should be in success cb of request
		

	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		wx.setNavigationBarTitle({
			title: this.data.title //"项目详情" //this.project.pName
		})

	}
})