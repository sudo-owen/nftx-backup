(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/uSP":function(e,t,n){const s=n("+qE3").EventEmitter,r=n("7tlc").inherits;function o(){s.call(this),this.isLocked=!0}e.exports=o,r(o,s),o.prototype.go=function(){this.isLocked=!1,this.emit("unlock")},o.prototype.stop=function(){this.isLocked=!0,this.emit("lock")},o.prototype.await=function(e){this.isLocked?this.once("unlock",e):setTimeout(e)}},EqmL:function(e,t,n){const s=n("ja2i"),r=n("t7TP");e.exports=class extends s{constructor(){super(({blockTracker:e,provider:t,engine:n})=>{const{events:s,middleware:o}=r({blockTracker:e,provider:t});return s.on("notification",e=>n.emit("data",null,e)),o})}}},Rlsf:function(e,t,n){const s=n("l1gh"),r=n("KWkM"),o=n("7tlc").inherits,a=n("/JJz"),i=n("FyGL"),c=n("U6jy"),u=n("odnP"),p=n("Uu7K"),d=n("a5O3"),l=/^[0-9A-Fa-f]+$/g;function h(e){const t=this;t.nonceLock=u(1),e.getAccounts&&(t.getAccounts=e.getAccounts),e.processTransaction&&(t.processTransaction=e.processTransaction),e.processMessage&&(t.processMessage=e.processMessage),e.processPersonalMessage&&(t.processPersonalMessage=e.processPersonalMessage),e.processTypedMessage&&(t.processTypedMessage=e.processTypedMessage),t.approveTransaction=e.approveTransaction||t.autoApprove,t.approveMessage=e.approveMessage||t.autoApprove,t.approvePersonalMessage=e.approvePersonalMessage||t.autoApprove,t.approveDecryptMessage=e.approveDecryptMessage||t.autoApprove,t.approveEncryptionPublicKey=e.approveEncryptionPublicKey||t.autoApprove,t.approveTypedMessage=e.approveTypedMessage||t.autoApprove,e.signTransaction&&(t.signTransaction=e.signTransaction||v("signTransaction")),e.signMessage&&(t.signMessage=e.signMessage||v("signMessage")),e.signPersonalMessage&&(t.signPersonalMessage=e.signPersonalMessage||v("signPersonalMessage")),e.decryptMessage&&(t.decryptMessage=e.decryptMessage||v("decryptMessage")),e.encryptionPublicKey&&(t.encryptionPublicKey=e.encryptionPublicKey||v("encryptionPublicKey")),e.signTypedMessage&&(t.signTypedMessage=e.signTypedMessage||v("signTypedMessage")),e.recoverPersonalSignature&&(t.recoverPersonalSignature=e.recoverPersonalSignature),e.publishTransaction&&(t.publishTransaction=e.publishTransaction),t.estimateGas=e.estimateGas||t.estimateGas,t.getGasPrice=e.getGasPrice||t.getGasPrice}function g(e){return e.toLowerCase()}function f(e){const t=a.addHexPrefix(e);return a.isValidAddress(t)}function m(e){const t=a.addHexPrefix(e);return!a.isValidAddress(t)&&y(e)}function y(e){return"string"==typeof e&&"0x"===e.slice(0,2)&&e.slice(2).match(l)}function v(e){return function(t,n){n(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+e+'" fn in constructor options'))}}e.exports=h,o(h,p),h.prototype.handleRequest=function(e,t,n){const r=this;let o,a,i,u,p;switch(r._parityRequests={},r._parityRequestCount=0,e.method){case"eth_coinbase":return void r.getAccounts((function(e,t){if(e)return n(e);n(null,t[0]||null)}));case"eth_accounts":return void r.getAccounts((function(e,t){if(e)return n(e);n(null,t)}));case"eth_sendTransaction":return o=e.params[0],void s([e=>r.validateTransaction(o,e),e=>r.processTransaction(o,e)],n);case"eth_signTransaction":return o=e.params[0],void s([e=>r.validateTransaction(o,e),e=>r.processSignTransaction(o,e)],n);case"eth_sign":return p=e.params[0],u=e.params[1],i=e.params[2]||{},a=c(i,{from:p,data:u}),void s([e=>r.validateMessage(a,e),e=>r.processMessage(a,e)],n);case"personal_sign":return function(){const t=e.params[0];if(m(e.params[1])&&f(t)){let t="The eth_personalSign method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),p=e.params[0],u=e.params[1]}else u=e.params[0],p=e.params[1];i=e.params[2]||{},a=c(i,{from:p,data:u}),s([e=>r.validatePersonalMessage(a,e),e=>r.processPersonalMessage(a,e)],n)}();case"eth_decryptMessage":return function(){const t=e.params[0];if(m(e.params[1])&&f(t)){let t="The eth_decryptMessage method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),p=e.params[0],u=e.params[1]}else u=e.params[0],p=e.params[1];i=e.params[2]||{},a=c(i,{from:p,data:u}),s([e=>r.validateDecryptMessage(a,e),e=>r.processDecryptMessage(a,e)],n)}();case"encryption_public_key":return function(){const t=e.params[0];s([e=>r.validateEncryptionPublicKey(t,e),e=>r.processEncryptionPublicKey(t,e)],n)}();case"personal_ecRecover":return u=e.params[0],i=e.params[2]||{},a=c(i,{sig:e.params[1],data:u}),void r.recoverPersonalSignature(a,n);case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":return function(){const t=e.params[0],o=e.params[1];f(t)?(p=t,u=o):(u=t,p=o),i=e.params[2]||{},a=c(i,{from:p,data:u}),s([e=>r.validateTypedMessage(a,e),e=>r.processTypedMessage(a,e)],n)}();case"parity_postTransaction":return o=e.params[0],void r.parityPostTransaction(o,n);case"parity_postSign":return p=e.params[0],u=e.params[1],void r.parityPostSign(p,u,n);case"parity_checkRequest":return void r.parityCheckRequest(e.params[0],n);case"parity_defaultAccount":return void r.getAccounts((function(e,t){if(e)return n(e);n(null,t[0]||null)}));default:return void t()}},h.prototype.getAccounts=function(e){e(null,[])},h.prototype.processTransaction=function(e,t){const n=this;s([t=>n.approveTransaction(e,t),(e,t)=>n.checkApproval("transaction",e,t),t=>n.finalizeAndSubmitTx(e,t)],t)},h.prototype.processSignTransaction=function(e,t){const n=this;s([t=>n.approveTransaction(e,t),(e,t)=>n.checkApproval("transaction",e,t),t=>n.finalizeTx(e,t)],t)},h.prototype.processMessage=function(e,t){const n=this;s([t=>n.approveMessage(e,t),(e,t)=>n.checkApproval("message",e,t),t=>n.signMessage(e,t)],t)},h.prototype.processPersonalMessage=function(e,t){const n=this;s([t=>n.approvePersonalMessage(e,t),(e,t)=>n.checkApproval("message",e,t),t=>n.signPersonalMessage(e,t)],t)},h.prototype.processDecryptMessage=function(e,t){const n=this;s([t=>n.approveDecryptMessage(e,t),(e,t)=>n.checkApproval("decryptMessage",e,t),t=>n.decryptMessage(e,t)],t)},h.prototype.processEncryptionPublicKey=function(e,t){const n=this;s([t=>n.approveEncryptionPublicKey(e,t),(e,t)=>n.checkApproval("encryptionPublicKey",e,t),t=>n.encryptionPublicKey(e,t)],t)},h.prototype.processTypedMessage=function(e,t){const n=this;s([t=>n.approveTypedMessage(e,t),(e,t)=>n.checkApproval("message",e,t),t=>n.signTypedMessage(e,t)],t)},h.prototype.autoApprove=function(e,t){t(null,!0)},h.prototype.checkApproval=function(e,t,n){n(t?null:new Error("User denied "+e+" signature."))},h.prototype.parityPostTransaction=function(e,t){const n=this,s="0x"+n._parityRequestCount.toString(16);n._parityRequestCount++,n.emitPayload({method:"eth_sendTransaction",params:[e]},(function(e,t){n._parityRequests[s]=e?{error:e}:t.result})),t(null,s)},h.prototype.parityPostSign=function(e,t,n){const s=this,r="0x"+s._parityRequestCount.toString(16);s._parityRequestCount++,s.emitPayload({method:"eth_sign",params:[e,t]},(function(e,t){s._parityRequests[r]=e?{error:e}:t.result})),n(null,r)},h.prototype.parityCheckRequest=function(e,t){const n=this._parityRequests[e]||null;return n?n.error?t(n.error):void t(null,n):t(null,null)},h.prototype.recoverPersonalSignature=function(e,t){let n;try{n=i.recoverPersonalSignature(e)}catch(s){return t(s)}t(null,n)},h.prototype.validateTransaction=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign transaction."));this.validateSender(e.from,(function(n,s){return n?t(n):s?void t():t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`))}))},h.prototype.validateMessage=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign message."));this.validateSender(e.from,(function(n,s){return n?t(n):s?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))}))},h.prototype.validatePersonalMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign personal message.")):void 0===e.data?t(new Error("Undefined message - message required to sign personal message.")):y(e.data)?void this.validateSender(e.from,(function(n,s){return n?t(n):s?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))})):t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},h.prototype.validateDecryptMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to decrypt message.")):void 0===e.data?t(new Error("Undefined message - message required to decrypt message.")):y(e.data)?void this.validateSender(e.from,(function(n,s){return n?t(n):s?void t():t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`))})):t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))},h.prototype.validateEncryptionPublicKey=function(e,t){this.validateSender(e,(function(n,s){return n?t(n):s?void t():t(new Error(`Unknown address - unable to obtain encryption public key for this address: "${e}"`))}))},h.prototype.validateTypedMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign typed data.")):void 0===e.data?t(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(e.from,(function(n,s){return n?t(n):s?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))}))},h.prototype.validateSender=function(e,t){if(!e)return t(null,!1);this.getAccounts((function(n,s){if(n)return t(n);const r=-1!==s.map(g).indexOf(e.toLowerCase());t(null,r)}))},h.prototype.finalizeAndSubmitTx=function(e,t){const n=this;n.nonceLock.take((function(){s([n.fillInTxExtras.bind(n,e),n.signTransaction.bind(n),n.publishTransaction.bind(n)],(function(e,s){if(n.nonceLock.leave(),e)return t(e);t(null,s)}))}))},h.prototype.finalizeTx=function(e,t){const n=this;n.nonceLock.take((function(){s([n.fillInTxExtras.bind(n,e),n.signTransaction.bind(n)],(function(s,r){if(n.nonceLock.leave(),s)return t(s);t(null,{raw:r,tx:e})}))}))},h.prototype.publishTransaction=function(e,t){this.emitPayload({method:"eth_sendRawTransaction",params:[e]},(function(e,n){if(e)return t(e);t(null,n.result)}))},h.prototype.estimateGas=function(e,t){d(this.engine,e,t)},h.prototype.getGasPrice=function(e){this.emitPayload({method:"eth_gasPrice",params:[]},(function(t,n){if(t)return e(t);e(null,n.result)}))},h.prototype.fillInTxExtras=function(e,t){const n=this,s=e.from,o={};void 0===e.gasPrice&&(o.gasPrice=n.getGasPrice.bind(n)),void 0===e.nonce&&(o.nonce=n.emitPayload.bind(n,{method:"eth_getTransactionCount",params:[s,"pending"]})),void 0===e.gas&&(o.gas=n.estimateGas.bind(n,function(e){return{from:e.from,to:e.to,value:e.value,data:e.data,gas:e.gas,gasPrice:e.gasPrice,nonce:e.nonce}}(e))),r(o,(function(n,s){if(n)return t(n);const r={};s.gasPrice&&(r.gasPrice=s.gasPrice),s.nonce&&(r.nonce=s.nonce.result),s.gas&&(r.gas=s.gas),t(null,c(e,r))}))}},Uu7K:function(e,t,n){const s=n("xQaN");function r(){}e.exports=r,r.prototype.setEngine=function(e){const t=this;t.engine||(t.engine=e,e.on("block",(function(e){t.currentBlock=e})),e.on("start",(function(){t.start()})),e.on("stop",(function(){t.stop()})))},r.prototype.handleRequest=function(e,t,n){throw new Error("Subproviders should override `handleRequest`.")},r.prototype.emitPayload=function(e,t){this.engine.sendAsync(s(e),t)},r.prototype.stop=function(){},r.prototype.start=function(){}},a5O3:function(e,t,n){const s=n("xQaN");e.exports=function(e,t,n){e.sendAsync(s({method:"eth_estimateGas",params:[t]}),(function(e,t){if(e)return"no contract code at given address"===e.message?n(null,"0xcf08"):n(e);n(null,t.result)}))}},"cC/c":function(e,t,n){const s=n("ja2i"),r=n("2nhq");e.exports=class extends s{constructor(){super(({blockTracker:e,provider:t})=>r({blockTracker:e,provider:t}))}}},f4g2:function(e,t,n){const s=n("+qE3").EventEmitter,r=n("7tlc").inherits,o=n("/JJz"),a=n("V5x4"),i=n("LCem"),c=n("YOJA"),u=n("/uSP"),p=(n("gO+T"),n("xQaN")),d=function(){};function l(e){const t=this;s.call(t),t.setMaxListeners(30),e=e||{};const n={sendAsync:t._handleAsync.bind(t)};t._blockTracker=e.blockTracker||new a({provider:e.blockTrackerProvider||n,pollingInterval:e.pollingInterval||4e3,setSkipCacheFlag:!0}),t._ready=new u,t.currentBlock=null,t._providers=[]}e.exports=l,r(l,s),l.prototype.start=function(e=d){const t=this;t._ready.go(),t._blockTracker.on("latest",e=>{t._getBlockByNumberWithRetry(e,(e,n)=>{if(e)return void this.emit("error",e);if(!n)return console.log(n),void this.emit("error",new Error("Could not find block"));const s={number:o.toBuffer((r=n).number),hash:o.toBuffer(r.hash),parentHash:o.toBuffer(r.parentHash),nonce:o.toBuffer(r.nonce),mixHash:o.toBuffer(r.mixHash),sha3Uncles:o.toBuffer(r.sha3Uncles),logsBloom:o.toBuffer(r.logsBloom),transactionsRoot:o.toBuffer(r.transactionsRoot),stateRoot:o.toBuffer(r.stateRoot),receiptsRoot:o.toBuffer(r.receiptRoot||r.receiptsRoot),miner:o.toBuffer(r.miner),difficulty:o.toBuffer(r.difficulty),totalDifficulty:o.toBuffer(r.totalDifficulty),size:o.toBuffer(r.size),extraData:o.toBuffer(r.extraData),gasLimit:o.toBuffer(r.gasLimit),gasUsed:o.toBuffer(r.gasUsed),timestamp:o.toBuffer(r.timestamp),transactions:r.transactions};var r;t._setCurrentBlock(s),t.emit("rawBlock",n),t.emit("latest",n)})}),t._blockTracker.on("sync",t.emit.bind(t,"sync")),t._blockTracker.on("error",t.emit.bind(t,"error")),t._running=!0,t.emit("start")},l.prototype.stop=function(){const e=this;e._blockTracker.removeAllListeners(),e._running=!1,e.emit("stop")},l.prototype.isRunning=function(){return this._running},l.prototype.addProvider=function(e,t){"number"==typeof t?this._providers.splice(t,0,e):this._providers.push(e),e.setEngine(this)},l.prototype.removeProvider=function(e){const t=this._providers.indexOf(e);if(t<0)throw new Error("Provider not found.");this._providers.splice(t,1)},l.prototype.send=function(e){throw new Error("Web3ProviderEngine does not support synchronous requests.")},l.prototype.sendAsync=function(e,t){const n=this;n._ready.await((function(){Array.isArray(e)?i(e,n._handleAsync.bind(n),t):n._handleAsync(e,t)}))},l.prototype._getBlockByNumberWithRetry=function(e,t){const n=this;let s=5;return void r();function r(){n._getBlockByNumber(e,o)}function o(e,n){return e?t(e):n?void t(null,n):s>0?(s--,void setTimeout((function(){r()}),1e3)):void t(null,null)}},l.prototype._getBlockByNumber=function(e,t){const n=p({method:"eth_getBlockByNumber",params:[e,!1],skipCache:!0});this._handleAsync(n,(e,n)=>e?t(e):t(null,n.result))},l.prototype._handleAsync=function(e,t){var n=this,s=-1,r=null,o=null,a=[];function i(n,s){o=n,r=s,c(a,(function(e,t){e?e(o,r,t):t()}),(function(){var n={id:e.id,jsonrpc:e.jsonrpc,result:r};null!=o?(n.error={message:o.stack||o.message||o,code:-32e3},t(o,n)):t(null,n)}))}!function t(r){if(s+=1,a.unshift(r),s>=n._providers.length)i(new Error('Request for method "'+e.method+'" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try{n._providers[s].handleRequest(e,t,i)}catch(o){i(o)}}()},l.prototype._setCurrentBlock=function(e){this.currentBlock=e,this.emit("block",e)}},"gO+T":function(e,t,n){const s=n("rE/H");function r(e){return"never"!==i(e)}function o(e){var t=a(e);return t>=e.params.length?e.params:"eth_getBlockByNumber"===e.method?e.params.slice(1):e.params.slice(0,t)}function a(e){switch(e.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":return 1;case"eth_getBlockByNumber":return 0;default:return}}function i(e){switch(e.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":return"fork";case"eth_gasPrice":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"eth_blockNumber":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":return"never"}}e.exports={cacheIdentifierForPayload:function(e,t={}){if(!r(e))return null;const{includeBlockRef:n}=t,a=n?e.params:o(e);return e.method+":"+s(a)},canCache:r,blockTagForPayload:function(e){var t=a(e);return t>=e.params.length?null:e.params[t]},paramsWithoutBlockTag:o,blockTagParamIndex:a,cacheTypeForPayload:i}},ja2i:function(e,t,n){const s=n("Uu7K");e.exports=class extends s{constructor(e){if(super(),!e)throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");this._constructorFn=e}setEngine(e){if(this.middleware)throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");const t=this._constructorFn({engine:e,provider:e,blockTracker:e._blockTracker});if(!t)throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");if("function"!=typeof t)throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");this.middleware=t}handleRequest(e,t,n){const s={id:e.id};this.middleware(e,s,(function(e){t((t,n,r)=>{t?(delete s.result,s.error={message:t.message||t}):s.result=n,e?e(r):r()})}),(function(e){if(e)return n(e);n(null,s.result)}))}}},"kzD/":function(e,t){e.exports=function(){return Math.floor(Number.MAX_SAFE_INTEGER*Math.random())}},xQaN:function(e,t,n){const s=n("kzD/"),r=n("U6jy");e.exports=function(e){return r({id:s(),jsonrpc:"2.0",params:[]},e)}}}]);