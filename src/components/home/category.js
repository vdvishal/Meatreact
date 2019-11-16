import React from 'react';
import {
    Row, Col, Card, Icon, Button, Drawer, InputNumber 
  } from 'antd';

import './category.css'

  const { Meta } = Card;

class Category extends React.Component {
    
    state = { visible: false, price: 0, quantity: 0, cartVisible: false, addCart: {}, cart: [] };

    showDrawer = (data) => {
      this.setState({
        visible: true,
        addCart: {
            name:data.name,
            price: data.price
        },
        quantity: 1,
        price: data.price
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
      
    };

    onAddToCart = () => {
        this.setState({
          visible: false,
          cart: [
              ...this.state.cart, {
                  name: this.state.addCart.name,
                  quantity : this.state.quantity,
                  pricePerKg: this.state.addCart.price,
                  totalPrice: this.state.price
              }
          ]
        });
        console.log(this.state.cart)
    };

    onChangeQuantity = (value) => {
        this.setState({
            quantity: value,
            price: value*this.state.addCart.price,
          }); 
          console.log(this.state.cart)
    }



    render() {
        return (
        <div>
    
	  
<Row type="flex" justify='center' gutter={[16, 16]} style={{margin:"0 0 10px 0"}}>
            <Col className="card" xs={24} sm={10} md={12} lg={6} >
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEBIQExMQEg8QFxAVEhgSDxATEBUQFRUWFhcVFRUYHSggGBolHRMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0mHyUtLS0tLS8tLS0tLS0wLS0tLS0tLS0tLS0tLS8rMC0tKy0tLS0tLS0uLSstLS0tLS0tLv/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADgQAAIBAgQEAwUHAgcAAAAAAAABAgMRBBIhMQUGUXFBYcETIjKRsSNCcoGh0fBSYgcUJDOCkrL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/8QAMBEBAAICAQIDBQgDAQEAAAAAAAECAxEEITEFEkETUWFxkSIjMjOBobHwQsHRUhT/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAxcDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANJ1Etys2iExG0FTGpFfOt5Hz3nKljP8AMyxNCs1CUHTypv3IuNpu23nfe/Y89qzN5tt3OFycFcNcV6b1O/nO+n/Hc5E5g9spYeelWnmdm25O8s8rdIpVaSX5muK3+LyeIcaKxGWvaen7aj9ZmJ29gbuWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdaqoora2kxG3n+JY2o7qnlz62c75V5u2r7HnmZl6KVj1eC5g5hxsZSjfWKk7QWk7bW10v6FLWmHvrixxi89Y3KPgfM1SpCHtIOMpWvd31Ipk3MwiMMWr5u0+5wMfxCph+ISxVHTJKL8vhUZRfk7WsXmevTu6WCIvh9nftPR974djI1qNOtD4KsITj2kk/U9VZ3G3zWXHOO80nvE6WSWYAAAAAAAAAAAAAAAAAAAAAAAAAAAABhsiZ0Obi5Xuzz3nbaI08ZzdiKtLJUhmyqVp5E20pKyfmrvUy6uhwqUvaYt7nPqcNVWEKkpa2ea9uuxfy7hpOSK2msR0cDGpU5e64t6L7NqcpNuySjoum7M7br+GHqpiiY6xP8LkeCyk8znNKa99OnFp+bV9JeZzcvJmZ1MdfmpNtamvTT6ZyhXToeySt7KyX4Xd/ue/w7PbJWaWjrH+3M51NXi8erunSeEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiryKXlasOdiKml3+R57TqOrSIUMVSvbREV6Stt5Pn7AVp4X7HMlB3nGG8oPtroy1nT8Lvj9t9769p+L5zhsHiZK8adeUF7rcaVSWr0tot2Uns+ht7Gk9bR9YfX/8P+AV1TeIxub2lRZadGXwU6Wmso/1u3jql3ZpTDFo+3G/g+Z8Q5OOLez4/aOsz6zPz938vXYPAU6Tk4K2e11e60vtfuaY8NKTusOZfJa0alaNVAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGwKOJqGFpaxCpVtZdfoUmOiyPcmsDaFHx33JNuhhJaeQxT1VvCznN9s9NkyUMgAAAAAAAAAAAAAAAAAAAAAAAAAAAARVJeCKzK0QozV5X8F9THW5XVqr3JGKerIStU46FkJKD+RSO6ZWEaxKhcnaEyZaJVZJAAAAAAAAAAAAAAAAAAAAAAAAAARVGVmVoR1HYrKYUq1UqsqS1fchLeIQt0ZEiSMGm2tnr2K6NtnULIbqY2aS05FqyrKU0VAAAAAAAAAAAAAAAAAAAAAAAAABC3qZz3WVq2q/mxWeq0KlVhKCbITDMGQLUNCUJVWsTsJxvqiCGYa2ISmT+ZKqzF3RtE7ZyySAAAAAAAAAAAAAAAAAAAAAAADDYFSUuvnYynu0V6s/mVSq1GJTCJsqlvTAmpzJiUTCV1CdobQmBM1oBhp6a2IkhYpSL1lWYTGqgAAAAAAAAAAAAAAAAAAAAAAAxLYiexDnVG7vojFqhlF3Gk7RVYCYRCFIqsRZAmgW0hu4oaQkjIkW6bViYQzNX0Exshmkr6kVglYibQzZJAAAAAAAAAAAAAAAAAAAAAADEiJHOrvXsYerb0aosq0qRCVecSqUUSqU9MvCJT20JlCOJTSy1SkWhVKmShvTZMSiU0Ni9eystiyAAAAAAAAAAAAAAAAAAAAAAABzsVC0u557RqW0dYapFlUcyNpQyjqQlpOJCW9PYshJcgEBNFhCWMiRJTjZ36isaRMrMdjaOykskoAAAAAAAAAAAAAAAAAAAAAAAGlWmpIrasSmJ0oVKbj/N+xnPReOqJPXXT+eBXvKzLgiZhDSasVlLTKSMwRGkt2iUbETpG09PwJQnTAsx2NY7M5ZJAAAAAAAAAAAAAAAAAAAAAAAAAjrQuito3CazpzpOzsY+umpeyLIaRnmdmQJJqwlKJ6sqFrEjaDJ2hnOVmU6WcOr6FqxtWy4kbs2QAAAAAAAAAAAAAAAAAAAAAAAAAApYmFnfwMbRqWlZ2jyXISjrQtqJTBH3kV7jWpB9mJIax6kQkkNjenC4jqT0dKjTsvM9Fa6YzO0hZAAAAAAAAAAAAAAAAAAAAAAAAAAAGs4pqzImNpidObjIOOqML7hrWdq0q8rbldynUOjw2CyX01b/b0NcWprtTJvelrIuiNNM9uS9Jfoedu3epEkL2GpWXma46+rO8pzVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgxlO8GZ5Y3Vek9Xj8fiHmUYtrW2nicTl8zy/YpPV0MOL1l6zhdPLRgvK/z19Tr8Svlw1j4PDnt5skytnoZONipJzkr6xbfr6nkteJmYj0eiInUS3wN3JJ7vW1+n8RFLRNorPqWjUTMOsex5wAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHiPgl+GX0Ms/5dt+6f4Wp+KPm8Nw+gqmKUfu3t+W7/RHyPCxe1zVp6TP7O3mt5Mc2e9SPs3CAPL80QlTqRqw0c00+6S9PocHxOb4MkZaT+Lv84/v7OjxNZKzW3otcs1JTzzl91RivV/ojTwzLfNe17ekRH/f4hTl1ilYrHr1d47TwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAClxmrloVHtdW+eh4vEL+Xj3+Ma+rfjV3lh5XlB5sTez+Gb20T0WvTSRx/CKx7bce50ObP3f6vbn0rkAHE5tj9gpeMZr9UzkeMxHsIt7pe3gz95MfBnlb/al+L0RTwT8m3z/wBJ5/44+TtHaeEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAea50xqjBUvF6tfovDv8jheNZPs1x/rP+nQ4FOs2/Rw+VeKQpV2pu0Kiy36NbPseTwzPGLJu3aY+j18vDOTH9nvD6CmfUOIAcTm9/wCm/wCUenR9TmeK/kfrD18L8z9EPKFZOEl1yve/k/Q8/g9tees9+ktefHWsvQnbc8AAAAAAAAAAAAAAAAAAAAAAAAAAChj+L0aOk5WfSzu+xhm5OPFH2m2Lj3yfhVFzThbfE/8Aq7nnnxLBEb3P0bRwc0+iriub6a92nTqVJvZWSXdvwXmzC3i1Jj7uszPx6Q0r4faPxzEPJcycWUnnnKKnrt8K0287HGz5bci076zv+xDoYsMY4+Dl8FVLFaKeVXyua+63tJruTjw+XJFb9IlpbLqs+WN/B67lPjeIp1XgMTCTnT+GUU5JQVkm/wCzXRna4mXJjtOHJ6dv77nO5WHHevtsc9/79XtzqOY8RzTxuE24Rfu0736OXj/O5854ly4y3rir73V42CcdZtbvKPlLiCjUim/dmrbuyv1uZcC0cfkzWZ6dluTWcmLcQ92fUOQAAAAAAAAAAAAAAAAAAAAAAAAAABXxmBpVUlVpwqJbZ4qVu1ytqVt3hatrV7S8ZzNSwtKcaNKjRzvdJe95WXT9zk82kR0x0j6OjxbTPXJafq5FKji6iy06FTKtNUqcFbx1auu1znxwORk7xr+/B67crDRtiORsVWs51aVFfeiqca2bybklZdj28fwvybm87n4bh5r8/f4YZocoVsNeUZU5x0zKMfZ7d219Bm8PmImYtv5/9WrzItqJhYjzPKi8sp05SjZfE3lXhF6q7/dCORnxxrWy3HxX3PZQ4pzNiq0ZZVUktlGnTnkv3S1/Mwy5OTlnUxOvkvhx4Ke7bjcoYXEZ63tmuqTjUTzSvvmSvt4GGfFEzXVZjXvbeaNTO9uhxpzU0oVKUGktJTSm9d0um5461ibz0mf3aRHSHY4HzjUglCbjUtpZyTlbqmvA92Dn5+P9m0bj47ifq82Xh48k7r0n4PTUOb8O172eL7XXzOpTxXDb8UTDxW8PyR21Lt4XFQqRUoSUk+j9DoUyVvG6y8l6WpOrQmLqAAAAAAAAAAAAAAAAAAAAAAAABVlw6i5+0dOm6n9ThFyXZvVbsr5Y9y3mlYUETpG2JRAjdNPRpNea0I1Cdonw+le+SF+uSN/mNQnctnho+CRHlNuDxPh8p1LRi8zyJOzyxV227eO1vkeDk8b2tv70ezBn8lXUwPDowSSSv4uyu35s9OHBGOsVh58mWbzuVqrgaclaUISX90U/qbTSJ7s/NMdnPr8rYOW9GC/A5Q/8tGX/AMuH/wAx9GkcjJH+UrnDuFUaKtTilvq9Za+b1NKYqU7QpfLa/eV40ZgAAAAAAAAAAAAAAAAAAAAAAAAAAGBqQsyiVWQNWQmBAbEoAAAAAAAAAAAAAAAP/9k="
        style={{height:"251px",width:"100%"}}
      />
    }
    actions={[
      <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:100})} key="cart"/>,
      <p>Price: 100</p>
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
            </Col>
            <Col className="card" xs={24} sm={10} md={12} lg={6} >
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm6h7j5sGJLoXK-haFZUSGkk8Tixog--md9UTtZEedCUpPa2Qww&s"
        style={{height:"251px",width:"100%"}}
      />
    }
    actions={[
      <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:100})} key="cart"/>,
      <p>Price: 100</p>
      
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
            </Col>
            <Col className="card" xs={24} sm={10} md={12} lg={6} >
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/26A052F0AA884E828C5B6F620F86FB5B/pig-20190919_26A052F0AA884E828C5B6F620F86FB5B.jpg"
        style={{height:"251px",width:"100%"}}
      />
    }
    actions={[
      <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:100})} key="cart"/>,
      <p>Price: 100</p>
      
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
            </Col>
            <Col className="card" xs={24} sm={10} md={12} lg={6} >
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Sk7-mdJ5RVkMGjk92N4iXZrJ_wGaXKOORM0mM-tMTFu6t8Xwfg&s"
        style={{height:"251px",width:"100%"}}
      />
    }
    actions={[
      <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:100})} key="cart"/>,
      <p>Price: 100</p>
      
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
            </Col>
                    <Col className="card" xs={24} sm={10} md={12} lg={6} >
                    <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="data:image/jpeg;base64,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"
                style={{height:"251px",width:"100%"}}
              />
            }
            actions={[
              <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:100})} key="cart"/>,
              <p>Price: 100</p>
              
            ]}
          >
            <Meta
              title="Chicken"
              description="This is the description"
            />
          </Card>
                    </Col>
                    <Col className="card" xs={24} sm={10} md={12} lg={6} >
                    <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm6h7j5sGJLoXK-haFZUSGkk8Tixog--md9UTtZEedCUpPa2Qww&s"
                style={{height:"251px",width:"100%"}}
              />
            }
            actions={[
              <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:100})} key="cart"/>,
              <p>Price: 100</p>
              
            ]}
          >
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
                    </Col>
                    <Col className="card" xs={24} sm={10} md={12} lg={6} >
                    <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/26A052F0AA884E828C5B6F620F86FB5B/pig-20190919_26A052F0AA884E828C5B6F620F86FB5B.jpg"
                style={{height:"251px",width:"100%"}}
              />
            }
            actions={[
              <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:45})} key="cart"/>,
              <p>Price: 100</p>
              
            ]}
          >
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
                    </Col>
                    <Col className="card" xs={24} sm={10} md={12} lg={6} >
                    <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Sk7-mdJ5RVkMGjk92N4iXZrJ_wGaXKOORM0mM-tMTFu6t8Xwfg&s"
                style={{height:"251px",width:"100%"}}
              />
            }
            actions={[
              <Icon type="shopping-cart" onClick={() => this.showDrawer({name:'Chicken', price:100})} key="cart"/>,
              <p>Price: 100</p>
              
            ]}
          >
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
                    </Col>
        </Row>
        <Drawer
          title="Item Details"
          
          onClose={this.onClose}
          visible={this.state.visible}
        >  
            <div>
                <div>
                    Item Name: Chicken
                </div>
                <div>
                    Quantity: <InputNumber  value={this.state.quantity} min={0}  step={0.25} onChange={this.onChangeQuantity} /> 
                </div>
                <div>
                    Price: <InputNumber  disabled value={this.state.price} /> 
                </div>
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
            <Button onClick={this.onClose} size="small" style={{ marginRight: 2 }}>
              Cancel
            </Button>
            <Button onClick={this.onAddToCart} size="small" style={{ marginRight: 2 }} type="primary">
              Add More
            </Button>
            <Button onClick={this.onCheckOut} size="small" style={{ marginRight: 2 }} type="primary">
                CheckOut
            </Button>
          </div>
        </Drawer>
        
        </div>
            
        )}
}

export default Category;
