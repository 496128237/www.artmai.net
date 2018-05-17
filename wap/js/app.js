/* 侧滑菜单点击显示效果 */
$("#h_nav").tap(function() {
  $("#right_nav").animate({ right: "0" });
});
/* 侧滑菜单点击关闭效果 */
$("#right_nav .nav_zhezhao").tap(function() {
  $("#right_nav").animate({ right: "-100%" });
});
/* 侧滑菜单左滑显示效果 */
// $("body").on("swipeleft", function() {
//   $("#right_nav").animate({ right: "0" });
// });
/* 侧滑菜单右滑关闭效果 */
$("#right_nav").on("swiperight", function() {
  $("#right_nav").animate({ right: "-100%" });
});

/* 筛选-状态 侧滑菜单点击显示效果 */
$("#shaixuan .sx_zt").tap(function() {
    $("#shaixuan .sx_wrap_zt").animate({ right: "0" });
  });
  /* 筛选-状态 侧滑菜单点击关闭效果 */
  $("#shaixuan .zhezhao").tap(function() {
    $("#shaixuan .sx_wrap_zt").animate({ right: "-100%" });
  });
  /* 筛选-状态 侧滑菜单左滑显示效果 */
//   $("body").on("swipeleft", function() {
//     $("#shaixuan .sx_wrap_zt").animate({ right: "0" });
//   });
  /* 筛选-状态 点击关闭效果 */
  $("#shaixuan .sx_wrap_zt .close").on("tap", function() {
    $("#shaixuan .sx_wrap_zt").animate({ right: "-100%" });
  });
  /* 筛选-分类 侧滑菜单点击显示效果 */
$("#shaixuan .sx_fl").tap(function() {
    $("#shaixuan .sx_wrap_fl").animate({ right: "0" });
  });
  /* 筛选-分类 侧滑菜单点击关闭效果 */
  $("#shaixuan .zhezhao").tap(function() {
    $("#shaixuan .sx_wrap_fl").animate({ right: "-100%" });
  });
  /* 筛选-分类 侧滑菜单左滑显示效果 */
//   $("body").on("swipeleft", function() {
//     $("#shaixuan .sx_wrap_fl").animate({ right: "0" });
//   });
  /* 筛选-分类 点击关闭效果 */
  $("#shaixuan .sx_wrap_fl .close").on("tap", function() {
    $("#shaixuan .sx_wrap_fl").animate({ right: "-100%" });
  });

// /* 上拉加载更多藏品 */
// $('#buyers .container').dropload({
//   scrollArea : window,
//   distance:1000,
//   loadDownFn : function(me){
//       $.ajax({
//           type: 'GET',
//           url: 'json/more.json',
//           dataType: 'json',
//           success: function(data){
//               console.log(data);
//               // 每次数据加载完，必须重置
//               me.resetload();
//           },
//           error: function(xhr, type){
//               alert('Ajax error!');
//               // 即使加载出错，也得重置
//               me.resetload();
//           }
//       });
//   }
// });




function GetRTime(endTime, obj) {
	var endTime= endTime.replace(/\-/g, "/");
    var EndTime = new Date(endTime);
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 60 / 60 / 24);//天
        h = Math.floor(t / 1000 / 60 / 60 % 24);//时
        m = Math.floor(t / 1000 / 60 % 60);//分
        s = Math.floor(t / 1000 % 60);//秒
    }
    if (d < 10 && d > 0) {
        d = '0' + d;
    }
    if (h < 10 && h > 0) {
        h = '0' + h;
    }
    if (m < 10 && m > 0) {
        m = '0' + m;
    }
    if (s < 10 && s > 0) {
        s = '0' + s;
    }
    obj.children[0].innerHTML = d;
    obj.children[1].innerHTML = h;
    obj.children[2].innerHTML = m;
    obj.children[3].innerHTML = s;
}
/* 专区结束时间倒计时 */
setInterval(function () {
    var endTime = $(".distime");
    for (var i = 0; i < endTime.length; i++) {
        GetRTime(endTime[i].dataset.endtime, endTime[i]);
    }
}, 1000);