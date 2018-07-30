import 'babel-polyfill';
import { shallowMount,createLocalVue } from '@vue/test-utils';
import { render } from '@vue/server-test-utils';
import Showcase from '../../src/components/showcase';
import ShowcaseBar from '../../src/components/showcase/_showcase-bar.vue';

const LocalVue = createLocalVue();

describe('Logic', () => {
  const Wrapper = shallowMount(Showcase, {
    localVue: LocalVue,
    slots: {
      default: ['<div></div>']
    }
  });

  test('navigator styles', () => {
    expect(Wrapper.vm.navStyles).toMatch(/height:\s*160px;/);

    Wrapper.setProps({
      navBg: '#ff0000'
    });
    expect(Wrapper.vm.navStyles).toMatch(/background\-color\:\s*#ff0000;/);
    expect(Wrapper.vm.navStyles).toMatch(/background\-image\:\s*none;/);
    Wrapper.setProps({
      navBg: 'http://map.sogou.com/logo.png'
    });
    expect(Wrapper.vm.navStyles).toMatch(/background\-image\:\s*url\(http\:\/\/map\.sogou\.com\/logo\.png\);/);
  });

  test('methods', () => {
    const Mock_show = jest.fn();
    const Mock_hide = jest.fn();

    Wrapper.setData({
      activeIndex: 1,
      panels: [{},{
        hide: Mock_hide
      },{
        show: Mock_show
      }]
    });
    Wrapper.vm.showItem(2);
    expect(Wrapper.vm.activeIndex).toBe(2);
    expect(Mock_hide).toBeCalled();
    expect(Mock_show).toBeCalled();

    Wrapper.setData({
      activeIndex: 1
    });
    Wrapper.vm.onBarClicked(2);
    expect(Wrapper.emitted()['active-change'][0]).toEqual([1]);
    expect(Mock_show.mock.calls.length).toBe(2);
    expect(Mock_hide.mock.calls.length).toBe(2);
  });
});

describe('Snapshot', () => {

  test('showcase', () => {
    const Wrapper = render(Showcase, {
      localVue: LocalVue,
      slots: {
        default: []
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('showcase item', () => {
    const Wrapper = render(Showcase.Item, {
      localVue: LocalVue,
      propsData: {
        thumb: 'http://map.sogou.com/logo.png'
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('showcase bar', () => {
    const Wrapper = render(ShowcaseBar, {
      localVue: LocalVue,
      propsData: {
        thumb: 'http://map.sogou.com/logo.png',
        width: 90,
        index: 0
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });
});