import 'babel-polyfill';
import { shallowMount,createLocalVue,mount } from '@vue/test-utils';
import { render } from '@vue/server-test-utils';
import Lath from '../../src/components/lath';

const LocalVue = createLocalVue();

describe('Logic Of Lath', () => {
  const Wrapper = shallowMount(Lath, {
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

    Wrapper.setData({
      hasHeader: true,
      hasContent: false
    });
    expect(Wrapper.classes()).not.toContain('wayo-lath_content_header');

    Wrapper.setData({
      hasHeader: true,
      hasContent: true
    });
    expect(Wrapper.classes()).toContain('wayo-lath_content_header');
  });
});

describe('Snapshot of Lath', () => {
  const Wrapper = mount(Lath, {
    localVue: LocalVue
  });

  test('',() => {
    expect(Wrapper).toMatchSnapshot();
  });
});

describe('Logic Of LathHeader', () => {
  const Wrapper = shallowMount(Lath.Header, {
    localVue: LocalVue
  });

  test('display',()=>{
    expect(Wrapper.vm.show).toBe(false);

    Wrapper.setProps({
      title: 'title',
      subtitle: 'subtitle'
    });
    expect(Wrapper.vm.show).toBe(true);

    Wrapper.setProps({
      title: 'title',
      subtitle: ''
    });
    expect(Wrapper.vm.show).toBe(true);

    Wrapper.setProps({
      title: '',
      subtitle: 'subtitle'
    });
    expect(Wrapper.vm.show).toBe(true);
  });
});

describe('Snapshot of LathHeader', () => {
  const Wrapper = mount(Lath.Header, {
    localVue: LocalVue,
    propsData: {
      title: 'title',
      subtitle: 'subtitle'
    }
  });

  test('',() => {
    expect(Wrapper).toMatchSnapshot();
  });
});

describe('Logic Of LathContent', () => {
  const Wrapper = shallowMount(Lath.Content, {
    localVue: LocalVue,
    propsData: {
      contentLineLimit: 2
    }
  });

  test('attributes',()=>{
    expect(Wrapper.vm.contentMaxHeight).toBe(42);
    expect(Wrapper.vm.show).toBe(false);

    Wrapper.setProps({
      content: 'content'
    });
    expect(Wrapper.vm.show).toBe(true);
    expect(Wrapper.vm.single_line_content).toBe(false);
    expect(Wrapper.vm.content_oversize).toBe(false);
  });

  test('methods',()=>{
    Wrapper.setData({
      content_oversize: true
    });
    Wrapper.vm.expandContent();
    expect(Wrapper.vm.content_oversize).toBe(false);
  });
});

describe('Snapshot of LathContent', () => {
  const Wrapper = mount(Lath.Content, {
    localVue: LocalVue,
    propsData: {
      content: 'content'
    }
  });

  test('',() => {
    expect(Wrapper).toMatchSnapshot();
  });
});

describe('Logic Of LathTail', () => {
  const Wrapper = shallowMount(Lath.Tail, {
    localVue: LocalVue
  });

  test('attributes',()=>{
    expect(Wrapper.vm.show).toBe(false);

    Wrapper.setProps({
      icon: 'bus'
    });
    expect(Wrapper.vm.show).toBe(true);
  });
});

describe('Snapshot of LathTail', () => {
  const Wrapper = render(Lath.Tail, {
    localVue: LocalVue,
    propsData: {
      icon: 'bus',
      label: 'tail'
    }
  });

  test('',() => {
    expect(Wrapper).toMatchSnapshot();
  });
});