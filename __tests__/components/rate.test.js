import 'babel-polyfill';
import { createLocalVue } from '@vue/test-utils';
import { render } from '@vue/server-test-utils';
import Rate from '../../src/components/rate';

const LocalVue = createLocalVue();

describe('Snapshot', () => {
  test('',() => {
    const Wrapper = render(Rate, {
      localVue: LocalVue
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('',() => {
    const Wrapper = render(Rate, {
      localVue: LocalVue,
      propsData: {
        score: 4,
        showScore: true,
        labelSize: 12,
        size: 15
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });

  test('',() => {
    const Wrapper = render(Rate, {
      localVue: LocalVue,
      propsData: {
        score: 4,
        showScore: true,
        labelSize: 12,
        size: 15,
        max: 10
      }
    });
    expect(Wrapper).toMatchSnapshot();
  });
});