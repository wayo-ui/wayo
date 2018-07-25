import 'babel-polyfill';
import { shallow,createLocalVue } from 'vue-test-utils';
import ImageViewer from '../../src/components/imageviewer';

const LocalVue = createLocalVue();

const Wrapper = shallow(ImageViewer, {
  localVue: LocalVue
});

describe('Imagepreviewer', () => {
  
});
