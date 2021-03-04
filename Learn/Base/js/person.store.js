/**
 * 返回类型 结果首字母大写
 * @param {*} param 
 */
const returnType = (param) => {
    return Object.prototype.toString.call(param).slice(8, -1)
}
/**
 * 判断是不是字符串
 * @param {*} str 要判断的字符串 
 */
const isStringType = (str) => {
    return typeof str === 'string'
}
/**
 * 判断是不是数组
 * @param {*} arr 
 */
const isArrayType = (arr) => {
    return returnType(arr) === 'Array'
}
/**
 * 判断是不是对象
 * @param {*} obj 
 */
const isObjectType = obj => {
    return returnType(obj) === 'Object'
}
/**
 * 判断是不是函数
 * @param {*} fn 
 */
const isFunctionType = fn => {
    return returnType(fn) === 'Function'
}
/**
 * 判断是不是数值  此处不能判断NaN
 * @param {*} num 
 */
const isNumberType = num => {
    return returnType(num) === 'Number'
}
/**
 * 判断是不是布尔值
 * @param {*} bool 
 */
const isBooleanType = bool => {
    return returnType(bool) === 'Boolean'
}
/**
 * 浅拷贝
 * @param {*} param 
 */
const lightCopy = param => {
    return param
}
/**
 * 
 * @param {*} param 
 */
const deepCopy = param => {
    if (isObjectType(param)) {
        for (let key in param) {

        }
        while (true) {

        }
    }
}
