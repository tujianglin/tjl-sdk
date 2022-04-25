/**
 * @description: 是否包含当前用户名
 * @author: yushixin
 * @param str: 用户名
 * @return: boolean
 * @example 
 * isvalidUsernamel("admin") => true
 * isvalidUsernamel("123") => false
 */
export const isvalidUsernamel = (str: string): boolean => {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @description: 合法uri
 * @author: yushixin
 * @param textval: 网址
 * @return: boolean
 * @example 
 * validateURLl("https://www.baidu.com/") => true
 * validateURLl("www.baidu.com/") => false
 */
export const validateURLl = (textval: string): boolean => {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}

/**
 * @description: 邮箱验证
 * @author: yushixin
 * @param email: 邮箱格式
 * @return: boolean
 * @example 
 * isEmaill('123456789@qq.com') => true/false
 */
export const isEmaill = (email: string): boolean => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)
}

/**
 * @description: 手机号码验证
 * @author: yushixin
 * @param mobilel: 手机号
 * @return: boolean
 * @example 
 * isMobilel('18402998114') => true
 */
export const isMobilel = (mobilel: string): boolean => {
    return /^1[0-9]{10}$/.test(mobilel)
}

/**
 * @description: 电话号码验证
 * @author: yushixin
 * @param phonel: 电话号码
 * @return: boolean
 * @example 
 * isPhonel('029-1234567') => true
 */
export const isPhonel = (phonel: string): boolean => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phonel)
}

/**
 * @description: URL地址
 * @author: yushixin
 * @param url: url链接
 * @return: boolean
 * @example 
 * isURLl('https://www.badu.com') => true
 */
export const isURLl = (url: string): boolean => {
    return /^http[s]?:\/\/.*/.test(url)
}

/**
 * @description: 全部为小写字母
 * @author: yushixin
 * @param str: 字符串
 * @return: boolean
 * @example 
 * validateLowerCasel('adsgagafg') => true
 */
export const validateLowerCasel = (str: string): boolean => {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/**
 * @description: 全部为大写字母
 * @author: yushixin
 * @param str: 字符串
 * @return: boolean
 * @example 
 * validateUpperCasel('ASDSDG') => true
 */
export const validateUpperCasel = (str: string): boolean => {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/**
 * @description: 全部为大小写混合字母
 * @author: yushixin
 * @param str: 字符串
 * @return: boolean
 * @example 
 * validatAlphabetsl('adsaASEFDGFE') => true
 */
export const validatAlphabetsl = (str: string): boolean => {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

/**
 * @description: 验证pad还是pc,pad返回true,pc返回false
 * @author: yushixin
 * @return: boolean
 * @example 
 * vaildatePc() => true
 */
export const vaildatePc = () => {
    const userAgentInfo = navigator.userAgent
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
    let flag = true
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
        }
    }
    return flag
}

/**
 * @description: 邮箱格式
 * @author: yushixin
 * @param email: 字符串
 * @return: boolean
 * @example 
 * validateEmaill("123456789@qq.com") => true
 */
export const validateEmaill = (email: string) => {
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

/**
 * @description: 判断身份证号码
 * @author: yushixin
 * @param code: 字符串
 * @return: boolean
 * @example 
 * cardidl("610422199508232211") => true
 */
export const cardidl = (code: string) => {
    let list = []
    let result = true
    let msg = ''
    var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    }
    if (!validatenull(code)) {
        if (code.length == 18) {
            if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
                msg = "证件号码格式错误"
            } else if (!city[code.substr(0, 2)]) {
                msg = "地址编码错误"
            } else {
                //18位身份证需要验证最后一位校验位
                let codeStr = code.split('')
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
                //校验位
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x']
                var sum: number = 0
                var ai: any = 0
                var wi: number = 0
                for (var i = 0; i < 17; i++) {
                    ai = codeStr[i]
                    wi = factor[i]
                    sum += ai * wi
                }
                if (parity[sum % 11] != codeStr[17]) {
                    msg = "证件号码校验位错误"
                } else {
                    result = false
                }

            }
        } else {
            msg = "证件号码长度不为18位"
        }

    } else {
        msg = "证件号码不能为空"
    }
    list.push(result)
    list.push(msg)
    return list
}

/**
 * @description: 判断手机号码是否正确
 * @author: yushixin
 * @param phone: 字符串
 * @return: boolean
 * @example 
 * isvalidatemobilel(18402998114) => true
 */
export const isvalidatemobilel = (phone: string) => {
    let list = []
    let result = true
    let msg = ''
    var isPhone = /^0\d{2,3}-?\d{7,8}$/
    //增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]  
    if (!validatenull(phone)) {
        if (phone.length == 11) {
            if (isPhone.test(phone)) {
                msg = '手机号码格式不正确'
            } else {
                result = false;
            }
        } else {
            msg = '手机号码长度不为11位'
        }
    } else {
        msg = '手机号码不能为空'
    }
    list.push(result)
    list.push(msg)
    return list
}

/**
 * @description: 判断姓名是否正确
 * @author: yushixin
 * @param name: 字符串
 * @return: boolean
 * @example 
 * validatenamel("张三") => true
 * validatenamel("张三asdfds") => false
 */
export const validatenamel = (name: string) => {
    var regName = /^[\u4e00-\u9fa5]{2,4}$/
    if (!regName.test(name)) return false
    return true
}

/**
 * @description: 判断是整数还是小数
 * @author: yushixin
 * @param num: 字符串
 * @param type: 1：整数，2：小数
 * @return: boolean
 * @example 
 * validateNumOrNumoed(123,1) => true
 * validateNumOrNumoed(132.123,1) => false
 * validateNumOrNumoed(132.123,2) => true
 * validateNumOrNumoed(132,2) => false
 */
export const validateNumOrNumoed = (num: string, type: number) => {
    let regName = type === 1 ? /[^\d]/g : /[^\d.]/g
    let res = !regName.test(num) ? true : false
    return res
}

/**
 * @description: 判断是否为空
 * @author: yushixin
 * @param val: 对象
 * @return: boolean
 * @example 
 * validatenull(null/'null'/undefined/'undefined') => true
 * validatenull([]/{}) => true
 * validatenull(boolean/number) => false
 */
export const validatenull = (val: any) => {
    if (typeof val == 'boolean') {
        return false
    }
    if (typeof val == 'number') {
        return false
    }
    if (val instanceof Array) {
        if (val.length == 0) return true
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true
    } else {
        if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true
        return false
    }
    return false
}