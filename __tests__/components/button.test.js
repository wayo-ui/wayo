import 'babel-polyfill';
import { shallowMount,createLocalVue,mount } from '@vue/test-utils';
import Button from '../../src/components/button';

describe('Logic Cases', () => {
  const LocalVue = createLocalVue();

  const Wrapper = shallowMount(Button, {
    localVue: LocalVue
  });
  test('type', () =>{
    expect(Wrapper.classes()).toContain('wayo-button-primary');
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

  test('plain', () =>{
    Wrapper.setProps({
      type: "success",
      plain: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_plain');
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
  });

  test('round', () =>{
    Wrapper.setProps({
      plain: false,
      round: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_round');
  });
  test('disabled', () =>{
    Wrapper.setProps({
      plain: false,
      round: false,
      disabled: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_disabled');
  });
  test('circle', () =>{
    Wrapper.setProps({
      plain: false,
      round: false,
      disabled: false,
      circle: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_circle');
  });
  test('loading', () =>{
    Wrapper.setProps({
      plain: false,
      round: false,
      disabled: false,
      circle: false,
      loading: true
    });
    expect(Wrapper.classes()).toContain('wayo-button_loading');
    expect(Wrapper.vm.loadingPathScale).toBe(0.4);
    Wrapper.setProps({
      size: 'fit'
    });
    expect(Wrapper.classes()).not.toContain('wayo-button_loading');
    Wrapper.setProps({
      size: 'large'
    });
    expect(Wrapper.vm.loadingPathScale).toBe(0.5);
    Wrapper.setProps({
      size: 'small'
    });
    expect(Wrapper.vm.loadingPathScale).toBe(0.3);
  });
  test('styles', () =>{
    Wrapper.setProps({
      fontColor: '#ff0000',
      bgColor: '#f4f4f4',
      borderColor: '#ff0000'
    });
    expect(Wrapper.vm.styles).toContain('background-color: #f4f4f4;');
    expect(Wrapper.vm.styles).toContain('color: #ff0000;');
    expect(Wrapper.vm.styles).toContain('border: solid 1px #ff0000;');
  });
});

describe('SnapShot Cases',()=>{
  test('non loading & non icon',()=>{
    const Wrapper = mount(Button,{
      slots: {
        default: ['wayo']
      }
    });
    expect(Wrapper.contains('svg')).toBe(false);
    expect(Wrapper.contains('.wayo-icon')).toBe(false);
    expect(Wrapper).toMatchSnapshot();
  });
  test('non loading & icon',()=>{
    const Wrapper = mount(Button,{
      propsData: {
        loading: false,
        icon: 'bus'
      },
      slots: {
        default: ['wayo']
      }
    });
    expect(Wrapper.contains('svg')).toBe(false);
    expect(Wrapper.contains('.wayo-icon')).toBe(true);
    expect(Wrapper).toMatchSnapshot();
  });
  test('loading&icon',()=>{
    const Wrapper = mount(Button,{
      propsData: {
        loading: true,
        icon: 'bus'
      },
      slots: {
        default: ['wayo']
      }
    });
    expect(Wrapper.contains('svg')).toBe(true);
    expect(Wrapper.contains('.wayo-icon')).toBe(false);
    expect(Wrapper).toMatchSnapshot();
  });
});