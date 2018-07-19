import 'babel-polyfill';
import { shallow,createLocalVue } from 'vue-test-utils';
import Slides from '../../src/components/slides';

const LocalVue = createLocalVue();

const Wrapper = shallow(Button, {
  localVue: LocalVue
});

describe('Slides', () => {
  
});
