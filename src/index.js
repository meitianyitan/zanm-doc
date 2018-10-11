import Vue from 'vue';
import ZanDoc from './ZanDoc';
import Nav from './component/Nav';
import Block from './component/Block';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import Container from './component/Container';
import FooterNav from './component/FooterNav';
import Simulator from './component/Simulator';
import DemoBlock from './component/DemoBlock';
import DemoSection from './component/DemoSection';
import progress from 'nprogress';
import './style/nprogress.css';

const components = [
  ZanDoc,
  Nav,
  Block,
  Header,
  Footer,
  Content,
  Container,
  FooterNav,
  Simulator,
  DemoBlock,
  DemoSection
];

export default function install() {
  components.map(Component => {
    Vue.component(Component.name, Component);
  });
}

export {
  ZanDoc,
  Nav,
  Block,
  Header,
  Footer,
  Content,
  Container,
  FooterNav,
  Simulator,
  DemoBlock,
  DemoSection,
  progress
};
