import dayjs from "dayjs"

/**
 * 格式化时间戳（秒|毫秒）
 * @param {timestamp} value
 */
const formatTime = (value) => {
    value = value.toString();
    if (value) {
        if (value.length === 13) {
            return dayjs(Number(value)).format("YYYY-MM-DD HH:mm:ss");
        }
        return dayjs.unix(Number(value)).format("YYYY-MM-DD HH:mm:ss");
    } else {
        return '-';
    }
}

/**
 * 格式化银行卡 4位一空格
 * @param {*} bank 
 */
const formatBank = (bank) => {
    if (bank) {
        return val.toString().replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
    }
}

/**
 * 手机号格式化
 * @param {String} phone
 */
const formatPhone = (phone) => {
    phone = phone.toString();
    return phone.substr(0, 3) + '****' + phone.substr(7, 11);
};

/**
 * 格式化长度
 * @param {*} params 
 * @param {*} num 
 */
const formatLen = (params, num) => {
    if (params.length > num) {
        return (params = params.substring(0, num) + "...");
    } else {
        return params;
    }
}

export default {
    formatTime,
    formatBank,
    formatPhone,
    formatLen
}