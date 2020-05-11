function checkType(param) {
  return Object.prototype.toString.call(param).slice(8, -1)
}

class EventBus {
  constructor() {
    this.events = {}
  }

  on(type, callback) {
    if (!this.events) {
      this.events = Object.create(null)
    }

    if (!this.events[type]) {
      this.events[type] = [callback]
    } else {
      this.events[type].push(callback)
    }
  }

  emit(type, params) {
    if (!['String', 'Object', 'undefined'].includes(checkType(params))) {
      throw new Error('参数必须是字符串或者对象或者不传')
    }

    this.events[type] && this.events[type].forEach((cb) => cb(params))
  }

  off(type) {
    if (!this.events[type]) return
    delete this.events[type]
  }
}

export default new EventBus()
