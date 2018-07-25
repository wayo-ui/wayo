import 'babel-polyfill';
import { shallowMount,createLocalVue, mount } from '@vue/test-utils';
import Icon from '../../src/components/icon';

describe('SnapShot Cases',()=>{
  test('icon',()=>{
    const Wrapper = mount(Icon);
    expect(Wrapper).toMatchSnapshot();
  });  
});

describe('Logic Cases',()=>{
  const LocalVue = createLocalVue();

  const Wrapper = shallowMount(Icon, {
    localVue: LocalVue,
    propsData: {
      name: 'bus',
      color: '#ff0000',
      size: 12
    }
  });

  test('class',()=>{
    expect(Wrapper.classes()).toContain('wayo-icon-bus');
  }); 

  test('styles',()=>{
    expect(Wrapper.vm.styles).toContain('color: #ff0000;');
    expect(Wrapper.vm.styles).toContain('font-size: 12px;');
  });  
});