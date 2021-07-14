/**
 * 清空对象值
 * @params targetObj 被清空的对象
 * @params val       清空的值
 * */
export function clearObject(targetObj, val = undefined) {
  const newObject = targetObj;
  const keys = Object.keys(newObject) || [];
  keys.forEach((key) => {
    if (Object.prototype.toString.call(newObject) === '[object Array]') {
      newObject[key] = [];
    } else if ([null, '', 0, false].includes(newObject[key])) {
      const emptyObject = newObject[key];
      newObject[key] = emptyObject;
    } else {
      newObject[key] = val;
    }
  });
}

/**
 * 将 obj 对象的值赋值给 targetObject 中的已有属性
 * @params targetObject 新生成的对象
 * @params obj          被copy的对象
 * */
export function copyObject(targetObject, obj) {
  const newObject = JSON.parse(JSON.stringify(targetObject));
  const keys = Object.keys(targetObject) || [];
  keys.forEach((key) => {
    newObject[key] = obj[key];
  });
  return newObject;
}

/**
 * 字符串超过 num 位显示 ...
 * value   {String}   想改变的字符串
 * num     {Number}   想展示的位数
 */
export function spliceString(value, num) {
  if (value.length > num) {
    return `${value.substring(0, num)}...`;
  }
  return value;
}

/**
 * 不同格式时间类型数据转换成'yyyy-mm-dd HH:MM:SS'格式
 */
export function filterTimestamp(value, decollator = '-') {
  const date = new Date(value);
  const FullYear = date.getFullYear();
  const Month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const DateVal = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const Hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const Minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const Seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return value ? `${FullYear}${decollator}${Month}${decollator}${DateVal} ${Hours}:${Minutes}:${Seconds}` : null;
}

/**
 * 时间秒转时分秒
 * */
export function resultFormat(result) {
  const Hours = result / 3600;
  const Minutes = result / 60;
  const d = Math.floor(Hours / 24);
  const h = Math.floor(Hours % 24);
  const m = Math.floor(Minutes % 60);
  const s = Math.floor(result % 60);
  if (d > 0) {
    return `${d}天${h}小时${m}分${s}秒`;
  }
  if (h > 0) {
    return `${h}小时${m}分${s}秒`;
  }
  if (m > 0) {
    return `${m}分${s}秒`;
  }
  if (s > 0) {
    return `${s}秒`;
  }
  return '---';
}

/**
 * 枚举转换
 */
export function setStatusName(arr = [], value, val = 'value') {
  const findObj = arr.find((item) => item[val] === value);
  return findObj || {};
}

/**
 * 检验数据是否为空
 * @params obj 需要检验数据
 * return的值为 true, 则为空值
 * return的值为 false, 则有值
 * */
export function isEmpty(obj) {
  if ([null, undefined].includes(obj)) { // 检验null和undefined
    return true;
  }
  if (Object.prototype.toString.call(obj) === '[object Array]' && obj.length === 0) { // 检验数组
    return true;
  }
  if (Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).length === 0) { // 检验对象
    return true;
  }
  return false;
}
