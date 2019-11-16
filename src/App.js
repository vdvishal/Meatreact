import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/home/carousel';

import Category from './components/home/category';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Info from './components/info/info';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
const {Content } = Layout
function App() {
  return (
    <div className="App">
      <Info />
      <Header />
      <Layout >
      
      
      <Content className="content"  >
        <Slider />
        <Category />
      </Content>


      </Layout>
      <Footer />
    </div>
  );
}

export default App;
