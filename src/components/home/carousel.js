import React from 'react';
import {
    Carousel
  } from 'antd';

import './carousel.css'
 

class Slider extends React.Component {
    render() {
        return (
<Carousel style={{margin:"20px 0"}} >
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
        )}
}

export default Slider; 