/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useState } from 'react';
import { Drawer, Button, Icon, Row } from 'antd';

import './header.css';

// const duration = 300;

// const defaultStyle = {
//   transition: `height ${duration}ms ease-in-out`,
//   position: 'absolute',
//   width: '100vw',
// };

// const transitionStyles = {
//   entering: { height: '175px' },
//   entered: { height: '175px' },
//   exiting: { height: 0 },
//   exited: { height: 0 },
// };


function Header() {
  const [isHide, setisHide] = useState(false);
  const [cart, setCart] = useState(false);

  const showDrawer = () => {
    setisHide(true);
  };
  const onClose = () => {
    setisHide(false);
  };

  const onShowCart = () => {
    setCart(true);
    console.log("csaaaaaa");
    
}
const onCartClose = () => {
  setCart(false);
  console.log("csaaaaaa");
  
}

  return (

    <div className="headerMain">
      <div className="headerLayout">
        <h1>
            
            MEAT CORNER LOGO

        </h1>
        <div className="headerRight hideHeader">
 
          <span>
                Profile
          </span>
          <span onClick={onShowCart}>
                Cart
          </span>
        </div>
        <div className="headerRight showHeader" onClick={showDrawer}>
          <span>
            <Icon type="menu" />
          </span>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={isHide}
        >
          
          <span>
                Profile
          </span>
          <span>
                Cart
          </span>
        </Drawer>
      </div>
      <Drawer
          title="Cart Details"
          
          onClose={onCartClose}
          visible={cart}
        > 
        <div>
          <Row >
            Chicken
            <br />
            Quantity: 1kg
            <br />
            Price: 100
          </Row>
          <hr />
          <Row >
            Chicken
            <br />
            Quantity: 1kg
            <br />
            Price: 100
          </Row>
          <hr />
        </div>
                      
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={onCartClose} size="small" style={{ marginRight: 2 }}>
              Cancel
            </Button>
            <Button onClick={onCartClose} size="small" style={{ marginRight: 2 }} type="primary">
              Add More
            </Button>
            <Button onClick={onCartClose} size="small" style={{ marginRight: 2 }} type="primary">
                CheckOut
            </Button>
          </div>
        </Drawer>
        
    </div>
	  );
}

export default Header;
