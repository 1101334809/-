//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		Keyword:['华为手机','小米手机','oppo手机','黑鲨手机'],
		subtitle: [],
		slider: [
			{ picUrl: '../../imgs/lbt1.jpg' },
			{ picUrl: '../../imgs/lbt2.jpg' },
			{ picUrl: '../../imgs/lbt3.jpg' },
		],
		swiperCurrent: 0,
		swiperTow:[{},{}],
		swiperCurrent2:0,
	},
	onLoad: function () {
		let pas = [
				{img: '../../imgs/ej.jpg', name: '这是测试'},
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
				{ img: '../../imgs/ej.jpg', name: '这是测试' },
			];
			this.setData({
				subtitle:pas,
			})
	},
	swiperChange2:function(e){
		this.setData({
			swiperCurrent2: e.detail.current
		})
	},
	swiperChange: function (e) {
		this.setData({
			swiperCurrent: e.detail.current
		})
	},
	//测试
	hehe:function(){
		console.log('hehe')
	},
	TZlogs:function(){
		wx.switchTab({
			url: '../logs/logs'
		})
	},
	TZsearch:function(){
		console.log(2)
		wx.switchTab({
			url: '../Collection/Collection'
		})
	},
	onPullDownRefresh: function () {
		wx.showNavigationBarLoading() //在标题栏中显示加载
		setTimeout(function () {
			wx.hideNavigationBarLoading() //完成停止加载
			wx.stopPullDownRefresh() //停止下拉刷新
		}, 1500);
		this.setData({
			Keyword: ['锤子手机', 'E+手机', '三星手机', '游戏手机']
		})
	},
	onPageScroll: function (e) {
		console.log(e);//{scrollTop:99}
	}
})
