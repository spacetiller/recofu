const app = getApp();
var config = app.globalData.config, util = require('../../utils/util.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title: "福分",
		labels: ['兑换福分', '行善积德', '福气好物'],
		_num: 0,
		goods: [
			{pid: 1, name: '关注大凉山贫困儿童的生存现状', price: 100, ptype: 1, imgurl: 'http://image.pk4yo.com/recofu/goods_daliangshan_1.jpg', provider: '合作者'},
			{pid: 2, name: '猫咪救助行动', price: 100, ptype: 2, imgurl: 'http://image.pk4yo.com/recofu/goods_cats_1.jpg', provider: '合作者'},
			{pid: 3, name: '项目名称项目名称项目名称', price: 100, ptype: 1, imgurl: 'http://image.pk4yo.com/recofu/goods_hungry_1.jpg', provider: '合作者'},
			{pid: 4, name: '项目名称项目名称项目名称', price: 100, ptype: 1, imgurl: 'http://image.pk4yo.com/recofu/goods_school_1.jpg', provider: '合作者'}
		], // 数据列表	list[]
		products: [
			{ pid: 1, name: '灭度沉香单圈佛珠手链男女款手串念珠平安吉祥礼物状', price: "6930.00", ptype: 3, imgurl: 'http://image.pk4yo.com/recofu/product_bracelet_1.jpg', provider: '智天乐游' },
			{ pid: 2, name: '猫咪救助行动', price: "8193.50", ptype: 3, imgurl: 'http://image.pk4yo.com/recofu/product_rosary_1.jpg', provider: '智天乐游' },
			{ pid: 3, name: '项目名称项目名称项目名称', price: "4098.50", ptype: 3, imgurl: 'http://image.pk4yo.com/recofu/product_bead_1.jpg', provider: '智天乐游' }
		], // 数据列表	list[]
		orderId: '', // 订单号
		loading: false, // 显示等待框
		showFinish: false,
		userInfo: {},
		hasUserInfo: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var userinfo = wx.getStorageSync('userinfo');
		if (!userinfo || userinfo.isLogin == undefined || !userinfo.isLogin) {
			var logcb = function () {
				var userinfo = wx.getStorageSync('userinfo');
				_this.setData({
					userInfo: userinfo,
					hasUserInfo: true
				});
			};
			app.checkUserLogin(logcb);
		} else {
			this.setData({
				userInfo: userinfo,
				hasUserInfo: true
			});
		}

	},
	toggle: function (e) {
		console.log(e.currentTarget.dataset.index);
		if (this.data._num === e.currentTarget.dataset.index) {
			return false;
		} else {
			this.setData({
				_num: e.currentTarget.dataset.index
			})
		}
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
		wx.setNavigationBarTitle({
			title: "福分兑换"
		})
		this.setData({
			title: "福分兑换",
			showFinish: true
		})

	},
	gotoGoods: function (e) {
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
		wx.setNavigationBarTitle({
			title: "福分"
		})
		this.setData({
			title: "福分",
			showFinish: false,
			_num: 1
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