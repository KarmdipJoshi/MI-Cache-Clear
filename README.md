# Cache Reload

[![N|Solid](https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/18637978201551942629-128.png)](https://www.npmjs.com/package/mi-cache-reload)
### Description
<p>Cache Reload is for reloading cache file.</p>
<p>Cache Reload can be used in <b>PWA</b>. It use <b>Service Worker</b> to reload cache.</p>
<p><b>Best use: </b>Reload cache everytime new build is updated.</p>

### Installation

```sh
$ npm install mi-cache-reload
```


### How to Use

```sh
import cacheReload from "mi-cache-reload"
```
Call below function in your main.js OR index.js
```sh
cacheReload()
```
Option (Optional)
```sh
cacheReload({
    cacheReloadServiceWorker: true, //reload new cache after cache clear
    reload: true, //reload page after cache clear
})
```
Add script in package.json
```sh
"generate-meta-version": "node ./node_modules/mi-cache-reload/meta.js",
"prebuild": "npm run generate-meta-version",
"prebuild:staging": "npm run generate-meta-version",
"prebuild:production": "npm run generate-meta-version"
```


License
----

MIT


**Copyright © 2019 Mindinvetory**
