import 'babel-polyfill';
import { shallowMount,createLocalVue,mount } from '@vue/test-utils';
import { render } from '@vue/server-test-utils';
import Tabs from '../../src/components/tabs';
import TabBar from '../../src/components/tabs/_tab-bar.vue';
import TabNavPinter from '../../src/components/tabs/_tab-nav-pointer.vue';

const LocalVue = createLocalVue();

describe('Snapshot', () => {
  test('tabs', () => {
    const Wrapper = mount(Tabs.Tabs, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('tab', () => {
    const Wrapper = render(Tabs.Tab, {
      localVue: LocalVue,
      propsData: {
        label: 'label',
        name: 'name'
      },
      mocks: {
        $parent: {
          addBar: jest.fn()
        }
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('tab bar', () => {
    const Wrapper = mount(TabBar, {
      localVue: LocalVue,
      propsData: {
        label: 'label',
        name: 'name'
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('tab nav pointer', () => {
    const Wrapper = mount(TabNavPinter, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });
});