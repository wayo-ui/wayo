import 'babel-polyfill';
import { shallow,createLocalVue,mount } from 'vue-test-utils';
import { render } from '@vue/server-test-utils';
import ImageViewer from '../../src/components/imageviewer';

const LocalVue = createLocalVue();

describe('Logic Cases', () => {
  const Wrapper = shallow(ImageViewer, {
    localVue: LocalVue
  });

  test('mask style', () => {
    expect(Wrapper.vm.maskStyle).toMatch(/background\-color\:\s*#000000;/);
    expect(Wrapper.vm.maskStyle).toMatch(/opacity\:\s*0\.6;/);

    Wrapper.setProps({
      maskColor: '#333333',
      maskOpacity: 1
    });
    expect(Wrapper.vm.maskStyle).toMatch(/background\-color\:\s*#333333;/);
    expect(Wrapper.vm.maskStyle).toMatch(/opacity\:\s*1;/);
  });

  test('change event', () => {
    Wrapper.vm.onChange(1);
    expect(Wrapper.vm.activeIndex).toBe(2);
    expect(Wrapper.emitted().change).toBeTruthy();
    expect(Wrapper.emitted().change[0]).toEqual([1]);
  });

  test('close event', () => {
    Wrapper.vm.onClose();
    expect(Wrapper.emitted().close).toBeTruthy();
  });
});

describe('Snapshot Cases', () => {
  const Wrapper = render(ImageViewer, {
    localVue: LocalVue
  });

  test('',() => {
    expect(Wrapper).toMatchSnapshot();
  });
});
