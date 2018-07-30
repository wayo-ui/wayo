import 'babel-polyfill';
import { shallowMount,createLocalVue,mount } from '@vue/test-utils';
import Stipe from '../../src/components/stripe';
import StipeButton from '../../src/components/stripe/_stripe-button.vue';

const LocalVue = createLocalVue();

describe('Snapshot', () => {
  test('stripe', () => {
    const Wrapper = mount(Stipe, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('stripe button', () => {
    const Wrapper = mount(StipeButton, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });
});