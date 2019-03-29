// pages/order/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title: '提交订单',
		address: {},
		product: {},
		order: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var product = { pid: 1, name: '灭度沉香单圈佛珠手链男女款手串念珠平安吉祥礼物状', price: 6930, priceStr: "6930.00", ptype: 3, imgurl: 'http://image.pk4yo.com/recofu/product_bracelet_1.jpg', leftNum: 105, saleNum: 24, specName: '规格', specs: ['规格1', '规格2', '规格3', '规格4'], provider: '智天乐游' };
		var order = { pid:1,address:"我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址"}
		var address = { userid: 1, receiveName: '哈罗闪', address: "我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址我的地址" }

		this.setData({
			address: address,
			product: product,
			order: order
		});
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