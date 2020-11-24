import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from '../redux/StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg"/>
            
            <div className='checkout__title'>
             <h1>your shopping basket</h1>
              {basket.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
              ))}
             </div>
            </div>
            <div className='checkout__rigth'>
              <Subtotal />
            </div>
        </div>
    );
}

export default Checkout
