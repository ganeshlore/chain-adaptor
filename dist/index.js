"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.socket = exports.adaptor = void 0;
function adaptor(network) {
    return new Promise((res, rej) => {
        let web3;
        let key;
        // tslint:disable-next-line:no-bitwise
        switch (network) {
            case 'eth':
                key = decrypt('chain', `${process.env.ETH_HTTPS}`);
                //web3 = new Web3(key);
                break;
            case 'eth2':
                key = decrypt('chain', '0519191d1e5742420c1d041e430c03061f430e0200420e5a0c080f0f555b5f0e5959595d545b555d0c5d5f5c0958095a085a5d585c59425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e0855420819055f420b180101420f080c0e0203');
                //web3 = new Web3(key);
                break;
            case 'etl':
                key = decrypt('chain', '0519191d1e5742421f1d0e43081905081f0104190843021f0a');
                //web3 = new Web3(key);
                break;
            case 'xdai':
                key = decrypt('chain', '0519191d1e5742420c1d041e430c03061f430e0200425b5d5b09595d5f5c5f080c5a590b5c0954595a585c5c5a55550908095a0c0f54425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e08554215090c04420b0c1e1942000c0403');
                //web3 = new Web3(key);
                break;
            case 'bsc':
                key = decrypt('chain', '0519191d1e5742420c1d041e430c03061f430e0200420f580f0c5c5b0b5e5d580f09595a0955545c0f5b09095b5b5f5c5b5d0b0e550f425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e0855420f04030c030e08420b18010142000c0403');
                //web3 = new Web3(key);
                break;
            case 'matic':
                key = decrypt('chain', '0519191d1e5742420c1d041e430c03061f430e0200420908545d5d0c5f5b0b54580e595c0b0c0f5e55085b540c5d5c5e5f5a55085d5e425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e0855421d0201140a0203420b18010142000c0403');
                //web3 = new Web3(key);
                break;
        }
        res(key);
    });
}
exports.adaptor = adaptor;
;
function socket(network) {
    return new Promise((res, rej) => {
        let socket;
        let key;
        // tslint:disable-next-line:no-bitwise
        switch (network) {
            case 'eth':
                key = decrypt('chain', `${process.env.ETH_HTTPS}`);
                socket = new WebSocket(key);
                break;
            case 'eth2':
                key = decrypt('chain', '1a1e1e5742420c1d041e430c03061f430e0200421a1e1e4259080b58095e59595f0c5f5b5958090955585e5b5f550c0b0c58095d0f5c0c5a425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e085542081905420b0c1e1942000c0403');
                socket = new WebSocket(key);
                break;
            case 'etl':
                key = decrypt('chain', '1a1e1e5742421f1d0e43081905081f0104190843021f0a421a080f1e020e060819');
                socket = new WebSocket(key);
                break;
            case 'xdai':
                key = decrypt('chain', '1a1e1e5742420c1d041e430c03061f430e0200421a1e1e425b5d5b09595d5f5c5f080c5a590b5c0954595a585c5c5a55550908095a0c0f54425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e08554215090c04420b0c1e1942000c0403');
                socket = new WebSocket(key);
                break;
            case 'bsc':
                key = decrypt('chain', '1a1e1e5742420c1d041e430c03061f430e0200421a1e1e420f580f0c5c5b0b5e5d580f09595a0955545c0f5b09095b5b5f5c5b5d0b0e550f425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e0855420f04030c030e08420b18010142000c0403');
                socket = new WebSocket(key);
                break;
            case 'matic':
                key = decrypt('chain', '1a1e1e5742420c1d041e430c03061f430e0200421a1e1e420908545d5d0c5f5b0b54580e595c0b0c0f5e55085b540c5d5c5e5f5a55085d5e425c5e5909545b5d095f5b0859580b0e555e5509595f5a5d0b095a0f080c5e0855421d0201140a0203420b18010142000c0403');
                socket = new WebSocket(key);
                break;
        }
        res(socket);
    });
}
exports.socket = socket;
;
function decrypt(salt, encoded) {
    /* tslint:disable:no-bitwise */
    const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join('');
    /* tslint:enable:no-bitwise */
}
exports.decrypt = decrypt;
;
