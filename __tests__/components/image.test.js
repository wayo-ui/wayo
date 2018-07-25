import 'babel-polyfill';
import { shallow,createLocalVue,mount } from 'vue-test-utils';
import Image from '../../src/components/image';

describe('Logic Cases', () => {
  const LocalVue = createLocalVue();

  const Wrapper = shallow(Image, {
    localVue: LocalVue,
    propsData: {
      src: ''
    }
  });

  test('size', () => {
    expect(Wrapper.vm.size).toEqual({
      width: 70,
      height: 70
    });

    Wrapper.setProps({
      width: 80,
      height: 60
    });
    expect(Wrapper.vm.size).toEqual({
      width: 80,
      height: 60
    });
  });

  test('styles', () => {
    Wrapper.setProps({
      width: 70,
      height: 80,
      placeholder: 'placeholder'
    });

    expect(Wrapper.vm.styles).toMatch(/width:\s*70px;/);
    expect(Wrapper.vm.styles).toMatch(/height:\s*80px;/);
    expect(Wrapper.vm.styles).toMatch(/line\-height:\s*78px;/);
    expect(Wrapper.vm.styles).toMatch(/background\-image:\s*url\(placeholder\);/);

    Wrapper.setProps({
      fit: true
    });
    expect(Wrapper.vm.styles).not.toMatch(/width:\s*70px;/);
    expect(Wrapper.vm.styles).not.toMatch(/height:\s*80px;/);
    expect(Wrapper.vm.styles).not.toMatch(/line\-height:\s*78px;/);
    expect(Wrapper.vm.styles).toMatch(/width:\s*inherit;/);
  });
});

describe('SnapShot Cases',()=>{
  test('image',()=>{
    const Wrapper = mount(Image,{
      propsData: {
        src: ''
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });  
});