import 'babel-polyfill';
import { shallow,createLocalVue } from 'vue-test-utils';
import Imagepreviewer from '../../src/components/imagepreviewer';

const LocalVue = createLocalVue();

const Wrapper = shallow(Button, {
  localVue: LocalVue
});

describe('Imagepreviewer', () => {
  
});
