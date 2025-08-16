// pages/cart/cart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cartItems: [
      {
        id: '1',
        title: '有机草莓 500g/盒',
        price: 29.8,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        count: 1,
        selected: true,
        stock: 10,
      },
      {
        id: '2',
        title: '新鲜牛油果 2个/份',
        price: 19.9,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        count: 2,
        selected: true,
        stock: 5,
      },
      {
        id: '3',
        title: '进口香蕉 1kg/份',
        price: 12.8,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        count: 1,
        selected: false,
        stock: 20,
      },
      {
        id: '4',
        title: '进口香蕉 1kg/份',
        price: 12.8,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        count: 1,
        selected: false,
        stock: 20,
      },
      {
        id: '5',
        title: '进口香蕉 1kg/份',
        price: 12.8,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        count: 1,
        selected: false,
        stock: 20,
      },
      {
        id: '6',
        title: '进口香蕉 1kg/份',
        price: 12.8,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        count: 1,
        selected: false,
        stock: 20,
      },
      {
        id: '7',
        title: '进口香蕉 1kg/份',
        price: 12.8,
        image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
        count: 1,
        selected: false,
        stock: 20,
      },
    ],
    address: {
      id: '1',
      detail: '广东省深圳市南山区科技园',
      isDefault: true,
    },
    isEditMode: false,
    allSelected: false,
    totalAmount: 0,
  },

  calculateTotal() {
    const { cartItems } = this.data;
    let totalAmount = 0;

    cartItems.forEach((item) => {
      if (item.selected) {
        totalAmount += item.price * item.count;
      }
    });

    this.setData({
      totalAmount: totalAmount.toFixed(2),
    });
  },

  checkAllSelected() {
    const { cartItems } = this.data;
    const allSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);

    this.setData({
      allSelected,
    });
  },

  toggleEditMode() {
    this.setData({
      isEditMode: !this.data.isEditMode,
    });
  },

  goToAddress() {
    wx.navigateTo({
      url: '/pages/address/index',
    });
  },

  toggleSelectItem(e) {
    const { id } = e.currentTarget.dataset;
    const { cartItems } = this.data;

    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });

    this.setData({
      cartItems: newCartItems,
    });

    this.calculateTotal();
    this.checkAllSelected();
  },

  toggleSelectAll() {
    const { cartItems, allSelected } = this.data;
    const newAllSelected = !allSelected;

    const newCartItems = cartItems.map((item) => {
      return { ...item, selected: newAllSelected };
    });

    this.setData({
      cartItems: newCartItems,
      allSelected: newAllSelected,
    });

    this.calculateTotal();
  },

  onCountChange(e) {
    const { value } = e.detail;
    const { id } = e.currentTarget.dataset;
    const { cartItems } = this.data;

    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: value };
      }
      return item;
    });

    this.setData({
      cartItems: newCartItems,
    });

    this.calculateTotal();
  },

  deleteItem(e) {
    const { id } = e.currentTarget.dataset;

    wx.showModal({
      title: '提示',
      content: '确定要删除这个商品吗？',
      success: (res) => {
        if (res.confirm) {
          const { cartItems } = this.data;
          const newCartItems = cartItems.filter((item) => item.id !== id);

          this.setData({
            cartItems: newCartItems,
          });

          this.calculateTotal();
          this.checkAllSelected();

          wx.showToast({
            title: '删除成功',
            icon: 'success',
          });
        }
      },
    });
  },

  calculateTotal() {
    const { cartItems } = this.data;
    let totalAmount = 0;

    cartItems.forEach((item) => {
      if (item.selected) {
        totalAmount += item.price * item.count;
      }
    });

    this.setData({
      totalAmount: totalAmount.toFixed(2),
    });
  },

  goToCheckout() {
    const { cartItems } = this.data;
    const selectedItems = cartItems.filter((item) => item.selected);

    if (selectedItems.length === 0) {
      wx.showToast({
        title: '请选择商品',
        icon: 'none',
      });
      return;
    }

    // 跳转到结算页面
    wx.navigateTo({
      url: '/pages/checkout/index',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.calculateTotal();
    this.checkAllSelected();
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
        selected: 2,
      });
    }

    this.calculateTotal();
    this.checkAllSelected();
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
