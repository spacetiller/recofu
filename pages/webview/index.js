var util = getApp().globalData.util;
Page({
    data: {
      url: 'https://dmc.pk4yo.com/map_jingshan.html',
      randNum: util.randomNum()
    },
    onLoad: function(options){
				var url = '';
				console.log(options)
				if ('' != options.url) {
					url = options.url + '?id=' + options.id;
					this.setData({ url: url })
				}
    }
});
