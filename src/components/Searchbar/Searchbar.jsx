import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import ButtonClear from 'components/ButtonClear/ButtonClear';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
const Searchbar = ({ handleSubmit }) => {
  const [value, setValue] = useState('');
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <BiSearch size="25" />
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.searchFormInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
        />
        {value && <ButtonClear onClickClear={setValue} />}
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClickClear: PropTypes.func,
  query: PropTypes.string,
};
export default Searchbar;