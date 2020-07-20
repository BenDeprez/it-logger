import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'teal-text'
          }`}>
          <span className='material-icons'>
            {log.attention ? 'warning' : 'done'}
          </span>{' '}
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id} </span>
          last updated by
          <span className='black-text'> {log.tech} </span>
          on{' '}
          <Moment className='black-text' format='hh:mm DD/MM/YYYY'>
            {log.date}
          </Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete_outline</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
