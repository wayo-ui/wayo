import './styles/index.scss';

import Button from './components/button';
import Card from './components/card';
import Flex from './components/flex';
import Icon from './components/icon';
import Image from './components/image';
import ImageViewer from './components/imageviewer';
import Lath from './components/lath';
import Rate from './components/rate';
import Stripe from './components/stripe';
import Separator from './components/separator';
import Showcase from './components/showcase';
import Slides from './components/slides';
import Tabs from './components/tabs';
import Tag from './components/tag';
import Toast from './components/toast';

const Components = {
  Button,
  Card,
  CardTitle: Card.Title,
  CardHeader: Card.Header,
  CardContent: Card.Content,
  FlexBox: Flex.Box,
  FlexCell: Flex.Cell,
  Icon,
  Image,
  ImageViewer,
  Lath,
  LathHeader: Lath.Header,
  LathContent: Lath.Content,
  LathTail: Lath.Tail,
  Rate,
  Stripe,
  StripeButton: Stripe.Button,
  Separator,
  Showcase,
  ShowcaseItem: Showcase.Item,
  Slides,
  Slide: Slides.Slide,
  Tab: Tabs.Tab,
  Tabs: Tabs.Tabs,
  Tag,
  Toast
};

function install(Vue) {
  for(const key in Components){
    Vue.component(Components[key].name, Components[key]);
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: VERSION, 
  install,
  ...Components
};