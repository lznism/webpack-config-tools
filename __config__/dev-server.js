const os = require('os');

function localIP() {
    let interfaces = os.networkInterfaces();
    let keys = Object.keys(interfaces);
    let keysLen = keys.length;
    let localFace, ip;

    for(let i=0; i<keysLen; i++) {
        if(keys[i] === '本地连接') {
            localFace = interfaces[keys[i]];
            break;
        }
    }

    for(let i=0; i<localFace.length; i++) {
        if(localFace[i].family === 'IPv4') {
            ip = localFace[i].address;
            break;
        }
    }

    return ip;
}

module.exports = {
    host: localIP()
}