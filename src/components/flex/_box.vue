<script>
const AVAILABLE_JUSTIFY_AND_ALIGN = [
  'unset',
  'start',
  'end',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
];
/**
 * @vue
 */
export default {
  name: `${APPNAME}FlexBox`,
  props: {
    /**
     * @prop 方向
     * @type {string}
     * @default `row`
     */
    direction: {
      type: String,
      default: 'row',
      validator: val => {
        return ['row','row-reverse','column','column-reverse'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 方向
     * @type {string|number}
     * @default `row`
     */
    height: {
      type: [String,Number],
      default: 'inherit'
    },
    /**
     * @prop 主轴（水平）对齐方式
     * @type {string}
     * @default `start`
     */
    justify: {
      type: String,
      default: 'start',
      validator: val => {
        return AVAILABLE_JUSTIFY_AND_ALIGN.indexOf(val)!==-1;
      }
    },
    /**
     * @prop 交叉轴（垂直）对齐方式
     * @type {string}
     * @default `row`
     */
    align: {
      type: String,
      default: 'unset',
      validator: val => {
        return AVAILABLE_JUSTIFY_AND_ALIGN.indexOf(val)!==-1;
      }
    },
    /**
     * @prop 是否可换行
     * @type {boolean}
     * @default `false`
     */
    wrap: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 列元素的间距（px）
     * @type {number}
     * @default `0`
     */
    gutter: {
      type: Number,
      default: 0,
      validator: val => {
        return val>=0;
      }
    }
  },
  data(){
    return {
      width: 0,
      childrenCount: 0,
      availableWidth: 0
    };
  },
  computed: {
    /**
     * @computed classname
     * @type {string}
     */
    classes(){
      const List = [
        'wayo-flex-box',
        `wayo-flex-box_direction_${this.direction}`,
        `wayo-flex-box_justify_${this.justify}`,
        `wayo-flex-box_align_${this.align}`
      ];
      this.wrap&&List.push('wayo-flex-box_wrap');
      return List.join(' ');
    },
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      const List = [`height:${isNaN(this.height)?this.height:this.height+'px'};`];
      if(this.gutter>0){
        if(/row/.test(this.direction)){
          List.push(`margin-left:${-this.gutter/2}px;`);
          List.push(`margin-right:${-this.gutter/2}px;`);
        }else{
          List.push(`margin-top:${-this.gutter/2}px;`);
          List.push(`margin-bottom:${-this.gutter/2}px;`);
        }
      }
      return List.join('');
    }
  },
  mounted() {
    if(this.gutter>0){
      this.calWidth();
      this.$children.forEach(el=>{
        el.padding = this.gutter/2;
      });
    }
  },
  methods: {
    calWidth(){
      this.width = this.$el.clientWidth;
      this.availableWidth = this.width-(this.childrenCount-1)*this.gutter;
    }
  },
  render(h){
    const VNodes = this.$slots&&this.$slots.default&&this.$slots.default.filter(item => {
      return /^vue\-component\-\d+\-WayoFlexCell$/.test(item.tag);
    });

    this.childrenCount = VNodes.length;

    const Attributes= {
      attrs: this.$attrs,
      on: this.$listeners
    };

    return <div 
        class={this.classes}
        style={this.styles}
        {...Attributes}>
        {VNodes}
    </div>;
  }
};
</script>