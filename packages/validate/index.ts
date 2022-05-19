/* 
 * @Description: 正则校验
 * @FilePath: /tjl-sdk/packages/utils/validate/index.ts
 */

/**
 * @description: 是否包含当前用户名
 * @author: yushixin
 * @example 
 * isvalidUsername("admin") => true
 */
export const isvalidUsername = (str: string): boolean => {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @description: 邮箱格式
 * @author: yushixin
 * @example 
 * isEmail("123456789@qq.com") => true
 */
export const isEmail = (email: string) => {
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * @description: 手机号码验证
 * @author: yushixin
 * @example 
 * isMobilel('18402998114') => true
 */
export const isMobile = (mobile: string): boolean => {
  return /^1[3-9]\d{9}$/.test(mobile)
}

/**
 * @description: 电话号码验证
 * @author: yushixin
 * @example 
 * isPhone('029-1234567') => true
 */
export const isPhone = (phonel: string): boolean => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phonel)
}

/**
 * @description: 全部为小写字母
 * @author: yushixin
 * @example 
 * isLowerCasel('adsgagafg') => true
 */
export const isLowerCasel = (str: string): boolean => {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @description: 全部为大写字母
 * @author: yushixin
 * @example 
 * isUpperCasel('ASDSDG') => true
 */
export const isUpperCasel = (str: string): boolean => {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @description: 全部为大小写混合字母
 * @author: yushixin
 * @example 
 * isAlphabetsl('adsaASEFDGFE') => true
 */
export const isAlphabetsl = (str: string): boolean => {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @description: 验证pad还是pc,pad返回true,pc返回false
 * @author: yushixin
 * @param userAgentInfo: navigator.userAgent
 * @example 
 * isPc('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36') => true
 */
export const isPc = (userAgentInfo: string): boolean => {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgentInfo) ? true : false
}

/**
 * @description: 判断身份证号码
 * @author: yushixin
 * @example 
 * cardidl("610422199508232211") => true
 */
export const isCardid = (code: string): { errorMessage: string, isPass: boolean } => {
  // 身份证号前两位代表区域
  const city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 ',
  };
  const idCardReg = /^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i // 身份证格式正则表达式
  let errorMessage = '' // 错误提示信息
  let isPass = true // 身份证验证是否通过（true通过、false未通过）

  // 如果身份证不满足格式正则表达式
  if (!code) {
    errorMessage = '请输入身份证号码'
    isPass = false;
  } else if (!code.match(idCardReg)) {
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  } else if (!city[code.substr(0, 2)]) {
    // 区域数组中不包含需验证的身份证前两位
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  } else if (code.length === 18) {
    // 18位身份证需要验证最后一位校验位
    const codeStr = code.split('')
    // ∑(ai×Wi)(mod 11)
    // 加权因子
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 校验位
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    let ai = 0
    let wi = 0
    for (let i = 0; i < 17; i++) {
      ai = parseInt(codeStr[i])
      wi = factor[i]
      sum += ai * wi // 开始计算并相加
    }
    const last = parity[sum % 11] // 求余
    if (last.toString() !== codeStr[17]) {
      errorMessage = '请输入正确的身份证号码'
      isPass = false
    }
  }
  return {
    errorMessage,
    isPass
  }
}

/**
 * @description: 判断姓名是否正确
 * @author: yushixin
 * @example 
 * validatenamel("张三") => true
 */
export const isName = (name: string): boolean => {
  const regName = /^[\u4e00-\u9fa5]{2,4}$/
  if (!regName.test(name)) return false
  return true
}

/**
 * @description: 判断是整数还是小数
 * @author: yushixin
 * @return: boolean
 * @example 
 * isInteger(123) => true
 */
export const isInteger = (num: string): boolean => {
  return /^-?\d+$/.test(num) ? true : false
}

/**
 * @description: 判断是否是ip
 * @author: tujianglin
 * @example 
 * isIP('123')
 */
export const isIP = (ip: string): boolean => {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return reg.test(ip);
}

/**
 * @description: 判断是否是中文
 * @author: tujianglin
 * @example 
 * isChina('123') => false
 */
export const isChina = (value: string): boolean => {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(value);
}

/**
 * @description: 判断是否是固定电话
 * @author: tujianglin
 * @example 
 * isTel('123') => false
 */
 export const isTel = (value: string): boolean => {
  const reg = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/;
	return reg.test(value);
}


