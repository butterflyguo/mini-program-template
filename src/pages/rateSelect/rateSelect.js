const list = require('../../utils/exchange-rate');
const app = getApp();
Page({
   data:{
       rateList:list,
       inputValue:'',
       currentKey: ''
   },
   onLoad(option){
        this.data.currentKey  = option.key
        this.setData({
            currentKey:option.key
        })
   },
   exChangeBaseRate(e) {
       app.currentKey = e.target.dataset.key
       wx.navigateBack();
   }
 
})