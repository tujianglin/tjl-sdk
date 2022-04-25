# tjl-sdk

工具组件库基础模板

## 自动化生成方法
```
npm run new function
```


## API 目录

###  文档方法

- [previewFile](#previewFile)  预览文本(可扩展其他预览)

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

## API 说明

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
