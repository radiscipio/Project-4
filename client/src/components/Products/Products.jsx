import React from 'react'
import './products.css'

class Products extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("this is props: products", this.props)
    return (
      <div>
        <div className='products-container'>
          <div>{this.props.products && this.props.products.map(el => {
            return (
              <div>
                <div>
                  <img src={el.photo_url} alt="" />
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