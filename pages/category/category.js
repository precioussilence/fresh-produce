// pages/category/category.js
const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);
Page({
  /**
   * 页面的初始数据
   */
  offsetTopList: [],
  data: {
    sideBarIndex: 1,
    scrollTop: 0,
    categories: [
      {
        label: '选项一',
        title: '标题一',
        badgeProps: {},
        items,
      },
      {
        label: '选项二',
        title: '标题二',
        badgeProps: {
          dot: true,
        },
        items: items.slice(0, 10),
      },
      {
        label: '选项三',
        title: '标题三',
        badgeProps: {},
        items: items.slice(0, 6),
      },
      {
        label: '选项四',
        title: '标题四',
        badgeProps: {
          count: 8,
        },
        items: items.slice(0, 8),
      },
      {
        label: '选项五',
        title: '标题五',
        badgeProps: {},
        disabled: false,
        items: items.slice(0, 8),
      },
    ],
    goodsList: [
      {
        id: 1,
        title: '新鲜红富士苹果 5kg装',
        image: 'https://images.pexels.com/photos/3487715/pexels-photo-3487715.jpeg',
        price: 29.9,
        originalPrice: 39.9,
        soldCount: 999,
        tag: '热卖',
      },
      {
        id: 2,
        title: '有机生菜 500g',
        image: 'https://images.pexels.com/photos/3487715/pexels-photo-3487715.jpeg',
        price: 12.9,
        originalPrice: 15.9,
        soldCount: 568,
        tag: '有机',
      },
      {
        id: 3,
        title: '新鲜三文鱼 300g',
        image: 'https://images.pexels.com/photos/3487715/pexels-photo-3487715.jpeg',
        price: 59.9,
        originalPrice: 79.9,
        soldCount: 325,
        tag: '进口',
      },
      {
        id: 4,
        title: '黑猪五花肉 500g',
        image: 'https://images.pexels.com/photos/3487715/pexels-photo-3487715.jpeg',
        price: 45.8,
        originalPrice: 55.8,
        soldCount: 782,
        tag: '特价',
      },
    ],
    navbarHeight: 0,
  },

  getCustomNavbarHeight() {
    const query = wx.createSelectorQuery();
    query.select('.custom-navbar').boundingClientRect();
    query.exec((res) => {
      const { height = 0 } = res[0] || {};
      this.setData({ navbarHeight: height });
    });
  },

  onSideBarChange(e) {
    const { value } = e.detail;
    console.log('---', value);
    this.setData({ sideBarIndex: value, scrollTop: 0 });
  },

  onGoodsClick(e) {
    const { id } = e.currentTarget.dataset;
    wx.showToast({
      title: `点击了商品${id}`,
      icon: 'none',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCustomNavbarHeight();
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
        selected: 1,
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
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
