#!/usr/bin/env node

const fs = require('fs');
let version = {
    version: Date.now().toString()
};

let data = JSON.stringify(version);
fs.writeFileSync('./public/meta.json', data);
