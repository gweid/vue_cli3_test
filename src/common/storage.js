class storageData {
    constructor(store) {
        // 检测是否支持localstorage
        if (!store) {
            console.log('不支持localStorage')
            return
        }

        this._store = store
    }

    /**
     * 获取本地缓存
     * @param {*} key 
     */
    getItem(key) {
        if (!this._store) return
        let res = this._store.getItem(key)
        if (typeof res === 'string' && (/^\{[\S\s]{0,}\}$/.test(res) || /^\[[\S\s]{0,}\]$/.test(res))) {
            return JSON.parse(res)
        } else {
            return res
        }
    }

    /**
     * 设置本地缓存
     * @param {string} key 
     * @param {string | object} value 
     */
    setItem(key, value) {
        if (!this._store) return
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        this._store.setItem(key, value)
    }

    /**
     * 删除本地缓存
     * @param {string} key 
     */
    removeItem(key) {
        if (!this._store) return
        this._store.removeItem(key)
    }
    
    /**
     * 删除本地所有缓存
     * @param {string} key 
     */
    clearItem() {
        if (!this._store) return
        this._store.clear()
    }
}

class LocalStorage extends storageData {
    constructor(store) {
        super(store)
    }
}

class SessionStorage extends storageData {
    constructor(store) {
        super(store)
    }
}

const lStorage = new LocalStorage(window.localStorage || localStorage)
const sStorage = new SessionStorage(window.sessionStorage || sessionStorage)

export {
    lStorage,
    sStorage
}