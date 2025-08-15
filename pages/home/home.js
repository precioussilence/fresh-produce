// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiper: {
      current: 1,
      autoplay: true,
      duration: 500,
      interval: 5000,
      swiperList: [
        {
          value: 'https://images.pexels.com/photos/7542051/pexels-photo-7542051.jpeg',
          ariaLabel: '图片1',
        },
        {
          value: 'https://images.pexels.com/photos/13046228/pexels-photo-13046228.jpeg',
          ariaLabel: '图片2',
        },
        {
          value: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
          ariaLabel: '图片3',
        },
        {
          value: 'https://images.pexels.com/photos/3487715/pexels-photo-3487715.jpeg',
          ariaLabel: '图片4',
        },
      ],
      navigation: { type: 'dots-bar' },
    },
    categoryMatrix: {
      column: 4,
      itemList: [
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
        {
          imageUrl: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
          imageClass: 'image',
          title: '标题',
        },
      ],
    },
    categoryTab: {
      defaultTab: 0,
      itemList: [
        {
          label: '标题',
          value: 'fruite',
        },
        {
          label: '标题',
          value: 'fruite',
        },
        {
          label: '标题',
          value: 'fruite',
        },
        {
          label: '标题',
          value: 'fruite',
        },
        {
          label: '标题',
          value: 'fruite',
        },
        {
          label: '标题',
          value: 'fruite',
        },
        {
          label: '标题',
          value: 'fruite',
        },
        {
          label: '标题',
          value: 'fruite',
        },
      ],
    },
    goodsList: [
      {
        id: 1,
        title: '新鲜红富士苹果 5kg装',
        image: 'https://img.yzcdn.cn/vant/cat.jpeg',
        price: 29.9,
        originalPrice: 39.9,
        soldCount: 999,
        tag: '热卖',
      },
      {
        id: 2,
        title: '有机生菜 500g',
        image: 'https://img.yzcdn.cn/vant/cat.jpeg',
        price: 12.9,
        originalPrice: 15.9,
        soldCount: 568,
        tag: '有机',
      },
      {
        id: 3,
        title: '新鲜三文鱼 300g',
        image: 'https://img.yzcdn.cn/vant/cat.jpeg',
        price: 59.9,
        originalPrice: 79.9,
        soldCount: 325,
        tag: '进口',
      },
      {
        id: 4,
        title: '黑猪五花肉 500g',
        image: 'https://img.yzcdn.cn/vant/cat.jpeg',
        price: 45.8,
        originalPrice: 55.8,
        soldCount: 782,
        tag: '特价',
      },
    ],
  },

  onMatrixTabClick(event) {
    const { title, index } = event.currentTarget.dataset;
    wx.showToast({
      title: `点击了分类：${title}${index + 1}`,
      icon: 'none',
    });
  },

  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },

  onTabsClick(event) {
    console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  },

  onAddToCart(e) {
    const { id } = e.currentTarget.dataset;
    wx.showToast({
      title: `添加商品${id}到购物车`,
      icon: 'success',
    });
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
  onLoad(options) {},

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
        selected: 0,
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
