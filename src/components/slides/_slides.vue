<script>
import Indicator from './_indicator.vue';

/** 
 * @vue
 */
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
      timer_autoplay: undefined,
      // 恢复动画计时器
      timer_resetLock: undefined,
      // 最外层容器宽度
      boxWidth: 0,
      // 是否处于拖拽状态
      isPanning: false,
      // 拖拽起点X坐标
      panStartX: 0,
      // 拖拽当前X坐标
      panCurrentX: 0,
      // 禁用wrapper动画
      lockAnimtion: false
    };
  },
  computed: {
    /**
     * @computed 循环模式（开启自动切换或循环切换）
     * @type {boolean}
     */
    isLoop(){
      return this.autoplay || this.loop;
    },
    /**
     * @computed 拖拽产生的偏移量，负值向右，正值向左
     * @type {number}
     */
    manualTranslate(){
      const Dist = this.panStartX - this.panCurrentX;
      // 非自动/循环模式下第一个slide禁止向右拖拽
      if(!this.isLoop&&this.activeIndex===0&&Dist<0){
        return 0;
      }
      // 非自动/循环模式下最后一个slide禁止向左拖拽
      if(!this.isLoop&&this.activeIndex===this.itemCount-1&&Dist>0){
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
      this.play();
    });
  },
  watch: {
    manualTranslate(val){
      // 只在开启循环模式并且动画类型为slide时做出响应
      if(!this.isLoop||this.animation!=='slide'){
        return;
      }
      switch(true){
        // 当激活第一张slide同时向右拖拽时
        // 将最后一张slide偏移至第一张slide左侧
        case this.activeIndex === 0&&val<0:
          this.items[this.itemCount-1].translate(`-${this.itemCount}00%`);
          break;
        // 当激活第一张slide同时向左拖拽时
        // 将最后一张slide复位
        case this.activeIndex === 0&&val>0:
          this.items[this.itemCount-1].recover();
          break;
        // 当激活最后一张slide同时向左拖拽时
        // 将第一张slide偏移至最后一张slide右侧
        case this.activeIndex === this.itemCount-1&&val>0:
          this.items[0].translate(`${this.itemCount}00%`);
          break;
        // 当激活最后一张slide同时向右拖拽时
        // 将第一张slide复位
        case this.activeIndex === this.itemCount-1&&val<0:
          this.items[0].recover();
          break;
      }
    },
    activeIndex(val){
      // 只处理slide动画自动模式且无手动拖拽行为
      if(this.animation!=='slide'||!this.autoplay||this.manualTranslate!==0){
        return;
      }
      // 自动模式下切换至最后一张slide时将第一张偏移至其右侧
      if(val >= this.itemCount){
        this.items[0].translate(`${this.itemCount}00%`);
      }
    }
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
      if(this.animation==='slide'&&this.isLoop&&this.activeIndex!==index){
        this.activeIndex = index;
        if(index>=this.itemCount){
          this.$emit('change',0);
        }else if(index<0){
          this.$emit('change',this.itemCount-1);
        }else{
          this.$emit('change',this.activeIndex);
        }
      }else{
        const TargetIndex = (() => {
          if(index>=this.itemCount){
            return this.isLoop?0:this.itemCount-1;
          }
          if(index<0){
            return this.isLoop?this.itemCount-1:0;
          }
          return index;
        })();
        if(this.activeIndex!==TargetIndex){
          if(this.animation!=='slide'){
            this.items[this.activeIndex].fadeOut(this.animation==='fade');
            this.items[TargetIndex].fadeIn(this.animation==='fade');
          }
          this.activeIndex = TargetIndex;
          this.$emit('change',TargetIndex);
        }
      }
    },
    /**
     * @method pause 暂停自动切换
     */
    pause(){
      this.timer_autoplay&&clearTimeout(this.timer_autoplay);
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
      if(!this.autoplay){
        return;
      }
      this.timer_autoplay = setTimeout(() => {
        this.activeNext();
        this.play();
      },this.interval);
    },
    /**
     * @method onPanStart 响应touchstart事件，用于处理拖拽起始阶段
     * @param {EventObject} ev touchstart事件对象
     */
    onPanStart(ev){
      ev.preventDefault();
      ev.stopPropagation();

      this.isPanning = true;
      // 暂停自动切换
      this.pause();
      const Touches = ev.changedTouches||ev.touches;
      this.panStartX = Touches[0].clientX;
      this.panCurrentX = Touches[0].clientX;
    },
    /**
     * @method onPanMove 响应touchmove事件，用于处理拖拽进行阶段
     * @param {EventObject} ev touchmove事件对象
     */
    onPanMove(ev){
      ev.preventDefault();
      ev.stopPropagation();

      if(!this.isPanning){
        return;
      }

      const Touches = ev.changedTouches||ev.touches;
      this.panCurrentX = Touches[0].clientX;
    },
    /**
     * @method onPanEnd 响应touchend&touchcancel事件，用于处理拖拽结束阶段
     * @param {EventObject} ev touchend或者touchcancel事件对象
     */
    onPanEnd(ev){
      ev.preventDefault();
      ev.stopPropagation();

      if(!this.isPanning){
        return;
      }
      if(this.boxWidth === 0){
        // 再次取最外层容器宽度，以防止display:none造成的首次获取为0
        this.boxWidth = this.$el.clientWidth;
      }
      if(this.animation !== 'slide'){
        const Touches = ev.changedTouches||ev.touches;
        this.panCurrentX = Touches[0].clientX;
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
    },
    /**
     * @method onWrapperTransitionEnd 响应transitionend事件，用于循环模式下修正子组件位置
     */
    onWrapperTransitionEnd(){
      // 非循环模式下不作处理
      if(!this.isLoop){
        return;
      }
      if(this.activeIndex<0){
        this.lockAnimtion = true;
        this.items[this.itemCount-1].recover();
        this.activeItem(this.itemCount-1);
      }else if(this.activeIndex>=this.itemCount){
        this.lockAnimtion = true;
        this.items[0].recover();
        this.activeItem(0);
      }

      this.timer_resetLock&&clearTimeout(this.timer_resetLock);
      this.timer_resetLock = setTimeout(() => {
        this.lockAnimtion =false;
      },200);
    }
  },
  render(h){
    if(!this.$slots||!this.$slots.default||this.$slots.default.length === 0){
      return <div class="wayo-slides"></div>;
    }

    // 有效slide子组件
    const VNodes = this.$slots.default.filter(node => {
      return /^vue-component-\d+-WayoSlide$/.test(node.tag);
    });

    this.itemCount = VNodes.length;

    // 指示器
    const Indicators = (type => {
      if(type==='none'||this.itemCount<=1){
        return '';
      }
      return <div class="wayo-slides__indicators">
        {VNodes.map((node,index)=>{
          return <Indicator
            active={this.activeIndex===index||(index===0&&this.activeIndex<=0)||(index===this.itemCount-1&&this.activeIndex>=this.itemCount)}
            index={index}
            type={type}></Indicator>;
        })}
      </div>;
    })(this.indicatorType);

    // 内容实体
    const Wrapper = (() => {
      if(this.itemCount<=1){
        return <div class="wayo-slides__wrapper">
          {VNodes}
        </div>;
      }
      if(this.animation==='slide'){
        const Translate = this.activeIndex*this.boxWidth+this.manualTranslate;

        return <div 
          class={{
            'wayo-slides__wrapper': true,
            'wayo-slides__wrapper_animate': !this.lockAnimtion&&this.manualTranslate===0
          }}
          style={{
            '-webkit-transform': `translate3d(${-Translate}px,0,0)`,
            '-moz-transform': `translate3d(${-Translate}px,0,0)`,
            '-o-transform': `translate3d(${-Translate}px,0,0)`,
            'transform': `translate3d(${-Translate}px,0,0)`
          }}
          onTouchstart={this.onPanStart}
          onTouchmove={this.onPanMove}
          onTouchend={this.onPanEnd}
          onTouchcancel={this.onPanEnd}
          onTransitionend={this.onWrapperTransitionEnd}>
          {VNodes}
        </div>;
      }
      if(this.animation === 'none'||this.animation === 'fade'){
        return <div class="wayo-slides__wrapper wayo-slides__wrapper_stack"
          onTouchstart={this.onPanStart}
          onTouchend={this.onPanEnd}
          onTouchcancel={this.onPanEnd}>
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
    
    const Attributes= {
      attrs: this.$attrs,
      on: this.$listeners
    };

    return <div class="wayo-slides" {...Attributes}>
      {[Indicators,SlideItems]}
    </div>;
  },
  components: {
    Indicator
  }
};
</script>