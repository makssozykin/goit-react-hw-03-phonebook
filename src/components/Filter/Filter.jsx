import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={css['filter-container']}>
      <label className={css['label-filter']}>
        Find contacts by name
        <input
          className={css['input-filter']}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
