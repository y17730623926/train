//new Cookie()
function Cookie() {
    this.versions = "0.1.1";    //版本号
}
//设置Cookie
Cookie.prototype.setCookie = function (key, value, day) {
    var date = new Date();
    date.setDate(date.getDate() + Number(day));
    value = value.replace(/[;]/g, "");
    document.cookie = key + "=" + value + "; expires=" + date.toUTCString();
}
//获取Cookie
Cookie.prototype.getCookie = function (key) {
    var cookie = document.cookie;
    cookie = cookie.replace(/\s/g, "");
    if (cookie.indexOf(";") != -1) {
        cookie = cookie.split(";");
        var obj = {};
        var arr = [];
        cookie.forEach(function(item,index){
            arr = item.split("=");
            obj[arr[0]]=arr[1];
        });
        return obj[key];
    } else if (cookie.length != 0) {
        var cookie = document.cookie;
        var obj = {};
        cookie = cookie.split("=");
        obj[cookie[0]] = cookie[1];
        return obj[key];
    }
}
//删除Cookie
Cookie.prototype.removeCookie = function (key) {
    this.setCookie(key,"",-1);
}