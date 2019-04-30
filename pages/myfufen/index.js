// pages/myfufen/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title: '我的福分',
		userInfo: {},
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const _this = this;
		// 拼接请求url
		//console.log(options.actId);
		var userinfo = wx.getStorageSync('userinfo');
		if (!userinfo || userinfo.isLogin == undefined || !userinfo.isLogin) {
			var logcb = function () {
				var userinfo = wx.getStorageSync('userinfo');
				if (userinfo.mobile && userinfo.mobile.length > 0) {
					userinfo.mobile = userinfo.mobile.substr(0, 3) + '****' + userinfo.mobile.substr(7, 4);
				}
				_this.setData({
					authorized: true,
					userInfo: userinfo
				});
			};
			app.checkUserLogin(logcb);
		} else {
			if (userinfo.mobile && userinfo.mobile.length > 0) {
				userinfo.mobile = userinfo.mobile.substr(0, 3) + '****' + userinfo.mobile.substr(7, 4);
			}
			this.setData({
				authorized: true,
				userInfo: userinfo
			});
		}


	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	}
})