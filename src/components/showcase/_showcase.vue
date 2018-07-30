<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA,REG_IMAGE_URL} from '@/constants';
import ShowcaseBar from './_showcase-bar.vue';

const MAX_NAV_HEIGHT = 160;

/**
 * @vue
 */
export default {
  name: `${APPNAME}Showcase`,
  props: {
    /**
     * @prop 操作区背景
     * @type {string}
     * @default ``
     */
    navBg: {
      type: String,
      default: '',
      validator: val => {
        return !val||REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val)||REG_IMAGE_URL.test(val);
      }
    }
  },
  data(){
    return {
      // 操作区对象配置
      barsOptsList: [],
      // 展示区对象
      panels: {},
      // 总数
      count: 0,
      // 操作区高度
      navHeight: MAX_NAV_HEIGHT,
      // 操作区padding-bottom
      navPaddingBottom: 15,
      // 操作区padding-top
      navPaddingTop: 30,
      // 操作区图片宽度
      thumbWidth: 95,
      // 当前激活的索引值
      activeIndex: 0,
      // 最外层容器宽度
      width: 0
    };
  },
  methods: {
    /**
     * @method addPanel 添加内容面板，子组件调用
     * @param {VueComponentObject} panel 面板对象
     * @param {Object} barOpts 操作区配置项
     */
    addItem(panel,barOpts){
      this.count++;
      this.$set(this.panels,this.count,panel);
      this.barsOptsList.push(barOpts);
    },
    /**
     * @method showItem 显示指定索引的子组件
     * @param {number} index 待显示的索引
     */
    showItem(index){
      this.activeIndex>0&&this.panels[this.activeIndex].hide();
      this.panels[index].show();
      this.activeIndex = index;
    },
    /**
     * @method calNavSize 计算操作区及其图片的尺寸
     * @param {string} image 索引区第一张图片url
     */
    calNavSize(image){
      const Thumb = new Image();
      Thumb.onload = () => {
        this.navHeight = Math.min(Thumb.height,MAX_NAV_HEIGHT);
        this.thumbWidth = (this.navHeight-this.navPaddingTop-this.navPaddingBottom)*Thumb.width/Thumb.height;
      };
      Thumb.src=image;
    },
    /**
     * @method onBarClicked 接受操作区点击事件
     * @param {string} index 被点击的子组件索引
     */
    onBarClicked(index){
      if(index!==this.activeIndex){
        this.showItem(index);
        this.$emit('active-change',index-1);
      }
    }
  },
  computed: {
    /**
     * @computed 操作区偏移量
     * @type {number}
     */
    navWrapperOffset(){
      return this.width/2 - ((this.thumbWidth+20)*(this.activeIndex-1)+(this.thumbWidth*1.25+10)/2);
    },
    /**
     * @computed nav样式
     * @type {string}
     */
    navStyles(){
      const List = [`height: ${this.navHeight}px;`];
      if(this.navBg){
        if(REG_COLOR_HEX.test(this.navBg)||REG_COLOR_RGBA.test(this.navBg)){
          List.push(`background-color:${this.navBg};`);
          List.push('background-image:none;');
        }else{
          List.push(`background-image:url(${this.navBg});`);
        }
      }
      return List.join('');
    },
    /**
     * @computed 展示区偏移量
     * @type {string}
     */
    contentWrapperOffset(){
      return this.width*(this.activeIndex-1);
    }
  },
  mounted() {
    // 最外层容器宽度
    this.width = this.$el.clientWidth;

    this.$nextTick(() => {
      this.count>0&&this.showItem(1);
    });
  },
  render(h){
    if(!this.$slots||!this.$slots.default||this.$slots.default.length === 0){
      return <div class="wayo-showcase"></div>;
    }
    if(this.count !== 0){
      this.calNavSize(this.barsOptsList[0].thumb);
    }

    // 操作区
    const Nav = (
      <div class="wayo-showcase__nav" style={this.navStyles}>
        <div class="wayo-showcase__nav-wrapper"
          style={{
            transform: `translate3d(${this.navWrapperOffset}px,0,0)`
          }}>
          {this.barsOptsList.map((opts,index) => {
            return <ShowcaseBar 
              index={index+1}
              thumb={opts.thumb}
              active={this.activeIndex===index+1}
              width={this.thumbWidth}
              onClick={this.onBarClicked}></ShowcaseBar>;
          })}
        </div>
      </div>
    );
    // 展示区
    const Panels = (
      <div ref="content" class="wayo-showcase__content">
        <div class="wayo-showcase__content-wrapper"
          style={{
            transform: `translate3d(-${this.contentWrapperOffset}px,0,0)`
          }}>
          {this.$slots.default}
        </div>
      </div>
    );

    return <div class="wayo-showcase">{[Nav,Panels]}</div>;
  },
  components: {
    ShowcaseBar
  }
};
</script>