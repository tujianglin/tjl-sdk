import dayjs from 'dayjs';

/* 
 * @Description: 时间戳方法
 * @FilePath: /tjl-sdk/packages/date/index.ts
 */

/**
 * @description: 时间戳转日期方法
 * @author: yushixin
 * @param date: 13位时间戳字符串
 * @return: String
 * @example 
 * timeToDate(1650764013237,{d: '天', h: '时', m: '分', s: '秒'}) => '2天6时55分21秒'
 */
export const timeToDate = (date: number, { d, h, m, s }): string => dayjs(date).format('DD' + d + 'HH' + h + 'mm' + m + 'ss' + s)





