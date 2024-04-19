import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = ( { handleSubmit, currentSize, currentColor, sizes, colors, setCurrentSize, setCurrentColor } ) => {
  return (
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
}

export default ProductForm;