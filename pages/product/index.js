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
		userinfo: { fufen: 190 },
		product: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var pid = options.pid;
		var ptype = 0; 
		var product = {};
		var title = "";
		var imagelist = [], detailimgs = [];

		if (options.ptype) ptype = options.ptype;
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
			product = {
				pid: 1, name: 'XXX居士 趋吉避凶妙招', price: 100, priceStr: "100", ptype: 2, imgurl: 'http://image.pk4yo.com/recofu/goods_default.jpg', provider: '合作者', desc: "有一位证得阿罗汉果位的师父，一天在禅定中知道自己疼爱的徒弟只剩七天的寿命，天一亮，师父压抑着悲伤，将小沙弥叫到跟前说：“好孩子，你有好久不曾回家看望父母了，你收拾行李回去和父母聚一聚吧!” \
　　不知情的小沙弥虽然感觉到师父的异样，但是仍然高高兴兴地拜别了师父回家乡去了。	\
				　　日子一天一天的过去，过了七天小沙弥还没有回来，虽然断了烦恼的阿罗汉，也难免为小徒弟的不幸遭遇而怅然伤感。心中正在为再也见不到徒弟而郁郁不乐时，小沙弥突然平平安安地回来了。	\
				　　阿罗汉大为惊讶，牵着小沙弥的手上下打量地说：“你怎么好好的回来了?你做了什么事吗 ?”		\
				　　“没有呀!”小沙弥迷惑地摇头回答。		\
				　　“你仔细想想看，有没有看到什么?做了什么 ?”师父不放松地追问。	\
				　　“噢!我想起来了。回家的途中，我经过一池塘，看到一群蚂蚁被困在水中，我捡了一片叶子，把它们救上了岸。”小沙弥如实的回答。	\
				　　师父听了之后，马上再进入神通之中观看徒弟的命运：这个孩子不但去除了夭寿之相，并且有百岁的寿命。小沙弥的一念慈悲，不但救了蚂蚁的性命，也改变了自己的命运。" };
			imagelist = ["http://image.pk4yo.com/recofu/goods_default.jpg"];
			detailimgs = ["http://image.pk4yo.com/recofu/erweima.png"];
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
	submitContrib: function () {
		wx.showToast({
			title: '捐赠成功！',
			icon: 'success',
			duration: 1000,
			mask: false
		});
	},
	saveImage: function (e){
		wx.getImageInfo({
			src: 'http://image.pk4yo.com/recofu/erweima.png',
			success: function (ret) {
				var path = ret.path;
				wx.saveImageToPhotosAlbum({
					filePath: path,
					success(result) {
						console.log(result)
					}
				})
			}
		})
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