// 保留小数点位数方法
export const roundingFixed = function (val, fractionDigits = 2) {
    if (val != null) {
        return val.toFixed(fractionDigits)
    } else {
        return val;
    }
}
