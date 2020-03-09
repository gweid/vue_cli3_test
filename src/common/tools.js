/**
 * @desc 对象Key排序并生成key=value&
 * @param {Object} jsonObj 排序对象
 * @param {Boolean} isSort 是否排序
 */
function jsonSort(jsonObj, isSort = true) {
    let arr = [];
    for (var key in jsonObj) {
        arr.push(key);
    }
    isSort && arr.sort();
    let str = '';
    for (var i in arr) {
        // 过滤掉 Array.prototype.xxx进去的字段
        if (arr.hasOwnProperty(i)) str += arr[i] + '=' + jsonObj[arr[i]] + '&';
    }
    return str.substr(0, str.length - 1);
}

export {
    jsonSort, //对象Key排序并生成key=value&
};