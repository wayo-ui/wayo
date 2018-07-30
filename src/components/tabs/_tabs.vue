
<script>
import Bar from './_tab-bar.vue';
import Pointer from './_tab-nav-pointer.vue';
import Separator from '@/components/separator';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Tabs`,
  props: {
    /**
     * @prop stripe风格标签
     * @type {boolean}
     * @default `false`
     */
    stripe: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 上边框
     * @type {boolean}
     * @default `false`
     */
    borderTop: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 下边框
     * @type {boolean}
     * @default `false`
     */
    borderBottom: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 启用滑动切换
     * @type {boolean}
     * @default `false`
     */
    swipeable: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 各个标签的宽度严格相等
     * @type {boolean}
     * @default `false`
     */
    flex: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 标签对齐方式
     * @type {string}
     * @default `left`
     */
    align: {
      type: String,
      default: 'left',
      validator: val => {
        return ['left','center','right'].indexOf(val) !== -1;
      }
    }
  },
  data(){
    return {
      // 标签配置列表
      barOptsList: [],
      // 标签集合
      bars: {},
      // 内容面板集合
      panels: {},
      // 当前激活的标签name
      current: '',
      // 标签超出边界情况下，标签容器的左偏移量，正
      navTransform: 0,
      // 最外层容器宽度
      boxWidth: 0,
      // 标签容器宽度
      navWidth: 0
    };
  },
  computed: {
    /**
     * @computed 标签宽度是否超出边界
     * @type {boolean}
     */
    outOfEdge(){
      return this.navWidth>this.boxWidth;
    }
  },
  methods: {
    /**
     * @method addBar 添加标签，子组件调用
     * @param {Object} opts 标签属性
     */
    addBar(opts){
      this.barOptsList.push(opts);
      this.bars[opts.name] = {
        opts
      };
    },
    /**
     * @method addPanel 添加内容面板，子组件调用
     * @param {string} name 面板名称
     * @param {VueComponentObject} panel 面板对象
     */
    addPanel(name,panel){
      this.panels[name] = panel;
    },
    /**
     * @method showPanel 激活指定标签&面板
     * @param {string} name 标签&面板名称
     */
    showPanel(name){
      this.current&&this.panels[this.current].hide();
      this.panels[name].show();
      this.current = name;
    },
    /**
     * @method onBarCilcked 标签点击响应函数
     * @param {string} name 标签&面板名称
     */
    onBarCilcked(name){
      if(!name||this.current===name){
        return;
      }
      this.transformNav(this.current,name);
      this.showPanel(name);
    },
    /**
     * @method onUpdateBar 标签更新响应函数
     * @param {string} name 标签&面板名称
     * @param {Object} opts 属性对象
     */
    onUpdateBar(name,opts){
      this.navWidth += opts.width||0;
      this.$set(this.bars,name,Object.assign({...this.bars[name]},opts));
    },
    /**
     * @method transformNav 标签超出边界情况下，计算标签容器的左偏移量
     * @param {string} current 当前激活的标签&面板名称
     * @param {string} target 目标激活的标签&面板名称
     */
    transformNav(current,target){
      if(!this.outOfEdge){
        return;
      }
      // 正向
      if(this.bars[current].index < this.bars[target].index){
        const NextBar = this.barOptsList[this.bars[target].index+1];
        if(NextBar&&this.bars[NextBar.name].offset+this.bars[NextBar.name].width>this.boxWidth){
          this.navTransform += (this.bars[NextBar.name].offset+this.bars[NextBar.name].width-this.boxWidth-this.navTransform);
        }
      }else{
        // 反向
        const PrevBar = this.barOptsList[this.bars[target].index-1];
        if(PrevBar&&this.bars[PrevBar.name].offset<this.navTransform){
          this.navTransform = this.bars[PrevBar.name].offset;
        }
      }
    }
  },
  mounted(){
    // 渲染完成之后显示第一个面板，同时获取最外层容器尺寸
    this.$nextTick().then(() => {
      const FirstPanel = this.panels[Object.keys(this.panels)[0]];
      if(FirstPanel){
        this.showPanel(FirstPanel.name);
        this.boxWidth = this.$el.clientWidth;
      }
    });
  },
  render(h){
    // 标签容器
    const Nav = (
      <div ref="nav" class={{
        'wayo-tab__nav': true,
        'wayo-tab__nav_flex': this.flex,
        'wayo-tab__nav_stripe': this.stripe
      }}
      style={{
        'text-align': this.align,
        'margin-left': `-${this.navTransform}px`
      }}>
        {!this.stripe&&<Pointer
          offset={this.bars[this.current]&&this.bars[this.current].offset}
          width={this.bars[this.current]&&this.bars[this.current].width}></Pointer>}
        {this.barOptsList.map((bar,index) => {
          this.bars[bar.name].index = index;
          return <Bar
            icon={bar.icon} 
            label={bar.label} 
            name={bar.name} 
            stripe={this.stripe}
            active={this.current===bar.name}
            onClicked={this.onBarCilcked}
            onUpdate={this.onUpdateBar}></Bar>;
        })}
        {!this.stripe&&<Separator class="wayo-tab__separator-nav" absolute></Separator>}
      </div>
    );
    // 内容面板
    const Panels = (
      <div ref="content" class="wayo-tab__content">
        {this.$slots.default}
      </div>
    );

    const Attributes= {
      attrs: this.$attrs,
      on: this.$listeners
    };
    return <div class="wayo-tab" {...Attributes}>
      {this.borderTop&&<Separator class="wayo-tab__separator-top" absolute></Separator>}
      {[Nav,Panels]}
      {this.borderBottom&&<Separator class="wayo-tab__separator-bottom" absolute></Separator>}
    </div>;
  },
  components: {
    Bar,
    Pointer,
    Separator
  }
};
</script>