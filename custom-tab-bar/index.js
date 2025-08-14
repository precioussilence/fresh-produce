// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    list: [
      {
        pagePath: "pages/home/home",
        icon: "home",
        text: "首页",
        label: "home",
      },
      {
        pagePath: "pages/category/category",
        icon: "cart",
        text: "分类",
        label: "category",
      },
      {
        pagePath: "pages/cart/cart",
        icon: "cart",
        text: "购物车",
        label: "cart",
      },
      {
        pagePath: "pages/mine/mine",
        icon: "user",
        text: "我的",
        label: "mine",
      },
    ],
  },

  lifetimes: {
    attached() {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      const index = e.detail.value;
      const path = this.data.list[index].pagePath;
      wx.switchTab({
        url: `/${path}`,
      });
    },
  },
});
