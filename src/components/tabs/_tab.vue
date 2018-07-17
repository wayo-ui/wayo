<script>
export default {
  name: `${APPNAME}Tab`,
  props: {
    /**
     * @prop 标签文案
     * @type {string}
     * @required
     */
    label: {
      type: String,
      required: true
    },
    /**
     * @prop 标签图标
     * @type {string}
     * @default ``
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * @prop 懒加载
     * @type {boolean}
     * @default `false`
     */
    lazy: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 名称
     * @type {string}
     * @required
     */
    name: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      active: false
    };
  },
  mounted() {
    // 向父组件传递标签属性信息
    this.$parent.addBar({
      icon: this.icon,
      label: this.label,
      name: this.name
    });
    // 向父组件添加内容面板信息（自身）
    this.$parent.addPanel(this.name,this);
  },
  render(h){
    return <div 
      class={{
        'wayo-tab-panel': true,
        'wayo-tab-panel_active':this.active
      }}
      style={{
        display: `${this.active?'block':'none'}`
      }}>
      {this.$slots.default}
    </div>;
  },
  updated(){
    // 更新时强制重新渲染父组件
    this.$parent.$forceUpdate();
  },
  methods: {
    /**
     * @method show 激活
     */
    show(){
      this.active = true;
    },
    /**
     * @method show 反激活
     */
    hide(){
      this.active = false;
    }
  }
};
</script>