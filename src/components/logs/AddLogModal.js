import React from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useState } from 'react';

const AddLogModal = ({ addLog }) => {
  // init component level state
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // validation
    if (message === '' || tech === '') {
      M.toast({
        html: 'Enter a message and tech',
        classes: 'red',
      });
    } else {
      // create new log
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      // call the addLog action
      addLog(newLog);

      // confirmation alert
      M.toast({
        html: `Log added by ${tech}`,
        classes: 'green',
      });

      //clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        {' '}
        <h4>Enter System Log</h4>
        {/* add log message */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        {/* set tech */}
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        {/* set attention */}
        <div className='row'>
          <div className='input-field'>
            <div className='p'>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='!#'
            onClick={onSubmit}
            className='modal-close waves-effect waves-teal btn'>
            Add Log
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModal);
