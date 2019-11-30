"use strict";

let registerServiceWorker = require('./service-worker/registerServiceWorker')
var cacheReload= function (option={cacheReloadServiceWorker: true, localstorage: true, reload: true}) {
    fetch("/meta.json", {
        cache: 'no-store'
    }).then(function (response) {
        return response.json();
    }).then(function (meta) {
        const newVersion = meta.version;
        const currentVersion = localStorage.getItem("version")
        console.log(currentVersion, newVersion);
        if(currentVersion && currentVersion!== newVersion){
            console.log("New version available");
            caches.keys()
                .then(keyList =>
                    {
                        keyList.map(key => {
                            caches.delete(key);
                        })
                        if(option.cacheReloadServiceWorker){
                            console.log("Reload cache");
                            registerServiceWorker();
                        }
                        if(option.localstorage){
                            localStorage.clear()
                            sessionStorage.clear()
                        }
                        localStorage.setItem("version", newVersion)
                        if(option.reload){
                            console.log("Reload page");
                            window.location.reload(true);
                        }
                    }
                )

        }
        else if(!currentVersion){
            localStorage.setItem("version", newVersion)
        }
    });
};
module.exports = cacheReload;
