var util = getApp().globalData.util;
Page({
    data: {
      url: 'https://dmc.pk4yo.com/map_jingshan.html',
      randNum: util.randomNum()
    },
    onLoad: function(options){
				var url = '';
				console.log(options)
				url = options.url + '?a=' + options.a;
				this.setData({ url: url })
    }
});
