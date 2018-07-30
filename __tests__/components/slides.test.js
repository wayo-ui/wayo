import 'babel-polyfill';
import { shallowMount,createLocalVue } from '@vue/test-utils';
import { render } from '@vue/server-test-utils';
import Slides from '../../src/components/slides';
import Indicator from '../../src/components/slides/_indicator.vue';

const LocalVue = createLocalVue();

describe('Logic', () => {
  const Wrapper = shallowMount(Slides, {
    localVue: LocalVue,
    propsData: {
      autoplay: false,
      loop: false
    }
  });
  test('computed', () => {
    expect(Wrapper.vm.isLoop).toBe(false);

    Wrapper.setProps({
      autoplay: true
    });
    expect(Wrapper.vm.isLoop).toBe(true);
    
    Wrapper.setProps({
      autoplay: false,
      loop: true
    });
    expect(Wrapper.vm.isLoop).toBe(true);

    Wrapper.setProps({
      autoplay: false,
      loop: true,
      animation: 'none'
    });
    Wrapper.setData({
      panStartX: 100,
      panCurrentX: 50
    });
    expect(Wrapper.vm.manualTranslate).toBe(50);

    Wrapper.setProps({
      autoplay: false,
      loop: false
    });
    Wrapper.setData({
      panStartX: 100,
      panCurrentX: 50,
      activeIndex: 2,
      itemCount: 3
    });
    expect(Wrapper.vm.manualTranslate).toBe(0);

    Wrapper.setData({
      panStartX: 20,
      panCurrentX: 50,
      activeIndex: 0
    });
    expect(Wrapper.vm.manualTranslate).toBe(0);
  });
});

describe('Snapshot', () => {
  test('slides', () => {
    const Wrapper = render(Slides, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('slides item', () => {
    const Wrapper = render(Slides.Slide, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('slides indicator', () => {
    const Wrapper = render(Indicator, {
      localVue: LocalVue,
      propsData: {
        index: 0
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });
});