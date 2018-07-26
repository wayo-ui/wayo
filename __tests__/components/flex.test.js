import 'babel-polyfill';
import { shallowMount,createLocalVue,mount } from '@vue/test-utils';
import Flex from '../../src/components/flex';

const LocalVue = createLocalVue();

describe('Box', ()=>{
  const Wrapper = shallowMount(Flex.Box, {
    localVue: LocalVue,
    slots: {
      default: [Flex.Cell]
    }
  });

  test('classes', () =>{
    expect(Wrapper.classes()).toContain('wayo-flex-box_direction_row');
    expect(Wrapper.classes()).toContain('wayo-flex-box_justify_start');
    expect(Wrapper.classes()).toContain('wayo-flex-box_align_unset');
    expect(Wrapper.classes()).not.toContain('wayo-flex-box_wrap');
  });

  test('styles', () =>{
    Wrapper.setProps({
      height: '10px'
    });
    expect(Wrapper.vm.styles).toContain('height:10px;');

    Wrapper.setProps({
      height: 15
    });
    expect(Wrapper.vm.styles).toContain('height:15px;');

    Wrapper.setProps({
      gutter: 20
    });
    expect(Wrapper.vm.styles).toContain('margin-left:-10px;');
    expect(Wrapper.vm.styles).toContain('margin-right:-10px;');

    Wrapper.setProps({
      direction: 'column'
    });
    expect(Wrapper.vm.styles).toContain('margin-top:-10px;');
    expect(Wrapper.vm.styles).toContain('margin-bottom:-10px;');
  });
});

describe('SnapShot Box', ()=>{
  const Wrapper = mount(Flex.Box, {
    localVue: LocalVue,
    propsData: {
      gutter: 20
    },
    slots: {
      default: [Flex.Cell]
    }
  });
  expect(Wrapper).toMatchSnapshot();
});

describe('Cell', ()=>{
  const Wrapper = shallowMount(Flex.Cell, {
    localVue: LocalVue
  });

  test('styles', () =>{
    expect(Wrapper.vm.styles).toContain('flex-basis:100%;');
    
    Wrapper.setData({
      padding: 10
    });
    expect(Wrapper.vm.styles).toContain('margin-top:10px;');
    expect(Wrapper.vm.styles).toContain('margin-bottom:10px;');
  });
});

describe('SnapShot Cell', ()=>{
  const Wrapper = mount(Flex.Cell, {
    localVue: LocalVue
  });
  expect(Wrapper).toMatchSnapshot();
});