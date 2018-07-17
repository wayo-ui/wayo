import Vue from 'vue';
import ToastComponent from './_toast.vue';

/**
 * @constant DEFAULT_OPTIONS 默认配置
 * @type {Object}
 */
const DEFAULT_OPTIONS = {
  type: 'text',
  mask: false,
  message: '',
  duration: 3000
};

/**
 * @private
 * @class ToastEntity
 * @singleton
 */
class ToastEntity {
  /**
   * @static 实例
   * @type {ToastEntityObject}
   */
  static instance = null;
  /**
   * @constructor
   * @param {Object} opts 配置项
   * @return {ToastEntityObject}
   */
  constructor(opts){
    // 单例模式
    if(!ToastEntity.instance){
      this.toast = new (Vue.extend(ToastComponent))({
        el: document.createElement('div')
      });
      document.body.appendChild(this.toast.$el);;
      ToastEntity.instance = this;
    }
    ToastEntity.instance.config(opts);
    return ToastEntity.instance;
  }
  /**
   * @method config 配置toast组件
   * @param {Object} opts 配置项
   */
  config(opts){
    this.type = opts.type;
    this.mask = opts.mask;
    this.message = opts.message;
    this.duration = opts.duration;
    Object.assign(this.toast,{
      type: this.type,
      mask: this.mask,
      message: this.message
    });
  }
  /**
   * @method show 显示toast
   */
  show(){
    Object.assign(this.toast,{
      show: true
    });
    if(this.duration!==0){
      clearTimeout(this.timmer);
      this.timmer = setTimeout(() => {
        this.hide();
      },this.duration);
    }
  }
  /**
   * @method hide 隐藏toast
   */
  hide(){
    Object.assign(this.toast,{
      show: false
    });
  }
}

/**
 * @export
 * @function Toast 入口函数
 * @param {Object} opts toast组件配置项 
 */
function Toast(opts){
  let options = {};
  const OptsType = Object.prototype.toString.call(opts);
  if(OptsType === '[object Array]'||OptsType==='[object String]'){
    options.meesage = opts;
  }else if(OptsType === '[object Object]'){
    options = opts;
  }else{
    throw new TypeError('Invalid options');
  }
  const Instance = new ToastEntity(Object.assign({...DEFAULT_OPTIONS},options));
  Instance.show();
}

/**
 * @api 
 * @function success 成功提示
 * @param {string|Array} message 
 */
Toast.success = message => {
  const OptsType = Object.prototype.toString.call(message);
  if(OptsType !== '[object Array]'&&OptsType !== '[object String]'){
    throw new TypeError('Invalid message type');
  }
  const Instance = new ToastEntity(Object.assign({...DEFAULT_OPTIONS},{
    type: 'success',
    message
  }));
  Instance.show();
}
/**
 * @api 
 * @function loading 加载提示
 * @param {string|Array} message 
 */
Toast.loading = message => {
  const OptsType = Object.prototype.toString.call(message);
  if(OptsType !== '[object Array]'&&OptsType !== '[object String]'){
    throw new TypeError('Invalid message type');
  }
  const Instance = new ToastEntity(Object.assign({...DEFAULT_OPTIONS},{
    type: 'loading',
    message
  }));
  Instance.show();
}
/**
 * @api 
 * @function fail 失败提示
 * @param {string|Array} message 
 */
Toast.fail = message => {
  const OptsType = Object.prototype.toString.call(message);
  if(OptsType !== '[object Array]'&&OptsType !== '[object String]'){
    throw new TypeError('Invalid message type');
  }
  const Instance = new ToastEntity(Object.assign({...DEFAULT_OPTIONS},{
    type: 'fail',
    message
  }));
  Instance.show();
}

/**
 * @function install 安装回调，供vue初始化使用
 */
Toast.install = () => {
  Vue.use(ToastComponent);
};

// 挂载到Vue原型链
Vue.prototype.$toast = Toast;

export default Toast;
