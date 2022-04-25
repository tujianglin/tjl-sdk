# tjl-sdk

工具组件库基础模板

## 自动化生成方法
```
npm run new function
```

## 基础使用
``` javascript
// 使用方法
import { add } from 'tjl-sdk'
add(1, 2)
```


## API 目录

###  时间方法

- [day](#day)  时间(可扩展其他预览)

###  文档方法

- [previewFile](#previewFile)  预览文本(可扩展其他预览)

###  普通方法

- [add](#add)  两数字相加

## API 说明

### day
              
 时间(可扩展其他预览)

```javascript
* previewFile({url: 'http://xxx.xxx/xx.txt', type: 'txt'})
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
