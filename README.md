# tjl-sdk

工具组件库基础模板

## 自动化生成方法
```
npm run new function
```


## API 目录

###  时间戳方法

- [timeToDate](#timeToDate)  时间戳转日期方法

###  类型判断

- [is](#is)  类型判断
- [isDef](#isDef)  不是 undefined
- [isUnDef](#isUnDef)  是 undefined
- [isObject](#isObject)  是否是 object 类型
- [isEmpty](#isEmpty)  是否为空
- [isDate](#isDate)  是否为 Date 类型
- [isNull](#isNull)  是否为 null 类型
- [isNullAndUnDef](#isNullAndUnDef)  是null和undefined
- [isNullOrUnDef](#isNullOrUnDef)  是null或undefined
- [isNumber](#isNumber)  是否是 number 类型
- [isPromise](#isPromise)  是否是 Promise 对象
- [isString](#isString)  是否是 string 类型
- [isFunction](#isFunction)  是否是 function 类型
- [isBoolean](#isBoolean)  是否是 boolean 类型
- [isRegExp](#isRegExp)  是否是 regexp 类型
- [isArray](#isArray)  是否是 array 类型
- [isWindow](#isWindow)  是否是 window 对象
- [isElement](#isElement)  是否是 element 元素
- [isMap](#isMap)  是否是 Map 对象
- [isUrl](#isUrl)  是否是 url 路径

###  文档方法

- [previewFile](#previewFile)  预览文本(可扩展其他预览)

###  普通方法

- [add](#add)  两数字相加

###  正则校验

- [isvalidUsername](#isvalidUsername)  是否包含当前用户名
- [isEmail](#isEmail)  邮箱格式
- [isMobile](#isMobile)  手机号码验证
- [isPhone](#isPhone)  电话号码验证
- [isLowerCasel](#isLowerCasel)  全部为小写字母
- [isUpperCasel](#isUpperCasel)  全部为大写字母
- [isAlphabetsl](#isAlphabetsl)  全部为大小写混合字母
- [isPc](#isPc)  验证pad还是pc,pad返回true,pc返回false
- [isCardid](#isCardid)  判断身份证号码
- [isName](#isName)  判断姓名是否正确
- [isInteger](#isInteger)  判断是整数还是小数

## API 说明

### timeToDate
              
 时间戳转日期方法

```javascript
 
 * timeToDate(1650764013237,{d: '天', h: '时', m: '分', s: '秒'}) => '2天6时55分21秒'
 
```

### is
              
 类型判断

```javascript
 
 * is(参数, 类型)
 
```

### isDef
              
 不是 undefined

```javascript
 
 * isDef('aaa') // true
 
```

### isUnDef
              
 是 undefined

```javascript
 
 * isUnDef('aaa') // false
 
```

### isObject
              
 是否是 object 类型

```javascript
 
 * isObject({}) // true
 
```

### isEmpty
              
 是否为空

```javascript
 
 * isEmpty(1) // true
 
```

### isDate
              
 是否为 Date 类型

```javascript
 
 * isDate(new Date) // true
 
```

### isNull
              
 是否为 null 类型

```javascript
 
 * isNull(null) // true
 
```

### isNullAndUnDef
              
 是null和undefined

```javascript
 
 * isNullAndUnDef
 
```

### isNullOrUnDef
              
 是null或undefined

```javascript
 
 * isNullOrUnDef
 
```

### isNumber
              
 是否是 number 类型

```javascript
 
 * isNumber(1) // true
 
```

### isPromise
              
 是否是 Promise 对象

```javascript
 
 * isPromise(new Promise) // true
 
```

### isString
              
 是否是 string 类型

```javascript
 
 * isString('') // true
 
```

### isFunction
              
 是否是 function 类型

```javascript
 
 * isFunction(new Function) // true
 
```

### isBoolean
              
 是否是 boolean 类型

```javascript
 
 * isBoolean(true) // true
 
```

### isRegExp
              
 是否是 regexp 类型

```javascript
 
 * isRegExp(new RegExp) // true
 
```

### isArray
              
 是否是 array 类型

```javascript
 
 * isArray([]) // true
 
```

### isWindow
              
 是否是 window 对象

```javascript
 
 * isWindow(window) // true
 
```

### isElement
              
 是否是 element 元素

```javascript
 
 * isElement(element) // true
 
```

### isMap
              
 是否是 Map 对象

```javascript
 
 * isMap(new Map) // true
 
```

### isUrl
              
 是否是 url 路径

```javascript
 
 * isUrl('https//') // true
 
```

### previewFile
              
 预览文本(可扩展其他预览)

```javascript

 * previewFile({url: 'http://xxx.xxx/xx.txt', type: 'txt'})
 
```

### add
              
 两数字相加

```javascript
 
 * add(1, 2) => 3
 
```

### isvalidUsername
              
 是否包含当前用户名

```javascript
 
 * isvalidUsername("admin") => true
 
```

### isEmail
              
 邮箱格式

```javascript
 
 * isEmail("123456789@qq.com") => true
 
```

### isMobile
              
 手机号码验证

```javascript
 
 * isMobilel('18402998114') => true
 
```

### isPhone
              
 电话号码验证

```javascript
 
 * isPhone('029-1234567') => true
 
```

### isLowerCasel
              
 全部为小写字母

```javascript
 
 * isLowerCasel('adsgagafg') => true
 
```

### isUpperCasel
              
 全部为大写字母

```javascript
 
 * isUpperCasel('ASDSDG') => true
 
```

### isAlphabetsl
              
 全部为大小写混合字母

```javascript
 
 * isAlphabetsl('adsaASEFDGFE') => true
 
```

### isPc
              
 验证pad还是pc,pad返回true,pc返回false

```javascript
 
 * isPc('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36') => true
 
```

### isCardid
              
 判断身份证号码

```javascript
 
 * cardidl("610422199508232211") => true
 
```

### isName
              
 判断姓名是否正确

```javascript
 
 * validatenamel("张三") => true
 
```

### isInteger
              
 判断是整数还是小数

```javascript
 
 * isInteger(123) => true
 
```
