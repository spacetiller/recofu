// pages/product/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title: '',
		ptype: 1,
		indicatorDots: false,
		vertical: false,
		autoplay: true,
		circular: true,
		interval: 2000,
		duration: 500,
		previousMargin: 0,
		nextMargin: 0,
		animationData:{},
		showModalStatus: false,
		imagelist: [],
		detailimgs: [],
		current: 1,
		total: 0,
		specChosenId: 0,
		order_num: 1,
		product: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var pid = options.pid;
		var ptype = 3; //options.ptype;
		var product = {};
		var title = "";
		var imagelist = [], detailimgs = [];

		if(ptype == 3){
			product = { pid: 1, name: '灭度沉香单圈佛珠手链男女款手串念珠平安吉祥礼物状', price: 6930, priceStr: "6930.00", ptype: 3, imgurl: 'http://image.pk4yo.com/recofu/product_bracelet_1.jpg', leftNum: 105, saleNum: 24, specName: '规格', specs: ['规格1', '规格2', '规格3', '规格4'], provider: '智天乐游' };
			imagelist = ["http://image.pk4yo.com/recofu/product_bracelet_slider_1.jpg",
				"http://image.pk4yo.com/recofu/product_bracelet_slider_2.jpg"];
			detailimgs = ["http://image.pk4yo.com/recofu/product_bracelet_detail_1.jpg"];
			title = "好物详情";
		} else if (ptype == 1){
			product = { pid: 1, name: '关注大凉山贫困儿童的生存现状', price: 100, priceStr: "100", ptype: 1, imgurl: 'http://image.pk4yo.com/recofu/goods_daliangshan_1.jpg', saleNum: 305,provider: '合作者'};
			imagelist = ["http://image.pk4yo.com/recofu/goods_daliangshan_slider_1.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_slider_2.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_slider_3.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_slider_4.jpg"];
			detailimgs = ["http://image.pk4yo.com/recofu/goods_daliangshan_detail_1.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_detail_2.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_detail_3.jpg"];
			title = "善行详情";
		}else{
			product = { pid: 1, name: '关注大凉山贫困儿童的生存现状', price: 100, priceStr: "100", ptype: 1, imgurl: 'http://image.pk4yo.com/recofu/goods_daliangshan_1.jpg', provider: '合作者' };
			imagelist = ["http://image.pk4yo.com/recofu/goods_daliangshan_slider_1.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_slider_2.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_slider_3.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_slider_4.jpg"];
			detailimgs = ["http://image.pk4yo.com/recofu/goods_daliangshan_detail_1.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_detail_2.jpg",
				"http://image.pk4yo.com/recofu/goods_daliangshan_detail_3.jpg"];
			title = "善行详情";
		}
		// get image list from product
		// ...
		// price: toFixed()
		// set data for page
		this.setData({
			title: title,
			total: imagelist.length,
			product: product,
			imagelist: imagelist,
			detailimgs: detailimgs,
			ptype: ptype
		});
	},

	imageChange: function(e){
		this.setData({
			current: e.detail.current + 1
		})
	},
	submit: function(){

	},
	showModal: function () {
		// 显示遮罩层
		var animation = wx.createAnimation({
			duration: 200,
			timingFunction: "linear",
			delay: 0
		})
		this.animation = animation
		animation.translateY(300).step()
		this.setData({
			animationData: animation.export(),
			showModalStatus: true
		})
		setTimeout(function () {
			animation.translateY(0).step()
			this.setData({
				animationData: animation.export()
			})
		}.bind(this), 200)
	},
	//隐藏对话框
	hideModal: function () {
		// 隐藏遮罩层
		var animation = wx.createAnimation({
			duration: 200,
			timingFunction: "linear",
			delay: 0
		})
		this.animation = animation
		animation.translateY(300).step()
		this.setData({
			animationData: animation.export(),
		})
		setTimeout(function () {
			animation.translateY(0).step()
			this.setData({
				animationData: animation.export(),
				showModalStatus: false
			})
		}.bind(this), 200)
	},
	changeSpec: function (e) {
		var val = e.currentTarget.dataset.index
		console.log(val)
		
		this.setData({
			specChosenId: val
		})
	},
	numInput: function (e) {
		var num = e.detail.value;
		
		if (!isNaN(num)){
			this.setData({
				order_num: num
			});
		}else{
			this.setData({
				order_num: 1
			});
		}
		
	},
	numMinus: function (e) {
		var num = this.data.order_num;
		this.setData({
			order_num: num>1?num-1:1
		});
	},
	numAdd: function (e) {
		var num = this.data.order_num;
		this.setData({
			order_num: num + 1
		});
	},
	gotoOrder: function () {
		wx.navigateTo({
			url: '/pages/order/index',
		})

	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		wx.setNavigationBarTitle({
			title: this.data.title //"项目详情" //this.project.pName
		})

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
	}
})