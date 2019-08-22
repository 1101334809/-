// pages/logs/logs.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		Oinfo: [
			{ name: '热搜评价' }, { name: '手机数码' }, { name: '女装内衣' }, { name: '男装内衣' },
			{ name: '家用电器' }, { name: '鞋靴箱包' }, { name: '运动户外' }, { name: '电脑办公' },
			{ name: '美妆护肤' }, { name: '个人清洁' }, { name: '生活充值' }, { name: '家具建材' },
			{ name: '居家家纺' }, { name: '母婴童装' },
		],
		wsadx:[
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
			{ url: '../../imgs/tesl.jpg', name: '8848' }, { url: '../../imgs/tesl.jpg', name: '8848' },
		],
		pheight:'',
		digits:'',//class位数
	},
	
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		
	},

	networking: function (e) {
		this.setData({
			digits: e.currentTarget.dataset.index,
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})