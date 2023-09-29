import { Image, InputNumber } from 'antd'
import React from 'react'
import './ProductDetailComponent.css'

const ProductDetailComponent = () => {
  return (
   
      <div className='container'>
        <div className='product-detail'>
          <div className='product-image'>
            <Image
              width={468}
              src="./productImage/product1.webp"
            />
          </div>

          <div className='product-infor'>
            <div className='productSingle'>
              <div className='productName'>NIKE AIR FORCE 1 - DONUT STYLE</div>
              <div className='productPrice'>3.500.00 VNĐ</div>
            </div>

            <form class="payment-form">
              <div class="size-selector">
                <label for="size">Size:</label>
                <select id="size" name="size">
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                </select>
              </div>
              <div class="quantity-selector">
                <label for="quantity">Quantity:</label>
                <div class="quantity-control">
                  <InputNumber min={1} max={10} defaultValue={3} />
                </div>
              </div>
              <button class="add-to-cart-button" type="submit">ADD TO CART</button>
            </form>


          </div>
        </div>
      </div>
    
  )
}

export default ProductDetailComponent