"use strict";
Page({
  data: {
    isLogin: false,
    nickName:'',
    avatarUrl:'',
    userInfo: {}
  },
  onLoad: function onLoad() {
   this.getUserInfo()
  },
  onShow(){
    wx.getStorageSync({
      key:'token',
      success: function () { 
        wx.checkSession({
          success:function() {
            //登录未过期
            this.setData({
              isLogin: true
            })
          },
          fail: function() {
            this.setData({
              isLogin: false
            })
          }
        })
       },
       fail: function () {  
        this.setData({
          isLogin: false
        })
       }
    })
  },
  wxlogin(){
    wx.login({
      success: res => {
        if(res.code) {//
          //调用后台接口登录
          //成功之后将token存储在storage中
          this.setData({
            isLogin: true
          })
        }
      },
      fail: () => {},
      complete: () => {}
    });
  },
  getUserInfo(){
    const _this = this;
    wx.getSetting({
      success: function success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.getUserProfile({
            desc: '用于完善会员资料',
            // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: function success(res) {
              _this.setData({
                userInfo: res.userInfo,
                // hasUserInfo: true
              }); 
              //登录this.wxlogin()
            }
          });
        } else {
          wx.getUserInfo({
            success: function success(res) {//登录
              _this.setData({
                userInfo: res.userInfo,
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl
                //登录this.wxlogin()
              })
            }
          });
        }
      }
    });
  }
});