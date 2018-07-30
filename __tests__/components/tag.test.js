import 'babel-polyfill';
import { shallowMount,createLocalVue } from '@vue/test-utils';
import { render } from '@vue/server-test-utils';
import Tag from '../../src/components/tag';

const LocalVue = createLocalVue();

describe('Snapshot', () => {
  test('', () => {
    const Wrapper = render(Tag, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });
});