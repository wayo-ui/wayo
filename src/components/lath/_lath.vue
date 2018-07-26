<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA} from '@/constants';
import WayoSeparator from '@/components/separator';
import WayoIcon from '@/components/icon';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Lath`,
  props: {
    /**
     * @prop 平铺布局
     * @type {boolean}
     * @default `false`
     */
    inline: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 上描边
     * @type {boolean}
     * @default `true`
     */
    borderTop: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 下描边
     * @type {boolean}
     * @default `true`
     */
    borderBottom: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 头部图标
     * @type {string}
     * @default ``
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * @prop 头部图标颜色
     * @type {string}
     * @default ``
     */
    iconColor: {
      type: String,
      default: '',
      validator: val => {
        return !val||REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 头部图标定位
     * @type {string}
     * @default `middle`
     */
    iconPosition: {
      type: String,
      default: 'middle',
      validator: val => {
        return ['top','middle'].indexOf(val)!==-1;
      }
    }
  },
  data(){
    return {
      // 尾部信息，供tail子组件修改
      tail: {},
      // 是否含有header子组件，供header子组件修改
      hasHeader: false,
      // 是否含有content子组件，供content子组件修改
      hasContent: false
    };
  },
  computed: {
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      const Styles = [];
      let padding_right = 15;
      this.tail.icon&&(padding_right+=20);
      if(this.tail.label){
        const HalfCharCount = /[\w\W\d]+/.test(this.tail.label)?/([\w\W\d]+)/.exec(this.tail.label)[1].toString().length:0;
        padding_right+=(13*this.tail.label.length-HalfCharCount+Math.round(HalfCharCount/2)+10);
      }
      padding_right>15&&Styles.push(`padding-right:${padding_right}px;`);
      return Styles.join('');
    }
  },
  render(h){
    // 内置header
    let slot_header = '';
    // 内置content
    let slot_content = '';
    // 内置tail
    let slot_tail = '';
    // 其他slots
    const Slot_other = [];

    if(this.$slots&&this.$slots.default){
      for(let i=0,len=this.$slots.default.length;i<len;i++){
        const SlotItem = this.$slots.default[i];
        if(/^vue\-component\-\d+\-WayoLathHeader$/.test(SlotItem.tag)){
          slot_header = SlotItem;
        }else if(/^vue\-component\-\d+\-WayoLathContent$/.test(SlotItem.tag)){
          slot_content = SlotItem;
        }else if(/^vue\-component\-\d+\-WayoLathTail$/.test(SlotItem.tag)){
          slot_tail = SlotItem;
        }else{
          Slot_other.push(SlotItem);
        }
      }
    }

    const Slots = [slot_header,slot_content,...Slot_other,slot_tail];

    // icon
    if(this.icon){
      Slots.unshift(<WayoIcon 
        class={{
          'wayo-lath__icon-head': true,
          [`wayo-lath__icon-head_${this.iconPosition}`]: true
        }}
        name={this.icon}
        color={this.iconColor}></WayoIcon>);
    }
    // border-top
    if(this.borderTop){
      Slots.unshift(<WayoSeparator
        class='wayo-lath__separator-top'
        absolute></WayoSeparator>);
    }
    // border-bottom
    if(this.borderBottom){
      Slots.push(<WayoSeparator
        class='wayo-lath__separator-bottom'
        absolute></WayoSeparator>);
    }

    const Attributes= {
      attrs: this.$attrs,
      on: this.$listeners
    };

    return <div 
      class={{
        'wayo-lath': true,
        'wayo-lath_icon':!!this.icon,
        'wayo-lath_content_header':this.hasHeader&&this.hasContent,
        'wayo-lath_inline':this.inline
      }}
      style={this.styles}>
      {Slots}
    </div>;
  },
  components: {
    WayoIcon,
    WayoSeparator
  }
};
</script>