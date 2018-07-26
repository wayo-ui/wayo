import 'babel-polyfill';
import { createLocalVue } from '@vue/test-utils';
import { render } from '@vue/server-test-utils';
import Separator from '../../src/components/separator';

const LocalVue = createLocalVue();

describe('Snapshot', () => {
  test('',() => {
    const Wrapper = render(Separator, {
      localVue: LocalVue,
      mocks: {
        window: {
          devicePixelRatio: 2
        }
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('',() => {
    const Wrapper = render(Separator, {
      localVue: LocalVue,
      mocks: {
        window: {
          devicePixelRatio: 2
        }
      },
      propsData: {
        direction: 'column',
        height: 50,
        absolute: true
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });
});