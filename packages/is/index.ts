/* 
 * @Description: 类型判断
 * @FilePath: /tjl-sdk/packages/is/index.ts
 */


const toString = Object.prototype.toString

/**
 * @description: 类型判断
 * @author: tujianglin
 * @example 
 * is(参数, 类型)
 */
export const is = (val: unknown, type: string) => {
  return toString.call(val) === `[object ${type}]`
}


/**
 * @description: 不是 undefined
 * @author: tujianglin
 * @example 
 * isDef('aaa') // true
 */
export const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== 'undefined';
}

/**
 * @description: 是 undefined
 * @author: tujianglin
 * @example 
 * isUnDef('aaa') // false
 */
export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val);
}

/**
 * @description: 是否是 object 类型
 * @author: tujianglin
 * @example 
 * isObject({}) // true
 */
export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object');
}

/**
 * @description: 是否为空
 * @author: tujianglin
 * @example 
 * isEmpty(1) // true
 */
export const isEmpty = <T = unknown>(val: T): val is T => {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

/**
 * @description: 是否为 Date 类型
 * @author: tujianglin
 * @example 
 * isDate(new Date) // true
 */
export const isDate = (val: unknown): val is Date => {
  return is(val, 'Date');
}

/**
 * @description: 是否为 null 类型
 * @author: tujianglin
 * @example 
 * isNull(null) // true
 */
export const isNull = (val: unknown): val is null => {
  return val === null;
}

/**
 * @description: 是null和undefined
 * @author: tujianglin
 * @example 
 * isNullAndUnDef
 */
export const isNullAndUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) && isNull(val);
}

/**
 * @description: 是null或undefined
 * @author: tujianglin
 * @example 
 * isNullOrUnDef
 */
export const isNullOrUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) || isNull(val);
}

/**
 * @description: 是否是 number 类型
 * @author: tujianglin
 * @example 
 * isNumber(1) // true
 */
export const isNumber = (val: unknown): val is number => {
  return is(val, 'Number');
}

/**
 * @description: 是否是 Promise 对象
 * @author: tujianglin
 * @example 
 * isPromise(new Promise) // true
 */
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * @description: 是否是 string 类型
 * @author: tujianglin
 * @example 
 * isString('') // true
 */
export const isString = (val: unknown): val is string => {
  return is(val, 'String');
}

/**
 * @description: 是否是 function 类型
 * @author: tujianglin
 * @example 
 * isFunction(new Function) // true
 */
export const isFunction = (val: unknown): val is Function => {
  return typeof val === 'function';
}

/**
 * @description: 是否是 boolean 类型
 * @author: tujianglin 
 * @example 
 * isBoolean(true) // true
 */
export const isBoolean = (val: unknown): val is boolean => {
  return is(val, 'Boolean');
}

/**
 * @description: 是否是 regexp 类型
 * @author: tujianglin
 * @example 
 * isRegExp(new RegExp) // true
 */
export const isRegExp = (val: unknown): val is RegExp => {
  return is(val, 'RegExp');
}

/**
 * @description: 是否是 array 类型
 * @author: tujianglin
 * @example 
 * isArray([]) // true
 */
export const isArray = (val: any): val is Array<any> => {
  return val && Array.isArray(val);
}

/**
 * @description: 是否是 window 对象
 * @author: tujianglin
 * @example 
 * isWindow(window) // true
 */
export const isWindow = (val: any): val is Window => {
  return typeof window !== 'undefined' && is(val, 'Window');
}

/**
 * @description: 是否是 element 元素
 * @author: tujianglin
 * @example 
 * isElement(element) // true
 */
export const isElement = (val: unknown): val is Element => {
  return isObject(val) && !!val.tagName;
}

/**
 * @description: 是否是 Map 对象
 * @author: tujianglin
 * @example 
 * isMap(new Map) // true
 */
export const isMap = (val: unknown): val is Map<any, any> => {
  return is(val, 'Map');
}

/**
 * @description: 是否是 url 路径
 * @author: tujianglin
 * @example 
 * isUrl('https//') // true
 */
export const isUrl = (path: string): boolean => {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

/**
 * @description: 是否是JSON
 * @author: tujianglin
 * @example 
 * isJson('{}') // true
 */
export const isJson = (value: string): boolean => {
  if (typeof value == 'string') {
    try {
      const obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

