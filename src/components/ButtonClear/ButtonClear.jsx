import css from './ButtonClear.module.css';
import PropTypes from 'prop-types';
import { BiSolidTagX } from 'react-icons/bi';

const ButtonClear = ({ onClickClear }) => (
  <button type="button" className={css.ButtonClear} onClick={onClickClear}>
    <BiSolidTagX size="25" />
  </button>
);

ButtonClear.propTypes = {
  onClickClear: PropTypes.func,
};

export default ButtonClear;
