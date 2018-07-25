import 'babel-polyfill';
import { mount } from '@vue/test-utils';
import Card from '../../src/components/card';

describe('SnapShot Cases',()=>{
  test('card',()=>{
    const Wrapper = mount(Card);
    expect(Wrapper).toMatchSnapshot();
  });
  test('title',()=>{
    const Wrapper = mount(Card.Title);
    expect(Wrapper).toMatchSnapshot();
  });
  test('header',()=>{
    const Wrapper = mount(Card.Header);
    expect(Wrapper).toMatchSnapshot();
  });
  test('content',()=>{
    const Wrapper = mount(Card.Content);
    expect(Wrapper).toMatchSnapshot();
  });
  
});