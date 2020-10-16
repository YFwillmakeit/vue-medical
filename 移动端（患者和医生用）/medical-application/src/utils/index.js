const utils={
    // 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// formatDate(date,"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
formatDate(date, fmt) {
    if(typeof date=='number'){//时间戳转换为日期
      if(date.length==13){
        date=date*1000;
      }
      date = new Date(date);
    }else if (typeof  date == 'string') {
      date = new Date(date.replace(/-/g, '/'));
    }
  
    var o = {
      "M+": date.getMonth() + 1,                 //月份
      "d+": date.getDate(),                    //日
      "h+": date.getHours(),                   //小时
      "m+": date.getMinutes(),                 //分
      "s+": date.getSeconds(),                 //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  // 计算每月有多少天
  getMonthDay(year, month) {
    let days = new Date(year, month, 0).getDate()
    return days
  }
  
}
export default utils
