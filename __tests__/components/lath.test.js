import 'babel-polyfill';
import { shallow,createLocalVue,mount } from 'vue-test-utils';
import { render } from '@vue/server-test-utils';
import Lath from '../../src/components/lath';

const LocalVue = createLocalVue();

describe('Logic Cases', () => {
  const Wrapper = mount(Lath, {
    localVue: LocalVue
  });

  test('border', () => {
    expect(Wrapper.contains('.wayo-lath__separator-top')).toBe(false);
    expect(Wrapper.contains('.wayo-lath__separator-bottom')).toBe(false);

    Wrapper.setProps({
      borderTop: true,
      borderBottom: true
    });
    expect(Wrapper.contains('.wayo-lath__separator-top')).toBe(true);
    expect(Wrapper.contains('.wayo-lath__separator-bottom')).toBe(true);
  });

  test('inline', () => {
    expect(Wrapper.classes()).not.toContain('wayo-lath_inline');
    expect(Wrapper.classes()).not.toContain('wayo-lath_icon');
    expect(Wrapper.classes()).not.toContain('wayo-lath_content_header');
    Wrapper.setProps({
      inline: true
    });
    expect(Wrapper.classes()).toContain('wayo-lath_inline');
  });

  test('icon', () => {
    expect(Wrapper.contains('.wayo-lath__icon-head')).toBe(false);

    Wrapper.setProps({
      icon: 'bus',
      iconPosition: 'top'
    });
    expect(Wrapper.contains('.wayo-lath__icon-head')).toBe(true);
    expect(Wrapper.contains('.wayo-lath__icon-head_top')).toBe(true);
  });

  test('styles', () => {
    expect(Wrapper.vm.styles).toBe('');
    
    Wrapper.setData({
      tail: {
        icon: 'bus'
      }
    });
    expect(Wrapper.vm.styles).toMatch(/padding\-right:35px;/);

    Wrapper.setData({
      tail: {
        icon: 'bus',
        label: 'tail'
      }
    });
    expect(Wrapper.vm.styles).toMatch(/padding\-right:95px;/);
  });
});

describe('Snapshot Cases', () => {
  const Wrapper = render(Lath, {
    localVue: LocalVue
  });

  test('',() => {
    expect(Wrapper).toMatchSnapshot();
  });
});