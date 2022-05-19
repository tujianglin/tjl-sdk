import Cookies from 'js-cookie'
/* 
 * @Description: 本地缓存方法
 * @FilePath: /tjl-sdk/packages/storage/index.ts
 */

/**
 * @description: 操作localStorage缓存
 * @author: tujianglin
 * @example 
 * Local.set() // 设置永久缓存
 * Local.get() // 获取永久缓存
 * Local.remove() // 移除永久缓存
 * Local.clear() // 移除全部永久缓存
 */

export const Local = {
  /**
   * 设置永久缓存
   * @param key
   * @param val
   */
  set(key: string, val: any) {
    window.localStorage.setItem(key, typeof val == 'string' ? val : JSON.stringify(val));
  },
  /**
   * 获取永久缓存
   * @param key
   * @returns
   */
  get(key: string) {
    try {
      const value = window.localStorage.getItem(key);
      if (value === null || value === undefined || value === '') {
        return null;
      }
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  },
  /**
   * 移除永久缓存
   * @param key
   */
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  /**
   * 移除全部永久缓存
   */
  clear() {
    window.localStorage.clear();
  },
};

/**
 * @description: 操作session缓存
 * @author: tujianglin
 * @example 
 * Session.set() // 设置session缓存
 * Session.get() // 获取session缓存
 * Session.remove() // 移除session缓存
 * Session.clear() // 移除全部永久缓存
 */
export const Session = {
  /**
   * 设置session缓存
   * @param key
   * @param val
   */
  set(key: string, val: any) {
    window.sessionStorage.setItem(key, typeof val == 'string' ? val : JSON.stringify(val));
  },
  /**
   * 获取session缓存
   * @param key
   * @returns
   */
  get(key: string) {
    try {
      const value = sessionStorage.getItem(key);
      if (value === null || value === undefined || value === '') {
        return null;
      }
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  },
  /**
   * 移除session缓存
   * @param key
   */
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  /**
   * 移除全部永久缓存
   */
  clear() {
    window.localStorage.clear();
  },
};

/**
 * @description: 操作cookie缓存
 * @author: tujianglin
 * @example 
 * Cookie.get() // 获取cookie缓存
 * Cookie.set() // 设置cookie缓存
 * Cookie.remove() // 删除cookie缓存
 */
export const Cookie = {
  /**
   * 获取cookie缓存
   * @param key 
   */
  get(key: string) {
    return Cookies.get(key);
  },
  /**
   * 设置cookie缓存
   * @param key 
   * @param value 
   */
  set(key: string, val: any) {
    Cookies.set(key, val);
  },
  /**
   * 删除cookie缓存
   * @param key 
   */
  remove(key: string) {
    Cookies.remove(key);
  },
};