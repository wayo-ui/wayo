import 'babel-polyfill';
import { shallow,createLocalVue } from 'vue-test-utils';
import Showcase from '../../src/components/showcase';

const LocalVue = createLocalVue();

const Wrapper = shallow(Showcase, {
  localVue: LocalVue
});

describe('Showcase', () => {
  
});
