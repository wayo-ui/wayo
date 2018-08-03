import 'babel-polyfill';
import { shallowMount,createLocalVue,mount } from '@vue/test-utils';
import Button from '../../src/components/button';

describe('Logic', () => {
  const LocalVue = createLocalVue();

  const Wrapper = shallowMount(Button, {
    localVue: LocalVue
  });
  test('type', () =>{
    expect(Wrapper.classes()).toContain('wayo-button-default');
    Wrapper.setProps({
      type: 'success'
    });
    expect(Wrapper.classes()).toContain('wayo-button-success');
    Wrapper.setProps({
      type: 'info'
    });
    expect(Wrapper.classes()).toContain('wayo-button-info');
    Wrapper.setProps({
      type: 'warning'
    });
    expect(Wrapper.classes()).toContain('wayo-button-warning');
    Wrapper.setProps({
      type: 'danger'
    });
    expect(Wrapper.classes()).toContain('wayo-button-danger');
  });

  test('outline', () =>{
    Wrapper.setProps({
      type: "success",
      outline: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_outline');
    expect(Wrapper.vm.loadingPathColor).toBe('#67c23a');
    Wrapper.setProps({
      type: 'primary'
    });
    expect(Wrapper.vm.loadingPathColor).toBe('#ed5026');
    Wrapper.setProps({
      type: 'info'
    });
    expect(Wrapper.vm.loadingPathColor).toBe('#067ffa');
    Wrapper.setProps({
      type: 'warning'
    });
    expect(Wrapper.vm.loadingPathColor).toBe('#f39800');
    Wrapper.setProps({
      type: 'danger'
    });
    expect(Wrapper.vm.loadingPathColor).toBe('#ff0000');
    Wrapper.setProps({
      type: "success",
      outline: false
    });
    expect(Wrapper.vm.loadingPathColor).toBe('#ffffff');
    Wrapper.setProps({
      type: "default",
      outline: true
    });
    expect(Wrapper.vm.loadingPathColor).toBe('#333333');
  });

  test('round', () =>{
    Wrapper.setProps({
      outline: false,
      round: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_round');
  });

  test('disabled', () =>{
    Wrapper.setProps({
      type: 'default',
      outline: false,
      round: false,
      disabled: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_disabled');
    Wrapper.setProps({
      type: 'success',
      outline: false,
      round: false,
      disabled: true
    });
    expect(Wrapper.classes()).not.toContain('wayo-button_disabled');
    expect(Wrapper.classes()).toContain('wayo-button_disabled_typed');
  });

  test('circle', () =>{
    Wrapper.setProps({
      outline: false,
      round: false,
      disabled: false,
      circle: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_circle');
  });

  test('loading', () =>{
    Wrapper.setProps({
      outline: false,
      round: false,
      disabled: false,
      circle: false,
      loading: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_loading');
  });

  test('styles', () =>{
    Wrapper.setProps({
      fontColor: '#ff0000',
      bgColor: '#f4f4f4',
      borderColor: '#ff0000',
      width: 70,
      height: 50,
      fontSize: 14
    });
    expect(Wrapper.vm.styles).toMatch(/background\-color\:\s*#f4f4f4;/);
    expect(Wrapper.vm.styles).toMatch(/color\:\s*#ff0000;/);
    expect(Wrapper.vm.styles).toMatch(/border\:\s*solid\s+1px\s+#ff0000;/);
    expect(Wrapper.vm.styles).toMatch(/width\:\s*70px;/);
    expect(Wrapper.vm.styles).toMatch(/height\:\s*50px;/);
    expect(Wrapper.vm.styles).toMatch(/font\-size\:\s*14px;/);
  });
});