import React from 'react';
import {ApiModule} from '../module/ApiModule';

const defaultConfig = {
  baseURL: 'http://dev.mindertech.net/',
  headers: {
    // 设置content-type 为表单提交格式
    'Content-type': 'application/x-www-form-urlencoded',
    // 设置请求方式
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json, text/plain, */*',
  },
};

function convertUrl(url) {
  let realUrl = defaultConfig.baseURL + url;
  if (ApiModule.isDebug) {
    console.log('request: ' + realUrl);
  }
  return realUrl;
}

async function fetchRequest(url, method, body) {
  return new Promise(function(resolve, reject) {
    fetch(convertUrl(url), {
      method: method,
      headers: defaultConfig.headers,
      body: body,
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        if (ApiModule.isDebug) {
          console.error('request error: ' + error);
        }
        reject(error);
      });
  });
}

export default fetchRequest;
