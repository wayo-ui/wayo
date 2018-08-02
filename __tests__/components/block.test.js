import 'babel-polyfill';
import { mount } from '@vue/test-utils';
import Block from '../../src/components/block';

describe('SnapShot Cases',()=>{
  test('Block',()=>{
    const Wrapper = mount(Block);
    expect(Wrapper).toMatchSnapshot();
  });
  test('title',()=>{
    const Wrapper = mount(Block.Title);
    expect(Wrapper).toMatchSnapshot();
  });
  test('header',()=>{
    const Wrapper = mount(Block.Header);
    expect(Wrapper).toMatchSnapshot();
  });
  test('content',()=>{
    const Wrapper = mount(Block.Content);
    expect(Wrapper).toMatchSnapshot();
  });
  
});