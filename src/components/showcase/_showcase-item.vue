<script>
/**
 * @vue
 */
export default {
  name: `${APPNAME}ShowcaseItem`,
  props: {
    /**
     * @prop 操作区图片
     * @type {string}
     * @required
     */
    thumb: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      // 激活状态
      active: false
    };
  },
  mounted() {
    // 向父组件添加内容面板信息（自身）和操作面板信息
    this.$parent.addItem(this,{
      thumb: this.thumb
    });
  },
  render(){
    return <div class={{
      'wayo-showcase__panel': true,
      'wayo-showcase__panel_active':this.active
    }}>
      {this.$slots.default}
    </div>;
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