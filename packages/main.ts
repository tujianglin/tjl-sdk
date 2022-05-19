/*
 * @Description: 
 * @FilePath: /tjl-sdk/packages/main.ts
 */
export {
  timeToDate
} from './date'

export { previewFile } from './file'

export {
  isvalidUsername,
  isEmail,
  isMobile,
  isPhone,
  isLowerCasel,
  isUpperCasel,
  isAlphabetsl,
  isPc,
  isCardid,
  isName,
  isInteger,
  isChina,
  isIP,
  isTel,
} from './validate'

export { is, isArray, isBoolean, isDate, isDef, isElement, isEmpty, isFunction, isMap, isNull, isNullAndUnDef, isNullOrUnDef, isNumber, isObject, isPromise, isRegExp, isString, isUnDef, isUrl, isWindow } from './is'

export { $, getWinH, getWinW, hasClass, addClass, removeClass } from './dom'

export { Local, Cookie, Session } from './storage'

export { Decrypt, Encrypt } from './aes'
