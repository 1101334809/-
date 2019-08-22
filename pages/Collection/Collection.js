// pages/Collection/Collection.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		singleData:
			[
				{ name: '精选' }, { name: '手机' }, { name: '女装' },
				{ name: '超市' }, { name: '美妆' }, { name: '电脑' },
				{ name: '母婴' }, { name: '种草' }, { name: '男装' },
				{ name: '家具' }, { name: '数码' }, { name: '鞋包' },
			],
		condition: 1,
		msit: '',
		tousData:
			[
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '1999'
				},
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '2999'
				},
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '3999'
				},
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '4999'
				},
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '5999'
				},
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '6999'
				},
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '7999'
				},
				{
					Usetdata: '../../imgs/tesl.jpg',
					Introduced: '华为nova5Pro 手机 【赠3个月碎屏险】后置4摄 绮镜森林 全网通(8G+128G)白条三期免息',
					amount: '999'
				}
			],//模板数据
			wxidth:''//屏幕高度
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
	},


	doneOne: function () {
		this.setData({
			condition: 2
		})
	},
	doneTow: function () {
		this.setData({
			condition: 1
		})
	},
	changed: function (e) {
		let index = e.currentTarget.dataset.index;
		let off = e.target.offsetLeft;
		this.setData({
			msit: index
		})
		// console.log(e)
		// if (off > (this.data.wxidth/2)){
		// 	let facke = (this.data.wxidth / 2);
		// 	wx.pageScrollTo({
		// 		scrollTop: facke,
		// 		duration: 300
		// 	})
		// }
	},
	// onPageScroll: function (e) {

	// }

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		// let obj = wx.createSelectorQuery();
		// obj.selectAll('.internal').boundingClientRect(function (res) {
		// 	console.log(res)	
		// 　　})
		// obj.exec();
		// this.setData({
		// 	wxidth: wx.getSystemInfoSync().windowWidth
		// });
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