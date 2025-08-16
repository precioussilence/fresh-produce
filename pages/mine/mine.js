// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    isLogin: false,
    orderCounts: {
      waitPay: 2,
      waitDelivery: 1,
      refund: 0,
    },
    orderTypes: [
      {
        icon: 'app',
        text: '全部',
        badge: 0,
        url: '/pages/order/list?type=all',
      },
      {
        icon: 'wallet',
        text: '待付款',
        badge: 2,
        url: '/pages/order/list?type=waitPay',
      },
      {
        icon: 'undertake-delivery',
        text: '待配送',
        badge: 1,
        url: '/pages/order/list?type=waitDelivery',
      },
      {
        icon: 'service',
        text: '退款/售后',
        badge: 0,
        url: '/pages/order/list?type=refund',
      },
    ],
    services: [
      { icon: 'coupon', text: '优惠券', url: '/pages/coupon/coupon' },
      { icon: 'star', text: '商品收藏', url: '/pages/collect/collect' },
      { icon: 'service', text: '退款/售后', url: '/pages/refund/refund' },
      { icon: 'location', text: '收货地址', url: '/pages/address/address' },
      { icon: 'chat', text: '官方客服', url: '/pages/service/service' },
      { icon: 'discount', text: '超级满减', url: '/pages/discount/discount' },
      { icon: 'mail', text: '意见反馈', url: '/pages/feedback/feedback' },
      { icon: 'setting', text: '设置', url: '/pages/setting/setting' },
    ],
    recommendGoods: [
      {
        id: 1,
        image: 'https://images.pexels.com/photos/7542051/pexels-photo-7542051.jpeg',
        title: '有机草莓 500g/盒',
        price: '29.80',
        soldCount: 999,
      },
      {
        id: 2,
        image: 'https://images.pexels.com/photos/13046228/pexels-photo-13046228.jpeg',
        title: '新鲜牛油果 2个/份',
        price: '19.90',
        soldCount: 888,
      },
      {
        id: 3,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        title: '进口香蕉 1kg/份',
        price: '12.80',
        soldCount: 777,
      },
      {
        id: 4,
        image: 'https://images.pexels.com/photos/3487715/pexels-photo-3487715.jpeg',
        title: '红心火龙果 2个/份',
        price: '25.80',
        soldCount: 666,
      },
    ],
  },

  checkLoginStatus() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        isLogin: true,
      });
    }
  },

  handleLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    });
    this.setData({
      isLogin: true,
      userInfo: {
        avatarUrl: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        nickName: '用户昵称',
        id: '123456789',
      },
    });
  },

  goToOrder(e) {
    const { url, text } = e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    });
    wx.showToast({
      title: `打开-${text}`,
    });
  },

  goToService(e) {
    const { url, text } = e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    });
    wx.showToast({
      title: `打开-${text}`,
    });
  },

  goToGoodsDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/goods/detail?id=${id}`,
    });
    wx.showToast({
      title: `打开-商品${id}`,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.checkLoginStatus();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3,
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.checkLoginStatus();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
