import React, {Component} from 'react';
import {isDebug} from '../module/ApiModule';
import {View} from 'native-base';
import I18n from '../i18n/locales/index';

const locale = I18n.t('locale');

const defaultConfig = {
  baseURL: 'http://dev.mindertech.net/',
  headers: {
    // 设置content-type 为表单提交格式
    'Content-type': 'application/x-www-form-urlencoded',
    // 设置请求方式
    'X-Requested-With': 'XMLHttpRequest',
    'Accept-Language': {locale},
    'X-app-id': 'buyer',
    Accept: 'application/json, text/plain, */*',
  },
};

function convertUrl(url) {
  let realUrl = defaultConfig.baseURL + url;
  if (isDebug) {
    console.log('host: ' + defaultConfig.baseURL);
    console.log('url: ' + url);
  }
  return realUrl;
}

export function getFetchRequest(url, body) {
  if (body) {
    let str = '';
    for (var key in body) {
      str += '&' + key + '=' + body[key];
    }
    url = url + '?' + str.substr(1);
  }

  let promise = null;
  promise = new Promise(function(resolve, reject) {
    fetch(convertUrl(url), {
      method: 'GET',
      headers: defaultConfig.headers,
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        return response;
      })
      .then(responseJson => {
        resolve(responseJson);
        console.log(responseJson);
      })
      .catch(error => {
        if (isDebug) {
          console.error('request error: ' + error);
        }
        reject(error);
      });
  });
  return warp_fetch(promise);
}

export function fetchRequestAsync(url, method, body) {
  let promise = null;
  promise = new Promise(function(resolve, reject) {
    fetch(convertUrl(url), {
      method: method,
      headers: defaultConfig.headers,
      body: body,
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        resolve(responseJson);
        console.log(responseJson);
      })
      .catch(error => {
        if (isDebug) {
          console.error('request error: ' + error);
        }
        reject(error);
      });
  });
  return warp_fetch(promise);
}

/**
 * 创建两个promise对象，一个负责网络请求，另一个负责计时，如果超过指定时间，就会先回调计时的promise，代表网络超时。
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */
function warp_fetch(fetch_promise, timeout = 10000) {
  let timeout_fn = null;
  let abort = null;
  //创建一个超时promise
  let timeout_promise = new Promise(function(resolve, reject) {
    timeout_fn = function() {
      reject('网络请求超时');
    };
  });
  //创建一个终止promise
  let abort_promise = new Promise(function(resolve, reject) {
    abort = function() {
      reject('请求终止');
    };
  });
  //竞赛
  let abortable_promise = Promise.race([
    fetch_promise,
    timeout_promise,
    abort_promise,
  ]);
  //计时
  setTimeout(timeout_fn, timeout);
  //终止
  abortable_promise.abort = abort;
  return abortable_promise;
}
