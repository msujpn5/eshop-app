import React from 'react'
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return ( 

    <div className="checkoutProduct">
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                    </div>
                </div>
                <img src={image} alt="product-image" />

                <button>Add to Basket</button>
            </div>
  )
}

export default CheckoutProduct