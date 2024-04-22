import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    const sizePrice = props.sizes.find((element) => element.name === currentSize);
    return props.basePrice + sizePrice.additionalPrice;
  }, [currentSize, props.basePrice, props.sizes]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Summary");
    console.log("==========");
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${price}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm 
          handleSubmit={handleSubmit}
          colors={props.colors} 
          currentColor={currentColor} 
          setCurrentColor={setCurrentColor} 
          sizes={props.sizes} 
          currentSize={currentSize} 
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;