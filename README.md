# MI Cache Reload

[![N|Solid](https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/18637978201551942629-128.png)](https://www.npmjs.com/package/mi-cache-reload)

### Installation

```sh
$ npm install mi-cache-reload
```


### How to Use

```sh
import cacheReload from "mi-cache-reload"
```
then call below function in your main.js OR index.js

```sh
cacheReload()
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
