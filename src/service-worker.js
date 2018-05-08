/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
    name: 'ionic-cache'
};

// pre-cache our key assets  预缓存我们的关键资源
self.toolbox.precache(
    [
        './build/main.js',
        './build/main.css',
        './build/polyfills.js',
        'index.html',
        'manifest.json'
    ]
);

// dynamically cache any other local assets 动态地缓存其他本地资源
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache, 如果你处于离线脱机状态，那么对任何的其他请求，
// and then only use that cached resource if your user goes offline 比如是转到网络的，缓存的，或者仅仅只是使用都将访问已缓存的资源。
self.toolbox.router.default = self.toolbox.networkFirst;
