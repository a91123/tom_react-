import React, { useState, useEffect } from 'react'
import SmallProduct from './SmallProduct'

import Big from './big'

function Product() {
  return (
    <>
      <div class="tom-product">
        <div class="tom-product-main">
          <Big imgUrl="http://localhost:3001/img/top5.jpg" />
          <Big imgUrl="http://localhost:3001/img/top4.png" />
          <Big imgUrl="http://localhost:3001/img/top2.jpg" />
          <Big imgUrl="http://localhost:3001/img/top6.jpg" />
        </div>
        <SmallProduct />
      </div>
    </>
  )
}

export default Product
