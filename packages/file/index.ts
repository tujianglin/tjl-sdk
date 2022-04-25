/* 
 * @Description: 文档方法
 * @FilePath: /tjl-sdk/packages/file/index.ts
 */

/**
 * @description: 预览文本(可扩展其他预览)
 * @author: tujianglin
 * @param param0
 * @return: Promise
 * @example
 * previewFile({url: 'http://xxx.xxx/xx.txt', type: 'txt'})
 */
export const previewFile = ({ url, type = 'txt' }: { url: string; type: string }): Promise<any> => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'blob';
    req.send();
    req.onload = () => {
      const blob = req.response;
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      reader.onload = (loadEvent) => {
        const buffer = loadEvent.target.result;
        switch (type) {
          case 'txt': {
            const txtReader = new FileReader();
            txtReader.onload = (txtEvent) => resolve(txtEvent.target.result);
            txtReader.onerror = (err) => reject(err);
            txtReader.readAsText(new Blob([buffer]), 'utf-8');
          }
          default:
            break;
        }
      };
    };
  });
};