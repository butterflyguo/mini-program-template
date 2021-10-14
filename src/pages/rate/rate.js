"use strict";
const app = getApp();

// logs.js
var util = require('../../utils/util.js');
const list = require('../../utils/exchange-rate.js')

Page({
  data: {
    logs: [],
    baseItem:{
      name:'CNY',
      img:'/imgs/CNY.png',
      label:'人民币¥',
      baseNum:'100'
    },
    showData:[],
    inputValue: 100
  },
  onLoad: function onLoad() {
    const data = list.filter(v=>{
      return v.name !== this.data.baseItem.name
    })
    this.setData({
      showData: data
    });
  },
  onShow(){
    if(this.data.baseItem.name === app.currentKey) return;
    list.forEach(v=>{
      if(v.name === app.currentKey) {
        this.setData({
          baseItem: v
        })
      }
    })
    

  const data =  list.filter(v=>{
      return v.name !== app.currentKey
    })
    this.setData({
      showData:data
    })

  },
  bindblur(e) {
    const value = e.detail.value;
    this.setData({
      inputValue: value
    })
  },
  changeBase(){
    wx.navigateTo({
      url: `/pages/rateSelect/rateSelect?key=${this.data.baseItem.name}`
    });
    app.currentKey = this.data.baseItem.name
  }
});