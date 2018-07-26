<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA} from '@/constants';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Stripe`,
  props: {
    /**
     * @prop 内置尺寸
     * @type {string}
     * @default `default`
     */
    size: {
      type: String,
      default: 'default',
      validator: val => {
        return ['default','large','small'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 自定义颜色
     * @type {string}
     * @default ``
     */
    color: {
      type: String,
      default: '',
      validator: val => {
        return !val||REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 自定义字号
     * @type {number}
     * @default `0`
     */
    fontSize: {
      type: Number,
      default: 0,
      validator: val => {
        return val >= 0;
      }
    },
    /**
     * @prop 自定义宽度
     * @type {number}
     * @default `0`
     */
    width: {
      type: Number,
      default: 0,
      validator: val => {
        return val >= 0;
      }
    },
    /**
     * @prop 自定义高度
     * @type {number}
     * @default `0`
     */
    height: {
      type: Number,
      default: 0,
      validator: val => {
        return val >= 0;
      }
    },
    /**
     * @prop 禁用状态
     * @type {boolean}
     * @default `false`
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.setChildrenHeight();
    this.setChildrenColor();
  },
  watch:{
    height(){
      this.setChildrenHeight();
    },
    color(){
      this.setChildrenColor();
    }
  },
  methods: {
    /**
     * @method setChildrenHeight 设置子组件高度
     */
    setChildrenHeight(){
      if(this.height<=0||!this.$children||this.$children.length===0){
        return;
      }
      this.$children.forEach(item => {
        item.height = this.height/2;
      });
    },
    /**
     * @method setChildrenColor 设置子组件颜色
     */
    setChildrenColor(){
      if(!this.color||!this.$children||this.$children.length===0){
        return;
      }
      this.$children.forEach(item => {
        item.color = this.color;
      });
    },
    onClick(){
      this.$emit('click');
    }
  },
  render(h){
    const ClassList = ['wayo-stripe'];
    if(this.width<=0||this.height<=0){
      ClassList.push(`wayo-stripe_size_${this.size}`);
    }
    this.disabled&&ClassList.push('wayo-stripe_disabled');

    const StyleList = [];
    if(this.width>0){
      StyleList.push(`width:${this.width}px;`);
    }
    if(this.height>0){
      StyleList.push(`height:${this.height}px;`);
    }
    if(this.fontSize>0){
      StyleList.push(`font-size:${this.fontSize}px;`);
    }

    const VNodes = this.$slots&&this.$slots.default&&this.$slots.default.filter(item => {
      return /^vue\-component\-\d+\-WayoStripeButton$/.test(item.tag);
    });

    const Attributes= {
      attrs: this.$attrs,
      on: this.$listeners
    };
    
    return <div 
      class={ClassList.join(' ')}
      style={StyleList.join('')}
      {...Attributes}>
      {VNodes}
    </div>
  }
};
</script>