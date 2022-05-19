import CryptoJS from 'crypto-js'

// 密钥(长度必须16位)
const KEY = CryptoJS.enc.Utf8.parse('jMVCBsFGDQr1USHo')
// 初始向量(长度随意)
const IV = CryptoJS.enc.Utf8.parse('O2BEeIv399qHQNhD6aGW8R8DEj4bqHXm')

/* 
 * @Description: 加密方法
 * @FilePath: /tjl-sdk/packages/aes/index.ts
 */

/**
 * @description: AES加密
 * @author: tujianglin
 * @example 
 * Encrypt(参数1: 加密数据, 参数2: 密钥(长度必须16位), 参数3: 初始向量(长度随意))
 */

export const Encrypt = (str: any, keyStr: string, ivStr: string): any => {
  let key = KEY
  let iv = IV
  if (keyStr && ivStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr);
    iv = CryptoJS.enc.Utf8.parse(ivStr);
  }
  const srcs = CryptoJS.enc.Utf8.parse(str);
  const encrypt = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC, //这里可以选择AES加密的模式
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Base64.stringify(encrypt.ciphertext);
};

/**
 * @description: AES解密
 * @author: tujianglin
 * @example 
 * Encrypt(参数1: 加密数据, 参数2: 密钥(长度必须16位), 参数3: 初始向量(长度随意))
 */

export const Decrypt = (str: any, keyStr: string, ivStr: string): any => {
  let key = KEY;
  let iv = IV;
  if (keyStr && ivStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr);
    iv = CryptoJS.enc.Utf8.parse(ivStr);
  }
  const base64 = CryptoJS.enc.Base64.parse(str);
  const src = CryptoJS.enc.Base64.stringify(base64);
  const decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC, //这里可以选择AES解密的模式
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};