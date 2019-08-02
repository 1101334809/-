//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		Keyword:['华为手机','小米手机','oppo手机','黑鲨手机']
	},
	onLoad: function () {
		
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
		wx.switchTab({
			url: '../search/search'
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
})
