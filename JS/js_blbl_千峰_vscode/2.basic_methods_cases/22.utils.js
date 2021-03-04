// 封装一些常用功能

// 时间差：IE5后支持两个Date对象相减得到时间戳差值，下面是兼容更早版本的做法：
/**
 *
 * @param {TiME} time1 时间点1
 * @param {Time} time2 时间点2
 * @return { Object }  对象类型存储时间差
 */
function getTimeDifference(time1, time2) {
    var diffTime = Math.round(
        Math.abs(time1.getTime() - time2.getTime()) / 1000
    );
    var day = parseInt(diffTime / (24 * 60 * 60));
    var hours = parseInt((diffTime % (24 * 60 * 60)) / (60 * 60));
    var minutes = parseInt((diffTime % (60 * 60)) / 60);
    var seconds = diffTime % 60;
    return {
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

/**
 * 生成执行范围的随机数
 * @param {NUMBER} a 数字1
 * @param {NUMBER} b 数字2
 * @return {NUMBER} 随机数字
 */
function rangeRandom(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    var res = Math.floor(Math.random() * (max - min + 1) + min);
    return res;
}

/**
 * 生成随机颜色（可决定 rgb 显示还是 #xxx 方式显示）
 * @param {Boolean} type 是否以十六进制显示
 * @return {STRING} 表示随机颜色的字符串
 */
function getRandomColor(type) {
    if (!type) {
        var res = `rgb(${rangeRandom(0, 255)},${rangeRandom(
            0,
            255
        )},${rangeRandom(0, 255)})`;
        return res;
    } else {
        var str = "#";
        for (var i = 0; i < 3; i++) {
            var n = rangeRandom(0, 255).toString(16);
            if (n.length === 1) n = "0" + n;
            str += n;
        }
        return str;
    }
}

// 解析BOM中location对象的search字符串（?a=1&b=2）为对象
// JS 中不提供对应方法，需要自己实现：
/**
 *
 * @param {STRING} str locatioin对象的search查询字符串
 * @returns {OBJECT} 解析后的查询字符串
 */
function parseQueryString(str) {
    var obj = {};
    // 非空才开始解析
    if (str) {
        str = str.slice(1); // 切去索引0的元素
        var temp = str.split("&"); // 分割为数组
        temp.forEach(function (item) {
            var t = item.split("="); // 索引0就是对象的key，索引1就是key对应的value
            obj[t[0]] = t[1];
        });
    }
    return obj;
}


// JS获取元素的样式：兼容写法
/**
 * 获取指定元素的指定样式
 * @param {ELEMENT} ele   目标标签
 * @param {STYLE} style   目标样式
 * @return {STRING}       获取元素的样式
 */
function getStyle(ele, style) {
    //标准浏览器
    if ("getComputedStyle" in window) {
        return window.getComputedStyle(ele)[style];
    }
    //IE低版本
    else {
        return ele.currentStyle[style];
    }
}
