import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({
  log: { id, tech, date, attention, message },
  deleteLog,
}) => {
  const onDelete = () => {
    deleteLog(id);
    M.toast({
      html: `Log deleted by ${tech}`,
      classes: 'red',
    });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${attention ? 'red-text' : 'teal-text'}`}>
          <span className='material-icons'>
            {attention ? 'warning' : 'done'}
          </span>{' '}
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id} </span>
          last updated by
          <span className='black-text'> {tech} </span>
          on{' '}
          <Moment className='black-text' format='hh:mm DD/MM/YYYY'>
            {date}
          </Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete_outline</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
