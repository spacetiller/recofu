// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
	data: {
		title: '我的',
		userInfo: {},
		binded: false,
		logged: false,
		takeSession: false,
		requestResult: '',
		authorized: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
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
   * 授权按钮回调函数
   */
	getUserInfo: function (e) {
		var _this = this;
		console.log(e);
		var userinfo = wx.getStorageSync('userinfo');
		if (!userinfo) {
			var uinfo = e.detail.userInfo;
			app.globalData.userInfo = uinfo;
			if (uinfo.mobile && uinfo.mobile.length > 0) {
				uinfo.mobile = uinfo.mobile.substr(0, 3) + '****' + uinfo.mobile.substr(7, 4);
			}
			wx.setStorage({
				key: "userinfo",
				data: uinfo
			});
		}
		if (userinfo && userinfo.userId && userinfo.isLogin) {	// 数据不一致
			this.setData({
				authorized: true,
				userInfo: userinfo
			});
		} else {
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
			app.loginUser(logcb);
		}
	},
	gotoFav: function () {
		wx.navigateTo({
			url: '/pages/myfavorite/myfavorite'
		})
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