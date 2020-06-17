import React from 'react'
import './products.css'

class Products extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className='product-banner'></div>
        <h2 className='grooming'>Grooming</h2>
        <div>
          <div className='products-container'>{this.props.products && this.props.products.map(el => {
            return (
              <div className='product-card'>
                <div>
                  <img className='product-image' src={el.photo_url} alt="product-photo" />
                </div>
                <div className='name-and-price'>{el.name} - ${el.price}</div>
                <div className='description'>{el.description}</div>
                <div>
                    <button className='cart-button'>Add to Cart</button>
                </div>
              </div>
            )
          })}</div>
        </div>
      </div>
    )
  }
}

export default Products