
import { isEmpty } from 'lodash-es'
/* 
 * @Description: 操作dom元素
 * @FilePath: /tjl-sdk/packages/dom/index.ts
 */

/**
 * @description: 获取 dom 元素
 * @author: tujianglin
 * @example 
 * $('#app') 
 */
export const $ = (id: string): Element => document.querySelector(id);

/**
 * @description: 获取浏览器宽度
 * @author: tujianglin
 * @example 
 * getWinW
 */
export const getWinW = () => document.documentElement.clientWidth;

/**
 * @description: 获取浏览器高度
 * @author: tujianglin
 * @example 
 * getWinH
 */
export const getWinH = () => document.documentElement.clientHeight;

/**
 * @description: 判断元素是否存在className
 * @author: tujianglin
 * @example 
 * hasClass(dom元素, class名称)
 */
export const hasClass = (el: Element, className: string): boolean => {
  const reg = new RegExp('(^|\\s+)' + className + '(\\s+|$)');
  return reg.test(el.className);
};

/**
 * @description: 给元素添加className
 * @author: tujianglin
 * @example 
 * addClass(dom元素, class名称)
 */
export const addClass = (el: Element, className: string): void => {
  if (isEmpty(el) || hasClass(el, className)) {
    return;
  }
  const newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}

/**
 * @description: 删除元素className
 * @author: tujianglin
 * @example 
 * removeClass(dom元素, class名称)
 */
export const removeClass = (el: Element, className: string): void => {
  //将className属性转为数组
  const classArr = el.className.split(' '),
    index = classArr.indexOf(className);
  //将符合条件的class类删除
  index > -1 ? classArr.splice(index, 1) : null;
  el.className = classArr.join(' ');
}
