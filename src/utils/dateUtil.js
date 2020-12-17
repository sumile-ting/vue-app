const dateFormat = (time) => {
    var date = new Date(time);
    var year = date.getFullYear();
    /* 在日期格式中，月份是从0开始的，因此要加0
     * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
     * */
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    // 拼接
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}

const ymdDateFormat = (time) => {
    var date = new Date(time);
    var year = date.getFullYear();
    /* 在日期格式中，月份是从0开始的，因此要加0
     * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
     * */
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    // 拼接
    return year + "-" + month + "-" + day;
}


const getAge = (strAge) => {
    var birArr = strAge.split("-");
    var birYear = birArr[0];
    var birMonth = birArr[1];
    var birDay = birArr[2];

    d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1; //记得加1
    var nowDay = d.getDate();
    var returnAge;

    if (birArr == null) {
        return false;
    }
    var d = new Date(birYear, birMonth - 1, birDay);
    if (
        d.getFullYear() == birYear &&
        d.getMonth() + 1 == birMonth &&
        d.getDate() == birDay
    ) {
        if (nowYear == birYear) {
            returnAge = 0; //
        } else {
            var ageDiff = nowYear - birYear; //
            if (ageDiff > 0) {
                if (nowMonth == birMonth) {
                    var dayDiff = nowDay - birDay; //
                    if (dayDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                } else {
                    var monthDiff = nowMonth - birMonth; //
                    if (monthDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                }
            } else {
                return "出生日期晚于今天，数据有误"; //返回-1 表示出生日期输入错误 晚于今天
            }
        }
        return returnAge;
    } else {
        return "输入的日期格式错误！";
    }
}


//时间戳转年月日  参数是秒的时间戳 函数返回一个对象 对象里有年 月 日
function yearDay(long) {
    var time = new Date(long * 1000)
    var year = time.getFullYear();
    var month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
    var date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    var yearday = { year, month, date }
    return yearday
}
//计算一年中的每一周都是从几号到几号
//第一周为1月1日到 本年的 第一个周日
//第二周为 本年的 第一个周一 往后推到周日
//以此类推 再往后推52周。。。
//如果最后一周在12月31日之前，则本年有垮了54周，反之53周
//12月31 日不论是周几，都算为本周的最后一天
//参数年份 ，函数返回一个数组，数组里的对象包含 这一周的开始日期和结束日期
const whichWeek = (year) => {
    var d = new Date(year, 0, 1);
    while (d.getDay() != 1) {
        d.setDate(d.getDate() + 1);
    }
    let arr = []
    let longnum = d.setDate(d.getDate())
    if (longnum > +new Date(year, 0, 1)) {
        let obj = yearDay(+new Date(year, 0, 1) / 1000)
        obj.end = yearDay(longnum / 1000 - 86400)
        arr.push(obj)
    }
    let oneitem = yearDay(longnum / 1000)
    oneitem.end = yearDay(longnum / 1000 + 86400 * 6)
    arr.push(oneitem)
    var lastStr
    for (var i = 0; i < 51; i++) {
        let long = d.setDate(d.getDate() + 7)
        let obj = yearDay(long / 1000)
        obj.end = yearDay(long / 1000 + 86400 * 6)
        lastStr = long + 86400000 * 6
        arr.push(obj)
    }
    if (lastStr < +new Date(year + 1, 0, 1)) {
        let obj = yearDay(lastStr / 1000 + 86400)
        obj.end = yearDay(+new Date(year + 1, 0, 1) / 1000 - 86400)
        arr.push(obj)
    } else {
        arr[arr.length - 1].end = yearDay(+new Date(year + 1, 0, 1) / 1000 - 86400)
    }
    return arr;
}

/**
 * 根据年份及周次获取当前周次最后一天
 * @param year
 * @param zc
 * @returns {number}
 */
const getEndDayOfWeek = (year, zc) => {
    let weekList = whichWeek(year);
    let weekInfo = weekList[zc - 1];
    let endDay = new Date().setFullYear(weekInfo.end.year, weekInfo.end.month - 1, weekInfo.end.date);
    return new Date(endDay);
}

//计算当前日期是本年第几周
const getYearWeek = (endDate) => {
    //本年的第一天
    let beginDate = new Date(endDate.getFullYear(), 0, 1);
    //星期从0-6,0代表星期天，6代表星期六
    let endWeek = endDate.getDay();
    if (endWeek == 0) endWeek = 7;
    let beginWeek = beginDate.getDay();
    if (beginWeek == 0) beginWeek = 7;
    //计算两个日期的天数差
    let millisDiff = endDate.getTime() - beginDate.getTime();
    let dayDiff = Math.floor((millisDiff + (beginWeek - endWeek) * (24 * 60 * 60 * 1000)) / 86400000);
    return Math.ceil(dayDiff / 7) + 1;
}

//计算两个日期的天数差
const getBetweenDays = (beginDate, endDate) => {
    let millisDiff = beginDate.getTime() - endDate.getTime();
    return Math.floor(millisDiff / (24 * 60 * 60 * 1000));
}




export { dateFormat, ymdDateFormat, whichWeek, getEndDayOfWeek, getYearWeek, getAge, getBetweenDays }
