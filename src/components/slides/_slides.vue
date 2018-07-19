<script>
import Indicator from './_indicator.vue';

/** @vue */
export default {
  name: `${APPNAME}Slides`,
  props: {
    /**
     * @prop 自动切换的时间间隔(ms)
     * @type {number}
     * @default `3000`
     */
    interval: {
      type: Number,
      default: 3000,
      validator: val => {
        return val>0;
      }
    },
    /**
     * @prop 是否开启自动切换
     * @type {boolean}
     * @default `false`
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 是否循环切换
     * @type {boolean}
     * @default `true`
     */
    loop: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 指示器类型
     * circle-圆点
     * square-长条
     * none-无
     * @type {string}
     * @default `circle`
     */
    indicatorType: {
      type: String,
      default: 'circle',
      validator: val => {
        return ['circle','square','none'].indexOf(val) !== -1;
      }
    },
    /**
     * @prop 初始显示的slide索引值
     * @type {number}
     * @default `0`
     */
    initialIndex: {
      type: Number,
      default: 0
    },
    /**
     * @prop 切换动画类型
     * slide-滑动
     * fade-渐隐
     * none-无
     * @type {string}
     * @default `circle`
     */
    animation: {
      type: String,
      default: 'slide',
      validator: val => {
        return ['fade','slide','none'].indexOf(val) !== -1;
      }
    }
  },
  data(){
    return {
      // 激活的索引值
      activeIndex: this.initialIndex,
      // slide列表
      items: [],
      // slide总数
      itemCount: 0,
      // 自动切换计时器
      timer: undefined,
      // 最外层容器宽度
      boxWidth: 0,
      // 是否处于拖拽状态
      isPanning: false,
      // 拖拽起点X坐标
      panStartX: 0,
      // 拖拽当前X坐标
      panCurrentX: 0
    };
  },
  computed: {
    /**
     * @computed 拖拽产生的偏移量，负值向右，正值向左
     * @type {number}
     */
    manualTranslate(){
      const Dist = this.panStartX - this.panCurrentX;
      // 非循环模式下第一个slide禁止向右拖拽
      if(!this.loop&&this.activeIndex===0&&Dist<0){
        return 0;
      }
      // 非循环模式下最后一个slide禁止向左拖拽
      if(!this.loop&&this.activeIndex===this.itemCount-1&&Dist>0){
        return 0;
      }
      return Dist;
    }
  },
  mounted() {
    // 取最外层容器宽度
    this.boxWidth = this.$el.clientWidth;
    this.$nextTick(() => {
      // 激活默认索引的slide
      this.activeItem(this.initialIndex);
      // 开启自动切换模式
      this.autoplay&&this.play();
    });
  },
  methods: {
    /**
     * @method addItem 添加slide指针，供自组件调用
     * @param {VueComponentObject} item 子组件对象
     */
    addItem(item){
      this.items.push(item);
    },
    /**
     * @method activeNext 切换至下一张slide
     */
    activeNext(){
      this.activeItem(this.activeIndex+1);
    },
    /**
     * @method activeItem 激活指定索引值的slide
     * @param {number} index 激活目标索引值
     */
    activeItem(index){
      const TargetIndex = (() => {
        if(index>=this.itemCount){
          return this.loop||this.autoplay?0:this.itemCount-1;
        }
        if(index<0){
          return this.loop||this.autoplay?this.itemCount-1:0;
        }
        return index;
      })();

      if(this.activeIndex!==TargetIndex){
        this.activeIndex = TargetIndex;
      }
    },
    /**
     * @method pause 暂停自动切换
     */
    pause(){
      clearTimeout(this.timer);
    },
    /**
     * @method resume 恢复自动切换
     */
    resume(){
      this.play();
    },
    /**
     * @method play 开启自动切换
     */
    play(){
      this.timer = setTimeout(() => {
        this.activeNext();
        this.play();
      },this.interval);
    },
    /**
     * @method onPanStart 响应touchstart事件，用于处理拖拽起始阶段
     * @param {EventObject} ev touchstart事件对象
     */
    onPanStart(ev){
      const Event = ev || window.event;
      Event.preventDefault();
      Event.stopPropagation();
      this.isPanning = true;
      // 暂停自动切换
      this.pause();
      const Touches = Event.changedTouches||Event.touches;
      this.panStartX = Touches[0].clientX;
      this.panCurrentX = Touches[0].clientX;
    },
    /**
     * @method onPanMove 响应touchmove事件，用于处理拖拽进行阶段
     * @param {EventObject} ev touchmove事件对象
     */
    onPanMove(ev){
      const Event = ev || window.event;
      Event.preventDefault();
      Event.stopPropagation();
      if(!this.isPanning){
        return;
      }
      const Touches = Event.changedTouches||Event.touches;
      this.panCurrentX = Touches[0].clientX;
    },
    /**
     * @method onPanEnd 响应touchend&touchcancel事件，用于处理拖拽结束阶段
     * @param {EventObject} ev touchend或者touchcancel事件对象
     */
    onPanEnd(ev){
      const Event = ev || window.event;
      Event.preventDefault();
      Event.stopPropagation();
      if(!this.isPanning){
        return;
      }
      const PanGutter = Math.abs(this.manualTranslate/this.boxWidth);

      let panIndex = 0;
      if(PanGutter!==0){
        panIndex = Math.floor(PanGutter);
        PanGutter-panIndex>=0.2&&panIndex++;
        panIndex *= this.manualTranslate/Math.abs(this.manualTranslate);
      }
      
      this.isPanning = false;
      this.panCurrentX = 0;
      this.panStartX = 0;
      this.activeItem(this.activeIndex+panIndex);
      // 重新启动自动切换
      this.resume();
    }
  },
  render(h){
    // 有效slide子组件
    const VNodes = this.$slots.default.filter(node => {
      return /^vue\-component\-\d+\-WayoSlide$/.test(node.tag);
    });

    this.itemCount = VNodes.length;

    // 指示器
    const Indicators = (type => {
      if(type==='none'){
        return '';
      }
      return <div class="wayo-slides__indicators">
        {VNodes.map((node,index)=>{
          return <Indicator
            active={this.activeIndex===index}
            index={index}
            type={type}></Indicator>;
        })}
      </div>;
    })(this.indicatorType);

    // 内容实体
    const Wrapper = (() => {
      if(this.autoplay||this.animation==='slide'){
        const Translate = this.activeIndex*this.boxWidth+this.manualTranslate;
        return <div 
          class={{
            'wayo-slides__wrapper': true,
            'wayo-slides__wrapper_animate': this.manualTranslate===0
          }}
          style={{
            '-webkit-transform': `translate3d(-${Translate}px,0,0)`,
            '-moz-transform': `translate3d(-${Translate}px,0,0)`,
            '-o-transform': `translate3d(-${Translate}px,0,0)`,
            'transform': `translate3d(-${Translate}px,0,0)`
          }}
          onTouchstart={this.onPanStart}
          onTouchmove={this.onPanMove}
          onTouchend={this.onPanEnd}
          onTouchcancel={this.onPanEnd}>
          {VNodes}
        </div>;
      }
      if(this.animation === 'none'||this.animation === 'fade'){
        return <div class="wayo-slides__wrapper">
          {VNodes}
        </div>;
      }
    })();
    
    // 内容容器
    const SlideItems = (
      <div class="wayo-slides__content">
        {Wrapper}
      </div>
    );

    return <div class="wayo-slides">
      {[Indicators,SlideItems]}
    </div>;
  },
  components: {
    Indicator
  }
}
</script>