import 'babel-polyfill';
import { shallow,createLocalVue } from 'vue-test-utils';
import Button from '../../src/components/button';

const LocalVue = createLocalVue();

const Wrapper = shallow(Button, {
  localVue: LocalVue
});

describe('Button', () => {
  test('type', () =>{
    Wrapper.setProps({
      type: 'success'
    });
    expect(Wrapper.classes()).toContain('success');
  });
});
